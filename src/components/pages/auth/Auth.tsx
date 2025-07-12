import {Alert, Button, ButtonGroup, TextField} from "@mui/material";
import {SyntheticEvent, useState} from "react";
import {IUserData} from "./types";
import Grid from "@mui/material/Grid";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'

export const Auth = () => {

    const [isRegForm, setIsRegForm] = useState(false)

    const [userData, setUserData] = useState<IUserData>({
        email: '',
        password: ''
    } as IUserData)

    const [error, setError] = useState('');

    const handleLogin = async(e : SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()

        const auth = getAuth();
        if(isRegForm){
            try {
                await createUserWithEmailAndPassword(auth, userData.email, userData.password)
            } catch(error: any) {
                error.message && setError(error.message)
            }
        } else{
            console.log('auth');
        }
        
        setUserData({
            email: '',
            password: ''
        })
    }

    return(
        <>
            {error && <Alert severity="error" style={{marginBottom: 20}}>{error}</Alert>}
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
        </>
    )
}

