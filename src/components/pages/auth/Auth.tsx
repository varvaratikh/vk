import {Button, ButtonGroup, TextField} from "@mui/material";
import {SyntheticEvent, useState} from "react";
import {IUserData} from "./types";
import Grid from "@mui/material/Grid";

export const Auth = () => {

    const [isRegForm, setIsRegForm] = useState(false)

    const [userData, setUserData] = useState<IUserData>({
        email: '',
        password: ''
    } as IUserData)

    const handleLogin = (e : SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(isRegForm) console.log('register')
        else console.log('auth');
        
        setUserData({
            email: '',
            password: ''
        })
    }

    return(
        <Grid display="flex" justifyContent='center' alignItems='center'>
            <form onSubmit={handleLogin}>
                <TextField type="email" label="Email" variant="outlined" value={userData.email}
                           onChange={e => setUserData({...userData, email: e.target.value})}
                           sx={{display: 'block', marginBottom: 3}}
                           required
                />

                <TextField type="password" label="Password" variant="outlined" value={userData.password}
                           onChange={e => setUserData({...userData, password: e.target.value})}
                           sx={{display: 'block'}}
                           required
                />

                <ButtonGroup variant="outlined">
                    <Button type='submit' onClick={() => setIsRegForm(false)}>Auth</Button>
                    <Button type='submit' onClick={() => setIsRegForm(true)}>Register</Button>
                </ButtonGroup>
            </form>
        </Grid>
    )
}

//TODO: остановилась на 1:46:27