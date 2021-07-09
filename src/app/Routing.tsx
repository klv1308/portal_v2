import { Suspense } from "react";
import LoadingScreen from "./LoadingScreen"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import NotFoundScreen from "./NotFoundScreen";

const Routing = (props: any) => {
    return (
        <Router>
            <Suspense fallback={<LoadingScreen />}>
                <Switch>
                    {props.routeConfig.map((route: any, index: number) => (
                        <Route exact key={index} path={route.path} component={route.component} />
                    ))}
                    <Route path='/' component={NotFoundScreen} />
                </Switch>
            </Suspense>
        </Router >
    )
}

export default Routing;
