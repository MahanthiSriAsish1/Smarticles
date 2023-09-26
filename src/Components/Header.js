// Navbar.js

import React, { useState } from 'react';
import '../css/Navbar.css';
import logo from "./logo192.png"

const Navbar = () => {
  
    const [scrolled, setScrolled] = useState(false);
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  
  return (
    <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="logo">
         <img/></div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
