import { useInfiniteQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { Fragment } from 'react/jsx-runtime';
import WhiteSection from '../common/WhiteSection';
import BlogArticleCard from '../blog/BlogArticleCard';
import ReactMarkdown from 'react-markdown';
import Spinner from '../common/Spinner';
import LoadingError from '../common/LoadingError';
import ActionButton from '../common/ActionButton';

const BlogPage = () => {
    const {
        isPending,
        isFetchingNextPage,
        isSuccess,
        refetch,
        isError,
        data,
        fetchNextPage,
        hasNextPage,
        error
    } = useInfiniteQuery({
        queryKey: ['posts'],
        queryFn: async ({ pageParam }) => {
            const response = await fetch(
                `${import.meta.env.VITE_API}/posts?start=${pageParam + 1}&end=${pageParam + 10}&orderby=date&order=desc`
            );

            if (!response.ok) {
                throw new Error("Server isn't responding!");
            }

            return response.json();
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage, pages, lastPageParam) => {
            if (lastPage.data.count < 10) return undefined;
            return lastPageParam + 10;
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
                    {data.pages.map((page, i) => (
                        <Fragment key={i}>
                            {page.data.posts.map((post) => (
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
                        </Fragment>
                    ))}

                    <ActionButton
                        disabled={isPending || !hasNextPage}
                        className="flex justify-center px-0 disabled:opacity-80"
                        onClick={
                            hasNextPage ? () => fetchNextPage() : undefined
                        }
                    >
                        {isFetchingNextPage ? (
                            <Spinner
                                bg="grey"
                                spinnerColor="white"
                                size="28px"
                            />
                        ) : hasNextPage ? (
                            'Load More'
                        ) : (
                            'Nothing more to load'
                        )}
                    </ActionButton>
                </WhiteSection>
            )}
        </>
    );
};

export default BlogPage;
