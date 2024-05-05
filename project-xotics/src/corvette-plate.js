import './corvette-plate.css';
import plate from './assets/corvette-frame-1.jpg';
import plate2 from './assets/corvette-frame-2.jpg';
import Nav from './Nav';
import Footer from './footer';
import Carousel from './Carousel';
import ShareButton from './ShareButton';
import './styles.css'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

function CorvettePlate() {
    const images = [
        plate,
        plate2,
        // Add more image URLs as needed
      ];

      const { ref, inView } = useInView({
        threshold: 0.5, // Set the threshold to 0.5 for when to trigger the animation
        triggerOnce: false, // Ensure the animation only triggers once
      });

  return (
    
    <div >
        <Nav/>
        
        <div className='corvette-plate-container'>
        <Carousel  id="image" images={images} /> 

            <motion.div 
              initial={{  opacity: 0 }}
              animate={{ opacity: 1  }} // Animate opacity based on inView status
              transition={{ duration: 2 }} // Animation duration
                className='corvette-plate-text'>
                <motion.h2
                     initial={{ x: '5vw', opacity: 0 }}
                     animate={{ x: 0 , opacity: 1 }} // Animate opacity based on inView status
                     transition={{ duration: 1 }} 
                    >Hydro Dipped Forged Carbon Fiber License Plate Frame</motion.h2>
                <span className='price'>$35.00</span>

                <div className='buttons'>
                    <a id="view" href='https://buy.stripe.com/3cs8zieWfa4v4JG3cd' >
                        <button className='add-to-cart'> Buy it Now</button></a>
                </div>
            <p id="description">
                Upgrade your car's aesthetics with our Grand Sport Forged Carbon Fiber License Plate Frame. 
                Crafted from premium-grade forged carbon fiber, this frame combines lightweight construction 
                with unmatched durability, making it a sleek and long-lasting addition to your whip. 🏎️ 💨
            </p>
            </motion.div>
        </div>
        <Footer/>
    </div>

  );
}

export default CorvettePlate;
