import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Customize.css';
import Nav from './Nav';
import Footer from './footer';
import xoticplate from './assets/frames/xotic.svg'
import black from './assets/frames/colors/red.svg'
import red from './assets/frames/colors/black.svg'
import yellow from './assets/frames/colors/yellow.svg'
import green from './assets/frames/colors/green.svg'
import white from './assets/frames/colors/white.svg'
import purple from './assets/frames/colors/purple.svg'
import blue from './assets/frames/colors/blue.svg'
import pink from './assets/frames/colors/pink.svg'

const Customize = () => {
    

  return (
    <div>
        <Nav/>
        <div  className='customize-container'>

        <div className='header'>    
                <motion.h2
                initial={{ x: '-3vw'}} // Initial opacity set to 0
                animate={{ x: 0, opacity: 1 }} // Animate opacity to 1
                transition={{ duration: 1 }} // Animation duration
                    >Customize</motion.h2>
                <motion.h4
                initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
                animate={{ y: 0, opacity: 1 }} // Animate opacity to 1
                transition={{ duration: 1}}>Create your own Xotic plate frame.</motion.h4>
            </div>
            <div  className='frame-container'>
                <img className='xotic-frame' src={xoticplate} alt="Xotic Dip themed plate frame"/>
                <div className='colors'>
                    <img src={black} alt="Xotic Dip themed plate frame"/>
                    <img src={pink} alt="Xotic Dip themed plate frame"/>
                    <img src={red} alt="Xotic Dip themed plate frame"/>
                    <img src={blue} alt="Xotic Dip themed plate frame"/>
                    <img src={purple} alt="Xotic Dip themed plate frame"/>
                    <img src={white} alt="Xotic Dip themed plate frame"/>
                    <img src={green} alt="Xotic Dip themed plate frame"/>
                    <img src={yellow} alt="Xotic Dip themed plate frame"/>
                </div>        
            </div>
        </div>
    <Footer/>
    </div>
  );
};

export default Customize;
