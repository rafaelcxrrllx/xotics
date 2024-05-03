
import './Home.css';
import './styles.css';
import Nav from './Nav';
import hero from './assets/hero-image.svg';
import Featured from './Featured';
import Footer from './footer';
import { Link } from 'react-router-dom';
import Landing from './Landing';

function Home() {
  return (
    <div className="home-container">
      <Nav/>
      <Landing/>
      <div id="Heading">
        <h1 className="slogan">Elevate Your Ride</h1>
        <Link className="Link" to="/shop"><button  id="landing-page-button"> Shop all</button></Link>
      </div>
      <Featured/>
      <Footer/>
    </div>
  );
}

export default Home;
