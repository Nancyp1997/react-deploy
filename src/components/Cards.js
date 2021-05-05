import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import chatimg from '../images/chat1.png';
import airplane from '../images/air1.png';
import fd from '../images/fd9.png';
import fr from '../images/fr2.png';

function Cards() {
  return (
    <div className='cards'>
      <h1 className='expheading'>PROJECTS</h1>
      <br/><br/><br/>
      <hr className='partition' />
      
      <div className='cards__container'>
        <div className='cards__wrapper'>

          <br /><br /><br />
          <ul className='cards__items'>
            <CardItem
              src={chatimg}
              text='CHAT ROOM APP'
              label='NODEJS, BOOTSTRAP, HTML'
              path='/react-deploy/chatapp'
              description='Users can create rooms and let users to enter rooms and chat in groups.'
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
              description=''
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