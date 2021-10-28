import React from "react";
import NavbarLink from "./navbarLink";

const Navbar = ({ config }) => {
    
    const links = config.map((data, index) => {
        if(data.navbar === true){
           return (
            <NavbarLink config={data} key={index}/>
           )
        }
    })

    return (<nav>
        <div>
            INSERT LOGO
        </div>
        <div>
            {links}
        </div>
    </nav>)
}

export default Navbar