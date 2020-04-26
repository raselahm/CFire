import React from "react";
import "./Profile.css";
import "../Homepage/CreatePostModal.css"
import PropTypes from "prop-types";

export default class ChangeUsernameModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        };
    }

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };

    submitHandler = event => {
        this.onClose();
        event.preventDefault();
        fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/usercontroller.php", {
            method: "post",
            body: JSON.stringify({
                action: "addOrEditUsers",
                user_id: sessionStorage.getItem("user"),
                session_token: sessionStorage.getItem("token"),
                username: this.state.username,
                userid: sessionStorage.getItem("user")
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

    myChangeHandler = event => {
        this.setState(
            {
                username: event.target.value
            });
    };


    render() {
        console.log("Modal Show is " + this.props.show);
        if (!this.props.show) {
            return null;
        }
        return (
            <div className="modal">
                <div className="modal-content">
                    <div className="close-header">
                      <span className="close" onClick={this.onClose}>
                   &times;
                        </span>
                    </div>
                    <div className="changeUsername-content">
                        <label>Input new username:</label>
                        <br/>
                        <input type="text" value={this.state.username} onChange={this.myChangeHandler}/>
                        <button onClick={this.submitHandler}> Submit</button>
                    </div>
                    <div className="modal-input">

                    </div>
                </div>
            </div>
        );
    }
}

ChangeUsernameModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};
