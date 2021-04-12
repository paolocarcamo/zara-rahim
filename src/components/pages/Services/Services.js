import React from 'react';
import HeroSection from '../../HeroSection';
import { servicesObj } from './Data';

function Services() {
  return (
    <>
      <HeroSection {...servicesObj} />
    </>
  );
}

export default Services;
