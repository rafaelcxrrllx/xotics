
import React, { useState, useEffect } from 'react';
import './AboutCarousel.css'


const AboutCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next index
      const newIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(newIndex);
    }, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="carousel">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
    </div>
  );
};

export default AboutCarousel;
