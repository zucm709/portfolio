import React from 'react'
import user_icon from '../../assets/user_icon.svg'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
            <div className='footer-top-left'>
                <p>I am A frontend Developer With 3 years of experience</p>
            </div>
            <div className='footer-top-right'>
                <div className='footer-email-input'>
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='Enter Your email,' />
                </div>
                <div className='footer-subscribe'>Subscribe</div>
            </div>
      </div>
      <hr />
      <div className='footer-bottom'>
           <p footer-bottom-left>© 2024 Garland's. All right reserved</p>
            <div className='footer-bottom-right'>
               <p>Terms Of Services</p>
               <p>Privacy Policy</p>
               <p>Connect With Me</p>
            </div>
       </div>
    </div>
  )
}

export default Footer
