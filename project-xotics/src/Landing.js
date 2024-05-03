
import './Landing.css';
import './styles.css';
import about from './assets/about-img.jpg'
import panbefore from './assets/pan-before.jpg';
import panafter from './assets/pan-after.jpg';
import enginebefore from './assets/engine-before.jpg';
import engineafter from './assets/engine-after.jpg';
import tacoma from './assets/tacoma.jpg';
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
        <img className="about-img" src={about} alt='CEO of Xotic Dips corvette'/>
        <div className='about-text'>
        <h1 id="landing-header"><span id="xotic">Dip</span> your World <span id="xotic">Xotic</span> </h1>
        <h3>
            Personalize your car with the most Xotic customs. 
        </h3>
        </div>
      </div>
      <div className='about-container' id="reverse">
      <AboutCarousel images={images2}/>
        <div  className='about-text'>
        <h1 id="landing-header"> <span id="xotic">Customize</span> your whip</h1>
        <h3>
            One of a kind customizations to your car. 
        </h3>
        </div>
      </div>
      <div className='about-container-white'>
        <img className="about-img" src={tacoma} alt='CEO of Xotic Dips SR5'/>
        <div className='about-text-white'>
        <h1 id="landing-header-white"> Keep it <span id="xotic">Classic</span> </h1>
        <h3>
            Keep your classic in mint condition. 
        </h3>
        </div>
      </div>
      <div className='about-container-white' id="reverse">
      <AboutCarousel images={images}/>
        <div className='about-text-white'>
        <h1 id="landing-header-white">Uniquely <span id="xotic">Xotic</span></h1>
        <h3>
            No one does it like us. Dip your car pieces today!
        </h3>
        </div>
        
      </div>
    </div>
    
  );
}

export default Landing;
