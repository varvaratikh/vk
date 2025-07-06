import {Box} from "@mui/material";
import {AddPost} from "./AddPost";
import {useState} from "react";
import {IPost} from "../../../../types";
import {Posts} from "./Posts";

export const Home = () => {

    const [posts, setPosts] = useState<IPost[]>([
        {
            author: {
                _id: 'dwfkj',
                avatar: 'https://121clicks.com/wp-content/uploads/2024/09/natonal-geographic-india-best-wildlife-photos-01.jpg',
                name: 'National Geographic'
            },
            content: '20 Stunning Wildlife Photos Showcased On National Geographic India\'s Instagram Page',
            createdAt: '15 минут назад',
            images: [
                'https://121clicks.com/wp-content/uploads/2024/09/natonal-geographic-india-best-wildlife-photos-02.jpg',
                'https://121clicks.com/wp-content/uploads/2024/09/natonal-geographic-india-best-wildlife-photos-03.jpg',
                'https://121clicks.com/wp-content/uploads/2024/09/natonal-geographic-india-best-wildlife-photos-04.jpg',
                'https://121clicks.com/wp-content/uploads/2024/09/natonal-geographic-india-best-wildlife-photos-05.jpg',
                'https://121clicks.com/wp-content/uploads/2024/09/natonal-geographic-india-best-wildlife-photos-06.jpg'
            ]
        }
    ]);

    return(
        <Box>
            <AddPost setPosts={setPosts}/>
            <Posts posts={posts}/>
        </Box>
    )
}