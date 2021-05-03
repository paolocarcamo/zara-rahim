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
          <div className='expertise-description'>
            <h1>
              zara's expertise sits at the <br />
              unique and necessary <br />
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
