import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

const PrivateRouter = ({
    component: Component,
    ...rest
}: any) => {

    const username = window.sessionStorage.getItem('username');

    const routeComponent = (props: RouteProps) => (
        !!username ? (
            <div className="container">
                <div className="main">
                    <Component {...props} />
                </div>
            </div>
        ) : (
                <Redirect to="/" />
            )
    );

    return (
        <Route
            {...rest}
            component={routeComponent}
        />
    );

}

export default PrivateRouter;
