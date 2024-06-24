import React from 'react'
import './Navbar.css'
import logo from './../../assets/logo.svg'




const Navbar = () => {
  return (
    <div className='navbar'>
        <h3 style={{fontFamily:'Concert One',fontSize:25,
        marginTop:-15,color:'blueviolet',marginRight:30}}>Garland's</h3>
      {/* <img src={logo} alt=""/> */}
      <ul className="nav-menu">
        <li>Home</li>
        <li>ABout Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">
        <p>  Connect With Me</p>

      </div>
    </div>
  )
}

export default Navbar
