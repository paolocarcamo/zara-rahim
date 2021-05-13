import React from 'react';
import './GetInTouch.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import zaraimage from '../../images/navbarlogo.png';
import hoverzaraimage from '../../images/hovergetintouchimage.png';

function GetInTouch() {
  const [status, setStatus] = useState('send');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('wait');
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
    setStatus('sent');
    let result = await response.json();
    alert(result.status);
    setStatus('send');
    e.target.reset();
  };
  return (
    <>
      <div className='form-content'>
        <form onSubmit={handleSubmit}>
          <div className='logo-container'>
            <Link to='/' className='home-link'>
              <img src={zaraimage} alt='zara-logo' />
              <img
                src={hoverzaraimage}
                alt='hover-zara-logo'
                id='transition-zara-logo'
              />
            </Link>
          </div>
          <div
            className='inputs-container'
            data-aos='fade-right'
            data-aos-offset='10'
            data-aos-duration='1000'
          >
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
              <label
                htmlFor='subject'
                className='form-label'
                id='subject-label'
              >
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
                className='textbox-input'
              />
            </div>
            <div className='button-container'>
              <button type='submit' className='form-input-btn'>
                {status}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default GetInTouch;
