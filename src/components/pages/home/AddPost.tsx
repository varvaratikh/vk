import {Box, TextField} from "@mui/material";
import {TypeSetState} from "../../../../types";

interface IAddPost{
    setPosts: TypeSetState<IPost[]>
}

export const AddPost<IAddPost> = () => {
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
            }} sx={{width: "100%"}}/>
        </Box>
    )
}