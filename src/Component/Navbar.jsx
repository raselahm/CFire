import React, { Component } from "react";
import {withRouter} from 'react-router-dom'
import "./Navbar.css"


 class Navbar extends Component {

    toHome = e =>{
        this.props.history.push('/Homepage');
    }

    toMessages = e =>{
        this.props.history.push('/MessagesPage');
    }

    toProfile = e =>{
        this.props.history.push('/Profile');
    }

    logout = e =>{
        fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/SocialAuth.php",{
            method: "post",
            body: JSON.stringify({
                action: "logout",
                username: "jewanjef@buffalo.edu", 
                session_token: sessionStorage.getItem("token")
            })
        });

        this.props.history.push('/')

    }

    render(){

        return(
        <div id="row navbar" className="navbar">
            <ul id="navItems">
                <button onClick = {this.toHome} className="nav-element">
                    Home
                </button>
                <button onClick = {this.toMessages} className="nav-element">
                    Messages
                </button>
                <button onClick = {this.toProfile} className="nav-element">
                Profile
                </button>
                <button onClick = {this.logout} className="nav-element">
                Log Out
                </button>
            </ul>
        </div>
        );
            }

}
export default withRouter(Navbar)