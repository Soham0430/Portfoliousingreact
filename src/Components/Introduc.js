import React from 'react'
import "./intro.css"


const Introduc = () => {
 
  return (
    <>
  <div className="my-intro">
       <h1><u>Introduction</u></h1>
       <p>i'm Soham Gujar, a B.Tech student majoring in Electronics and Telecommunication Engineering at Pimpri Chinchwad College of Engineering (PCCOE). Currently seeking job opportunities, my academic focus has equipped me with strong skills in electronics, programming (C, C++, java), and web development (HTML, CSS, JavaScript,reactjs). Eager to transition into the professional sphere and contribute my knowledge and passion to innovative projects.</p>

  </div>
  <div className="tabs">
  <nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Edu</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Skills</button>
    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Hobbies</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
  <div class="edu-container">
    <div class="edu-items">
      <div class="heading">College Name:</div>
      <div class="content">Pimpri CHinchwad College off Engineering</div>
    </div>
    <div class="edu-items">
      <div class="heading">Degree:</div>
      <div class="content">Bachelor of Technology </div>
    </div>
    <div class="edu-items">
      <div class="heading">Branch:</div>
      <div class="content">Electronics</div>
    </div>
    <div class="edu-items">
      <div class="heading">CGPA:</div>
      <div class="content">8.15</div>
    </div>
  </div>


  </div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
        <div className="skills">
                <div className="skills-item">HTML</div>
          
        <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar bg-success" style={{ width: '90%' }}>90%</div>
      </div>
      <div className="skills-item">CSS</div>
      <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar bg-info text-dark" style={{ width: '75%' }}>75%</div>
      </div>
      <div className="skills-item">JavaScript</div>
      
      <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar bg-warning text-dark" style={{ width: '60%' }}>60%</div>
      </div>
      <div className="skills-item">react.js</div>
      <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar bg-danger" style={{ width: '50%' }}>50%</div>
      </div>


        </div>
          

  </div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
    <div className="hobbies">
      <ul>
        <li>Travelling </li>
        <li>Movies</li>
        <li>Cooking</li>
        <li>Gameing</li>
      </ul>
    </div>
  </div>
</div>
  </div>
  </>
  )
}

export default Introduc
