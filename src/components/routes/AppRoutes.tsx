import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { routes } from './list';
import { Laoyut } from "../layout/Laoyut";
import React from 'react';
import {useAuth} from "../providers/useAuth";

export const AppRoutes = () => {
    const { user } = useAuth()
    return (
        <Router>
            <Routes>
                {routes.map(route => {
                    if (route.auth && !user) return null;

                    const Element = route.component;

                    return (
                        <Route
                            path={route.path}
                            key={`route-${route.path}`}
                            element={
                                route.layout === false
                                    ? <Element />
                                    : <Laoyut><Element /></Laoyut>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
};
