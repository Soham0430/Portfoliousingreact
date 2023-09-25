import React from 'react'
import "./project.css"
const Project = () => {
  return (
   <div className='project'>
    <h1>Project</h1>
      <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Portfolio Website
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Designed and developed a dynamic personal portfolio website using reactjs. The website features a clean design with an emphasis on user experience and mobile responsiveness. Implemented interactive elements and smooth animations to engage visitors and provide an immersive browsing experience
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       Text-Transform
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      As a driven web developer, I created Text Transformation Website, an all-in-one platform designed to effortlessly convert and optimize text. Leveraging the cutting-edge technologies of React and Bootstrap, I developed a seamless and user-friendly website that provides an intuitive experience. Users can easily convert text to uppercase or lowercase, remove unnecessary spaces, and keep track of word counts through our incorporated features. The clean and responsive user interface ensures accessibility from any device, enhancing convenience for users      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
     Water Motor Controller
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Developed an innovative SMS-based GSM pump motor controller, utilizing Arduino Uno R3 and SIM900A GSM module. Enables seamless water pump control via text messages, providing remote access for agriculturists to manage irrigation operations effectively from their mobile devices. This solution simplifies pump control, streamlines agricultural practices, and tackles operational challenges to enhance overall productivity
      </div>
    </div>
  </div>
</div>

</div>
  )
}

export default Project
