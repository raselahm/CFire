import React from "react";
import "./Profile.css";
import Navbar from "../NavBar/Navbar";
import ProfileHeader from "./ProfileHeader";
import ProfileSettings from "./ProfileSettings";
import {Link} from "react-router-dom";
import ProfilePage from "./ProfilePage";
import {withRouter} from 'react-router-dom'


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            username: "",
            user_id: "",
            followers: [],
            footer: 0,
            connectionid:"",
            isFollowing: false
        };
        this.getusername();
        this.isFollowing();
        this.getFollowers();
    }


    //API Call to get user-information from user_id, based off the session storage
    getusername() {
        fetch("http://stark.cse.buffalo.edu//cse410/blackhole/api/usercontroller.php", {
            method: "post",
            body: JSON.stringify({
                action: "getUsers",
                userid: this.props.location.profileProps.userid
            })
        }).then(res => res.json())
            .then(
                (results) => {
                    if (results.users) {
                        this.setState({
                            username: results.users[0].username
                        });
                    }
                },
                error => {
                    this.setState({
                        error
                    });
                }
            )
    }

    getFollowers() {
        fetch("http://stark.cse.buffalo.edu//cse410/blackhole/api/connectioncontroller.php", {
            method: "post",
            body: JSON.stringify({
                action: "getConnections",
                connectiontype: "Follower",
                connectiontstatus:"Following",
                connectuserid: this.props.location.profileProps.userid


            })
        }).then(res => res.json())
            .then(
                (results) => {
                    if (results.connections) {
                        this.setState({
                            followers: results.connections
                        });
                    } else {
                        this.setState({
                            followers: []
                        })
                    }
                },
                error => {
                    this.setState({
                        error
                    });
                }
            )
    }

    isFollowing() {
        fetch("http://stark.cse.buffalo.edu//cse410/blackhole/api/connectioncontroller.php", {
            method: "post",
            body: JSON.stringify({
                action: "getConnections",
                userid: sessionStorage.getItem("user"),
                connectiontype: "Follower",
                connectuserid: this.props.location.profileProps.userid


            })
        }).then(res => res.json())
            .then(
                (results) => {
                    if (results.connections && results.connections[0].connection_status === "Following") {
                        console.log(results.connections[0].connection_status);

                        this.setState({
                            isFollowing: true,
                            connectionid: results.connections[0].connection_id

                        });
                    }else if (results.connections && results.connections[0].connection_status === "unFollow") {
                        this.setState({
                            isFollowing: false
                        })
                    }
                },
                error => {
                    this.setState({
                        error
                    });
                }
            )
    }

    followUser = e => {
        e.preventDefault();
        fetch("http://stark.cse.buffalo.edu//cse410/blackhole/api/connectioncontroller.php", {
            method: "post",
            body: JSON.stringify({
                action: "addOrEditConnections",
                userid: sessionStorage.getItem("user"),
                session_token: sessionStorage.getItem("token"),
                connectuserid: this.props.location.profileProps.userid,
                user_id: sessionStorage.getItem("user"),
                connectiontype: "Follower",
                connectionstatus: "Following"


            })
        }).then(res => res.json())
            .then(
                (results) => {
                        this.setState({
                            isFollowing: true,

                        });
                    this.getFollowers();
                    this.isFollowing();
                },
                error => {
                    this.setState({
                        error
                    });
                }
            )
    }

    unFollowUser = e => {
        e.preventDefault();
        fetch("http://stark.cse.buffalo.edu//cse410/blackhole/api/connectioncontroller.php", {
            method: "post",
            body: JSON.stringify({
                action: "addOrEditConnections",
                userid: sessionStorage.getItem("user"),
                session_token: sessionStorage.getItem("token"),
                user_id: sessionStorage.getItem("user"),
                connectionstatus: "unFollow",
                connectionid: this.state.connectionid

            })
        }).then(res => res.json())
            .then(
                (results) => {
                    if (results) {
                        this.setState({
                            isFollowing: false
                        });
                        this.getFollowers();

                    }
                },
                error => {
                    this.setState({
                        error
                    });
                }
            )
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


    toProfile = () => {
        this.setState({
            footer: 0
        });
    };

    toSettings = () => {
        this.setState({
            footer: 3
        });
    };

    toFooter() {
        var temp = this.state.footer;
        if (temp === 0) {
            return (<ProfilePage/>);
        }
        if (temp === 3) {
            return (<ProfileSettings/>);
        }
    }


    displaySettings() {
        if (sessionStorage.getItem("user") === this.props.location.profileProps.userid) {
            return (
                <li className="profile-tabs" onClick={this.toSettings}>Settings</li>

            );
        } else {
            console.log("HELLO")
        }
    }

    displayFollowButton() {
        if (this.state.isFollowing) {
            return(
                <button className="profile-button-following" onClick={this.unFollowUser}>Following</button>
            )
        } else {
            return(
                <button className="profile-button" onClick={this.followUser}>Follow</button>
            )
        }

    }


    render() {
        return (
            <div className="profile-page-container">
                <Navbar/>
                <div className="profile-container">
                    <div className="profile-header">
                        <div className="profile-pic-group">
                            <span className="profile-pic"/>
                            <p>{this.state.followers.length}</p>
                        </div>
                        <div className="profile-name">
                            <h1 className="profile-name-h1">{this.state.username}</h1>
                            <div className="profile-buttons">
                                {this.displayFollowButton()}
                                <Link to='/MessagePage'>
                                    <button className="profile-button">Message</button>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div>
                        <nav>
                            <ul className="profile-labels">

                                <li className="profile-tabs" onClick={this.toProfile}>Profile</li>
                                <li className="profile-tabs">Groups</li>
                                <li className="profile-tabs">Projects</li>
                                {this.displaySettings()}

                            </ul>
                        </nav>
                    </div>
                    <span className="profile-divider"> </span>
                </div>
                {this.toFooter()}

            </div>
        );
    }
}

export default withRouter(Profile);
