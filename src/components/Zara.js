import React from 'react';
import './Zara.css';
import { Link } from 'react-scroll';
import landingimage from './images/landingimage.png';
import hoverlandingimage from './images/hoverlandingimage.png';

function Zara() {
  return (
    <>
      <div className='zara-section'>
        <div className='landing-logo-wrapper'>
          <Link to='testimonial-section' smooth={true}>
            <img src={landingimage} alt='landing-logo' />
            <img
              src={hoverlandingimage}
              alt='landing-logo'
              id='transition-landing-logo'
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Zara;
