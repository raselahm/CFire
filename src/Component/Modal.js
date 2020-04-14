import React from "react";
import "../Pages/LoginPage.css";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

 class Modal extends React.Component {

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };


  otpSubmit = e => {
    

    this.props.history.push('/Homepage');
  }

  render() {
    console.log("Modal Show is " + this.props.show);
    
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

            />
            <input type = "submit" className = "buttons"/>
          </form>
          </div>

          <div className = "continue">
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

  otp: PropTypes.string.isRequired

};

export default withRouter(Modal)