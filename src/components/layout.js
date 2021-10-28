import React from "react";
import Router from '../router'
import Navbar from '../components/navbar'
import Searchbar from '../components/Searchbar'

import pagesConfig from "../config/pages"

const Layout = ({children}) => {
    return(
        <>
        <Navbar config={pagesConfig}/>
        <Searchbar />
        <Router>
            {children}
        </Router>
        </>
    )
}

export default Layout