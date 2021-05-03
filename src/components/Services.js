import React from 'react';
import './Services.css';

function Services() {
  return (
    <>
      <div className='services-container'>
        <div
          className='list-of-services'
          data-aos='fade-right'
          data-aos-offset='10'
          data-aos-duration='1000'
        >
          <h4 id='servicesHeader'>services</h4> <br />
          <h1>brand + messaging strategy</h1>
          <br />
          <h4>take project from an idea to an action plan</h4>
          <br />
          <h1>communication development</h1>
          <br />
          <h4>craft the public facing story in media</h4>
          <br />
          <h1>partnerships + collaborations</h1>
          <br />
          <h4>make connections that get projects into culture</h4>
          <br />
          <h1>policy + advocacy</h1>
          <br />
          <h4>political and social good campaign planning</h4>
          <br />
          <h1>scenario planning</h1>
          <br />
          <h4>crisis management</h4>
        </div>
      </div>
    </>
  );
}

export default Services;
