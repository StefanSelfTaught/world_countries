import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className='container'>
        <h2>Where in the world?</h2>
        <p>
          <FontAwesomeIcon icon={faMoon} className='iconMoon' transform={{ rotate: -20 }} /> Dark Mode
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
