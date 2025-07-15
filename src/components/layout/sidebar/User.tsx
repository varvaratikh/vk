import {Avatar, Button, Card, Chip} from "@mui/material";
import {useAuth} from "../../providers/useAuth";
import { signOut } from 'firebase/auth'

export const User = () => {

    const { user, ga  } = useAuth()

    return(
        <Card variant='outlined'
              sx={{
                  padding: 2,
                  backgroundColor: '#F1F7FA',
                  border: 'none',
                  borderRadius: 3
              }}>

            <Chip avatar={<Avatar alt='' src={user?.avatar} />}
                  label='Avatar'
                  variant='outlined'
            />
            <Button variant="outlined" onClick={() => signOut(ga)}>
                Выйти
            </Button>
        </Card>
    )
}