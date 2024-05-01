import './Featured.css';
import plate from './assets/corvette-plate.svg';

function Featured() {
  return (
    <div className='Featured-container'>
        <div className='left-header'>    
            <h2>Featured products</h2>
            <p>Upgrade your whip with our Forged Carbon Fiber 🏎️💨</p>
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

  );
}

export default Featured;
