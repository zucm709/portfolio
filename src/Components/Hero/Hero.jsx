import React from 'react'
import './Hero.css'
import pic from './../../assets/pics.jpeg'


const Hero = () => {
  return (
    <div className='hero'>
      <img style={{width:'220px',height:"210px",borderRadius:'100px'}} src={pic} alt/>
      <h2><span>I'm Garland,</span> Frontend Developer Based In Lagos. </h2>
      <p> As a frontend developer proficient in Python, JavaScript, data structures, and algorithms, with expertise in React Native, I thrive on crafting seamless user experiences across platforms. Whether I'm architecting scalable applications or optimizing code for performance, my versatile skill set empowers me to tackle complex challenges with precision and creativity.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
