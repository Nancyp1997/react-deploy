import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

export default function Contact() {
  return (
    <>
      <br />
      <h1>CONTACT ME</h1>


      <div className='float-container1'>
        <h3>Available for hire and open to any ideas of cooperation.</h3>
        <div class='wrapper'>
          <div className='float-child1'>
            <p>LinkedIn:  </p>
            <p>Mail: </p>
            <p>Instagram: </p>
            <p>Github:  </p>
          </div>

          <div className='float-child2'>

            <a class="social-icon-link1 linkedin" target="_blank" aria-label="LinkedIn" href="/linkedin">
              <p>
                <i className='fab fa-linkedin' />
              </p>
            </a>
            <a class="social-icon-link1 mail" target="_blank" aria-label="Mail" href="mailto:nancyscarlett1997@gmail.com">
              <p>
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </p>
            </a>
            <a class="social-icon-link1 instagram" target="_blank" aria-label="Instagram" href="/instagram">
              <p>
                <i className='fab fa-instagram' />
              </p>
            </a>
            <a class="social-icon-link1 github" target="_blank" aria-label="Github" href="/github">
              <p>
                <i className='fab fa-github' />
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}