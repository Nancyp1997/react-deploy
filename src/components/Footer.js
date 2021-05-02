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
            {/* <Link
              className='social-icon-link instagram'
              to='/react-deploy/instagram'
              target='_blank'
              aria-label='Instagram'
            > */}
              <a class="social-icon-link instagram" target="_blank" aria-label="Instagram" href="https://www.instagram.com/nancyandbirdies21/">
              <p>
                <i className='fab fa-instagram' />
              </p>
            </a>
            <a class="social-icon-link github" target="_blank" aria-label="Github" href="https://github.com/Nancyp1997">
              <p>
                <i className='fab fa-github' />
              </p>
            </a>
            <a class="social-icon-link linkedin" target="_blank" aria-label="LinkedIn" href="https://www.linkedin.com/in/pittanancy1997/">
              <p>
                <i className='fab fa-linkedin' />
              </p>
            </a>
            <a class="social-icon-link mail" target="_blank" aria-label="Mail" href="mailto:nancyscarlett1997@gmail.com">
              <p>
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </p>
            </a>
            {/* </Link> */}
{/*             
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
              to='https://www.linkedin.com/in/pittanancy1997/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;