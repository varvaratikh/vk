import {Link} from "react-router-dom";
import {Avatar, Box, Card} from "@mui/material";

export const UserItems = () => {
    return(
        <Card variant='outlined'
            sx={{
                padding: 2,
                backgroundColor: '#F1F7FA',
                border: 'none',
                borderRadius: 3
        }}>
            <Link to="/profile" style={{display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#111', marginBottom: 12}}>
                <Box sx={{position: 'relative', marginRight: 2, overflow: 'hidden', width: 50, height: 50}}>
                    <Avatar src="https://russian.people.com.cn/NMediaFile/2024/0408/FOREIGN1712567381216Q9C7PEHJ8A.jpg" alt=""
                         sx={{width: 46, height: 46, borderRadius: '50%',}}
                    />
                    <Box sx={{backgroundColor: '#4FB14F', width: 12, height: 12, position: 'absolute', bottom: 0, right: 0, borderRadius: '50%', border: '2px solid #F1F7FA'}}>
                    </Box>
                </Box>
                <span style={{fontSize: 14}}>Тихонова Варвара</span>
            </Link>
        </Card>
    )
}