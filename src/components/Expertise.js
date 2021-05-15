import React from 'react';
import './Expertise.css';
import expertiseLine from './images/expertiseimage.png';

function Expertise() {
  return (
    <>
      <div className='expertise-section'>
        <div className='expertise-container'>
          <div className='expertise-image-container'>
            <img
              className='expertise-image'
              src={expertiseLine}
              alt='expertise-line'
            />
          </div>
          <div
            className='expertise-description'
            data-aos='fade-right'
            data-aos-offset='40'
            data-aos-duration='1000'
          >
            <h1>
              zara's expertise sits at <br />
              the unique and necessary <br />
              intersection of social <br />
              impact, culture, digital <br />
              media, and policy.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Expertise;
