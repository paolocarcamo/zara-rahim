import React from 'react';
import Zara from '../../Zara';
import Testimonial from '../../Testimonial';
import Clients from '../../Clients';
import Advisor from '../../Advisor';
import Expertise from '../../Expertise';
import Services from '../../Services';
import Contact from '../../Contact';

function Home() {
  return (
    <>
      <Zara />
      <Testimonial />
      <Advisor />
      <Expertise />
      <Services />
      <Clients />
      <Contact />
    </>
  );
}

export default Home;
