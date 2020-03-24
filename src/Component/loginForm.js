import React from 'react'

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
       <form>
            {/* <input 
            name = "username"
            placeholder = "username" 
            value = {this.state.username}
            // onChange function allows you to change the state of the component
            // Similar to lambda function in java for syntax
            onChange = {e => this.change(e)}
            /> */}
            <br/>
            <input 
            name = "email"
            placeholder = "email" 
            value = {this.state.email}
            onChange = {e => this.change(e)}
            />
            <br/>
            <input 
            name = "password" 
            type = "password"
            placeholder = "password"
            value = {this.state.password}
            onChange  = {e => this.change(e)}
            />
            <br/>
            <button onClick = {
                e => this.onSubmit(e)
                }> login </button>
            <button onClick = {
                e =>this.onRegister(e)
            }>Register</button>
        </form>
       );
    }
}