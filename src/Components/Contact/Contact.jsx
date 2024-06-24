import React from 'react'
import './Contact.css'
import theme from './../../assets/theme_pattern.svg'
import mail_icon from './../../assets/mail_icon.svg'
import phone_icon from './../../assets/call_icon.svg'
import location_icon from './../../assets/location_icon.svg'


const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's Connect</h1>
            <p>Being open to work across diverse domains like React JS, React Native, Python data analysis, and data structures and algorithms not only broadens my skill set but also fuels my passion for continuous learning and growth. Embracing this versatility allows me to tackle complex problems with creativity and efficiency, while also staying adaptable in an ever-evolving technological landscape.</p>
             <div className="contact-details">
                <div className="contact-detail">
                  <img src={mail_icon} alt="" />
                  <p>raheemqayyuum@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={phone_icon} alt="" />
                    <p>09163417945</p>
                    </div>
                    <div className="contact-detail">
                    <img src={location_icon} alt="" />
                    <p>Lagos</p>
                    </div>
             </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
