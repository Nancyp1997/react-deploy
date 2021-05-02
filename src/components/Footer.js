import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Find me online!
        </p>
      </section>
      
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/react-deploy' className='social-logo'>
              Nancy Pitta
            </Link>
          </div>
         
          <div className='social-icons'>
            {/* <Link
              class='social-icon-link facebook'
              to='/react-deploy'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link> */}
            <Link
              className='social-icon-link instagram'
              to='/react-deploy/instagram'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            
            <Link
              className='social-icon-link github'
              to='/react-deploy/github'
              target='_blank'
              aria-label='Github'
            >
              <i className='fab fa-github' />
            </Link>
            <Link
              className='social-icon-link linkedin'
              to='/react-deploy/linkedin'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;