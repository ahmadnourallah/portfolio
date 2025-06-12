import { useInfiniteQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { Fragment } from 'react/jsx-runtime';
import { getPosts, type PostType } from '../../queries/post';
import WhiteSection from '../common/WhiteSection';
import BlogArticleCard from '../blog/BlogArticleCard';
import ReactMarkdown from 'react-markdown';
import Spinner from '../common/Spinner';
import LoadingError from '../common/LoadingError';
import ActionButton from '../common/ActionButton';

const BlogPage = () => {
    const {
        isLoadingError,
        isLoading,
        isFetching,
        isFetchingNextPage,
        isError,
        hasNextPage,
        refetch,
        fetchNextPage,
        data,
        error
    } = useInfiniteQuery({
        queryKey: ['posts'],
        queryFn: ({ pageParam }) => getPosts(pageParam),
        initialPageParam: 0,
        refetchOnMount: false,
        getNextPageParam: (lastPage, _pages, lastPageParam) => {
            if (lastPage.data.count < 10) return undefined;
            return lastPageParam + 10;
        }
    });

    if (isError) {
        toast.dismiss();
        toast.error(error.message);
    }

    if (isLoadingError) {
        return (
            <LoadingError
                onClick={() => {
                    toast.dismiss();
                    refetch();
                }}
            />
        );
    }

    if (isLoading) {
        return (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                <Spinner size="100px" />
            </div>
        );
    }

    return (
        <>
            <WhiteSection className="flex flex-col gap-25 sm:px-40">
                {data?.pages.map((page, i) => (
                    <Fragment key={i}>
                        {page.data.posts.map((post: PostType) => (
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
                    disabled={isFetching || !hasNextPage}
                    className="flex justify-center px-0 disabled:opacity-80"
                    onClick={hasNextPage ? () => fetchNextPage() : undefined}
                >
                    {isFetchingNextPage ? (
                        <Spinner bg="grey" spinnerColor="white" size="28px" />
                    ) : hasNextPage ? (
                        'Load More'
                    ) : (
                        'Nothing more to load'
                    )}
                </ActionButton>
            </WhiteSection>
        </>
    );
};

export default BlogPage;
