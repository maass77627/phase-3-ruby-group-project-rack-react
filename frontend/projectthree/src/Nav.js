import { NavLink } from "react-router-dom";

function Nav() {

    return(
        <div id="nav">
            <img id="logo" src="energylogo.png" alt="logo"></img>
            <NavLink id="links" to="/">Home</NavLink>
            {/* <NavLink id="links" to="/form">Add a Record</NavLink> */}
            <NavLink id="links" to="/data">Data</NavLink>

        </div>
    )
}

export default Nav
