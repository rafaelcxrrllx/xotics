import React from 'react';
import dipvideo1 from './assets/dipping-action-5.mp4'
import dipvideo2 from './assets/dipping-action-4.mp4'
import './styles.css'
import './VideoPlayer.css'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

function VideoPlayer() {

  
  const { ref, inView } = useInView({
    threshold: 0.5, // Set the threshold to 0.5 for when to trigger the animation
    triggerOnce: false, // Ensure the animation only triggers once
  });

  const scrollRef = useRef(null)

  return (
    <div className='video-container'>
      <motion.video 
        initial={{ x: '-5vw', opacity: 0 }} // Initial opacity set to 0
        animate={{ x: 0, opacity: 1 }} // Animate opacity to 1
        transition={{ duration: 1 }}
        width="320" 
        height="240" 
        autoPlay muted loop>
        <source src={dipvideo1} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>
      <div className='video-text-container'>
        <motion.h1 
          ref={ref}
          initial={{ x: '-5vw', opacity: 0 }}
          animate={{ x: inView ? 0 : '-5vw' , opacity: inView ? 1 : 0 }} // Animate opacity based on inView status
          transition={{ duration: 1 }} // Animation duration
          className='video-text'>
          Dip your World <span id='xotic'>Xotic</span>
        </motion.h1>
        <motion.h3 
           ref={ref}
           initial={{ y: '5vw', opacity: 0 }}
           animate={{ y: inView ? 0 : '5vw' , opacity: inView ? 1 : 0 }} // Animate opacity based on inView status
           transition={{ duration: 1 }} // Animation duration
          className='video-text'>
          From plates to parts we can upgrade your whip ☣️
        </motion.h3>
        <motion.h4
          ref={ref}
          initial={{ y: '5vw', opacity: 0 }}
          animate={{ y: inView ? 0 : '5vw' , opacity: inView ? 1 : 0 }} // Animate opacity based on inView status
          transition={{ duration: 1 }}> 
          Interior & Exterior
          <br/>
          Custom Decals
          <br/>
          Color Customization 
        </motion.h4>
        <Link  
            initial={{ y: '5vw', opacity: 0 }} // Initial opacity set to 0
            animate={{ y: 0, opacity: 1 }} // Animate opacity to 1
            transition={{ duration: 3 }} // Animation duration
            className="Link" to="/contact">
            <motion.button  
               initial={{  opacity: 0 }} // Initial opacity set to 0
               animate={{  opacity: 1 }} // Animate opacity to 1
               transition={{ duration: 2 }}
              className="main-button"> Contact Us
            </motion.button>
            </Link>
      </div>
      <motion.video 
        initial={{ x: '5vw', opacity: 0 }} // Initial opacity set to 0
        animate={{ x: 0, opacity: 1 }} // Animate opacity to 1
        transition={{ duration: 1 }}
        width="320" 
        height="240" 
        autoPlay muted loop>
        <source src={dipvideo2} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>
      
    </div>
  );
}

export default VideoPlayer;
