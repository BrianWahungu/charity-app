import React from "react";
// import './navbar.css'
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div className="topNavBar">
            <Link className="active" to="/">Home</Link>.
            <Link to="/organisations">Organisations</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
}

export default NavBar;