import React from 'react'
import '../App.css'

function About() {
  const images = {
    image1: new URL('/src/assets/Profile.jpg', import.meta.url).href
  }
  return (
    <>
      <div className='container'>
          <div className='profile'>
            <img id='profile-image' src={images.image1} alt="Profile Picture"/>
          </div>
          <div id='about-content'>
            <h1>About</h1>
            <p id='about-body'>
              J Nguyen is a systems engineer and designer based in Minneapolis, MN.
              They earned a Bachelor of Science in Computer Information Technology with a minor in Business Administration from Minnesota State University, Mankato, and are currently pursuing a Master of Science in Systems Engineering at Johns Hopkins University’s Whiting School of Engineering.
              Alongside graduate studies, J serves as a Lead Engineering Technician at Honeywell Aerospace Technologies, where they focus on advancing innovative solutions and deepening expertise in systems design and engineering.
            </p>
          </div>
      </div>
    </>
  )
}

export default About;
