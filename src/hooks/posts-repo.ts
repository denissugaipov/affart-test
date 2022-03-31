import useFetch from "./use-fetch";

export interface Post {
    id: string;
    title: string;
    body: string;
    userId: number;
}

export type PostWithoutId = Omit<Post, "id">;

const apiEndpoint = 'https://jsonplaceholder.typicode.com'

export const usePosts = () => useFetch<Post[]>(`${apiEndpoint}/posts`)

export const addPost = async (dto: PostWithoutId) => {
    const result = await fetch(`${apiEndpoint}/posts`, {method: 'POST', body: JSON.stringify(dto)});

    return result;
}

export const updatePost = async ({id, title, body, userId}: Post) => {
    const result = await fetch(`${apiEndpoint}/posts/${id}`, {method: 'PUT', body: JSON.stringify({title, body, userId })});

    return result;
}

export const deletePost = async (postId: string) => {
    const result = await fetch(`${apiEndpoint}/posts/${postId}`, {method: 'DELETE'});

    return result;
}