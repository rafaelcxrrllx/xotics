import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Customize.css';
import Nav from './Nav';
import Footer from './footer';
import xoticplate from './assets/frames/xotic.svg'
import black from './assets/frames/colors/red.svg'
import redPlate from './assets/frames/red.svg'
import blackPlate from './assets/frames/black.svg'
import purplePlate from './assets/frames/purple.svg'
import pinkPlate from './assets/frames/pink.svg'
import bluePlate from './assets/frames/blue.svg'
import whitePlate from './assets/frames/white.svg'
import greenPlate from './assets/frames/green.svg'
import yellowPlate from './assets/frames/yellow.svg'
import red from './assets/frames/colors/black.svg'
import yellow from './assets/frames/colors/yellow.svg'
import green from './assets/frames/colors/green.svg'
import white from './assets/frames/colors/white.svg'
import purple from './assets/frames/colors/purple.svg'
import blue from './assets/frames/colors/blue.svg'
import pink from './assets/frames/colors/pink.svg'

const Customize = () => {

    const [imageUrl, setImageUrl] = useState(xoticplate); // Initial image URL

    const changeRed = () => {
        // Change the image URL
        setImageUrl(redPlate);
      };
    const changePink = () => {
    // Change the image URL
    setImageUrl(pinkPlate);
    };

    const changeBlack = () => {
        // Change the image URL
        setImageUrl(blackPlate);
      };
    const changePurple = () => {
    // Change the image URL
    setImageUrl(purplePlate);
    };

    const changeBlue = () => {
        // Change the image URL
        setImageUrl(bluePlate);
        };

        const changeWhite = () => {
            // Change the image URL
            setImageUrl(whitePlate);
          };
        const changeGreen = () => {
        // Change the image URL
        setImageUrl(greenPlate);
        };
    
        const changeYellow = () => {
            // Change the image URL
            setImageUrl(yellowPlate);
            };

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
                <img className='xotic-frame' src={imageUrl} alt="Xotic Dip themed plate frame"/>
                <div className='colors'>
                    <img onClick={changeRed} src={black} alt="Xotic Dip themed plate frame"/>
                    <img onClick={changePink} src={pink} alt="Xotic Dip themed plate frame"/>
                    <img onClick={changeBlack} src={red} alt="Xotic Dip themed plate frame"/>
                    <img onClick={changeBlue} src={blue} alt="Xotic Dip themed plate frame"/>
                    <img onClick={changePurple} src={purple} alt="Xotic Dip themed plate frame"/>
                    <img onClick={changeWhite} src={white} alt="Xotic Dip themed plate frame"/>
                    <img onClick={changeGreen} src={green} alt="Xotic Dip themed plate frame"/>
                    <img onClick={changeYellow} src={yellow} alt="Xotic Dip themed plate frame"/>
                </div>        
            </div>
        </div>
    <Footer/>
    </div>
  );
};

export default Customize;
