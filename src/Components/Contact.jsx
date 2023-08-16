import React from 'react';
import PropTypes from 'prop-types';

function Contact(props) {
  
  const { title, mainText, subText, services } = props;

  return (
    <div className='contact-box'>
      <div className='contact-content'>
        <h2>{title}</h2>
        <p className='main-text'>{mainText}</p>
        <ul className='services'>
          {services && services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
      <p className='sub-text'>{subText}</p>
    </div>
  );
}

Contact.propTypes = {
  title: PropTypes.string.isRequired,
  mainText: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  services: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Contact;
