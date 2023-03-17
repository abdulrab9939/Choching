import slid1 from '../assets/slid2.jpg'
import slid2 from '../assets/slid3.jpg'
import slid3 from '../assets/slid4.jpg'
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
const Slider = () => {
  const [index, setIndex] = useState(0);
    
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
  
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
                          height={400}

              className="d-block w-100"
              src={slid1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
                          height={400}

              className="d-block w-100"
              src={slid2}

              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height={400}
              className="d-block w-100 "
              src={slid3}
              alt="Third slide"
            />
    
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
    



export default Slider
