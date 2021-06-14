import React from 'react';
import './Advisor.css';
import zararahimline2 from './images/advisorimage.png';

function Advisor() {
  return (
    <>
      <div className='advisor-section'>
        <div className='advisor-container'>
          <div className='advisor-image-container'>
            <img
              className='advisor-image'
              src={zararahimline2}
              alt='zara rahim line 2'
            />
          </div>
          <div className='description-container'>
            <h1
              className='advisor-description'
              data-aos='fade-up'
              data-aos-offset='10'
              data-aos-duration='1000'
            >
              zara rahim is a strategic advisor{' '}
              <span className='advisor-desktop-break'>to</span> business
              leaders, startups,{' '}
              <span className='advisor-desktop-break'>artists,</span> musicians,
              brands, internet{' '}
              <span className='advisor-desktop-break'>personalities, </span>
              media entities, comedians,{' '}
              <span className='advisor-desktop-break'>athletes,</span>{' '}
              accidental villains, aspiring{' '}
              <span className='advisor-desktop-break'>heroes,</span> underdogs,
              and friends.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Advisor;
