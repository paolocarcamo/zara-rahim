import React from 'react';
import HeroSection from '../../HeroSection';
import Testimonial from '../../Testimonial';
import { aboutMeObj, testimonialObj } from './Data';

function Products() {
  return (
    <>
      <HeroSection {...aboutMeObj} />
      <Testimonial {...testimonialObj} />
    </>
  );
}

export default Products;
