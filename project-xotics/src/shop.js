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
        <div className='shop-header'>    
            <motion.h2 
              initial={{ y: '-1vw', opacity: 0 }} // Initial opacity set to 0
              animate={{ y: 0, opacity: 1 }} // Animate opacity to 1
              transition={{ duration: 1 }} // Animation duration
              className='header'>Shop</motion.h2>
        </div>
        <motion.div
        initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
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
