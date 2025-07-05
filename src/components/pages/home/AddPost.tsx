import {Box, TextField} from "@mui/material";
import {IPost, TypeSetState} from "../../../../types";
import {useState} from "react";
import {users} from "../../layout/sidebar/dataUsers";

interface IAddPostProps {
    setPosts: TypeSetState<IPost[]>
}

//TODO: остановилась на 01:09:00

export const AddPost = ({ setPosts }: IAddPostProps) => {
    const [content, setContent] = useState<string>('');

    const addPostHandler = () => {
        setPosts(prev => [...prev, {
            author: users[0],
            content,
            createdAt: '5 минут назад',
        }])
    }

    return(
        <Box sx={{
            border: '1px solid #ccc',
            borderRadius: "10px",
            padding: 2
        }}>
            <TextField label="Расскажи, что у тебя нового" variant="outlined" InputProps={{
                sx: {
                    borderRadius: "25px",
                    backgroundColor: '#F9F9F9'
                },
            }} sx={{width: "100%"}}
            onKeyPress={addPostHandler}
                       onChange={e => setContent(e.target.value)}
                       value={content}
            />
        </Box>
    )
}