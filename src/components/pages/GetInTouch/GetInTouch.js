import React from 'react';
import './GetInTouch.css';
import { Link } from 'react-router-dom';

function GetInTouch() {
  return (
    <>
      <div
        className='form-content'
        data-aos='fade-right'
        data-aos-offset='10'
        data-aos-duration='1000'
      >
        <form action=''>
          <div className='form-inputs'>
            <Link to='/' className='home-link'>
              <h1>ZARA RAHIM</h1>
            </Link>
            <label htmlFor='name' className='form-label' id='name-label'>
              name
            </label>
            <input type='text' name='name' className='form-input' />
          </div>
          <div className='form-inputs'>
            <label htmlFor='email' className='form-label' id='email-label'>
              email
            </label>
            <input type='email' name='email' className='form-input' />
          </div>
          <div className='form-inputs'>
            <label htmlFor='subject' className='form-label' id='subject-label'>
              subject
            </label>
            <input type='text' name='subject' className='form-input' />
          </div>
          <div className='form-inputs' id='text-box'>
            <label htmlFor='message' className='form-label'>
              message
            </label>
            <textarea
              name='name'
              rows='8'
              columns='50'
              className='form-input'
            />
          </div>
          <div className='button-container'>
            <button type='submit' className='form-input-btn'>
              send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default GetInTouch;
