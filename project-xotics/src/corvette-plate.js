import './corvette-plate.css';
import plate from './assets/corvette-plate.svg';
import Nav from './Nav';
import Footer from './footer';

function CorvettePlate() {
  return (
    <div >
        <Nav/>
        <div className='corvette-plate-container'>
            <img id="image" src={plate} alt="A license plate frame"/>
        
        <div className='corvette-plate-text'>
            <h2>Grand Sport Forged Carbon Fiber License Plate Frame</h2>
                <span>$30.00</span>
                <div className='buttons'>
                    <button className='second-button'> Add to cart</button>
                    <button className='main-button'> Buy it Now</button>
                </div>
            <p id="description">
            Upgrade your car's aesthetics with our Grand Sport Forged Carbon Fiber License Plate Frame. Crafted from premium-grade forged carbon fiber, this frame combines lightweight construction with unmatched durability, making it a sleek and long-lasting addition to your whip. 🏎️ 💨
            </p>
        </div>
        </div>
        <Footer/>
    </div>

  );
}

export default CorvettePlate;
