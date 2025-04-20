import React from "react";

 import { NavLink } from "react-router-dom";

function Nav() {

    return(
        <div >
            <img id="logo" src="energylogo.png" alt="logo"></img>
            <NavLink id="links" to="/data">Data</NavLink>
            
        </div>
    )
}

export default Nav
