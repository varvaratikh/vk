import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppRoutes } from "./components/routes/AppRoutes";
import * as  firebase from 'firebase/app'
import {AuthProvider} from "./components/providers/AuthProvider";

const firebaseConfig = {
    apiKey: "AIzaSyBS81cK9jJxAVrZmOYLVsdD769KbQIu8o4",
    authDomain: "vk-copy-529da.firebaseapp.com",
    projectId: "vk-copy-529da",
    storageBucket: "vk-copy-529da.appspot.com",
    messagingSenderId: "587410756706",
    appId: "1:587410756706:web:b1e488626cd9b7ac75ad3b"
};

firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
    </React.StrictMode>
);
