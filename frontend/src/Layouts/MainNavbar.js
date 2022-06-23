import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "./MainNavbar.css"
import { useSelector } from 'react-redux';

const navBar_logo = "./image/navBar-logo.png";


function MainNavbar() {
    const [pcVersion, setPcVersion] = useState();
    const [header, setHeader] = useState(false);
    const size = useSelector(state => state.sizeReducer.size);

    if (size > 1040 && pcVersion != false) setPcVersion(false);
    else if (size < 1040 && pcVersion != true) setPcVersion(true);

    let className = {
        Navbar: "Navbar",
        Link: "Link",
        Button: "Button",
        NavLink: "NavLink"
    }

    let idss = '';
    if (pcVersion) {
        className.Navbar += " pc";
        className.Link += " pc";
        className.Button += ' pc';
        className.NavLink += ' pc';
        idss = 'hide';
    } else {
        className.Navbar = "Navbar";
        className.Link = "Link";
        className.Button = "Button";
        className.NavLink = 'NavLink';
        idss='';
    }

    const showHeader = () => {
        if (header) {
            setHeader(false);
            idss = '';
        } else {
            idss ='hide';
            setHeader(true);
        }
    };

    return (
        <div id="header" style={{ position: 'sticky', left: '0', width: '100%', backgroundColor: "#28293E" }}>
            <div className={className.Navbar}>
                <div className='navBar-logo' onClick={pcVersion?() => showHeader():null}>
                    <img width="46px" height="44px" src={navBar_logo} id="imgLogo" />
                    <div id="nameComp">Agency</div>
                </div>
                    <div className={className.Link} id={idss + (header ? ' hide':'')}>
                        <Link className={className.NavLink} to="/about" >About</Link>
                        <Link className={className.NavLink} to="/services" >Services</Link>
                        <Link className={className.NavLink} to="/pricing" >Pricing</Link>
                        <Link className={className.NavLink} to="/blog" >Blog</Link>
                    </div>
                    <button className={className.Button} id={idss + (header ? 'hide':'')}>Contact</button>
            </div>
            <div id="text">
                <div id="nameWork">Portfolio</div>
                <div id="description">Agency provides a full service range including technical skills, design, business understanding.</div>
            </div>

        </div>
    )
}

export default MainNavbar