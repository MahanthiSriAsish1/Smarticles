// Carousel.js

import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
function carousel() {

  return (
    <>
      <div className='p-0 , m-0'>
        
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 image"
              src='https://images.unsplash.com/photo-1538438253612-287c9fc9217e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
              alt="First slide"
            />
            <Carousel.Caption>
              <button className='re-button'>trgasdfasdf</button>
              <h3>your crop is not grwoing well?</h3>
              <p>select the card below and get instant result</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block w-100 image"
              src='https://images.unsplash.com/photo-1551970634-747846a548cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
              alt="Second slide"
            />

            <Carousel.Caption>
            <button className='re-button'>trgasdfasdf</button>
              <h3>your plant have any disease? </h3>
              <p>select the card below and get instant result</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block w-100 image"
              src='https://images.unsplash.com/photo-1477511801984-4ad318ed9846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>your pet animal/farm animal have any trouble</h3>
              <p>select the card below and get instant result</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        
      </div>
    </>
  );
}
export default carousel;