import React from 'react';
import Zara from '../../Zara';
import Testimonial from '../../Testimonial';
import Clients from '../../Clients';
// import { } from './Data'; <-- import 'object' data from Data.js file (localized API)
import Advisor from '../../Advisor';
import Expertise from '../../Expertise';

function Home() {
  return (
    <>
      <Zara />
      <Testimonial />
      <Advisor />
      <Expertise />
      <Clients />
    </>
  );
}

export default Home;
