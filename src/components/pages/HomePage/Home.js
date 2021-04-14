import React from 'react';
import Zara from '../../Zara';
import HeroSection from '../../HeroSection';
import Testimonial from '../../Testimonial';
import Clients from '../../Clients';
import Offers from '../../Offers';
import { homeObjOne, testimonialObj, offersObj, clientsObj } from './Data';

function Home() {
  return (
    <>
      <Zara />
      <Testimonial {...testimonialObj} />
      <HeroSection {...homeObjOne} />
      <Offers {...offersObj} />
      <Clients {...clientsObj} />
    </>
  );
}

export default Home;
