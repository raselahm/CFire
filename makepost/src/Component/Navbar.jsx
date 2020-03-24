import React, { Component } from "react";
import "./Navbar.css"


export default class Navbar extends React.Component {

    render(){
        let post = require("./post.svg");
        let friend = require("./friends.svg");
        let setting = require("./settings.svg");
        let help = require("./help.svg");

        return(
        
                <div id="row navbar" className="navbar">
                <ul id="side-menu-items">
                <li className="nav-element">
                    Home
                </li>
                <li className="nav-element">
                    Another one
                </li>
                <li className="nav-element">
                Another one
                </li>
                <li className="nav-element">
                Another one
                </li>
            </ul>
                </div>
        
        );
            }

}