import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import Introduc from './Components/Introduc';
import Project from './Components/Project';
import Contact from './Components/Contact';
import "./Components/Homepage.css";

function App() {

  
  return (
  <> 
    <Router>
    <Navbar/>
    <div className="home-main">
    <div className="home-container">
      <Switch>
      
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/Introduction">
          <Introduc />
        </Route>
        <Route exact path="/Project">
          <Project />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
       
      </Switch>
      </div>
      </div>
    </Router>
   
 
    
    </>
  
  );
}

export default App;
