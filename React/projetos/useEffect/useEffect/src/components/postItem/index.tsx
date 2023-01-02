import { Post } from "../../Types";

interface Props {
    data: Post
}
export const PostItem = ({ data }: Props) => {
    return (
        <div style={{ backgroundColor: "white", borderRadius: "1em", padding: ".3rem 1rem", margin: "1rem .1rem", boxShadow: ".3rem .3rem .5rem .1rem #00000030" }}>
            <h3>{data.user?.name} Says</h3>

            <h4>{data.title}</h4>
            <span>{data.body}</span>

        </div>
    );
}