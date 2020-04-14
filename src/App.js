import React from "react";
// import "./App.css";
import './Pages/LoginPage.css'
import Profile from "./Component/Profile.js";
import Modal from "./Component/Modal.js";
import Login from "./Pages/Login";
import Registration from './Pages/Registration';
import Homepage from './Pages/Homepage';
import MessagePage from './Component/MessagePage';
import CreatePost from './Component/CreatePost';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Navbar from "./Component/Navbar";


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

              <Route exact path="/" component={Login} />
              <Route path="/Registration" component={Registration} />
              <Route path="/Homepage" component={Homepage} />
              <Route path="/MessagePage" component={MessagePage} />
              <Route path="/ProfilePage" component={Profile} />
              <Route path="/CreatePost" component={CreatePost}></Route>
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

    let post = require("./post.svg");
    let friend = require("./friends.svg");
    let setting = require("./settings.svg");
    let help = require("./help.svg");
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