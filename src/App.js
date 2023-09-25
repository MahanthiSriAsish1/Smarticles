// App.js


import React from 'react';
import Carousel from './Components/Body.js';
import Card from './Components/Card.jsx';
import Navbar from './Components/Header.js';
import './css/Carousel.css';
import './css/body.css'
import  './Dairy-Farming-compressed.jpg';
import  './jacqueline-o-gara-mRhDiFUzIoE-unsplash.jpg';
import   './vadim-kaipov-8ZELrodSvTc-unsplash.jpg';
const images = [
  './Dairy-Farming-compressed.jpg',
  './jacqueline-o-gara-mRhDiFUzIoE-unsplash.jpg',
  './vadim-kaipov-8ZELrodSvTc-unsplash.jpg',
];

export default function App() {
  return (
  
    <div className="App">
       <Navbar /> 
      <div className='body-container'>
      <Carousel images={images} />
      <div className='card-container'>
        <Card
          title="Card 1"
          description="This is the first card."
          buttonText="Take a Photo"
          imageSrc="https://images.unsplash.com/photo-1477511801984-4ad318ed9846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80
          "
        />
        <Card
          title="Card 2"
          description="This is the second card."
          buttonText="Take a Photo"
          imageSrc="https://images.unsplash.com/photo-1477511801984-4ad318ed9846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        />
        </div>
      </div>
    </div>
     
    
  );
}



  
