import React, { useState } from 'react';
import './Carousel.css'; // Import your CSS file for styling
import plate from './assets/corvette-plate.svg';
import plate2 from './assets/corvette-plate-2.svg';

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
      
      <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      <div className='carousel-buttons'>
      <a onClick={prevSlide}><img src={plate2}/></a>
      <a onClick={nextSlide}><img src={plate}/></a>
      </div>
    </div>
  );
};

export default Carousel;
