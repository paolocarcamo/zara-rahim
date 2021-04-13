import React from 'react';
import HeroSection from '../../HeroSection';
import Testimonial from '../../Testimonial';
import Clients from '../../Clients';
import Offers from '../../Offers';
import { homeObjOne, testimonialObj, offersObj, clientsObj } from './Data';

function Home() {
  return (
    <>
      <Testimonial {...testimonialObj} />
      <HeroSection {...homeObjOne} />
      <Offers {...offersObj} />
      <Clients {...clientsObj} />
    </>
  );
}

export default Home;
