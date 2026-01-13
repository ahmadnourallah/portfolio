import { useParams, Link, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { getPost, deletePost } from '../../queries/post';
import { AuthContext } from '../../context/AuthContextProvider';
import ReactMarkdown from 'react-markdown';
import BlogArticleCard from '../blog/BlogArticleCard';
import WhiteSection from '../common/WhiteSection';
import LoadingError from '../common/LoadingError';
import NotFound from '../common/NotFound';
import Code from '../blog/Code';
import useLoggingStatus from '../../hooks/useLoggingStatus';
import Loading from '../common/Loading';

const BlogPostPage = () => {
    const navigate = useNavigate();
    const isLoggedIn = useLoggingStatus();
    const { user } = useContext(AuthContext);
    const { postId } = useParams();

    const deletePostMutation = useMutation({
        mutationFn: (id: number) => deletePost(id, user.token)
    });

    const { data: post, ...getPostMutation } = useQuery({
        queryKey: ['post', postId],
        queryFn: () => getPost(postId as string)
    });

    if (getPostMutation.isError) {
        if (getPostMutation.error.message === '404') return <NotFound />;
        else {
            toast.dismiss();
            toast.error(getPostMutation.error.message);
        }
    }

    if (deletePostMutation.isError) {
        toast.dismiss();
        toast.error(deletePostMutation.error?.message);
    }

    if (deletePostMutation.isSuccess) {
        toast.dismiss();
        toast.success('Post has been deleted successfully!');
        navigate('/');
    }

    return (
        <>
            {(getPostMutation.isPending || deletePostMutation.isPending) && (
                <Loading />
            )}

            {getPostMutation.isError && (
                <LoadingError
                    onClick={() => {
                        toast.dismiss();
                        getPostMutation.refetch();
                    }}
                />
            )}

            {getPostMutation.isSuccess && !deletePostMutation.isPending && (
                <WhiteSection className="flex flex-col gap-10 sm:px-40">
                    <title>{`Ahmad Nour Alla - ${post?.title}`}</title>

                    {isLoggedIn && (
                        <div className="flex gap-5">
                            <Link
                                className="font-proxima cursor-pointer text-xl text-[#111111] underline hover:text-[#757575]"
                                to={`/blog/${postId}/edit`}
                            >
                                Edit
                            </Link>

                            <a
                                onClick={() => {
                                    deletePostMutation.mutate(Number(postId));
                                }}
                                className="font-proxima cursor-pointer text-xl text-[#111111] underline hover:text-[#757575]"
                            >
                                Delete
                            </a>
                        </div>
                    )}

                    <BlogArticleCard
                        id={post?.id as number}
                        title={post?.title as string}
                        summary={
                            <ReactMarkdown
                                children={`${post?.content.slice(0, 150)}...`}
                            />
                        }
                        thumbnail={post?.thumbnail as string}
                        date={post?.createdAt as string}
                        topImage={false}
                    />

                    <article className="blog">
                        <ReactMarkdown
                            children={post?.content}
                            components={{ code: Code }}
                        />
                    </article>
                </WhiteSection>
            )}
        </>
    );
};

export default BlogPostPage;
