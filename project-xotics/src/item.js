import './item.css';
import plate from './assets/corvette-plate.svg'
import { Link } from 'react-router-dom';
import './styles.css';

function Item() {
  return (

    <Link className="Link"  to="/corvette-plate">

        <div className='item-container'>
            <img src={plate} alt="A license plate frame"/>
            <div className='item-header'>
                <h3 className='item-name'>Grand Sport Forged Carbon Fiber License Plate Frame</h3>
                <span>$30.00</span>
                <div className='button-container'>
                    <button className='second-button'> Add to cart</button>
                </div>
            </div>
        </div>

    </Link>

  );
}

export default Item;
