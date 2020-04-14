import React from "react";
import { Link, withRouter } from "react-router-dom";
import '../Pages/LoginPage.css'


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      alanmessage: "",
      sessiontoken: ""
    };
  }

  change = e => {
    this.setState({         // change function used to change the state of the Component
      [e.target.name]:    
      e.target.value});
  };

  validate = () => {
    let emailError = ""; 
    let passwordError = "";


    if(!this.state.email.includes('@')){
        emailError = 'invalid email';
    }

    if(this.state.email.length === ""){
       emailError = 'cannot leave blank'; 
    }
    
    
    if(this.state.password === ""){
        passwordError = 'cannot leave password blank';
    }
    

    if(emailError || passwordError){
        this.setState({emailError});
        this.setState({passwordError});
        return false;
    }

   return true;

}
  


  submitHandler = event => {
    //keep the form from actually submitting
    event.preventDefault();

    const isValid = this.validate();

    if(isValid){
      //make the api call to the authentication page
      fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/SocialAuth.php", {
          method: "post",
          body: JSON.stringify({
            action: "login",
            username: this.state.email,
            password: this.state.password
          })
        })
        .then(res => res.json())
        .then(
          result => {
            console.log("Testing");
            if (result.user) {
              sessionStorage.setItem("token", result.user.session_token);
              sessionStorage.setItem("user", result.user.user_id);
              sessionStorage.setItem("username", this.state.email);

              this.setState({
                sessiontoken: result.user.session_token,
                alanmessage: result.user.session_token
              });
              this.props.history.push('/Homepage');
            } else {
              sessionStorage.removeItem("token");
              sessionStorage.removeItem("user");
              this.setState({
                sessiontoken: "",
                alanmessage: result.message
              });
            }

          },
          error => {
            alert("error!");
          }
        );
        this.setState({
          email: "",
          password: ""
        });
    }
  };

  render() {
  //   if (!sessionStorage.getItem("token")) {
    console.log("Rendering login, token is " + sessionStorage.getItem("token"));
    
      return (
        <form className = "loginForm" onSubmit={this.submitHandler}>
          
            <input className = "loginInput"
            type="text" 
            name = "email"
            placeholder = "Email"
            onChange={this.change} 
            required
            />
          <br />
            <input className = "loginInput"
            type="password" 
            name = "password"
            placeholder = "Password"
            onChange={this.change} 
            required
            />
          <input className = "buttons" type="submit" value="Login"/>
          <p>{this.state.alanmessage}</p>
          <Link to = '../Registration'><button className = "buttons">Register</button></Link>
        </form>
      );
  //   } else {
  //     console.log("Returning welcome message");

  //       return(
  //           <div>
  //           <p>{this.state.alanmessage} </p>
  //           <Link to = '../Homepage'><button className = "buttons">Homepage</button></Link>
  //         </div>
  //         );
      
  //   }
  }
}

export default withRouter(LoginForm)