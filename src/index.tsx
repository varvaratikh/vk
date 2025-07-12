import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppRoutes } from "./components/routes/AppRoutes";
 import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBS81cK9jJxAVrZmOYLVsdD769KbQIu8o4",
    authDomain: "vk-copy-529da.firebaseapp.com",
    projectId: "vk-copy-529da",
    storageBucket: "vk-copy-529da.appspot.com",
    messagingSenderId: "587410756706",
    appId: "1:587410756706:web:b1e488626cd9b7ac75ad3b"
};

firebase.initializeApp(firebaseConfig);

interface IContext{

}

const FireBaseContext = createContext<IContext>(null)

const auth= firebase.auth()
const fireStore = firebase.firestore()









const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <AppRoutes />
    </React.StrictMode>
);
