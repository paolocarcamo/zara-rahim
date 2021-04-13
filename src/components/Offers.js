import React from 'react';
import './Offers.css';

function Services({ topLine, headline, finePrint }) {
  return (
    <>
      <div className='offers'>
        <div className='offers-container'>
          <div className='offers-row'>
            <div className='offers-wrapper'>
              <div className='offers__top-line'>{topLine}</div>
              <h1 className='offers-heading'>{headline}</h1>
              <p>{finePrint}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
