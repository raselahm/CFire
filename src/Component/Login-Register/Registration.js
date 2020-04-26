
import React, { Component } from 'react';
import './LoginPage.css';
// import Form from '../Component/registerForm'
import logo from '../../Resources/CFire.jpg'
import Modal from './Modal'
import {
  BrowserRouter as Router, 
  Route,
  Link
} from 'react-router-dom';


export default class Registration extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      email: "",
      password: ""
    };
  }


  onSubmit = fields => {
    console.log("App Component recieved, ", fields);

    this.setState({
      email: sessionStorage.getItem("email"),
      password: sessionStorage.getItem("password")
    })
    
    toggleModal(this);
  }
  render(){
    return (
      <div className = "App">        
                     

        <RegisterForm onSubmit={fields => this.onSubmit(fields)}/>
        <span className = "divider"/>      
        <img className = "logo" src= {logo} alt="logo" />
        <span className = "greeting">Welcome to CFire!</span>
        <div>
        </div>
        <Modal show={this.state.openModal} onClose={e => toggleModal(this)}
        email = {this.state.email} password = {this.state.password}/>
      </div>
    );
  }

  
}



function toggleModal(app) {
  app.setState({
    openModal: !app.state.openModal
  });
}

class RegisterForm extends React.Component{ //Create Component that will house your login form
  state = {
      
      email: "", 
      password: "",
      confirmPassword: "",
      usernameError: "",
      emailError: "", 
      passwordError: "",
      matchError: "", 
      modalOpen: ""
  };

  change = (e) => {
      this.setState({         // change function used to change the state of the Component
          [e.target.name]:    
          e.target.value});    // Study this syntax for JS/JSX
  };


  validate = () => {
      let emailError = ""; 
      let passwordError = "";
      let usernameError = "";
      let matchError = "" ;


      if(!this.state.email.includes('@')){
          emailError = 'invalid email';
      }
      
      
      if(this.state.FNError === ""){
          passwordError = 'cannot leave password blank';
      }
      

      if(this.state.password === ""){
          usernameError = 'cannot leave username blank';
      }


      if(this.state.password !== this.state.confirmPassword){
          matchError = 'Passwords do not match'
      }


      if(emailError || passwordError || usernameError || matchError){
          this.setState({emailError});
          // this.setState({passwordError});
          this.setState({usernameError});
          this.setState({matchError});
          return false;
      }

     return true;

  }

 

// Options. No route tag.... withRouter() function


  onSubmit = e =>{
      e.preventDefault();

      const isvalid = this.validate();


      this.props.onSubmit(this.state)

      if(isvalid){

          fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/SocialAuth.php",{
              method: "post",
              body: JSON.stringify({
                  action: "register",
                  email_addr: this.state.email
              })
          })
          .then(res => res.json())
          .then(

          );


          sessionStorage.setItem("email", this.state.email);
          sessionStorage.setItem("password", this.state.password);


          this.setState({
              firstName: "",
              lastName: "",
              username: "",
              email: "", 
              password: "",
              confirmPassword: "",
              usernameError: "",
              emailError: "", 
              passwordError: "",
              matchError: ""
          })
          
      }

      this.setState({
          firstName: "",
          lastName: "",
          username: "",
          email: "", 
          password: "",
          confirmPassword: "",
          }
      );
  }

  render(){       // Render function is what will get shown onto the screen 
     return( 
     <form className = "loginForm">
           
          
          <input type = "email"
          className = "loginInput"
          name = "email"
          placeholder = "Email" 
          value = {this.state.email}
          onChange = {e => this.change(e)}
          required
          />
          <br/>
          <div style = {{fontSize:8, color: "red"}}>
             {this.state.emailError}
          </div>
          <input 
          className = "loginInput"
          name = "password" 
          type = "password"
          placeholder = "Password"
          value = {this.state.password}
          onChange  = {e => this.change(e)}
          required
          />
          <br/>
          <div style = {{fontSize:8, color: "red"}}>
             {this.state.passwordError}
          </div>
          <input 
          className = "loginInput"
          name = "confirmPassword" 
          type = "password"
          placeholder = "Confirm Password"
          value = {this.state.confirmPassword}
          onChange  = {e => this.change(e)}
          required
          />
          <br/>
          <div style = {{fontSize:8, color:  "red"}}>
             {this.state.matchError} 
          </div>
          <input  
          onClick = {this.onSubmit}
          className = "buttons" 
          value = "Register"/>
          
         
      </form>
     );
  }
}
