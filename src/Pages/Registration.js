
import React, { Component } from 'react';
import './LoginPage.css';
// import Form from '../Component/registerForm'
import logo from '../Resources/CFire.jpg'
import Modal from '../Component/Modal'
import {
  BrowserRouter as Router, 
  Route,
  Link
} from 'react-router-dom';


export default class Registration extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openModal: false

    };
  }


  onSubmit = fields => {
    console.log("App Component recieved, ", fields);
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
        <Modal show={this.state.openModal} onClose={e => toggleModal(this)}/>

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
      firstName: "",
      lastName: "",
      username: "",
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


  addInfo = e =>{
      fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/SocialAuth.php", {
      method: "post",
          body: {
              action: "addOrEditUsers"
              
          
          }
      });
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

                  username: this.state.email,
                  password: this.state.password

              })
          })
          .then(res => res.json())
          .then(

          );


          // fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/SocialAuth.php",{
          //     method: "post",
          //     body: JSON.stringify({

          //         "action":"setpassword",
                
          //         "email_addr":this.state.email,
                
          //         "token":"<otp from email in step 1",
                
          //         "newpassword":this.state.password,
                
          //         "confirmpassword":this.state.confirmPassword
                
          //       })
          // })


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

     <form className = "loginForm" onSubmit = {this.onSubmit}>
          { 

          <input 
          className = "loginInput"
          name = "firstName"
          placeholder = "First Name" 
          value = {this.state.firstName}
          // onChange function allows you to change the state of the component
          // Similar to lambda function in java for syntax
          onChange = {e => this.change(e)}
          required

          /> }

          <br/>
          <input 
          className = "loginInput"
          name = "lastName"
          placeholder = "Last Name" 
          value = {this.state.lastName}
          // onChange function allows you to change the state of the component
          // Similar to lambda function in java for syntax
          onChange = {e => this.change(e)}
          required
          /> 
          <br/>
          <input type = "text"
          className = "loginInput"
          name = "username"
          placeholder = "Username" 
          value = {this.state.username}
          // onChange function allows you to change the state of the component
          // Similar to lambda function in java for syntax
          onChange = {e => this.change(e)}
          required
          /> 
          <br/>
          <div style = {{fontSize:8, color: "red"}}>
             {this.state.usernameError}
          </div>
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

          <input type = "submit" 

          className = "buttons" 
          value = "Register"/>
          
         
      </form>
     );
  }

}

