import React from 'react';
import pic1 from '../Images/pic1.png';
import pic2 from '../Images/pic2.png';

function About() {
  return (
    <div id='about' className='about-container'>
      <div className='about-content'>
        <h1>
          Advanced AI tool to create a legal brief like a human.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac vehicula ex, sit amet tincidunt neque.
        </p>
        <button className='btn1'>
          Get started
        </button>
      </div> {/* Closing tag for .about-content */}
      
      <div className='about-content1'>
        <div className='about-text'>
          <h1>Our cool steps to find the right answer</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac vehicula ex, sit amet tincidunt neque.
          </p>
          <button className='btn1'>
            Get started
          </button>
        </div>
        <div className='img-container'>
          <img src={pic1} alt='image' className='img1' />
        </div>
      </div> 
      <div className='about-content2'>
        <div className='about-text1'>
          <h1>Automate Customer Support</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac vehicula ex, sit amet tincidunt neque.
          </p>
          <button className='btn2'>
            Get started
          </button>
        </div>
        <div className='img-container1'>
          <img src={pic2} alt='image' className='img2' />
        </div>
      </div> 
    </div>
  );
}

export default About;
