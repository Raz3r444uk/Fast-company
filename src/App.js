import React from "react";
import Navbar from "./components/ui/navBar";
import { Route, Switch } from "react-router-dom";
import Users from "./layouts/users";
import Login from "./layouts/login";
import Main from "./layouts/main";

function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path={"/"} exact component={Main} />
                <Route path={"/login/:type?"} component={Login} />
                <Route path={"/users/:id?"} component={Users} />
            </Switch>
        </>
    );
}

export default App;
