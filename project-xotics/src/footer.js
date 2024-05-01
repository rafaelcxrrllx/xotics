import './footer.css';
import instagram from './assets/instagram.svg';

function Footer() {
  return (
    <footer>
      <div id="footer-header">
        <h2>Stay Exotic</h2>
        <h4>Be the first to know about new collections and exclusive offers.</h4>
      </div>
      <div className='icon-image'>
        <img src={instagram} alt='Instagram Logo'/>
      </div>
      <p id="copyright">© 2024 Xotic Dip Powered by Trinity</p>
    </footer>
  );
}

export default Footer;
