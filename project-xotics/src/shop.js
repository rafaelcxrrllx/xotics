import './shop.css';
import Nav from './Nav';
import hero from './assets/hero-image.svg'
import Featured from './Featured';
import Footer from './footer';

function Shop() {
  return (
    <div className="container">
      <Nav/>
      <Featured/>
      <Footer/>
    </div>
  );
}

export default Shop;
