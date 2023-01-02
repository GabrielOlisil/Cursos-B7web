import { User, Post } from "./Types";
import axios from "axios";

const httpClient = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})
export const Api = {
    getPosts: async () => {
        let reqPost = await httpClient.get(`/posts`);
        let posts: Post[] = reqPost.data;

        let reqUser = await httpClient.get(`/users`);
        let users: User[] = reqUser.data;

        posts.forEach(post => {
            post.user = users.find(user => post.userId == user.id)
        })
        return posts
    },
    addNewPost: async (title: string, body: string, userId: number) => {

        let response = await httpClient.post(`/posts`, {
            title,
            body,
            userId,
        });
        return response.data;
    }
}