import {Alert, Box, TextField} from "@mui/material";
import {IPost, TypeSetState} from "../../../../types";
import {useState} from "react";
import {useAuth} from "../../providers/useAuth";
import { addDoc, collection} from 'firebase/firestore'

interface IAddPostProps {
    setPosts: TypeSetState<IPost[]>
}

export const AddPost = ({ setPosts }: IAddPostProps) => { 
    const [content, setContent] = useState<string>('');
    const {user, db} = useAuth();
    const [error, setError] = useState('');

    const addPostHandler = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && user) {

            try {
                const docRef = await addDoc(collection(db, 'posts'), {
                    author: user,
                    content,
                    createdAt: '10 минут назад',
                })
                console.log('Document written with ID:', docRef.id)
            } catch(e: any) {
                console.error('Error adding document', e)
            }

            setPosts(prev => [
                {
                    _id: crypto.randomUUID(),
                    author: user,
                    content,
                    createdAt: '5 минут назад',
                },
                ...prev
            ]);
            setContent('');
        }
    };

    return(
        <>
            {error && <Alert severity="error" style={{ marginBottom: 20 }}>{error}</Alert>}

            <Box sx={{
                border: '1px solid #ccc',
                borderRadius: "10px",
                padding: 2
            }}>
                <TextField label="Расскажи, что у тебя нового" variant="outlined" InputProps={{
                    sx: {
                        borderRadius: "25px",
                        backgroundColor: '#F9F9F9'
                    },
                }} sx={{width: "100%"}}
                           onKeyPress={addPostHandler}
                           onChange={e => setContent(e.target.value)}
                           value={content}
                />
            </Box>
        </>
    )
}