import {createContext, ReactNode, useEffect, useMemo, useState} from "react";
import {IUser, TypeSetState} from "../../../types";
import {getAuth, onAuthStateChanged, Auth} from 'firebase/auth';
import {users} from "../layout/sidebar/dataUsers";
import {useNavigate} from "react-router-dom/dist";

import { getFirestore, Firestore  } from 'firebase/firestore'

interface IContext {
    user: IUser | null,
    setUser: TypeSetState<IUser | null>,
    ga: Auth,
    db: Firestore
}

interface IAuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
    const [user, setUser] = useState<IUser | null>(null);

    const ga  = getAuth();
    const db  = getFirestore();

    const navigate = useNavigate();

    useEffect(() => {
        const unListen = onAuthStateChanged(ga,authUser => {
            if(authUser){
                setUser( {
                    _id: authUser.uid,
                    avatar: users[1].avatar,
                    name: authUser.displayName || ''
                })
            } else{
                setUser(null)
            }
        })
        return () => {
            unListen()
        }
    }, [])

    const values = useMemo(() => ({
        user, setUser, ga, db
    }), [user, ga, db])

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

//TODO: останавилась на 2:22:06