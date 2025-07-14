import {createContext, useEffect, useMemo, useState} from "react";
import {IUser, TypeSetState} from "../../../types";
import {getAuth, onAuthStateChanged, Auth} from 'firebase/auth';
import {users} from "../layout/sidebar/dataUsers";

interface IContext {
    user: IUser | null,
    setUser: TypeSetState<IUser | null>,
    ga: Auth
}

const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState<IUser | null>(null);

    const ga  = getAuth()

    useEffect(() => {
        const unListen = onAuthStateChanged(ga,authUser => {
            setUser(authUser ? {
                _id: authUser.uid,
                avatar: users[1].avatar,
                name: authUser?.displayName || ''
            } : null)
        })
        return () => {
            unListen()
        }
    }, [])

    const values = useMemo(() => ({
        user, setUser, ga
    }), [user, ga])

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
