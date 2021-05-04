import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

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
          <Link to='/' className='navbar-logo'>
            ZARA RAHIM
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
