import './shop.css';
import Nav from './Nav';
import Footer from './footer';
import plate from './assets/corvette-plate.svg'
// import { Link } from 'react-router-dom';
import Item from './item';

function Shop() {
  return (
    <div>
    <Nav/>
    <div className='shop-container'>
        <div className='shop-header'>    
            <h2>Shop</h2>
        </div>
        <Item/> {/* Corvette Plate Frame */}
        <Item/>
    </div>

    <Footer/>
    </div>
  );
}

export default Shop;
