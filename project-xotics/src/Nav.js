import React from 'react';
import './Nav.css';
import logo from './assets/logo.svg';
import bag from './assets/shopping-bag.svg';
import HamburgerMenu from './HamburgerMenu';
import { Link } from 'react-router-dom';

function Nav() {
   
    return (


        <nav className="navbar">
       
            <div className="logo">
            <Link to="/Home"><img src={logo} alt="Logo" /></Link>
            </div>
            <ul className="nav-links">
                    
                <Link to="/Shop"><li className='links'><a href='./shop'>Shop</a></li></Link>
                <Link to="/Contact"><li className='links'><a href='./Contact'>Contact</a></li></Link>
                <Link to="/About"><li className='links'><a href='./shop'>About</a></li></Link>
                <img id="shopping-bag" src={bag} alt="Shopping Bag" />
                <HamburgerMenu/>
            </ul>
        </nav>  

    );
}

export default Nav;
