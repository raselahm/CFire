import React from "react";
import "../Profile/Profile.css";
import "../Homepage/CreatePostModal.css"
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export default class DeletePostModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        };
    }

    deletePost() {
        console.log(this.props);
        console.log(this.props.post.post_id);
        fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/postcontroller.php", {
            method: "post",
            body: JSON.stringify({
                action: "deletePosts",
                user_id: sessionStorage.getItem("user"),
                session_token: sessionStorage.getItem("token"),
                userid: sessionStorage.getItem("user"),
                postid: this.props.post.post_id
            })
        })
            .then(res => res.json())
            .then(
                result => {
                    if (result.status) {
                        console.log(result.status);
                    }
                },
                error => {
                    this.setState({
                        error
                    });
                }
            );
    }

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
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
                        <label>Are you sure you want to delete this post?</label>
                        <br/>
                        <button onClick={this.onClose}>Cancel</button>
                        <Link to = '/Homepage'><button onClick={this.deletePost()}> Submit</button></Link>
                    </div>
                    <div className="modal-input">

                    </div>
                </div>
            </div>
        );
    }
}

DeletePostModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};
