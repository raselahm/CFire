import React from 'react'
import {Link} from 'react-router-dom'

export default class RegisterForm extends React.Component{ //Create Component that will house your login form
    state = {
        firstName: "",
        lastName: "",
        username: "",
        email: "", 
        password: "",
        confirmPassword: ""
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
            firstName: "",
            lastName: "",
            username: "",
            email: "", 
            password: "",
            confirmPassword: ""
            }
        );
    }

    render(){       // Render function is what will get shown onto the screen 
       return( 
       <form class = "loginForm">
            { 
            <input 
            class = "loginInput"
            name = "firstName"
            placeholder = "First Name" 
            value = {this.state.firstName}
            // onChange function allows you to change the state of the component
            // Similar to lambda function in java for syntax
            onChange = {e => this.change(e)}
            /> }
            <br/>
            <input 
            class = "loginInput"
            name = "lastName"
            placeholder = "Last Name" 
            value = {this.state.lastName}
            // onChange function allows you to change the state of the component
            // Similar to lambda function in java for syntax
            onChange = {e => this.change(e)}
            /> 
            <br/>
            <input 
            class = "loginInput"
            name = "username"
            placeholder = "Username" 
            value = {this.state.username}
            // onChange function allows you to change the state of the component
            // Similar to lambda function in java for syntax
            onChange = {e => this.change(e)}
            /> 
            <br/>
            <input 
            class = "loginInput"
            name = "email"
            placeholder = "Email" 
            value = {this.state.email}
            onChange = {e => this.change(e)}
            />
            <br/>
            <input 
            class = "loginInput"
            name = "password" 
            type = "password"
            placeholder = "Password"
            value = {this.state.password}
            onChange  = {e => this.change(e)}
            />
            <br/>
            <input 
            class = "loginInput"
            name = "confirmPassword" 
            type = "password"
            placeholder = "Confirm Password"
            value = {this.state.confirmPassword}
            onChange  = {e => this.change(e)}
            />
            <br/>
            <Link to = '/onboarding'><button className="registerButton">Register</button></Link>
        </form>
       );
    }
}