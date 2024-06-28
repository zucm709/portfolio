import React from 'react'
import './Navbar.css'
import underline from './../../assets/nav_underline.svg'
import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'




const Navbar = () => {
  const [menu , setMenu] = useState('home')
  return (
    <div className='navbar'>
        <h3 style={{fontFamily:'Concert One',fontSize:25,
        marginTop:-15,color:'blueviolet',marginRight:30}}>Tom's</h3>
      {/* <img src={logo} alt=""/> */}
      <ul className="nav-menu">
        <li><AnchorLink className='anchor-link'  href='#home'><p onClick={() =>setMenu('home')}>Home</p></AnchorLink>{menu === 'home'? <img src={underline}alt='rtom'/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() =>setMenu('about')}>ABout Me</p></AnchorLink>{menu === 'about'? <img src={underline} alt='rtom'/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#service'><p onClick={() =>setMenu('service')}>Services</p></AnchorLink>{menu === 'service'? <img src={underline}alt='rtom'/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() =>setMenu('portfolio')}>Portfolio</p></AnchorLink>{menu === 'portfolio'? <img src={underline}alt='rtom'/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() =>setMenu('contact')}>Contact</p></AnchorLink>{menu === 'contact'? <img src={underline}alt='rtom'/>:<></>}</li>
      </ul>
      <div className="nav-connect">
      <AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() =>setMenu('contact')}>Contact</p></AnchorLink>
      </div>
    </div>
  )
}

export default Navbar
