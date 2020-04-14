import React from "react";
import "./Profile.css";
import Navbar from "./Navbar";
import ProfileHeader from "./ProfileHeader";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      firstname: "",
      lastname: "",
      favoritecolor: "",
      responseMessage: ""
    };
  }

  fieldChangeHandler(field, e) {
    console.log("field change");
    this.setState({
      [field]: e.target.value
    });
  }

  prefChangeHandler(field, e) {
    console.log("pref field change " + field);
    console.log(this.state.favoirtecolor);
    const prefs1 = JSON.parse(JSON.stringify(this.state.favoritecolor));
    console.log(prefs1);
    prefs1.pref_value = e.target.value;
    console.log(prefs1);

    this.setState({
      [field]: prefs1
    });
  }

  componentDidMount() {
    //make the api call to the user API to get the user with all of their attached preferences
    fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/usercontroller.php", {
      method: "post",
      body: JSON.stringify({
        action: "getCompleteUsers",
        userid: this.props.userid
      })
    })
      .then(res => res.json())
      .then(
        result => {
          if (result.users) {
            console.log(result.users);
            let favoritecolor = "";

            // read the user preferences and convert to an associative array for reference

            result.users[0]["user_prefs"].forEach(function(pref) {
              if (pref.pref_name === "FavoriteColor") {
                favoritecolor = pref;
              }
            });

            console.log(favoritecolor);

            this.setState({
              // IMPORTANT!  You need to guard against any of these values being null.  If they are, it will
              // try and make the form component uncontrolled, which plays havoc with react
              username: result.users[0].username || "",
              firstname: result.users[0].first_name || "",
              lastname: result.users[0].last_name || "",
              favoritecolor: favoritecolor
            });
          }
        },
        error => {
          alert("error!");
        }
      );
  }

  submitHandler = event => {
    //keep the form from actually submitting
    event.preventDefault();

    //make the api call to the user controller
    fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/usercontroller.php", {
      method: "post",
      body: JSON.stringify({
        action: "addOrEditUsers",
        username: this.state.username,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        user_id: sessionStorage.getItem("user"),
        session_token: sessionStorage.getItem("token"),
        mode: "ignorenull"
      })
    })
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            responseMessage: result.Status
          });
        },
        error => {
          alert("error!");
        }
      );

    //make the api call to the user prefs controller
    fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/upcontroller.php", {
      method: "post",
      body: JSON.stringify({
        action: "addOrEditUserPrefs",
        prefname: "FavoriteColor",
        prefvalue: this.state.favoritecolor.pref_value,
        prefid: this.state.favoritecolor.pref_id,
        user_id: sessionStorage.getItem("user"),
        session_token: sessionStorage.getItem("token")
      })
    })
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            responseMessage: result.Status
          });
        },
        error => {
          alert("error!");
        }
      );
  };

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
            <button className="profile-button">Website</button>
            <button className="profile-button">Resume</button>
            <button className="profile-button">LinkedIn</button>
          </ul>
        </div>
        <h1 className="profile-page-skill-label">Programing Languages</h1>
      </div>
    );
  }
}
