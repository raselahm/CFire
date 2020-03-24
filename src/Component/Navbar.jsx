import React, { Component } from "react";
import "./Navbar.css"


export default class Navbar extends React.Component {

    render(){

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