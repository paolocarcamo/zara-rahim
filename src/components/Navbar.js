import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
  const [show, setShow] = useState(false);

  const showNavbar = () => {
    if (window.scrollY > 0) {
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
          <Link to='zara-wrapper' className='navbar-logo' smooth={true}>
            ZARA RAHIM
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
