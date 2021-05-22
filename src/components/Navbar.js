import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  //Avoid appearance of any button(signup btn in this case ) on refresh
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/react-deploy' className='navbar-logo' onClick={closeMobileMenu}>
            Nancy Pitta
            {/* <i class='fab fa-typo3' /> */}
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/react-deploy' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <a href="/#workex" className='nav-links' onClick={closeMobileMenu}>
              Work Ex                
                </a>
            </li>
            <li className='nav-item'>
              <a href="/#skills" className='nav-links' onClick={closeMobileMenu}>
                Skills
              </a>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/react-deploy/projects'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/react-deploy/resume'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Resume
              </Link>
            </li>
            
            
            
            <li className='nav-item'>
              <Link
                to='/react-deploy/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;