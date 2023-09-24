// Carousel.js

import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
function carousel() {

  return (
    <>
      <div className='p-0 , m-0'>
        <Carousel>
          <Carousel.Item>
            <img style={{ maxHeight: "100vh" }}
              className="d-block w-100"
              src='https://images.unsplash.com/photo-1538438253612-287c9fc9217e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First Slider Image Title</h3>
              <p>First Slide decription.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src='https://images.unsplash.com/photo-1551970634-747846a548cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide Image </h3>
              <p>Second slide description</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src='https://images.unsplash.com/photo-1477511801984-4ad318ed9846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third Slide Image</h3>
              <p>Third Slide Description.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
export default carousel; 