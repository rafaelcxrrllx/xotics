import './Featured.css';
import Item from './item';

function Featured() {
  return (
    <div className='featured-container'>
        <div className='featured-header'>    
            <h2 className='header'>Featured products</h2>
            <h4>Upgrade your whip with our Forged Carbon Fiber 🏎️💨</h4>
        </div>
        <Item/>
    </div>
  );
}

export default Featured;
