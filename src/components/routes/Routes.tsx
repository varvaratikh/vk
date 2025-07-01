import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './list';

export const AppRoutes = () => {
    const isAuth = true;

    return (
        <Router>
            <Routes>
                {routes.map(route => {
                    if (route.auth && !isAuth) {
                        return null;
                    }

                    return (
                        <Route
                            path={route.path}
                            element={<route.component />}
                            key={`route-${route.path}`}
                        />
                    );
                })}
            </Routes>
        </Router>
    );
};
