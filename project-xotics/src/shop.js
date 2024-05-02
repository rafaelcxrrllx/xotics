import './shop.css';
import Nav from './Nav';
import Footer from './footer';
import plate from './assets/corvette-plate.svg'

function Shop() {
  return (
    <div>
    <Nav/>
    <div className='shop-container'>
        <div className='left-header'>    
            <h2>Shop</h2>
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
    <Footer/>
    </div>
  );
}

export default Shop;
