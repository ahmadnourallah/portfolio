import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { getPost } from '../../queries/post';
import BlogPostEditor from '../blog/BlogPostEditor';
import Spinner from '../common/Spinner';
import LoadingError from '../common/LoadingError';
import NotFound from '../common/NotFound';

const EditBlogPostPage = () => {
    const { postId } = useParams();

    const {
        isPending,
        isSuccess,
        isError,
        refetch,
        data: post,
        error
    } = useQuery({
        queryKey: ['post', postId],
        queryFn: async () => await getPost(postId as string)
    });

    if (isError) {
        if (error.message === '404') return <NotFound />;
        else {
            toast.dismiss();
            toast.error(error.message);
        }
    }

    return (
        <>
            <title>Ahmad Nour Alla - Edit Post</title>
            {isPending && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                    <Spinner size="100px" />
                </div>
            )}

            {isError && (
                <LoadingError
                    onClick={() => {
                        toast.dismiss();
                        refetch();
                    }}
                />
            )}

            {isSuccess && (
                <BlogPostEditor
                    id={post.id}
                    title={post.title}
                    content={post.content}
                    thumbnail={post.thumbnail}
                />
            )}
        </>
    );
};

export default EditBlogPostPage;
