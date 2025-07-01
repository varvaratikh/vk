import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {routes} from "./list";

export const Routes = () => {

    const isAuth = true;

    return(
        <Router>
            <Switch>
                {
                    routes.map(route => {
                        if(route.auth && !isAuth){
                            return false;
                        }

                        return (
                            <Route
                                path={route.path}
                                exact={route.exact}
                                key={`route ${route.path}`}
                            >
                                <route.component />
                            </Route>
                        )
                    })
                }
            </Switch>
        </Router>
    )
}