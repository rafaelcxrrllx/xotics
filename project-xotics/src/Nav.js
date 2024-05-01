import React, { useState } from 'react';
import './Nav.css';
import logo from './assets/logo.svg';
import { motion } from "framer-motion";
import bag from './assets/shopping-bag.svg';
import HamburgerMenu from './HamburgerMenu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from './shop';

function Nav() {
   
    return (


        <nav className="navbar">
       
            <div className="logo">
            <img src={logo} alt="Logo" />
            </div>
            <ul className="nav-links">
                    
                <li className='links'><a>Shop</a></li>
                <li className='links'><a href="#">Contact</a></li>
                <li className='links'><a href="#">About</a></li>
                <img id="shopping-bag" src={bag} alt="Shopping Bag" />
                <HamburgerMenu/>
            </ul>
        </nav>  

    );
}

export default Nav;
