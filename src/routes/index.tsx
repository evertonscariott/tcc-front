import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Dashboard from "../pages/dashboard";

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Dashboard />
            </Switch>
        </Router>
    );
}
