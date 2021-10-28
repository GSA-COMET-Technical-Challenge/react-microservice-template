import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Search from "./pages/Search"
import Home from "./pages/Home";
import pagesConfig from './config/pages'

const Router = ({children}) => {

    const routes = pagesConfig.map(config => <Route path={config.path} component={config.component} />)
    return(
        <BrowserRouter>
            {children}
            <Switch>
                {routes}
                <Route path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router