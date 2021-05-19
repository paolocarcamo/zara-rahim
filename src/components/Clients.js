import React from 'react';
import './Clients.css';
import clientsLine from './images/clientsimage.png';
import obamapicture from './images/Obama.jpg';
import hillarypicture from './images/Hillary.jpg';
import atwofourpicture from './images/A24.jpeg';
import mariahpicture from './images/Mariah.jpg';
import netflixpicture from './images/Netflix.png';

function Clients() {
  return (
    <>
      <div className='clients-container'>
        <div className='client-image-container'>
          <img
            src={clientsLine}
            alt='client-line'
            className='client-line-image'
          />
        </div>
        <div
          className='client-list-container'
          data-aos='fade-right'
          data-aos-offset='200'
          data-aos-duration='1000'
        >
          <h3>clients</h3>
          <div className='client-list'>
            <h1 className='previous-clients'>
              <span id='obama'>barack obama</span>
              <img
                src={obamapicture}
                alt=''
                id='obama'
                className='hidden-client-image'
              />
            </h1>
            <br />
            <h1 className='previous-clients' id='hillary'>
              <span id='hillary-span'>hillary for america</span>
              <img
                src={hillarypicture}
                alt=''
                className='hidden-client-image'
              />
            </h1>
            <br />
            <h1 className='previous-clients'>
              <span id='a-two-four'>a24</span>
              <img
                src={atwofourpicture}
                alt=''
                className='hidden-client-image'
              />
            </h1>
            <br />
            <h1 className='previous-clients'>
              <span id='mariah'>mariah carey</span>
              <img src={mariahpicture} alt='' className='hidden-client-image' />
            </h1>
            <br />
            <h1 className='previous-clients'>
              <span id='netflix'>netflix</span>
              <img
                src={netflixpicture}
                alt=''
                className='hidden-client-image'
              />
            </h1>
            <br />
            <h1 className='previous-clients'>
              <span id='netflix'>slow factory</span>
              <img
                src={netflixpicture}
                alt=''
                className='hidden-client-image'
              />
            </h1>
            <br />
            <h1 className='previous-clients'>
              <span id='vogue'>vogue magazine</span>
              <img
                src='https://assets.vogue.com/photos/593ef4c38ba2821cdbcb8fc8/master/w_2207,h_3000,c_limit/08-zendaya-coleman-vogue-july-2017.jpg'
                alt=''
                className='hidden-client-image'
              />
            </h1>
            <br />
            <h1 className='previous-clients'>
              <span id='uber'>uber</span>
              <img
                src='https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/022017/untitled-1_140.jpg?itok=1oBwROXU'
                alt=''
                className='hidden-client-image'
              />
            </h1>
            <br />
          </div>
          <h3 id='and-more'>and more</h3>
        </div>
      </div>
    </>
  );
}

export default Clients;

// Tighter line height
// Client list font weight
// Fix form label weights
