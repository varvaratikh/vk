import { Alert, Button, ButtonGroup, TextField } from "@mui/material";
import { SyntheticEvent, useEffect, useState } from "react";
import { IUserData } from "./types";
import Grid from "@mui/material/Grid";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/useAuth";

interface IAuthContext {
    ga: ReturnType<typeof getAuth>;
    user: any;
}

export const Auth = () => {
    const { ga, user } = useAuth() as IAuthContext;
    const navigate = useNavigate();

    const [isRegForm, setIsRegForm] = useState(false);
    const [userData, setUserData] = useState<IUserData>({
        email: '',
        password: '',
        name: ''
    });

    const [error, setError] = useState('');

    const handleLogin = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            if (isRegForm) {
                const res = await createUserWithEmailAndPassword(ga, userData.email, userData.password);
                await updateProfile(res.user, {
                    displayName: userData.name 
                })
            } else {
                await signInWithEmailAndPassword(ga, userData.email, userData.password);
            }
        } catch (error: any) {
            error.message && setError(error.message);
        }

        setUserData({ email: '', password: '', name: '' });
    }

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user]);

    return (
        <>
            {error && <Alert severity="error" style={{ marginBottom: 20 }}>{error}</Alert>}
            <Grid display="flex" justifyContent='center' alignItems='center'>
                <form onSubmit={handleLogin}>
                    <TextField label="Name" variant="outlined" value={userData.name}
                               onChange={e => setUserData({ ...userData, name: e.target.value })}
                               sx={{ display: 'block', marginBottom: 3 }}
                    />

                    <TextField type="email" label="Email" variant="outlined" value={userData.email}
                               onChange={e => setUserData({ ...userData, email: e.target.value })}
                               sx={{ display: 'block', marginBottom: 3 }}
                               required
                    />

                    <TextField type="password" label="Password" variant="outlined" value={userData.password}
                               onChange={e => setUserData({ ...userData, password: e.target.value })}
                               sx={{ display: 'block' }}
                               required
                    />

                    <ButtonGroup variant="outlined">
                        <Button type='submit' onClick={() => setIsRegForm(false)}>Auth</Button>
                        <Button type='submit' onClick={() => setIsRegForm(true)}>Register</Button>
                    </ButtonGroup>
                </form>
            </Grid>
        </>
    );
}
