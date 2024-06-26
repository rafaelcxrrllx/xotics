import React from 'react';
import './Nav.css';
import './styles.css';

import logo from './assets/logo.jpg';
import HamburgerMenu from './HamburgerMenu';
import { Link } from 'react-router-dom';

function Nav() {

    const handleScrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // Optionally add smooth scrolling behavior
        });
      };
   
    return (

        <nav className="navbar">
       
            <div className="logo" onClick={handleScrollToTop}>
            <Link to="/Home"><img src={logo} alt="Logo" /></Link>
            </div>
            <ul className="nav-links">
                    
                <Link className="Link"  to="/Shop"><li className='links'><a href='./shop'>Shop</a></li></Link>
                <Link className='Link' to="/Customize"><li className='links'><a href='./Customize'>Customize</a></li></Link>
                <Link className="Link"  to="/Contact"><li className='links'><a href='./Contact'>Contact</a></li></Link>
                <Link className='Link' to="/About"><li className='links'><a href='./shop'>About</a></li></Link>
                <HamburgerMenu/>
            </ul>
        </nav>  
    );
}

export default Nav;
