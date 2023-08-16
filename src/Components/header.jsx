import React from 'react';
import Navbar from './navbar';
import santacloth from '../Images/Santacloth.png';

function Header() {
  return (
    <div id="main">
      <Navbar />
      <div id="App">
        <div className="header-content">
          <h1 className="header-title">Unlock the magic of AI in your legal writings.</h1>
          <p className='details'>
            The platform that always you need to build and launch legal brief easily by chat without coding.
          </p>
          <div className='header-btn'>
            <input className='input' placeholder="Enter your email" />
            <button className='btn'>
              Request a Demo
            </button>
          </div>
        </div>
        <img src={santacloth} alt="logo" className='santa' />
      </div>
    </div>
  );
}

export default Header;
