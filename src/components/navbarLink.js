import React from "react";

const NavbarLink = ({ config, index }) => {
    return(
    <a href={config.path}>
        {config.name}
    </a>
    )
}

export default NavbarLink