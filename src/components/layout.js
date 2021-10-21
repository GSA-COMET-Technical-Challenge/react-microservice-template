import React from "react";
import Router from '../router'

const Layout = ({children}) => {
    return(
        <Router>
            {children}
        </Router>
    )
}

export default Layout