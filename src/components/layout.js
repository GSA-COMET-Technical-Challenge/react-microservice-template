import React from "react";
import Router from '../router'
import Navbar from '../components/navbar'
import pagesConfig from "../config/pages"

const Layout = ({children}) => {
    return(
        <>
        <Navbar config={pagesConfig}/>
        <Router>
            {children}
        </Router>
        </>
    )
}

export default Layout