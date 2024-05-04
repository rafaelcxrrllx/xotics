import './item.css';
import plate from './assets/corvette-frame-1.jpg'
import { Link } from 'react-router-dom';
import './styles.css';
import React, { useRef } from 'react';
import { animate, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
function Item() {

    const { ref, inView } = useInView({
        threshold: 0.5, // Set the threshold to 0.5 for when to trigger the animation
        triggerOnce: false, // Ensure the animation only triggers once
      });

      const scrollRef = useRef(null)



  return (

    <Link className="Link" ref={scrollRef}  to="/corvette-plate">
       
        <motion.div 
            className='item-container'>
            <img src={plate} alt="A license plate frame"/>
            <div className='item-header'>
                <h3 className='item-name'>Grand Sport Forged Carbon Fiber Frame</h3>
                <span>$30.00</span>
                <div className='button-container'>
                    <button id="shop-button" className='second-button'>View</button>
                </div>
            </div>
        </motion.div>

    </Link>

  );
}

export default Item;
