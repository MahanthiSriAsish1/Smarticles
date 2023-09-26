import React, { useState ,useRef} from "react";
import '../css/Carousel.css'; // Import your stylesheet here
import Webcam from 'react-webcam';
import Card  from "./Card.jsx";
import  mp from "./1.mp4"
import mp2 from "./2.mp4"
import mp3 from "./3.mp4"





function Carousel() {
  const sliderNav = (manual) => {
    setActiveSlide(manual);
  };
  
  const [activeSlide, setActiveSlide] = useState(0)
  return (
    <section className="home">
     
      <video className={`video-slide ${activeSlide === 0 ? "active" : ""}`} src={mp} autoPlay muted loop></video>
      <video className={`video-slide ${activeSlide === 1 ? "active" : ""}`} src={mp2} autoPlay muted loop></video>
      <video className={`video-slide ${activeSlide === 2 ? "active" : ""}`} src={mp3} autoPlay muted loop></video>
     
   
      
      <div className={`content ${activeSlide === 0 ? "active" : ""}`}>
        <h1>Wonderful.<br /><span>Island</span></h1>
        <p>Your content here...</p>
          <Card />
      </div>
      
      <div className={`content ${activeSlide === 1 ? "active" : ""}`}>
        <h1>Camping.<br /><span>Enjoy</span></h1>
        <p>Your content here...</p>
          <Card />
        
      </div>
      
      <div className={`content ${activeSlide === 2 ? "active" : ""}`}>
        <h1>Adventures.<br /><span>Off Road</span></h1>
        <p>Your content here...</p>
          <Card/>
      </div>
      
     
      
      <div className="media-icons"><button
      href="#"><i className="fab fa-facebook-f"></i></button>
        
    
     
        <button
        
    
      href="#"><i className="fab fa-instagram"></i></button>
        
    
     
        <button
        
    
      href="#"><i className="fab fa-twitter"></i></button>
        
    
     
      </div>
      
      <div className="slider-navigation">
        <div className={`nav-btn ${activeSlide === 0 ? "active" : ""}`} onClick={() => sliderNav(0)}></div>
        <div className={`nav-btn ${activeSlide === 1 ? "active" : ""}`} onClick={() => sliderNav(1)}></div>
        <div className={`nav-btn ${activeSlide === 2 ? "active" : ""}`} onClick={() => sliderNav(2)}></div>
        
        
          
      </div>
      
    </section>
  );
}

export default Carousel;
