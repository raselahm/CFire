import React from "react";
import "../Profile.css";

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      user_id: ""
    };
  }

  render() {
    return (
      <div className="profile-page-container">
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