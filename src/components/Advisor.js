import React from 'react';
import './Advisor.css';
import advisorLine from './images/advisorimage.png';

function Advisor() {
  return (
    <>
      <div className='advisor-section'>
        <div className='advisor-container'>
          <div className='advisor-image-container'>
            <img
              className='advisor-image'
              src={advisorLine}
              alt='advisor-line'
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
              brands, media entities,{' '}
              <span className='advisor-desktop-break'>internet</span>{' '}
              personalities, meme-lords,{' '}
              <span className='advisor-desktop-break'>comedians,</span>{' '}
              accidental villans, aspiring{' '}
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
