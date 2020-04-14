import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import ProfileHeader from "./ProfileHeader";

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      user_id: ""
    };
    //this.fieldChangeHandler.bind(this);
  }

  render() {
    return (
      <div className="profile-page-container">
      <Navbar/>
      <ProfileHeader/>
        <div className="profile-page-skills">
          <span className="profile-page-skill-icon"></span>
          <span className="profile-page-skill-icon"></span>
          <span className="profile-page-skill-icon"></span>
          <span className="profile-page-skill-icon"></span>
          <span className="profile-page-skill-icon"></span>
          <span className="profile-page-skill-icon"></span>
        </div>
        <div className="profile-page-uploads">
          <ul className="profile-page-button-list'=">
            <button className="profile-page-upload-button">Website</button>
            <button className="profile-page-upload-button">Resume</button>
            <button className="profile-page-upload-button">LinkedIn</button>
          </ul>
        </div>
        <h1 className="profile-page-skill-label">Programing Languages</h1>
      </div>

    );
  }
}