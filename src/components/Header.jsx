import React, { useState } from 'react'
import hamburgerIcon from "../assets/icons/hamburger.png";
import closeIcon from "../assets/icons/close.png";

function Header() {
    const [isOpen,setIsOpen] = useState(false);

    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    }
  return (
    <nav className='portfolio-header-container'>
        <div className='portfolio_title'>
            <a href="#home">Portfolio</a>
        </div>
        <ul className={`portfolio_nav-links ${isOpen ? "active": ""}`}>
            <li><a href="#home" onClick={()=>setIsOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={()=>setIsOpen(false)}>About</a></li>
            <li><a href="#techstack" onClick={()=>setIsOpen(false)}>Tech Stack</a></li>
            <li><a href="#projects" onClick={()=>setIsOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={()=>setIsOpen(false)}>Contact</a></li>
        </ul>

        <div className='header-menu-toggle' onClick={toggleMenu}>
            <img src={isOpen ? closeIcon : hamburgerIcon}
            alt='menu toggle'/>
        </div>
    </nav>
  )
}

export default Header