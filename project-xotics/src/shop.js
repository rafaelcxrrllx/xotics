import './shop.css';
import './styles.css'
import Nav from './Nav';
import Footer from './footer';
import Item from './item';
import { motion } from 'framer-motion';

function Shop() {
  return (
    <div>
    <Nav/>
    <div className='shop-container'>
        <div className='header'>    
            <motion.h2 
              initial={{ x: '-3vw', opacity: 0 }} // Initial opacity set to 0
              animate={{ x: 0, opacity: 1 }} // Animate opacity to 1
              transition={{ duration: 1 }} // Animation duration
              className='header'>Shop</motion.h2>
        </div>
        <motion.div
        initial={{ y: '3vw', opacity: 0 }} // Initial opacity set to 0
        animate={{ y: 0, opacity: 1 }} // Animate opacity to 1
        transition={{ duration: 1 }} // Animation duration
          >
          <Item/> 
          <Item/>
          <Item/>
          <Item/>
        </motion.div>
    </div>

    <Footer/>
    </div>
  );
}

export default Shop;
