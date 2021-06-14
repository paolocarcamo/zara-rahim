import React from 'react';
import './Zara.css';
import { Link } from 'react-scroll';
import zararahimheader from './images/landingimage.png';
import zararahimheaderhover from './images/hoverlandingimage.png';

function Zara() {
  return (
    <>
      <div className='zara-section'>
        <div className='landing-logo-wrapper'>
          <Link to='testimonial-section' smooth={true}>
            <img src={zararahimheader} alt='zara rahim header' />
            <img
              src={zararahimheaderhover}
              alt='zara rahim header hover'
              id='transition-landing-logo'
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Zara;

//Transition to an onMouseOver & onMouseOut function*
