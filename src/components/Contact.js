import React from 'react';
import './Contact.css';
import contactimage from './images/contactimage.png';
import { Link } from 'react-router-dom';
import getintouchimage from './images/getintouch.png';
import hovergetintouchimage from './images/hovergetintouch.png';

function Contact() {
  return (
    <>
      <div className='contact-container'>
        <div className='contact-image-container'>
          <img
            src={contactimage}
            alt='contact-line'
            className='contact-image'
          />
        </div>
        <div
          className='get-in-touch-container'
          data-aos='fade-up'
          data-aos-offset='10'
          data-aos-duration='1000'
        >
          <Link to='/get-in-touch' className='contact-link'>
            <img src={getintouchimage} alt='get-in-touch' />
            <img
              src={hovergetintouchimage}
              alt='hover-get-in-touch'
              className='contact-top-image'
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Contact;
