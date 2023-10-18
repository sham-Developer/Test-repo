import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar">
            <span className="logo">Logo</span>
            <ul className="nav-links">
                <Link to={"/"} className="home">
                    <li>Home</li>
                </Link>
                <Link to={"/about"} className="about">
                    <li>about</li>
                </Link>
                <Link to={"/contact"} className="contact">
                    <li>contact</li>
                </Link>
                <Link to={"/blog"} className="blog">
                    <li>blog</li>
                </Link>
                <Link to={"/register"} className="register">
                    <li>register</li>
                </Link>

            </ul>
        </nav>
    )
}



export default Navbar