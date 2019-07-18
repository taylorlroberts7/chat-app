import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

const PublicRoute = ({
    component: Component,
    ...rest
}: any) => {

    const username = window.sessionStorage.getItem('username');

    const routeComponent = (props: RouteProps) => (
        !!username ? (
            <Redirect to="/chat" />
        ) : (
                <div className="container">
                    <div className="main">
                        <Component {...props} />
                    </div>
                </div>
            )
    );

    return (
        <Route
            {...rest}
            component={routeComponent}
        />
    );

}

export default PublicRoute;
