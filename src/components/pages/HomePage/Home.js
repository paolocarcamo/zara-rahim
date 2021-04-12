import React from 'react';
import HeroSection from '../../HeroSection';
import Testimonial from '../../Testimonial';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  testimonialObj,
} from './Data';

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
      <Testimonial {...testimonialObj} />
    </>
  );
}

export default Home;
