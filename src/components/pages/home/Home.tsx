import {Box} from "@mui/material";
import {AddPost} from "./AddPost";
import {useState} from "react";
import {IPost} from "../../../../types";
import {Posts} from "./Posts";

export const Home = () => {

    const [posts, setPosts] = useState<IPost[]>([]);
    return(
        <Box>
            <AddPost setPosts={setPosts}/>
            <Posts posts={posts}/>
        </Box>
    )
}