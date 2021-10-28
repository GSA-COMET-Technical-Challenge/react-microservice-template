import React from "react";
import Router from '../router'
import Navbar from '../components/navbar'

const Layout = ({children}) => {
    return(
        <>
        <Navbar />
        <Router>
            {children}
        </Router>
        </>
    )
}

export default Layout