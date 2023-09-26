// Card.js

import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import '../css/Card.css';
import axios from "axios";

const Card = () => {
  const webcamRef = useRef(null);
  const [showCamera, setShowCamera] = useState(false);
  const [photo, setPhoto] = useState(null);

  const handleStartCamera = () => {
    setShowCamera(true);
  };

  const handleCapturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setPhoto(imageSrc);
    // You can send this captured image to your Node.js API here.
  };

  return (
    <div className="card">
      {showCamera ? (
        <div className="camera-container">
          <Webcam
            ref={webcamRef}
            mirrored={true}
            audio={false}
            screenshotFormat="image/jpeg"
          />
          <button className="capture-button" onClick={handleCapturePhoto}>
            Capture Photo
          </button>
          {photo && (
            <img src={photo} alt="Captured" className="captured-image" />
          )}
        </div>
      ) : (
        <>
            <button className="card-button" onClick={handleStartCamera}> read more </button>
        </>
      )}
    </div>
  );
};

export default Card;
