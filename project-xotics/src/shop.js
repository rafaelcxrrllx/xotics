import './shop.css';
import './styles.css'
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
            <h2 className='header'>Shop</h2>
        </div>
        <Item/> 
        <Item/>
        <Item/>
        <Item/>
    </div>

    <Footer/>
    </div>
  );
}

export default Shop;
