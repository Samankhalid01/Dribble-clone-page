import React from 'react';
import PropTypes from 'prop-types';
function Pricing(props) {
  const { title, mainText, subText, features } = props;

  return (
    <div className='pricing-box'>
      <div className='box-content'>
        <h2>{title}</h2>
        <p className='main-text'>{mainText}</p>
        <ul className='features'>
          {features&&features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <p className='sub-text'>{subText}</p>
    </div>
  );
}

Pricing.propTypes = {
  title: PropTypes.string.isRequired,
  mainText: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Pricing;
