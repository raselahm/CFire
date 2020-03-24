import React from 'react'
import { Router, Link } from 'react-router-dom';

export default class LoginForm extends React.Component{ //Create Component that will house your login form
    state = {
        username: "",
        email: "", 
        password: ""
    };

    change = (e) => {
        this.setState({         // change function used to change the state of the Component
            [e.target.name]:    
            e.target.value});    // Study this syntax for JS/JSX
    };

    onSubmit = e =>{
        e.preventDefault();
        this.props.onSubmit(this.state)
        this.setState({
            //username: "",
            email: "", 
            password: ""
            }
        );
    }


    render(){       // Render function is what will get shown onto the screen 
       return( 
       <form class ="loginForm">
            
            <br/>
            <input class = "loginInput"
            name = "email"
            placeholder = "Email or Username" 
            value = {this.state.email}
            onChange = {e => this.change(e)}
            />
            <br/>
            <input class = "loginInput"
            name = "password" 
            type = "password"
            placeholder = "Password"
            value = {this.state.password}
            onChange  = {e => this.change(e)}
            />
            <br/>
            <Link to = "/Homepage"><button className = "loginButton" onClick = {
                e => this.onSubmit(e)
                }> login </button></Link>
            <Link to = "/registrationPage"><button className = "registerButton">Register</button></Link>
        </form>
       );
    }
}