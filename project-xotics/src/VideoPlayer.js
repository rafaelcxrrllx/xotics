import React from 'react';
import dipvideo1 from './assets/dipping-action-5.mp4'
import dipvideo2 from './assets/dipping-action-4.mp4'
import './styles.css'
import './VideoPlayer.css'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function VideoPlayer() {


  return (
    <div className='video-container'>
      <video width="320" height="240" autoPlay muted loop>
        <source src={dipvideo1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='video-text-container'>
        <h1 className='video-text'>
          Dip your World <br/><span id='xotic'>Xotic</span>
        </h1>
        <h3 className='video-text'>
          From plates to parts we can upgrade your whip ☣️
        </h3>
        <p>
          Interior & Exterior
          <br/>
          Custom Decals
          <br/>
          Color Customization 
        </p>
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
      <video width="320" height="240" autoPlay muted loop>
        <source src={dipvideo2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
    </div>
  );
}

export default VideoPlayer;
