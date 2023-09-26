// Navbar.js
import '../css/Carousel.css';
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
    
      <header classNameName = {scrolled ? 'header scrolled' : 'header'}>
      <a href="#" className="brand">Travel</a>
      <div className="menu-btn"></div>
      <div className="navigation">
        <div className="navigation-items">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Explore</a>
          <a href="#">Gallery</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
