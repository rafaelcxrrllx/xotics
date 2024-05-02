import { Link } from 'react-router-dom';
import './Featured.css';
import plate from './assets/corvette-plate.svg';
import Item from './item';

function Featured() {
  return (
    <div className='featured-container'>
        <div className='featured-header'>    
            <h2>Featured products</h2>
            <p>Upgrade your whip with our Forged Carbon Fiber 🏎️💨</p>
        </div>
        <Item/>
    </div>
  );
}

export default Featured;
