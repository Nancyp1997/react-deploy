import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import img1 from '../images/propic.png';


function shit(){
  window.location.href='/resume';
  return;
}


function HeroSection() {

  return (
  <div className='boss'>
    <div className='hero-container'>
      {/* <video src='/videos/giffy.gif' autoPlay loop muted /> */}
      <h1> Hey, I'm Nancy.</h1>
      <br/>
      <p>I'm a software engineer and an ardent learner. I enjoy turning complex problems into simple and intuitive solutions.</p>
      <br/>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={shit}
        >
          MY RESUMÉ
        </Button>
        
      </div>
    </div>
    <img className='profilepic' src={img1} alt='Travel' />
  </div>
  );
}

export default HeroSection;