import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import img1 from '../images/two.jpg';


function shit(){
  //window.location.href='/react-deploy/resume';
  window.open ( '/react-deploy/a10.pdf');
          window.location.href="/react-deploy";
  return;
}


function HeroSection() {
 
  return (
  <div className='boss'>
    <div className='hero-container'>
      {/* <video src='/videos/giffy.gif' autoPlay loop muted /> */}
      <h1> Hey, I'm Nancy.</h1>
      <p>As a master's student in Computer Science at UIC, I love to work on revolutionary technologies. My areas of interest are Data Visualisation, Computer Vision and app development. I am an ardent learner and I have worked for 3 years as a software engineer. I enjoy turning complex problems into simple and intuitive solutions. When I am not working, you can find me playing with birds.</p>
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