
import './About.css';
import './styles.css';
import Nav from './Nav';
import hero from './assets/hero-image.jpg';
import Footer from './footer';
import { motion } from 'framer-motion';
import VideoPlayer from './VideoPlayer';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

function About() {

  const { ref, inView } = useInView({
    threshold: 0.5, // Set the threshold to 0.5 for when to trigger the animation
    triggerOnce: false, // Ensure the animation only triggers once
  });

  const scrollRef = useRef(null)


  return (
    <div className="home-container">
      <Nav/>
     
      <div className='video-container'>
      
        <VideoPlayer/>
      </div>
     
        <div className='hero-image'>
        <motion.img 
          ref={ref}
          initial={{ y: '5vw', opacity: 0 }}
          animate={{ y: inView ? 0 : '5vw' , opacity: inView ? 1 : 0 }} // Animate opacity based on inView status
          transition={{ duration: 1 }} // Animation duration
          src={hero} alt='A white Corvette parked inside of a street tunnel'/>
        </div>
        <div className='text-container'>
            <motion.h2 
            initial={{ x: '3vw', opacity: 0 }} // Initial opacity set to 0
            animate={{ x: 0, opacity: 1 }} // Animate opacity to 1
            transition={{ duration: 1 }} // Animation duration
              className='about-title' id="xotic">
                Xotic Dip
            </motion.h2>
            <motion.h4 
            initial={{ y: '3vw', opacity: 0 }} // Initial opacity set to 0
            animate={{ y: 0, opacity: 1 }} // Animate opacity to 1
            transition={{ duration: 1 }} // Animation duration
            >
                est 2020
            </motion.h4>
        <motion.h4 
          initial={{ y: '3vw', opacity: 0 }} // Initial opacity set to 0
          animate={{ y: 0, opacity: 1 }} // Animate opacity to 1
          transition={{ duration: 1 }} // Animation duration
          className='about-text'>
            Xotic Dip is a unqiue brand based in South Los Angeles that provides hydro dipping service for car parts and accessories. 
            Xotic Dip has been the leading brand providing one of a kind pieces for all car lovers. Whether
            an old or new car, Xotic Dip can level up your car experience with a unique dip!  
        </motion.h4>
        
        </div>
       
      <Footer/>
    </div>
  );
}

export default About;
