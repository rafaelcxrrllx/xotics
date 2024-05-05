import './item.css';
import plate from './assets/corvette-frame-1.jpg'
import { Link } from 'react-router-dom';
import './styles.css';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
function Item() {



      const scrollRef = useRef(null)



  return (

    <Link className="Link" ref={scrollRef}  to="/corvette-plate">
       
        <motion.div 
            className='item-container'>
            <img src={plate} alt="A license plate frame"/>
            <div className='item-header'>
                <h3 className='item-name'>Hydro Dipped Forged Carbon Fiber Frame</h3>
                <span>$35.00</span>
                <div className='button-container'>
                    <button id="shop-button" className='second-button'>View</button>
                </div>
            </div>
        </motion.div>

    </Link>

  );
}

export default Item;
