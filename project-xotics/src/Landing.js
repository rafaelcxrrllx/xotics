
import './Landing.css';
import './styles.css';
import { Link } from 'react-router-dom';
import about from './assets/about-img.jpg'
import panbefore from './assets/pan-before.svg';
import panafter from './assets/pan-after.svg';
import enginebefore from './assets/engine-before.svg';
import engineafter from './assets/engine-after.svg';
import tacoma from './assets/tacoma.svg';
import AboutCarousel from './AboutCarousel';


function Landing() {

    const images = [
        panbefore,
        panafter,
        // Add more image URLs here
      ];

      const images2 = [
        enginebefore,
        engineafter,
        // Add more image URLs here
      ];


  return (
    <div>
      <div className='about-container'>
        <img className="about-img" src={about} alt='A picture of the CEO of Xotic Dips corvette'/>
        <div className='about-text'>
        <h1 id="about-header"><span id="xotic">Dip</span> the World <span id="xotic">Xotic</span> </h1>
        <h3>
            Personalize your car with the most Xotic customs. 
        </h3>
        </div>
      </div>
      <div className='about-container'>
        <div className='about-text'>
        <h1 id="about-header"> <span id="xotic">Customize</span> your whip</h1>
        <h3>
            One of a kind customs to your car. 
        </h3>
        </div>
        <AboutCarousel images={images2}/>
      </div>
      <div className='about-container-white'>
        <img className="about-img" src={tacoma} alt='A picture of the CEO of Xotic Dips sr5'/>
        <div className='about-text-white'>
        <h1 id="about-header-white"> Keep it <span id="xotic">Classic</span> </h1>
        <h3>
            Keep your classic cars in mint condition. 
        </h3>
        </div>
      </div>
      <div className='about-container'>
        <div className='about-text'>
        <h1 id="about-header">Uniquely <span id="xotic">Xotic</span></h1>
        <h3>
            No one does it like us. Dip your car pieces today!
        </h3>
        </div>
        <AboutCarousel images={images}/>
      </div>
    </div>
    
  );
}

export default Landing;
