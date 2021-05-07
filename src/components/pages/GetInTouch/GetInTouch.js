import React from 'react';
import './GetInTouch.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function GetInTouch() {
  const [status, setStatus] = useState('Submit');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const { name, email, subject, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };
    let response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(details),
    });
    setStatus('Submit');
    let result = await response.json();
    alert(result.status);
  };
  return (
    <>
      <div
        className='form-content'
        data-aos='fade-right'
        data-aos-offset='10'
        data-aos-duration='1000'
      >
        <form onSubmit={handleSubmit}>
          <Link to='/' className='home-link'>
            <h1>ZARA RAHIM</h1>
          </Link>
          <div className='form-inputs'>
            <label htmlFor='name' className='form-label' id='name-label'>
              name
            </label>
            <input type='text' id='name' className='form-input' required />
          </div>
          <div className='form-inputs'>
            <label htmlFor='email' className='form-label' id='email-label'>
              email
            </label>
            <input type='email' id='email' className='form-input' required />
          </div>
          <div className='form-inputs'>
            <label htmlFor='subject' className='form-label' id='subject-label'>
              subject
            </label>
            <input type='text' id='subject' className='form-input' required />
          </div>
          <div className='form-inputs' id='text-box'>
            <label htmlFor='message' className='form-label'>
              message
            </label>
            <textarea
              id='message'
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
