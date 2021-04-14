import React from 'react';
import './Testimonial.css';

function Testimonial({ testimonial, quote, quotee, alt }) {
  return (
    <>
      <div className='testimonial' id='testimonial-section'>
        <div className='testimonial-container'>
          <div className='col start-quote'>
            <img className='quoteImg' src={quote} alt={alt} />
          </div>
          <div className='col testimonial-row'>
            <div className='quote-wrapper'>
              <h1 className='quoted-text'>{testimonial}</h1>
              <p>{quotee}</p>
            </div>
          </div>
          <div className='col end-quote'>
            <img className='quoteImg' src={quote} alt={alt} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
