import React, { useState } from "react";
import "./Navbar.css";

import { GiHamburgerMenu } from "react-icons/gi";

import {NavLink}  from "react-router-dom";

const Navbar = () => {
  const [showHamburgger, setShowHamburgger] = useState(false);

  
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>S</span>oham
            <span>G</span>ujar
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showHamburgger ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/" exact={true}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/Introduction">Introduction</NavLink>
            </li>
            <li>
              <NavLink to="/Project">Project</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">contact</NavLink>
            </li>
          </ul>
        </div>

        
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowHamburgger(!showHamburgger)}>
              <GiHamburgerMenu />
            </a>
          </div>
        
      </nav>

     
    </>
  );
};

export default Navbar;