import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from './list';
import { Laoyut } from "../layout/Laoyut";
import React from 'react';
import { useAuth } from "../providers/useAuth";
import { Auth } from "../pages/auth/Auth";

export const AppRoutes = () => {
    const { user } = useAuth();

    return (
        <Router>
            <Routes>
                {routes.map(route => (
                    <Route
                        path={route.path}
                        key={`route-${route.path}`}
                        element={
                            <Laoyut>
                                {route.auth && !user ? <Auth /> : <route.component />}
                            </Laoyut>
                        }
                    />
                ))}
            </Routes>
        </Router>
    );
};
