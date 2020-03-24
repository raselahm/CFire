import React, { Component } from 'react';
import './App.css';
import './loginPage.css'
import loginPage from './loginPage';
import registrationPage from './registrationPage'
import onboardingPage from './onboarding'
import headerBar from './header';
import SearchBar from './searchBar';
import {
  BrowserRouter as Router, 
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <div className = "App">

            <Router>
              <div className="content">
                <Route exact path="/" component={loginPage} />
                <Route path="/registrationPage" component={registrationPage} />
                <Route exact path="/onboarding" component={onboardingPage} />
              </div>
            </Router>              
        
      </div>
    );
  }
}

export default App;
