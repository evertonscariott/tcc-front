import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FrameDto from "../infrastructure/dtos/frame.dto";

import Dashboard from "../pages/dashboard";
import SprintFrames from "../pages/SprintFrames";

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/quadro" component={SprintFrames} />
            </Switch>
        </Router>
    );
}
