import React from 'react';
import './Clients.css';

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  shiftRight,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div
        className={
          lightBg ? 'clients__hero-section' : 'clients__hero-section darkBg'
        }
      >
        <div className='container'>
          <div
            className='row clients__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row',
            }}
          >
            <div className='col'>
              <div className='clients__hero-text-wrapper'>
                <div className='clients__top-line'>{topLine}</div>
                <h1 className='clients__heading'>{headline}</h1>
                <p
                  className={
                    lightTextDesc
                      ? 'clients__hero-subtitle'
                      : 'clients__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
              </div>
            </div>
            <div className='col'>
              <div className='clients__hero-img-wrapper'>
                <img src={img} alt={alt} className='clients__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
