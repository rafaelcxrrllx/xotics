import './footer.css';
import instagram from './assets/instagram.svg';
import logo from './assets/logo-vector.svg'
import { inView, motion } from 'framer-motion';
import React, { useRef } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


function Footer() {

  const { ref, inView } = useInView({
    threshold: 0.5, // Set the threshold to 0.5 for when to trigger the animation
    triggerOnce: false, // Ensure the animation only triggers once
  });

  const scrollRef = useRef(null)

  return (

    <footer>
      <motion.div
         ref={ref}
         initial={{ y: '5vw', opacity: 0 }}
         animate={{ y: inView ? 0 : '5vw' , opacity: inView ? 1 : 0 }} // Animate opacity based on inView status
         transition={{ duration: 1 }}>
      <div ref={scrollRef}id="footer-header">
      
      <div className='logo-img'>
        <img src={logo} alt="logo of Xotic Dip"/>
      </div>
        <h2>Stay Xotic</h2>
        <h4>Be the first to know about new collections and exclusive offers.</h4>

      </div>

      <div className='icon-instagram'>

        <a href='https://www.instagram.com/xotic_dip/'><img src={instagram} alt='Instagram Logo'/></a>

      </div>
      
      <p id="copyright">
        © 2024 Xotic Dip Powered by <a href='https://rafaelcxrrllx.github.io/trinitys.world/'>Trinity</a>
      </p>
      </motion.div>
    </footer>

  );
}

export default Footer;
