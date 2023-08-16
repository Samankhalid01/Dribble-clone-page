import React from 'react';
import Pricing from './Pricing';

function PricingPage() {
  const pricingData = [
    {
      title: 'If i could give a 7 star rating i would...',
      mainText: 'This is the main text for Box 1.',
      subText: 'Marvin MacKinney',
    
    },
    {
      title: 'Best company AI',
      mainText: 'This is the main text for Box 2.',
      subText: 'Arleny McCoy',
      features: [
        'Feature 1: Lorem ipsum',
        'Feature 2: Dolor sit amet',
        'Feature 3: Consectetur adipiscing',
      ],
    },
    {
      title: 'Must Have Tool for Creative Agency',
      mainText: 'This is the main text for Box 3.',
      subText: 'Courtney Henry',
      features: [
        'Feature 1: Lorem ipsum',
        'Feature 2: Dolor sit amet',
        'Feature 3: Consectetur adipiscing',
      ],
    },
    {
      title: 'Amazing and Efficient',
      mainText: 'This is the main text for Box 4.',
      subText: 'Jacob James',
      features: [
        'Feature 1: Lorem ipsum',
        'Feature 2: Dolor sit amet',
        'Feature 3: Consectetur adipiscing',
      ],
    },
    // Add more pricing data objects here
  ];

  return (
    <div className='pricing-container'>
      {pricingData.map((data, index) => (
        <Pricing
          key={index}
          title={data.title}
          mainText={data.mainText}
          subText={data.subText}
          features={data.features}
        />
      ))}
    </div>
  );
}

export default PricingPage;