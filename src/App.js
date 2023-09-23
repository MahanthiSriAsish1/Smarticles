// App.js

import React from 'react';
import Carousel from './Components/Body';
import Card from './Components/Card';
import Navbar from './Components/Header';
import './css/Carousel.css';

const images = [
  './Dairy-Farming-compressed.jpg',
  './jacqueline-o-gara-mRhDiFUzIoE-unsplash.jpg',
  './vadim-kaipov-8ZELrodSvTc-unsplash.jpg',
];

function App() {
  return (
    <div className="App">
       <Navbar /> 
      <h1>Image Carousel</h1>
      <Carousel images={images} />
      <div className="card-container">
        <Card
          title="Card 1"
          description="This is the first card."
          buttonText="Take a Photo"
          imageSrc="card1.jpg"
        />
        <Card
          title="Card 2"
          description="This is the second card."
          buttonText="Take a Photo"
          imageSrc="card2.jpg"
        />
      </div>
    </div>
  );
}

export default App;
