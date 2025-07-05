import {Box, TextField} from "@mui/material";

export const AddPost = () => {
    return(
        <Box sx={{
            border: '1px solid #ccc',
            borderRadius: "10px",
            padding: 2
        }}>
            <TextField label="Расскажи, что у тебя нового" variant="outlined" InputProps={{
                sx: {
                    borderRadius: "25px",
                    bgcolor: '#F8F8F8'
                },
            }} sx={{width: "100%"}}/>
        </Box>
    )
}