import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo1.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="top-left-buttons">
        <Link to="/login" className="button">
          Login
        </Link>
        <Link to="/signup" className="button">
          Sign Up
        </Link>
      </div>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <ul className="menu">
        <li>
          <Link to="/" className="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="active">
            About
          </Link>
        </li>
        <li>
          <Link to="/features" className="active">
            Pricing
          </Link>
        </li>
        <li>
          <Link to="/services" className="active">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
