import React from 'react';
import './Testimonial.css';
import zararahimline1 from './images/testimonialimage.png';

function Testimonial() {
  return (
    <>
      <div className='testimonial-section'>
        <div className='testimonial-container'>
          <div className='testimonial-image-container'>
            <img
              className='testimonial-image'
              src={zararahimline1}
              alt='zararahimline1'
            />
          </div>
          <div
            className='quote-container'
            data-aos='fade-up'
            data-aos-offset='10'
            data-aos-duration='1000'
          >
            <h1>
              "she <span className='testimonial-mobile-break'>wouldn't</span>{' '}
              take{''}
              <span className='testimonial-desktop-break'> no</span> for{' '}
              <span className='testimonial-mobile-break'>an</span> answer."
            </h1>
            <br />
            <p>- fran lebowitz</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
