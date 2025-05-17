import React from "react";

 import { NavLink } from "react-router-dom";

function Nav() {

    return(
        <div >
            <img id="logo" src="energylogo.png" alt="logo"></img>
            <NavLink id="link1" to="/">Home</NavLink>
            <NavLink id="link2" to="/data">Data</NavLink>
            <NavLink id="link3" to="/new">New</NavLink>
            
        </div>
    )
}

export default Nav
