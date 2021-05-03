import React from 'react';
import './Contact.css';
import contactLine from './images/contactimage.png';

function Contact() {
  return (
    <>
      <div className='contact-container'>
        <div className='contact-image-container'>
          <img src={contactLine} alt='contact-line' className='contact-image' />
        </div>
        <div className='contact-text-container'>
          <h1>get in</h1>
          <br />
          <h1>touch</h1>
        </div>
      </div>
    </>
  );
}

export default Contact;
