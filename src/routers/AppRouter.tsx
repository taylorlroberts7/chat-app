import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Chat, Welcome } from '../components';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={Welcome} exact={true} />
                <PrivateRoute path="/chat" component={Chat} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;