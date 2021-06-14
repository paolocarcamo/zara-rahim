import React from 'react';
import './Contact.css';
import zararahimline5 from './images/contactimage.png';
// import { Link } from 'react-router-dom';
import zararahimcontact from './images/getintouch.png';
import zararahimcontacthover from './images/hovergetintouch.png';

function Contact() {
  return (
    <>
      <div className='contact-container'>
        <div className='contact-image-container'>
          <img
            src={zararahimline5}
            alt='contact-line'
            className='zara rahim line 5'
          />
        </div>
        <div
          className='get-in-touch-container'
          data-aos='fade-up'
          data-aos-offset='10'
          data-aos-duration='1000'
        >
          {/* <Link to='/get-in-touch' className='contact-link'> */}
          <a
            href='mailto:hello@zararahim.com'
            target='mailto:hello@zararahim.com'
          >
            <img
              src={zararahimcontact}
              alt='zara rahim contact'
              onMouseOver={(e) => (e.currentTarget.src = zararahimcontacthover)}
              onMouseOut={(e) => (e.currentTarget.src = zararahimcontact)}
            />
          </a>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
}

export default Contact;

//=useState
