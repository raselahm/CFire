import React, { Component } from 'react'
import logo from '../../Resources/CFire.jpg'
import LoginForm from './LoginForm'
import './LoginPage.css'
// import {Link, } from 'react-router-dom'


export default class Login extends Component {

    onSubmit = (user) => {

        console.log("App Component recieved, ", user);
    }

    render() {
        return (
            <div className = "All">
                <LoginForm id = "loginfields" 
                    onSubmit = {user => this.onSubmit(user)}/>
                <span className = "divider"/>
                <img className = "logo" src = {logo} alt = "logo"/>
                <span className = "greeting"> Welcome to CFire!</span>
            </div>
        );
    }
}


