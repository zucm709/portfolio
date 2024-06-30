import React, { useRef } from 'react'
import './Navbar.css'
import underline from './../../assets/nav_underline.svg'
import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


const Navbar = () => {
  const [menu , setMenu] = useState('home')
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right="0"
  }

  const closeMenu = () => {
    menuRef.current.style.right="-350px"
  }

  return (
    <div className='navbar'>
        <h3 className='logo'>Tom's</h3>
      <img src={menu_open} alt="rtom" className='nav-mob-open' onClick={openMenu}/>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} alt="" className="nav-mob-close" onClick={closeMenu} />
        <li><AnchorLink className='anchor-link'  href='#home'><p onClick={() =>setMenu('home')}>Home</p></AnchorLink>{menu === 'home'? <img src={underline}alt='rtom'/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() =>setMenu('about')}>ABout Me</p></AnchorLink>{menu === 'about'? <img src={underline} alt='rtom'/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#service'><p onClick={() =>setMenu('service')}>Services</p></AnchorLink>{menu === 'service'? <img src={underline}alt='rtom'/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() =>setMenu('portfolio')}>Portfolio</p></AnchorLink>{menu === 'portfolio'? <img src={underline}alt='rtom'/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() =>setMenu('contact')}>Contact</p></AnchorLink>{menu === 'contact'? <img src={underline}alt='rtom'/>:<></>}</li>
      </ul>
      <div className="nav-connect">
      <AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() =>setMenu('contact')}>Network With Me</p></AnchorLink>
      </div>
    </div>
  )
}

export default Navbar
