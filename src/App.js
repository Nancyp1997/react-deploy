import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
// import SignUp  from './components/pages/SignUp';
import Contact from './components/pages/Contact';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/projects" exact component={Products} />
        
        <Route path="/contact" exact component={Contact} />
        {/* <Route path="/sign-up" exact component={SignUp} /> */}
        <Route path="/facedetection" component={() => { 
            window.location.href = 'https://github.com/Nancyp1997/ComputerVisionProjects'; 
            return null;
          }}
        />
        <Route path="/facerecognition" component={() => { 
            window.location.href = 'https://github.com/Nancyp1997/ComputerVisionProjects'; 
            return null;
          }}
        />
        <Route path="/chatapp" component={() => { 
            window.location.href = 'https://chat-app-nodejs-npitta.herokuapp.com/'; 
            return null;
          }}
        />
        <Route path="/airlines" component={() => { 
            window.location.href = 'https://github.com/Nancyp1997/nancy_airlines'; 
            return null;
          }}
        />
        <Route path="/weatherapp" component={() => { 
            window.location.href = 'https://nancy-weather-app.herokuapp.com/'; 
            return null;
          }}
        />

        <Route path="/instagram" component={() => { 
            window.location.href = 'https://www.instagram.com/nancyandbirdies21/'; 
            return null;
          }}
        />
        <Route path="/github" component={() => { 
            window.location.href = 'https://github.com/Nancyp1997'; 
            return null;
          }}
        />
        <Route path="/linkedin" component={() => { 
            window.location.href = 'https://www.linkedin.com/in/pittanancy1997/'; 
            return null;
          }}
        />
        <Route path="/gmail" component={() => {
          
          
          return null;
        }} />
        <Route path="/resume" component={() => {
          window.open ( '/a10.pdf','blank');
          window.location.href="/";
          return null;
        }} />
      </Switch>
    </Router>
     
    </>

  );
}

export default App;
