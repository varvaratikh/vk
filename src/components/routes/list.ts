import {Home} from "../pages/home/Home";

export const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        auth: true,
    },
]