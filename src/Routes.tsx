import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import SignIn from './pages/SignIn';


const Routes: React.FC = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />"
                </Route>
                <Route path="/signin">
                    <SignIn />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;