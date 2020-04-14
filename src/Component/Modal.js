import React from "react";
import "../Pages/LoginPage.css";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

 class Modal extends React.Component {
  state = {
    email: "",
    otp: "",
    password: ""
  }

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };


  onChange = (e) => {
    this.setState({         // change function used to change the state of the Component
        [e.target.name]:    
        e.target.value});    // Study this syntax for JS/JSX
};

  otpSubmit = e => { 
    

    fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/SocialAuth.php",{
                method: "post",
                body: JSON.stringify({
  
                    action:"setpassword",
                  
                    email_addr:this.props.email,
                  
                    token: this.state.otp,
                  
                    newpassword:this.props.password,
                  
                    confirmpassword:this.props.password
                  
                  })
            })
            .then(res => res.json)
            .then(

            );

    fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/SocialAuth.php",{
      method: "post",
      body: JSON.stringify({

          action:"login",
          username:this.props.email,
          password: this.props.password
        
        })
  })
    this.props.history.push('/Homepage');
  }

  render() {
    console.log("Modal Show is " + this.props.show);
    if (!this.props.show) {
      return null;
    }
    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={this.onClose}>
            &times;
          </span>
          <div className = "modalInput">
            <span>
            We sent You a code in your email! <br/>
            Please enter the code here:
            </span>
            <br/>
            <br/>
            <form onSubmit = {this.otpSubmit}>
            <input 
              className = "otpInput" 
              name = "otp"
              type = "text"
              placeholder = "One-Time Password"
              onChange = {this.onChange}
            />
            <input type = "submit" className = "buttons"/>
          </form>
          </div>
          <div id="modalcontent">{this.props.children}</div>
        </div>
      </div>
    );
  }
}


Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default withRouter(Modal)