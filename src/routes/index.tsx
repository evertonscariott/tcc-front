import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dashboard from "../pages/dashboard";
import SprintFrames from "../pages/sprintFrames";

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/quadro" component={SprintFrames} />
            </Switch>
        </Router>
    );
}
