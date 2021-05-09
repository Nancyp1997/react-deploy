import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ScrollToTop from './components/ScrollToTop';
import Contact from './components/pages/Contact';




function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Navbar />
          
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/react-deploy" exact component={Home} />
            <Route path="/react-deploy/services" exact component={Services} />
            <Route path="/react-deploy/projects" exact component={Products} />

            <Route path="/react-deploy/contact" exact component={Contact} />
            {/* <Route path="/sign-up" exact component={SignUp} /> */}
            <Route path="/react-deploy/facedetection" component={() => {
              window.open('https://github.com/Nancyp1997/ComputerVisionProjects');
              window.location.href = "/react-deploy/projects";
              // window.location.href = 'https://github.com/Nancyp1997/ComputerVisionProjects'; 
              return null;
            }}
            />
            <Route path="/react-deploy/facerecognition" component={() => {
              window.open('https://github.com/Nancyp1997/ComputerVisionProjects');
              window.location.href = '/react-deploy/projects';
              return null;
            }}
            />
            <Route path="/react-deploy/chatapp" component={() => {
              window.open('https://chat-app-nodejs-npitta.herokuapp.com/');
              window.location.href = '/react-deploy/projects';
              return null;
            }}
            />
            <Route path="/react-deploy/airlines" component={() => {
              window.location.href = 'https://github.com/Nancyp1997/nancy_airlines';
              return null;
            }}
            />
            <Route path="/react-deploy/weatherapp" component={() => {
              window.location.href = 'https://nancy-weather-app.herokuapp.com/';
              return null;
            }}
            />

            <Route path="/react-deploy/instagram" component={() => {
              window.location.href = 'https://www.instagram.com/nancyandbirdies21/';
              return null;
            }}
            />
            <Route path="/react-deploy/github" component={() => {
              window.location.href = 'https://github.com/Nancyp1997';
              return null;
            }}
            />
            <Route path="/react-deploy/linkedin" component={() => {
              window.location.href = 'https://www.linkedin.com/in/pittanancy1997/';
              return null;
            }}
            />
            <Route path="/react-deploy/gmail" component={() => {


              return null;
            }} />
            <Route path="/react-deploy/resume" component={() => {
              window.open('/react-deploy/a10.pdf');
              window.location.href = "/react-deploy";
              return null;
            }} />
          </Switch>
        </ScrollToTop>
      </Router>

    </>

  );
}

export default App;
