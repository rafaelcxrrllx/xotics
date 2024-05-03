
import './About.css';
import './styles.css';
import Nav from './Nav';
import hero from './assets/hero-image.svg';
import Featured from './Featured';
import Footer from './footer';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="home-container">
      <Nav/>
      <div className='hero-image'>
        <img src={hero} alt='A white Corvette parked inside of a street tunnel'/>
      </div>
      <div id="Heading">
        <h1 className="slogan">Elevate Your Ride</h1>
        <Link className="Link" to="/shop"><button  id="landing-page-button"> Shop all</button></Link>
      </div>
      <Featured/>
      <Footer/>
    </div>
  );
}

export default About;
