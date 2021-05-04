import React from 'react';
import './Contact.css';
import contactLine from './images/contactimage.png';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <>
      <div className='contact-container'>
        <div className='contact-image-container'>
          <img src={contactLine} alt='contact-line' className='contact-image' />
        </div>
        <div
          className='contact-text-container'
          data-aos='fade-up'
          data-aos-offset='10'
          data-aos-duration='1000'
        >
          <Link to='/get-in-touch' className='contact-link'>
            <h1>get in</h1>
            <br />
            <h1>touch</h1>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Contact;
