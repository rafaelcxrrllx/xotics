import './corvette-plate.css';
import plate from './assets/corvette-frame-1.jpg';
import plate2 from './assets/corvette-frame-2.jpg';
import Nav from './Nav';
import Footer from './footer';
import Carousel from './Carousel';
import ShareButton from './ShareButton';
import './styles.css'

function CorvettePlate() {
    const images = [
        plate,
        plate2,
        // Add more image URLs as needed
      ];

  return (
    
    <div >
        <Nav/>
        <div className='corvette-plate-container'>
        <Carousel  id="image" images={images} /> 

            <div className='corvette-plate-text'>
                <h2>Grand Sport Forged Carbon Fiber License Plate Frame</h2>
                <span className='price'>$30.00</span>

                <div className='buttons'>
                    <a id="view" href='https://buy.stripe.com/6oE3eY29t5Offok9AA' ><button className='add-to-cart'> Buy it Now</button></a>
                </div>
            <p id="description">
                Upgrade your car's aesthetics with our Grand Sport Forged Carbon Fiber License Plate Frame. 
                Crafted from premium-grade forged carbon fiber, this frame combines lightweight construction 
                with unmatched durability, making it a sleek and long-lasting addition to your whip. 🏎️ 💨
            </p>
            </div>
        </div>
        <Footer/>
    </div>

  );
}

export default CorvettePlate;
