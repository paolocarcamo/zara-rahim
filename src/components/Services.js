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
          <h4 id='services-header'>services</h4> <br />
          <h1>communications development</h1>
          <br />
          <h4>craft the story and tell it to the world</h4>
          <br />
          <h1>partnerships + collaborations</h1>
          <br />
          <h4>foster connections that just make sense</h4>
          <br />
          <h1>policy + advocacy</h1>
          <br />
          <h4>create and enrich concepts that have real impact</h4>
          <br />
          <h1>scenario planning</h1>
          <br />
          <h4>crisis management and tentpole moments</h4>
        </div>
      </div>
    </>
  );
}

export default Services;
