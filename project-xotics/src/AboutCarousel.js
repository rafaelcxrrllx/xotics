
import React, { useState, useEffect } from 'react';
import './AboutCarousel.css'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';

const AboutCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { ref, inView } = useInView({
    threshold: 0.5, // Set the threshold to 0.5 for when to trigger the animation
    triggerOnce: false, // Ensure the animation only triggers once
  });

  const scrollRef = useRef(null)


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
    <div ref={scrollRef}>
    <motion.div 
    ref={ref}
    initial={{ y: '5vw', opacity: 0 }}
    animate={{ y: inView ? 0 : '5vw' , opacity: inView ? 1 : 0 }} // Animate opacity based on inView status
    transition={{ duration: 1 }} 
    className="carousel">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
    </motion.div>
    </div>
  );
};

export default AboutCarousel;
