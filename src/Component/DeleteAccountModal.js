import React from "react";
import "../CreatePostModal.css";
import PropTypes from "prop-types";
import PostingList from "./PostingList";
import Homepage from "../Pages/Homepage";

export default class DeleteAccountModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showConfirm: false
        };
    }

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };

    deleteAccount(){
        this.onClose();
        fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/usercontroller.php", {
            method: "post",
            body: JSON.stringify({
                action: "deleteUsers",
                user_id: sessionStorage.getItem("user"),
                session_token: sessionStorage.getItem("token"),
                userid: sessionStorage.getItem("user")
            })
        })
            .then(res => res.json())
            .then(
                result => {
                    console.log(result);
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
    }


    conditionalDisplay(){
        if(this.state.showConfirm){
            return (
                <div>
                    <label>Are you sure you want to delete your account?</label>
                    <br/>
                    <button onClick={() => this.deleteAccount()} > Confirm delete</button>
                    <button onClick={this.onClose}> Cancel </button>
                </div>
            )
        }else{
            return(
            <div>
                <label>Deleting your account removes you from the website with no way to undo!</label>
                <br/>
                <button onClick={() =>this.displayHandler()}> Delete Account!</button>
            </div>
            )
        }


    }

    displayHandler(){
        this.setState({
            showConfirm: !this.state.showConfirm
            })
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
                        {this.conditionalDisplay()}
                    </div>
                    <div className="modal-input">

                    </div>
                </div>
            </div>
        );
    }
}
DeleteAccountModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};