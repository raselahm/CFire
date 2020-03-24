import React, { Component } from "react";
import {Link} from 'react-router-dom'
import "./Navbar.css"


export default class Navbar extends React.Component {

    render(){

        return(
        <div id="row navbar" className="navbar">
            <ul id="side-menu-items">
                <Link to = '/Homepage'><li className="nav-element">
                    Home
                </li></Link>
                <Link to = '/MessagePage'><li className="nav-element">
                    Messages
                </li></Link>
                <Link to = '/ProfilePage'><li className="nav-element">
                Profile
                </li></Link>
                <Link to = '/loginPage'><li className="nav-element">
                Log Out
                </li></Link>
                <Link to = '/Styleguide'><li className="nav-element">
                Style Guide
                </li></Link>
            </ul>
        </div>
        );
            }

}