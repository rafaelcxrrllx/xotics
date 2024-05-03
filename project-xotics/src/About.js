
import './About.css';
import './styles.css';
import Nav from './Nav';
import hero from './assets/hero-image.svg';
import logo from './assets/logo-vector.svg';
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
        <div className='text-container'>
            <h2 className='about-title' id="xotic">
                Xotic Dip
            </h2>
            <h4>est 2020</h4>
        <p className='about-text'>
            Xotic Dip is a unqiue brand based in South Los Angeles that provides hydro dipping service for car parts and accessories. 
            Xotic Dip has been the leading brand providing one of a kind pieces for all car lovers. Whether
            an old or new car, Xotic Dip can level up your car experience with a unique dip!  
        </p>
        
        </div>
        <div className='logo-img'>
        <img src={logo} alt="logo of Xotic Dip"/>
        </div>
      <Footer/>
    </div>
  );
}

export default About;
