import React from 'react';
import Contact from './Contact';

function ContactPage() {
  const contactData = [
    {
      title: 'write legal pleadings',
      mainText: 'Get assistance from our support team.',
      subText: 'Contact us if you have any questions.',
      services: [
        'Service 1: FAQ',
        'Service 2: Live Chat',
        'Service 3: Email Support',
      ],
    },
    {
      title: 'Speed up writings',
      mainText: 'Inquire about our products and services.',
      subText: 'Contact our sales team for more information.',
      services: [
        'Service 1: Product Catalog',
        'Service 2: Pricing Details',
        'Service 3: Custom Solutions',
      ],
    },
    {
      title: 'For Attorneys',
      mainText: 'Explore collaboration opportunities.',
      subText: 'Contact us to discuss potential partnerships.',
      services: [
        'Service 1: Joint Ventures',
        'Service 2: Affiliate Program',
        'Service 3: Reseller Program',
      ],
    },
    // Add more contact data objects here
  ];

  return (
    <div className='contact-page'>
      <h1>Contact Us</h1>
      <h1>The Pioneer in AI for the Law.</h1>
      <button className="button1">Know more</button>
      <div className='contact-container'>
        {contactData.map((data, index) => (
          <Contact
            key={index}
            title={data.title}
            mainText={data.mainText}
            subText={data.subText}
            services={data.services}
          />
        ))}
      </div>
    </div>
  );
}

export default ContactPage;
