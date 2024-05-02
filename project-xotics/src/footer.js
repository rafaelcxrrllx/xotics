import './footer.css';
import instagram from './assets/instagram.svg';

function Footer() {
  return (

    <footer>
      <div id="footer-header">
        <h2>Stay Exotic</h2>
        <h4>Be the first to know about new collections and exclusive offers.</h4>
      </div>
      <div className='icon-instagram'>
        <a href='https://www.instagram.com/xotic_dip/'><img src={instagram} alt='Instagram Logo'/></a>
      </div>
      <p id="copyright">
        © 2024 Xotic Dip Powered by <a href='https://rafaelcxrrllx.github.io/trinitys.world/'>Trinity</a>
      </p>
    </footer>
    
  );
}

export default Footer;
