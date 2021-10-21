import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Search from "./pages/Search"
import Home from "./pages/HomePage";

const Router = ({children}) => {
    return(
        <BrowserRouter>
            {children}
            <Switch>
                <Route path="/search" component={Search} />
                <Route path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router