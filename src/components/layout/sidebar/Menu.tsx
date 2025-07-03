import {Link} from "react-router-dom";
import {Avatar, Box, Card, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import { QuestionAnswer } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';

export const Menu = () => {

    const navigate = useNavigate();

    return(
        <Card variant='outlined'
              sx={{
                  padding: 2,
                  backgroundColor: '#F1F7FA',
                  border: 'none',
                  borderRadius: 3
              }}> 

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