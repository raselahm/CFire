import React from "react";
import "./Profile.css";
import {Link} from 'react-router-dom';

export default class ProfileHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          username: "",
          firstname: "",
          lastname: "",
          favoritecolor: "",
          responseMessage: "",
          user_id: sessionStorage.getItem("user")
        };
      }

    componentDidMount() {
        this.loadPictures();
    }

    getusername(){
        fetch("http://stark.cse.buffalo.edu//cse410/blackhole/api/usercontroller.php", {
            method: "post",
            body: JSON.stringify({
                  action: "getUsers",
                  userid: this.state.user_id
            })
          })
    }

    loadPictures() {
        fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/uacontroller.php", {
            method: "post",
            body: JSON.stringify({
                user_id: this.state.userid,
                action: "getUserArtifacts",
                artifacttype: "",
                artifactcategory: "profilePicture"
            })
        })

            .then(res => res.json())
            .then(
                result => {
                    if (result.userArtifacts) {
                        this.setState({
                            isLoaded: true,
                            picture: result.userArtifacts
                        });
                    }
                },
                error => {
                    this.setState({
                        isLoaded: false,

                    });
                }
            );
    }


    render() {
        this.loadPictures();
        const { error, isLoaded, picture } = this.state;

        if (!isLoaded) {
            return (
                
                <div className="profile-container">
                    <div className="profile-header">
                        <span class="profile-pic"></span>
                        <div className="profile-name">
                            <h1>{this.state.user_id}</h1>
                            <div className="profile-buttons">
                                <button className="profile-button">Follow</button>
                                <Link to = '/MessagePage'><button className="profile-button">Message</button></Link>
                            </div>
                        </div>

                    </div>
                    <div ><nav>
                        <ul className="profile-labels">

                            <li className="profile-tabs">Profile</li>
                            <li className="profile-tabs">Groups</li>
                            <li className="profile-tabs">Projects</li>

                        </ul>
                    </nav>
                    </div>
                    <span className="profile-divider"> </span>

                </div>
            );

        } else { return (<div>LOADED</div>); }

    }
}
