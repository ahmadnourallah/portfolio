interface PostType {
    id: number;
    title: string;
    thumbnail: string;
    content: string;
    createdAt: string;
}

const getPost = async (postId: string): Promise<PostType> => {
    const response = await fetch(`${import.meta.env.VITE_API}/posts/${postId}`);

    if (response.status === 404) throw new Error('404');

    if (!response.ok) throw new Error("Server isn't responding!");

    const {
        data: { post }
    } = await response.json();

    return {
        id: post.id,
        title: post.title,
        thumbnail: post.thumbnail,
        content: post.content,
        createdAt: post.createdAt
    };
};

const getPosts = async (pageParam: number) => {
    const response = await fetch(
        `${import.meta.env.VITE_API}/posts?start=${pageParam + 1}&end=${pageParam + 10}&orderby=date&order=desc`
    );

    if (!response.ok) throw new Error("Server isn't responding!");

    return response.json();
};

const createPost = async (
    title: string,
    content: string,
    thumbnail: File,
    token: string,
    authorId: number
) => {
    const response = await fetch(`${import.meta.env.VITE_API}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            title,
            content,
            thumbnail,
            authorId
        })
    });

    if (!response.ok) {
        const data = await response.json();

        throw new Error(
            data.data
                ? data.data
                      .map((err: { [key: string]: string }) =>
                          Object.values(err)
                      )
                      .join('\n')
                : "Server isn't responding"
        );
    }

    return response.json();
};

const updatePost = async (
    id: number,
    title: string,
    content: string,
    thumbnail: File,
    token: string,
    authorId: number
) => {
    const body = new FormData();
    body.append('title', title);
    body.append('content', content);
    body.append('thumbnail', thumbnail);
    body.append('authorId', String(authorId));

    const response = await fetch(`${import.meta.env.VITE_API}/posts/${id}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`
        },
        body
    });

    if (!response.ok) {
        const data = await response.json();

        throw new Error(
            data.data
                ? data.data
                      .map((err: { [key: string]: string }) =>
                          Object.values(err)
                      )
                      .join('\n')
                : "Server isn't responding"
        );
    }

    return response.json();
};

const deletePost = async (id: number, token: string) => {
    const response = await fetch(`${import.meta.env.VITE_API}/posts/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (!response.ok) {
        const data = await response.json();

        throw new Error(
            data.data
                ? data.data
                      .map((err: { [key: string]: string }) =>
                          Object.values(err)
                      )
                      .join('\n')
                : "Server isn't responding"
        );
    }

    return response.json();
};

export { getPost, getPosts, createPost, updatePost, deletePost, type PostType };
