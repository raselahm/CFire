import React, { Component } from 'react';
import './App.css';
import './loginPage.css';
import loginPage from './loginPage';
import registrationPage from './registrationPage';
import onboardingPage from './onboarding';
import {
  HashRouter as Router, 
  Route,
  Link
} from 'react-router-dom';
import Homepage from './Homepage';
import Createpost from './Createpost'
import MessagePage from './MessagePage'
import ProfilePage from './ProfilePage';

class App extends Component {
  render(){
    return (
      <div className = "App">
            
            <Router>
              <div className="content">
                 <Route exact path="/" component={loginPage} />
                <Route path="/registrationPage" component={registrationPage} />
                <Route  path="/onboarding" component={onboardingPage} />
                <Route  path="/Homepage" component={Homepage} />
                <Route  path="/Createpost" component={Createpost} />
                <Route  path="/MessagePage" component={MessagePage} />
                <Route  path="/ProfilePage" component={ProfilePage} />
                <Route exact path="/loginPage" component={loginPage} />
              </div>
            </Router>               
        
      </div>
    );
  }
}

export default App;
