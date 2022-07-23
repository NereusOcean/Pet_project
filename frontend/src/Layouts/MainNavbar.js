import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "./MainNavbar.css"

const navBar_logo = "./image/navBar-logo.png";


function MainNavbar() {
    

    return (
        <div id="header">
            <div className="Navbar">
                <div className='navBar-logo'>
                    
                        <img width="46px" height="44px" src={navBar_logo} id="imgLogo" />
                        <Link className='txt-decoration-none' to="/" >   
                            <div id="nameComp">Agency</div> 
                        </Link>
                    
                </div>
                    <div className="Link" >
                        <Link className="NavLink"  to="/about" >About</Link>
                        <Link className="NavLink"  to="/services" >Services</Link>
                        <Link className="NavLink"  to="/pricing" >Pricing</Link>
                        <Link className="NavLink"  to="/blog" >Blog</Link>
                    </div>
                    <button className="Button" >Contact</button>
            </div>
            <div id="text">
                <div id="nameWork">Portfolio</div>
                <div id="description">Agency provides a full service range including technical skills, design, business understanding.</div>
            </div>

        </div>
    )
}

export default MainNavbar