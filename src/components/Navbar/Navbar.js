import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className='container'>
        <h2>Where in the world?</h2>
        <p>
          <i className='far fa-moon' /> Dark Mode
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
