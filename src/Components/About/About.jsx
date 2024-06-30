import React from 'react'
import './About.css'
import theme from './../../assets/theme_pattern.svg'
import profile from './../../assets/pics.jpeg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>ABout Me</h1>
        <img src={theme} alt=""/>
        

      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile} alt=""/>
        </div>
        <div className="about-right">
            <div className="about-para">
            <p> I am a frontend developer with a knowledge proficient in Python, JavaScript, data structures, and algorithms, with expertise in React Native, I thrive on crafting seamless user experiences across platforms. Whether I'm architecting scalable applications or optimizing code for performance, my versatile skill set empowers me to tackle complex challenges with precision and creativity.</p>
                <p>
                I exude positivity and optimism, finding inspiration in the color green for its association with success and positivity. Embracing these traits, i embody a bright outlook on life, no matter the circumstances. A voracious reader, i find solace and joy in the pages of compelling novels, immersing myself in stories that ignite my imagination and broaden my perspective. my love for literature reflects my curious and open-minded nature, enriching my life with new ideas and insights.
                </p>
            </div>
            <div className="about-skill">
                <div className="aboutskills"><p>HTML & CSS</p><hr style={{width:'50%'}} /></div>
                <div className="aboutskills"><p>Javascript</p><hr style={{width:'100%'}} /></div>
                <div className="aboutskills"><p>React Js</p><hr style={{width:'70%'}} /></div>
                <div className="aboutskills"><p style={{width:'21%'}}>React Native</p><hr style={{width:'100%'}} /></div>
                <div className="aboutskills"><p>Python</p><hr style={{width:'80%'}} /></div>
                <div className="aboutskills"><p style={{width:'60%'}}>Data Structure & Algorithm</p><hr style={{width:'100%'}} /></div>
            </div>
        </div>
      </div>
      <div className="about-acheivement">
            <div className="aboutachive">
                <h1>5+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="aboutachive">
                <h1>90+</h1>
                <p>PROJECT COMPLETED</p>
            </div>
            <hr />
            <div className="aboutachive">
                <h1>15+</h1>
                <p>HAPPY CLIENT</p>
            </div>
      </div>
    </div>
  )
}

export default About
