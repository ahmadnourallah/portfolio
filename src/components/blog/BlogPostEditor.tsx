import {
    useState,
    useRef,
    useContext,
    type ChangeEvent,
    type FormEvent,
    type MouseEvent
} from 'react';
import type { MDXEditorMethods } from '@mdxeditor/editor';
import { useMutation } from '@tanstack/react-query';
import { AuthContext } from '../../context/AuthContextProvider';
import { toast } from 'react-toastify';
import { useNavigate, Navigate, Link } from 'react-router-dom';
import MarkdownEditor from '../common/MarkdownEditor';
import Input from '../common/Input';
import WhiteSection from '../common/WhiteSection';
import ActionButton from '../common/ActionButton';
import FileInput from '../common/FileInput';
import Spinner from '../common/Spinner';
import { createPost, updatePost } from '../../queries/post';

const BlogPostEditor = ({
    id,
    title = '',
    content = '',
    thumbnail = ''
}: {
    id?: number;
    title?: string;
    content?: string;
    thumbnail?: string;
}) => {
    const { user } = useContext(AuthContext);
    const editorRef = useRef<MDXEditorMethods>(null);
    const [postTitle, setPostTitle] = useState(title);
    const [postThumbnailPreview, setPostThumbnailPreview] = useState(
        thumbnail ? `${import.meta.env.VITE_API}/${thumbnail}` : '#'
    );
    const [postThumbnail, setPostThumbnail] = useState<File | null>(null);
    const navigate = useNavigate();

    const { isPending, isError, isSuccess, error, data, mutate } = useMutation({
        mutationFn: async ({
            title,
            content,
            thumbnail
        }: {
            title: string;
            content: string;
            thumbnail: File | null;
        }) => {
            if (id === undefined) {
                return await createPost(
                    title,
                    content,
                    thumbnail,
                    user.token,
                    user.id
                );
            } else {
                return await updatePost(
                    id as number,
                    title,
                    content,
                    thumbnail,
                    user.token,
                    user.id
                );
            }
        }
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (editorRef.current?.getMarkdown() === '')
            toast.warning('Content cannot be empty');
        else
            mutate({
                title: postTitle,
                content: editorRef.current?.getMarkdown() || '',
                thumbnail: postThumbnail
            });
    };

    if (isError) {
        toast.dismiss();
        toast.error(error.message);
    }

    if (isSuccess) {
        toast.success(
            `Post has been ${id ? 'updated' : 'published'} successfully!`
        );
        return <Navigate to={`/blog/${data.data.post.id}`} />;
    }

    return (
        <WhiteSection className="pt-10">
            <Link
                className="font-proxima cursor-pointer text-xl text-[#111111] underline hover:text-[#757575]"
                to=".."
                onClick={(e: MouseEvent) => {
                    e.preventDefault();
                    navigate(-1);
                }}
            >
                Back
            </Link>

            <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-5">
                <Input
                    disabled={isPending}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setPostTitle(e.target.value)
                    }
                    value={postTitle}
                    required
                    label="Title"
                />
                <MarkdownEditor
                    disabled={isPending}
                    ref={editorRef}
                    content={content}
                />

                <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:justify-between">
                    <FileInput
                        disabled={isPending}
                        accept="image/png, image/jpeg"
                        className="w-full text-center sm:w-auto"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setPostThumbnailPreview(
                                URL.createObjectURL(
                                    e?.target?.files?.[0] as Blob
                                )
                            );
                            setPostThumbnail(e?.target?.files?.[0] as File);
                        }}
                        label="Choose thumbnail"
                    />
                    <img
                        className="h-30 w-30 border-1 border-[#dddddd] p-1"
                        src={postThumbnailPreview}
                    />
                </div>

                <ActionButton
                    className="flex justify-center px-0 disabled:opacity-80"
                    disabled={isPending}
                >
                    {isPending && (
                        <Spinner bg="grey" spinnerColor="white" size="28px" />
                    )}
                    {!isPending && 'Publish'}
                </ActionButton>
            </form>
        </WhiteSection>
    );
};

export default BlogPostEditor;
