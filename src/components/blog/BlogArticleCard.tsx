import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import me from '../../assets/me.jpg';

const BlogThumbnail = ({
    id,
    thumbnail
}: {
    id: number;
    thumbnail: string;
}) => {
    return (
        <div className="h-100 rounded-lg border-1 border-[#dddddd] bg-[#F5F7FB]">
            <Link to={`/blog/${id}`}>
                <img
                    className="h-full w-full rounded-lg object-cover"
                    src={`${import.meta.env.VITE_API}/${thumbnail}`}
                />
            </Link>
        </div>
    );
};

const BlogArticleCard = ({
    id,
    title,
    summary,
    thumbnail,
    date,
    topImage = true
}: {
    id: number;
    title: string;
    summary: ReactNode;
    thumbnail: string;
    date: string;
    topImage?: boolean;
}) => {
    return (
        <article className="font-proxima flex flex-col gap-6" key={id}>
            {topImage && <BlogThumbnail id={id} thumbnail={thumbnail} />}

            <div>
                <Link to={`/blog/${id}`}>
                    <h1 className="mb-4 text-6xl font-medium hover:text-[#757575]">
                        {title}
                    </h1>
                </Link>
                <div className="text-2xl text-[#757575]">{summary}</div>
            </div>

            <div className="flex items-center gap-5">
                <div className="flex h-15 w-15 items-end justify-center overflow-hidden rounded-full border-2 border-[#dddddd]">
                    <img src={me} />
                </div>

                <div>
                    <p className="text-lg text-[#333333]">Ahmad Nour Alla</p>
                    <p className="text-[#757575]">
                        {new Date(date).toLocaleDateString('default', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                        })}
                    </p>
                </div>
            </div>

            {!topImage && <BlogThumbnail id={id} thumbnail={thumbnail} />}
        </article>
    );
};

export default BlogArticleCard;
