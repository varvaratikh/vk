import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './list';
import { Laoyut } from "../layout/Laoyut";
import React from 'react';

export const AppRoutes = () => {
    const isAuth = true;

    return (
        <Router>
            <Routes>
                {routes.map(route => {
                    if (route.auth && !isAuth) {
                        return null;
                    }

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
