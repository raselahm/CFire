import React from "react";
import "../Homepage/CreatePostModal.css";
import PropTypes from "prop-types";

export default class ChangePasswordModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            passwordConfirm: "",
            email: "",
            otp: "",
        };
    }

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };

    submitHandler () {
        this.onClose();
        fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/usercontroller.php", {
            method: "post",
            body: JSON.stringify({
                action: "getUsers",
                user_id: sessionStorage.getItem("user"),
                session_token: sessionStorage.getItem("token"),
                userid: sessionStorage.getItem("user")
            })
        })
            .then(res => res.json())
            .then(
                result => {
                    if(result.users){
                    this.setState({
                        email: result.users[0].email_addr,
                        otp: result.users[0].otp
                    })
                }
                },
                error => {
                    alert("error!");
                }
            );

        console.log(this.state.otp);
        fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/SocialAuth.php", {
            method: "post",
            body: JSON.stringify({
                action: "setpassword",
                email_addr: this.state.email,
                token: this.state.otp,
                newpassword: this.state.password,
                confirmpassword: this.state.passwordConfirm
            })
        })
            .then(res => res.json())
            .then(
                result => {
                    console.log(result);
                    this.setState({});
                },
                error => {
                    alert("error!");
                }
            );
    };



    newPassword = evt =>{
        this.setState(
            {
                password: evt.target.value
            }
        )
    }

    confirmNewPassword = evt =>{
        this.setState(
            {
                passwordConfirm: evt.target.value
            }
        )
    }





    render() {
        console.log("Modal Show is " + this.props.show);
        if (!this.props.show) {
            return null;
        }
        return (
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <div className="close-header">
                      <span className="close" onClick={this.onClose}>
                   &times;
                        </span>
                    </div>
                    <div>
                        Change Password
                        <br/>
                        <label>New Password:</label>
                        <input onChange={this.newPassword}/>
                        <br/>
                        <label>Confirm new password:</label>
                        <input onChange={this.confirmNewPassword}/>
                        <br/>
                        <button onClick={() => this.submitHandler()}>Submit</button>
                    </div>
                    <div className="modal-input">

                    </div>
                </div>
            </div>
        );
    }
}

ChangePasswordModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};