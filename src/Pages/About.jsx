import React from 'react';
import Contact from '../Components/Contact';
import Pricing from '../Components/Pricing';
import About from '../Components/About';

function About() {
  return (
    <div>
      <h2>About Us</h2>
      <p>
        Welcome to our about page! Learn more about our services and features below:
      </p>
      <About/>
      <Pricing/>
      <Contact/>
    </div>
  );
}

export default About;
