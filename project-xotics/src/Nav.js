import React, { useState } from 'react';
import './Nav.css';
import logo from './assets/logo.svg';
import { motion } from "framer-motion";
import bag from './assets/shopping-bag.svg';
import HamburgerMenu from './HamburgerMenu';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Shop from './shop';

function Nav() {
   
    return (


        <nav className="navbar">
       
            <div className="logo">
            <Link to="/Home"><img src={logo} alt="Logo" /></Link>
            </div>
            <ul className="nav-links">
                    
                <Link to="/Shop"><li className='links'><a href='./shop'>Shop</a></li></Link>
                <li className='links'><a href="#">Contact</a></li>
                <li className='links'><a href="#">About</a></li>
                <img id="shopping-bag" src={bag} alt="Shopping Bag" />
                <HamburgerMenu/>
            </ul>
        </nav>  

    );
}

export default Nav;
