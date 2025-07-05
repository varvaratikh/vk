import {Link} from "react-router-dom";
import {Avatar, Box, Card, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import { QuestionAnswer } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';
import {users} from "./dataUsers";

export const UserItems = () => {

    const navigate = useNavigate();

    return(
        <Card variant='outlined'
            sx={{
                padding: 2,
                backgroundColor: '#F1F7FA',
                border: 'none',
                borderRadius: 3
        }}>
            {users.map(user => (
                <Link key={user._id} to={`/profile/${user._id}`} style={{display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#111', marginBottom: 12}}>
                    <Box sx={{position: 'relative', marginRight: 2, overflow: 'hidden', width: 50, height: 50}}>
                        <Avatar src={user.avatar} alt=""
                                sx={{width: 46, height: 46, borderRadius: '50%',}}
                        />
                        {user.isInNetwork &&
                            <Box sx={{backgroundColor: '#4FB14F', width: 12, height: 12, position: 'absolute', bottom: 1, right: 1, borderRadius: '50%', border: '2px solid #F1F7FA'}}></Box>
                        }
                    </Box>
                    <span style={{fontSize: 14}}>{user.name}</span>
                </Link>
            ))}

            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('/messages')}>
                    <ListItemIcon>
                            <QuestionAnswer />
                        </ListItemIcon>
                        <ListItemText primary="Сообщения"/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Card>
    )
}