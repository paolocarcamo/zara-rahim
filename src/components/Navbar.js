import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [show, setShow] = useState(false);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

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

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(true);
    } else {
      setButton(false);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#000' }}>
        <div className={show ? 'navbar' : 'navbar hide-navbar'}>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              ZARA RAHIM
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item' onClick={closeMobileMenu}>
                <Link to='/about-me' className='nav-links'>
                  About Me
                </Link>
              </li>
              <li className='nav-item' onClick={closeMobileMenu}>
                <Link to='/services' className='nav-links'>
                  Services
                </Link>
              </li>
              <li className='nav-btn' onClick={closeMobileMenu}>
                {button ? (
                  <Link to='/contact' className='btn-link'>
                    <Button buttonStyle='btn--outline'>LET'S TALK</Button>
                  </Link>
                ) : (
                  <Link
                    to='/contact'
                    className='btn-link'
                    onClick={closeMobileMenu}
                  >
                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>
                      LET'S TALK
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
