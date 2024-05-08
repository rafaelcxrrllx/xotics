
import './Landing.css';
import './styles.css';
import about from './assets/about-img.jpg'
import panbefore from './assets/pan-before.jpg';
import panafter from './assets/pan-after.jpg';
import enginebefore from './assets/engine-before.jpg';
import engineafter from './assets/engine-after.jpg';
import tacoma from './assets/tacoma.jpg';
import AboutCarousel from './AboutCarousel';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

function Landing() {


  const { ref, inView } = useInView({
    threshold: 0.5, // Set the threshold to 0.5 for when to trigger the animation
    triggerOnce: false, // Ensure the animation only triggers once
  });

    const images = [
        panbefore,
        panafter,
        // Add more image URLs here
      ];

      const images2 = [
        enginebefore,
        engineafter,
        // Add more image URLs here
      ];

      const scrollRef = useRef(null)


  return (
    <div >
      <div  ref={scrollRef} className='about-container'>

        <motion.img 
          initial={{ x: '-5vw', opacity: 0 }} // Initial opacity set to 0
          animate={{ x: 0, opacity: 1 }} // Animate opacity to 1
          transition={{ duration: 1 }} // Animation duration
          className="about-img" src={about} alt='CEO of Xotic Dips corvette'/>
          
        <div ref={scrollRef}  className='about-text'>
          <motion.h1 
            initial={{ x: '5vw', opacity: 0 }} // Initial opacity set to 0
            animate={{ x: 0, opacity: 1 }} // Animate opacity to 1
            transition={{ duration: 1 }} // Animation duration
            ref={ref}
            id="landing-header">Dip Your <span id="xotic">World</span> 
          </motion.h1>

          <motion.h3
            initial={{ y: '5vw', opacity: 0 }} // Initial opacity set to 0
            animate={{ y: 0, opacity: 1 }} // Animate opacity to 1
            transition={{ duration: 1 }}
            id="personalize">
              Personalize your car with the most Xotic customs. 
          </motion.h3>
          <br/>
          <Link  
            initial={{ y: '5vw', opacity: 0 }} // Initial opacity set to 0
            animate={{ y: 0, opacity: 1 }} // Animate opacity to 1
            transition={{ duration: 3 }} // Animation duration
            className="Link" to="/shop">
            <motion.button  
               initial={{  opacity: 0 }} // Initial opacity set to 0
               animate={{  opacity: 1 }} // Animate opacity to 1
               transition={{ duration: 2 }}
              className="main-button"> Shop all
            </motion.button>
            </Link>

        </div>
    </div>

    <div ref={scrollRef}  className='about-container' id="reverse">
      
      <AboutCarousel images={images2}/>
      
      <div className='about-text'>

        <motion.h1 
          initial={{ x: '5vw', opacity: 0 }} // Initial opacity set to 0
          animate={{ x: 0, opacity: 1 }} // Animate opacity to 1
          transition={{ duration: 1 }} // Animation duration
          ref={ref}
          id="landing-header"><span id="xotic">Pimp</span> Your <span id="xotic">Ride</span> </motion.h1>
        <motion.h3
          initial={{ y: '5vw', opacity: 0 }} // Initial opacity set to 0
          animate={{ y: 0, opacity: 1 }} // Animate opacity to 1
          transition={{ duration: 1 }}>
            We create one of a kind pieces. 
        </motion.h3>
      </div>

    </div>

    <div className='about-container-white'>
        <motion.img
           ref={ref}
           initial={{ x: '-5vw', opacity: 0 }}
           animate={{ x: inView ? 0 : '-5vw' , opacity: inView ? 1 : 0 }} // Animate opacity based on inView status
           transition={{ duration: 1 }} // Animation duration
        className="about-img" src={tacoma} alt='CEO of Xotic Dips SR5'/>
        <motion.div 
          ref={ref}
          initial={{ y: '5vw', opacity: 0 }}
          animate={{ y: inView ? 0 : '5vw' , opacity: inView ? 1 : 0 }} // Animate opacity based on inView status
          transition={{ duration: 1 }}
          className='about-text-white'>
        <h1 id="landing-header-white"> Keep It <span id="xotic">Classic</span> </h1>
        <h3>
            Keep your classic in mint condition. 
        </h3>
        </motion.div>
      </div>
      <div ref={scrollRef} className='about-container-white' id="reverse">
      <AboutCarousel images={images}/>
        <div className='about-text-white'>
        <h1 id="landing-header-white">Uniquely <span id="xotic">Xotic</span></h1>
        <h3>
            No one does it like us. Level up today!
        </h3>
        </div>
      </div>
    </div>
    
  );
}

export default Landing;
