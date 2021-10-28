import React from "react";
import Router from '../router'
import Navbar from '../components/navbar'
import Searchbar from '../components/Searchbar'


const Layout = ({children}) => {
    return(
        <>
        <Navbar />
        <Searchbar />
        <Router>
            {children}
        </Router>
        </>
    )
}

export default Layout