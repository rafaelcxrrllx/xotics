import './App.css';
import Nav from './Nav';
import hero from './assets/hero-image.jpg'

function App() {
  return (
    <div className="container">
      {/* <Nav/> */}
      <nav>
        
      </nav>
      <div className='hero-image'>
        <img src={hero} alt='A white Corvette parked inside of a street tunnel'/>
      </div>
      <div>
        <h1>Elevate Your Ride</h1>
        <button> Shop All</button>
      </div>
    </div>
  );
}

export default App;
