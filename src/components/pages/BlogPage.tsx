import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import WhiteSection from '../common/WhiteSection';
import BlogArticleCard from '../blog/BlogArticleCard';
import ReactMarkdown from 'react-markdown';
import Spinner from '../common/Spinner';
import LoadingError from '../common/LoadingError';

const BlogPage = () => {
    const { isPending, isSuccess, refetch, isError, data, error } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const response = await fetch(`${import.meta.env.VITE_API}/posts`);

            if (!response.ok) {
                throw new Error("Server isn't responding!");
            }

            return response.json();
        }
    });

    if (isError) toast.error(error.message);

    return (
        <>
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
                <WhiteSection className="flex flex-col gap-25 sm:px-40">
                    {data.data.posts.map((post) => (
                        <BlogArticleCard
                            id={post.id}
                            title={post.title}
                            summary={
                                <ReactMarkdown
                                    children={`${post.content.slice(0, 150)}...`}
                                />
                            }
                            thumbnail={post.thumbnail}
                            date={post.createdAt}
                        />
                    ))}
                </WhiteSection>
            )}
        </>
    );
};

export default BlogPage;
