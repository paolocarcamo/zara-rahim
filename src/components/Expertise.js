import React from 'react';
import './Expertise.css';
import zararahimline3 from './images/expertiseimage.png';

function Expertise() {
  return (
    <>
      <div className='expertise-section'>
        <div className='expertise-container'>
          <div className='expertise-image-container'>
            <img
              className='expertise-image'
              src={zararahimline3}
              alt='zara rahim line 3'
            />
          </div>
          <div
            className='expertise-description'
            data-aos='fade-right'
            data-aos-offset='40'
            data-aos-duration='1000'
          >
            <h1>
              zara's expertise sits at{' '}
              <span className='expertise-mobile-break'>the</span>
              <span className='expertise-desktop-break'> unique </span>
              intersection of{' '}
              <span className='expertise-mobile-break'>
                social
              </span> impact,{' '}
              <span className='expertise-desktop-break'>culture,</span> media,{' '}
              <span className='expertise-mobile-break'>entertainment,</span>{' '}
              communications, and{' '}
              <span className='expertise-desktop-break'>policy.</span> She{' '}
              <span className='expertise-mobile-break'>aspires</span> to elevate{' '}
              stories that{' '}
              <span className='expertise-desktop-break'>deserve</span> to{' '}
              <span className='expertise-mobile-break'>be</span> heard, shape
              how they’re{' '}
              <span className='expertise-desktop-break'>
                <span className='expertise-mobile-break'>told,</span>
              </span>{' '}
              and how they’re carried.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Expertise;
