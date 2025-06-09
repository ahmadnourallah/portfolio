import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import Spinner from '../common/Spinner';
import BlogArticleCard from '../blog/BlogArticleCard';
import WhiteSection from '../common/WhiteSection';
import LoadingError from '../common/LoadingError';
import NotFound from '../common/NotFound';

const code = ({
    children,
    className,
    ...rest
}: {
    children?: ReactNode;
    className?: string;
}) => {
    const match = /language-(\w+)/.exec(className || '');
    return match ? (
        <SyntaxHighlighter
            {...rest}
            PreTag="div"
            children={String(children).replace(/\n$/, '')}
            language={match[1]}
            showLineNumbers={true}
            style={a11yDark}
        />
    ) : (
        <code {...rest} className={className}>
            {children}
        </code>
    );
};

const BlogPostPage = () => {
    const { postId } = useParams();
    const { isPending, isSuccess, isError, refetch, data, error } = useQuery({
        queryKey: ['post'],
        queryFn: async () => {
            const response = await fetch(
                `${import.meta.env.VITE_API}/posts/${postId}`
            );

            if (response.status === 404) throw new Error('404');

            if (!response.ok) throw new Error("Server isn't responding!");

            return response.json();
        }
    });

    if (isError) {
        if (error.message === '404') return <NotFound />;
        else toast.error(error.message);
    }

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
                <WhiteSection className="flex flex-col gap-10 sm:px-40">
                    <article>
                        <BlogArticleCard
                            id={data.data.post.id}
                            title={data.data.post.title}
                            summary={
                                <ReactMarkdown
                                    children={`${data.data.post.content.slice(0, 150)}...`}
                                />
                            }
                            thumbnail={data.data.post.thumbnail}
                            date={data.data.post.createdAt}
                            topImage={false}
                        />
                    </article>

                    <article className="blog">
                        <ReactMarkdown
                            children={data.data.post.content}
                            components={{ code }}
                        />
                    </article>
                </WhiteSection>
            )}
        </>
    );
};

export default BlogPostPage;
