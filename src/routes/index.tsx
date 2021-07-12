import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Dashboard from "../pages/dashboard";
import SprintFrames from "../pages/SprintFrames";

export default function Routes() {
    return (
        <Router>
            <Switch>
                {/* <Dashboard /> */}
                <SprintFrames />
            </Switch>
        </Router>
    );
}
