import React from 'react'
import "./Homepage.css";
import homeimg from "./home-img.jpg"
import {NavLink}  from "react-router-dom";

const Homepage = () => {
  return (

    <>
    
       <div className="home-img"><img src={homeimg} alt="" /></div> 
       <div className="home-info">
       <div class="Hello">Hi i am </div>
                <div class="name">Soham Gujar</div>
                <div class="about">Front End Web Devloper, Student</div>
                <div class="buttons">
                <a
        href={"Soham_G_resume.pdf"}
        download="Soham_G_resume.pdf"
        target="_blank"
        rel="noreferrer"
      >
        Download CV
      </a>
                    <NavLink to="/Contact" class="button-a">Contact Me</NavLink>
                   
                 </div>

       </div>
   </>
   
  )
}

export default Homepage

