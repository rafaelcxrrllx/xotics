import React, { useState } from 'react';
import './Carousel.css'; // Import your CSS file for styling
import frame from './assets/corvette-frame-1.jpg';
import frame2 from './assets/corvette-frame-2.jpg';

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  return (
    <div className="carousel">
      
      <img id="main-img" src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      <div className='carousel-buttons'>
      <a onClick={prevSlide} className="carousel-thumbnail"><img  src={frame}/></a>
      <a onClick={nextSlide} className="carousel-thumbnail"><img src={frame2}/></a>
      </div>
    </div>
  );
};

export default Carousel;
