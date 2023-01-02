export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string
    user: User | undefined;
}
export interface User {
    name: string;
    id: number;
    email: string;
}