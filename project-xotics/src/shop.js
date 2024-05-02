import './shop.css';
import Nav from './Nav';
import Footer from './footer';
import plate from './assets/corvette-plate.svg'
import { Link } from 'react-router-dom';

function Shop() {
  return (
    <div>
    <Nav/>
    <div className='shop-container'>
        <div className='left-header'>    
            <h2>Shop</h2>
        </div>
        <Link className="Link"  to="/corvette-plate">
            <div className='item-container'>
                <img src={plate} alt="A license plate frame"/>
                <div className='item-header'>
                    <h3>Grand Sport Forged Carbon Fiber License Plate Frame</h3>
                    <span>$30.00</span>
                    <div className='button-container'>
                        <button className='second-button'> Add to cart</button>
                    </div>
                </div>
            </div>
        </Link>
    </div>
    <Footer/>
    </div>
  );
}

export default Shop;
