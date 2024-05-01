import './App.css';
import Nav from './Nav';
import hero from './assets/hero-image.svg'
import Featured from './Featured';

function App() {
  return (
    <div className="container">
      <Nav/>
      <div className='hero-image'>
        <img src={hero} alt='A white Corvette parked inside of a street tunnel'/>
      </div>
      <div id="Heading">
        <h1 id="header">Elevate Your Ride</h1>
        <button className='main-button'> Shop all</button>
      </div>
      <Featured/>
    </div>
  );
}

export default App;
