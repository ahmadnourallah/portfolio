import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { ReactNode } from 'react';
import { getPost } from '../../queries/post';
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
    const {
        isPending,
        isSuccess,
        isError,
        refetch,
        data: post,
        error
    } = useQuery({
        queryKey: ['post', postId],
        queryFn: () => getPost(postId as string)
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
                    <Link
                        className="font-proxima cursor-pointer text-xl text-[#111111] underline hover:text-[#757575]"
                        to={`/blog/${postId}/edit`}
                    >
                        Edit
                    </Link>

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
                        topImage={false}
                    />

                    <article className="blog">
                        <ReactMarkdown
                            children={post.content}
                            components={{ code }}
                        />
                    </article>
                </WhiteSection>
            )}
        </>
    );
};

export default BlogPostPage;
