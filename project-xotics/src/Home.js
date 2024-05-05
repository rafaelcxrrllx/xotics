
import './Home.css';
import './styles.css';
import Nav from './Nav';
import Featured from './Featured';
import Footer from './footer';
import { Link } from 'react-router-dom';
import Landing from './Landing';
import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import './styles.css';


function Home() {

  const { ref, inView } = useInView({
    threshold: 0.5, // Set the threshold to 0.5 for when to trigger the animation
    triggerOnce: false, // Ensure the animation only triggers once
  });



  return (
    <div className="home-container">
      <Nav/>
      <Landing/>
      <motion.div 
        ref={ref}
        initial={{  opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }} // Animate opacity based on inView status
        transition={{ duration: 1 }} // Animation duration
        id="Heading">
        <h1 className="slogan">Elevate Your Ride</h1>
        <Link id='landing-page-link' className="Link" to="/shop"><button  id="landing-page-button"> Shop all</button>
        </Link>
      </motion.div>
      <Featured/>
      <Footer/>
    </div>
  );
}

export default Home;
