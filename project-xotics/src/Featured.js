import './Featured.css';
import Item from './item';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Featured() {

    const { ref, inView } = useInView({
        threshold: 0.5, // Set the threshold to 0.5 for when to trigger the animation
        triggerOnce: false, // Ensure the animation only triggers once
      });

      const scrollRef = useRef(null)


  return (
    <div ref={scrollRef} className='featured-container'>
        <div 
           
            className='featured-header'>    
            <motion.h2 
                 ref={ref}
                 initial={{ x: '-5vw', opacity: 0 }}
                 animate={{ x: inView ? 0 : '-5vw' , opacity: inView ? 1 : 0 }} // Animate opacity based on inView status
                 transition={{ duration: 1 }} // Animation duration
                className='header'>Featured products</motion.h2>
            <motion.h4
                 ref={ref}
                 initial={{ y: '5vw', opacity: 0 }}
                 animate={{ y: inView ? 0 : '5vw' , opacity: inView ? 1 : 0 }} // Animate opacity based on inView status
                 transition={{ duration: 1 }} // Animation duration
                 >Upgrade your whip with our Forged Carbon Fiber 🏎️💨</motion.h4>
        </div>
        <Item/>
    </div>
  );
}

export default Featured;
