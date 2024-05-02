import React, { useState } from 'react';
import './HamburgerMenu.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>
      <ul className={`menu ${isOpen ? 'open' : ''}`}>
        <Link className="Link"  to="/Shop"><li><a href='./shop'>Shop</a></li></Link>
        <Link className="Link"  to="/Contact"><li><a href='./shop'>Contact</a></li></Link>
        <Link  className="Link"  to="/About"><li><a href='./shop'>About</a></li></Link>
      </ul>
    </div>

  );
}

export default HamburgerMenu;
