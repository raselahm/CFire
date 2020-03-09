import React, { Component } from "react";
import "./Navbar.css"


export default class Navbar extends React.Component {

    render(){
        let post = require("./post.svg");
        let friend = require("./friends.svg");
        let setting = require("./settings.svg");
        let help = require("./help.svg");

        return(
        <div id="navbar" className="navbar">
            <ul id="side-menu-items">
                <li className="pm admin student">
                    <button
                        className="link-button">
                        <img
                            src={post}
                            className="navbar-icon"
                            alt="Posts"
                            title="Posts"
                        />
                    </button>
                </li>
                <li className="pm admin">
                    <button
                        className="link-button"
                    >
                        <img
                            src={friend}
                            className="navbar-icon"
                            alt="Friends"
                            title="Friends"
                        />
                    </button>
                </li>
                <li className="pm admin">
                    <button
                        className="link-button"
                    >
                        <img
                            src={setting}
                            className="navbar-icon"
                            alt="Settings"
                            title="Settings"
                        />
                    </button>
                </li>
                <li className="pm admin">
                    <button
                        className="link-button"
                    >
                        <img
                            src={help}
                            className="navbar-icon"
                            alt="Settings"
                            title="Settings"
                        />
                    </button>
                </li>
            </ul>
        </div>
        );
            }

}