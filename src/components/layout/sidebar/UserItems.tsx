import {Link} from "react-router-dom";
import {Box} from "@mui/material";

export const UserItems = () => {
    return(
        <Box sx={{
            display: "flex",
            alignItems: 'center',

        }}>
            <Link to="/profile">
                <Box sx={{position:'relative', marginRight: 5}}>
                    <img src="https://russian.people.com.cn/NMediaFile/2024/0408/FOREIGN1712567381216Q9C7PEHJ8A.jpg" alt=""/>
                    <Box sx={{backgroundColor: 'green', width: 4, height: 4, position: 'absolute', bottom: 2, left: 2}}>

                    </Box>
                </Box>
                <span>Тихонова Варвара</span>
            </Link>
        </Box>
    )
}