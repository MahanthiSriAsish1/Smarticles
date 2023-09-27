import React, { useState ,useRef} from "react";
import '../css/Carousel.css'; // Import your stylesheet here
import Webcam from 'react-webcam';

function Carousel() {
  const webcamRef = useRef(null);
  const [showCamera, setShowCamera] = useState(false);
  const [photo, setPhoto] = useState(null);
  const sliderNav = (manual) => {
    setActiveSlide(manual);
  };
  
  const [activeSlide, setActiveSlide] = useState(0);

  const handleStartCamera = () => {
    setShowCamera(true);
  };

  const handleCapturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setPhoto(imageSrc);
    // You can send this captured image to your Node.js API here.
   

    
  };
  
  return (
    <section className="home">
     
      <video className={`video-slide ${activeSlide === 0 ? "active" : ""}`} src="1.mp4" autoPlay muted loop></video>
      <video className={`video-slide ${activeSlide === 1 ? "active" : ""}`} src="2.mp4" autoPlay muted loop></video>
      <video className={`video-slide ${activeSlide === 2 ? "active" : ""}`} src="3.mp4" autoPlay muted loop></video>
      <video className={`video-slide ${activeSlide === 3 ? "active" : ""}`} src="4.mp4" autoPlay muted loop></video>
      <video className={`video-slide ${activeSlide === 4 ? "active" : ""}`} src="5.mp4" autoPlay muted loop></video>

   
      
      <div className={`content ${activeSlide === 0 ? "active" : ""}`}>
        <h1>Wonderful.<br /><span>Island</span></h1>
        <p>Your content here...</p>
          {showCamera ? (
        <div className="camera-container">
          <Webcam
            ref={webcamRef}
            mirrored={true}
            audio={false}
            screenshotFormat="image/jpeg"
          />
          <button
        
    
      className="capture-button" onClick={handleCapturePhoto}>
            Capture Photo
          </button>
        
    
     
          {photo && (
            <img src={photo} alt="Captured" className="captured-image" />
          )}
        </div>
      ) : (
        <>
          
          
           
        
     <button
      className="card-button" onClick={handleStartCamera}> read more </button>
        
    
     
              
            
        
        </>
      )}
        {photo && (
            <img src={photo} alt="Captured" className="captured-image" />
          )}
      </div>
      
      <div className={`content ${activeSlide === 1 ? "active" : ""}`}>
        <h1>Camping.<br /><span>Enjoy</span></h1>
        <p>Your content here...</p>
          {showCamera ? (
        <div className="camera-container">
          <Webcam
            ref={webcamRef}
            mirrored={true}
            audio={false}
            screenshotFormat="image/jpeg"
          />
          <button
        
    
      className="capture-button" onClick={handleCapturePhoto}>
            Capture Photo
          </button>
        
    
     
          {photo && (
            <img src={photo} alt="Captured" className="captured-image" />
          )}
        </div>
      ) : (
        <>
          
          
            <button
        
    
      className="card-button" onClick={handleStartCamera}> read more </button>
        
    
     
              
            
        
        </>
      )}
        
      </div>
      
      <div className={`content ${activeSlide === 2 ? "active" : ""}`}>
        <h1>Adventures.<br /><span>Off Road</span></h1>
        <p>Your content here...</p>
          {showCamera ? (
        <div className="camera-container">
          <Webcam
            ref={webcamRef}
            mirrored={true}
            audio={false}
            screenshotFormat="image/jpeg"
          />
          <button
        
    
      className="capture-button" onClick={handleCapturePhoto}>
            Capture Photo
          </button>
        
    
     
          {photo && (
            <img src={photo} alt="Captured" className="captured-image" />
          )}
        </div>
      ) : (
        <>
          
          
            <button
        
    
      className="card-button" onClick={handleStartCamera}> read more </button>
        
    
     
              
            
        
        </>
      )}
      </div>
      
      <div className={`content ${activeSlide === 3 ? "active" : ""}`}>
        <h1>Road Trip.<br /><span>Together</span></h1>
        <p>Your content here...</p>
          {showCamera ? (
        <div className="camera-container">
          <Webcam
            ref={webcamRef}
            mirrored={true}
            audio={false}
            screenshotFormat="image/jpeg"
          />
          <button
        
    
      className="capture-button" onClick={handleCapturePhoto}>
            Capture Photo
          </button>
        
    
     
          {photo && (
            <img src={photo} alt="Captured" className="captured-image" />
          )}
        </div>
      ) : (
        <>
          
          
            <button
        
    
      className="card-button" onClick={handleStartCamera}> read more </button>
        
    
     
              
            
        
        </>
      )}
      </div>
      
      <div className={`content ${activeSlide === 4 ? "active" : ""}`}>
        <h1>Feel Nature.<br /><span>Relax</span></h1>
        <p>Your content here...</p>
          {showCamera ? (
        <div className="camera-container">
          <Webcam
            ref={webcamRef}
            mirrored={true}
            audio={false}
            screenshotFormat="image/jpeg"
          />
          <button
        
    
      className="capture-button" onClick={handleCapturePhoto}>
            Capture Photo
          </button>
        
    
     
          {photo && (
            <img src={photo} alt="Captured" className="captured-image" />
          )}
        </div>
      ) : (
        <>
          
          
            <button
        
    
      className="card-button" onClick={handleStartCamera}> read more </button>
        
    
     
              
            
        
        </>
      )}
      </div>
      
      <div className="media-icons">
        <button
        
    
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
        <div className={`nav-btn ${activeSlide === 3 ? "active" : ""}`} onClick={() => sliderNav(3)}></div>
        <div className={`nav-btn ${activeSlide === 4 ? "active" : ""}`} onClick={() => sliderNav(4)}></div>
        
          
      </div>
      
    </section>
  );
}

export default Carousel;
