import { Card, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import { useNavigate } from 'react-router-dom';
import {menu} from "./dataMenu";

export const Menu = () => {

    const navigate = useNavigate();

    return(
        <Card variant='outlined'
              sx={{
                  padding: 2,
                  backgroundColor: '#F1F7FA',
                  border: 'none',
                  borderRadius: 3,
                  marginTop: 5,
                  marginBottom: 10,
              }}>

            <List>
                {menu.map(item => (
                    <ListItem key={item.link} disablePadding>
                        <ListItemButton onClick={() => navigate(item.link)}>
                            <ListItemIcon sx={{
                                minWidth: 36
                            }}>
                                <item.icon />
                            </ListItemIcon>
                            <ListItemText primary={item.title}/>
                        </ListItemButton>
                    </ListItem>
                    )
                )}
            </List>
        </Card>
    )
}