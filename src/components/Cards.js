import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import chatimg from '../images/chat3.png';
import airplane from '../images/air2.jpeg';
import fd from '../images/fd9.png';
import fr from '../images/fr2.png';
import kivihealth from '../images/KiViHealthIcon.png';
import blog from '../images/myblog.jpeg';
import weather from '../images/weather.jpeg';

function Cards() {
  return (
    <div className='cards'>
      
      <h1 className='expheading'>PROJECTS</h1>
      <br/><br/>
      <hr className='partition' />
      
      <div className='cards__container'>
        <div className='cards__wrapper'>

          <br /><br /><br />
          <ul className='cards__items'>
            <CardItem
              src={chatimg}
              text='Chat room app'
              label='NODEJS'
              path='/react-deploy/chatapp'
              description='Users can create rooms and let users to enter rooms and chat in groups.'
            />
            <CardItem
              src={blog}
              text='My Learnings Blog'
              label='DataScience, Tableau'
              path='/react-deploy/chatapp'
              description='Here I have entered all my learnings for future reference.'
            />
            <CardItem
              src={kivihealth}
              text='KiViHealth'
              label='Xcode, Swift'
              path='/react-deploy/kivihealth'
              description='The app I worked on during my internship.'
            />


            <CardItem
              src={airplane}
              text='AIRLINES APPLICATION'
              label='SPRING, JAVA'
              path='/react-deploy/airlines'
              description='Used data from external RESTful APIs to populate flight data and to manage bookings.'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src={weather}
              text='Weather app'
              label='NODEJS'
              path='/react-deploy/chatapp'
              description='Users can create rooms and let users to enter rooms and chat in groups.'
            /><CardItem
            src={chatimg}
            text='iOS App 2'
            label='Xcode, Swift'
            path='/react-deploy/chatapp'
            description='Will be updating soon.'
          />
          
            <CardItem
              src={fr}
              text='FACE RECOGNITION'
              label='COMPUTER VISION, PYTHON, OPENCV'
              path='/react-deploy/facerecognition'
              description='Works on both images and videos'
            />
            <CardItem
              src={fd}
              text='FACE DETECTION'
              label='COMPUTER VISION, PYTHON, OPENCV'
              path='/react-deploy/facedetection'
              description='Detects a face in any given image.'
            />
          </ul>
          {/* <ul className='cards__items'>
            <CardItem
              src={img_8}
              text='WEATHER APP'
              label='NODEJS'
              path='/weatherapp'
              description='Built weather app that takes location and returns weather data from external API.'
            />

          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;