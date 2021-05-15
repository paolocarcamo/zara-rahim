import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import navbarlogo from './images/navbarlogo.png';

function Navbar() {
  const [show, setShow] = useState(false);

  const showNavbar = () => {
    if (window.scrollY > 540) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', showNavbar);
    return () => {
      window.removeEventListener('scroll', showNavbar);
    };
  }, []);

  return (
    <>
      <div className={show ? 'navbar show-navbar' : 'navbar hide-navbar'}>
        <div className='navbar-container container'>
          <Link
            to='zara-section'
            className='navbar-logo-container'
            smooth={true}
          >
            <img src={navbarlogo} alt='navbar-logo' className='navbar-logo' />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
