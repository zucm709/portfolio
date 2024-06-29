import React from 'react'
import './Hero.css'
import pic from './../../assets/pics.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div className='hero'>
      <img style={{width:'220px',height:"210px",borderRadius:'100px'}} src={pic} alt/>
      <h2><span>I'm Garland,</span> Frontend Developer Based In Lagos. </h2>
      <p>Being open to work across diverse domains like React JS, React Native, Python data analysis, and data structures and algorithms not only broadens my skill set but also fuels my passion for continuous learning and growth. Embracing this versatility allows me to tackle complex problems with creativity and efficiency, while also staying adaptable in an ever-evolving technological landscape.</p>
      <div className="hero-action">
        <div className="hero-connect" ><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
