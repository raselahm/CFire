import React from "react";
// import "./App.css";
import './Component/Login-Register/LoginPage.css'
import Profile from "./Component/Profile/Profile.js";
import Login from "./Component/Login-Register/Login";
import Registration from './Component/Login-Register/Registration';
import Homepage from './Component/Homepage/Homepage';
import MessagePage from './Component/Messages/MessagePage';
import OnboardingPage from './Component/Onboarding/onboarding'
import CreatePost from './Component/Homepage/CreatePost';
import Styleguide from './Component/StyleGuide/StyleGuide'
<<<<<<< Updated upstream
=======
import PostPage from "./Component/Postpage/PostPage";
>>>>>>> Stashed changes

import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';
<<<<<<< Updated upstream
import PostPage from "./Component/Postpage/PostPage";
=======
>>>>>>> Stashed changes


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false
    };
  }

  render() {

    return (
        <div className="App">
          <header className="App-header">

          </header>
          <div>
            <Router>

              <div className="mainContent">

                <Route exact path="/" component={Login}/>
                <Route path="/Registration" component={Registration}/>
                <Route path="/Homepage" component={Homepage}/>
                <Route path="/MessagePage" component={MessagePage}/>
                <Route path="/ProfilePage" component={Profile}/>
                <Route path="/Onboarding" component={OnboardingPage}/>
                <Route path="/Styleguide" component={Styleguide}/>
                <Route path="/CreatePost" component={CreatePost}/>
                <Route path="/PostPage" component={PostPage}/>
              </div>
            </Router>
          </div>

        </div>
    );
  }
}

export default App;

class Navigation extends React.Component {
  render() {

    let post = require("./Resources/post.svg");
    let friend = require("./Resources/friends.svg");
    let setting = require("./Resources/settings.svg");
    let help = require("./Resources/help.svg");
    let mainContent = React.createRef();

    return (
      <div className="App">
        <header className="App-header">
          <div id="sidenav" className="sidenav">
            <ul id="side-menu-items">
              <li className="pm admin student">
                <button
                  className="link-button"
                  onClick={e => setMenuOption("main", mainContent, e)}
                >
                  <img
                    src={post}
                    className="sidenav-icon"
                    alt="Posts"
                    title="Posts"
                  />
                </button>
              </li>
              <li className="pm admin">
                <button
                  className="link-button"
                  onClick={e => setMenuOption("friends", mainContent, e)}
                >
                  <img
                    src={friend}
                    className="sidenav-icon"
                    alt="Friends"
                    title="Friends"
                  />
                </button>
              </li>
              <li className="pm admin">
                <button
                  className="link-button"
                  onClick={e => setMenuOption("settings", mainContent, e)}
                >
                  <img
                    src={setting}
                    className="sidenav-icon"
                    alt="Settings"
                    title="Settings"
                  />
                </button>
              </li>
              <li className="pm admin">
                <button
                  className="link-button"
                  onClick={e => toggleModal(this, e)}
                >
                  <img
                    src={help}
                    className="sidenav-icon"
                    alt="Settings"
                    title="Settings"
                  />
                </button>
              </li>
            </ul>
          </div>
        </header>
      </div>
    )
  }

}

function setMenuOption(mode, maincontent, e) {
  maincontent.current.setState({
    section: mode
  });
}

function toggleModal(app) {
  app.setState({
    openModal: !app.state.openModal
  });
}