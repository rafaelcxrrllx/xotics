import './shop.css';
import Nav from './Nav';
import hero from './assets/hero-image.svg'
import Featured from './Featured';
import Footer from './footer';
import plate from './assets/corvette-plate.svg'

function Shop() {
  return (
    <div>
    <Nav/>
    <div className='shop-container'>
        <div className='left-header'>    
            <h2>Products</h2>
        </div>
        <div className='item-container'>
            <img src={plate} alt="A license plate frame"/>
            <div className='item-header'>
                <p>Grand Sport Forged Carbon Fiber License Plate Frame</p>
                <span>$30.00</span>
                <div className='button-container'>
                    <button className='second-button'> Add to cart</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Shop;
