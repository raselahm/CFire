import React from "react";
import "./CreatePostModal.css";
import PropTypes from "prop-types";

export default class CreatePostModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post_text: "",
            post_title: ""
        };
    }

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };


    submitHandler = event => {
        this.onClose();
        event.preventDefault();
        fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/postcontroller.php", {
            method: "post",
            body: JSON.stringify({
                action: "addOrEditPosts",
                user_id: sessionStorage.getItem("user"),
                userid: sessionStorage.getItem("user"),
                session_token: sessionStorage.getItem("token"),
                posttext: this.state.post_text,
                posttype: "post"
                //Title Doesnt Exist
                //title: this.state.post_title

            })
        })
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        postmessage: result.Status
                    });
                },
                error => {
                    alert("error!");
                }
            );
    };


    titleHandler = event => {
        this.setState({
            post_title: event.target.value
        });
    };

    descriptionHandler = event => {
        this.setState({
            post_text: event.target.value
        });
    };


    render() {
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
                        Create Post
                    </div>
                    <div className="modal-input">
                        <textarea className="create-title" rows="1" defaultValue="Title"
                                  onChange={this.titleHandler}/>
                        <textarea className="create-description" defaultValue="Descripton"
                                  onChange={this.descriptionHandler}/>
                        <div className="button-group">
                            <button className="modal-cancel" onClick={this.onClose}>Cancel</button>
                            <button className="modal-create" onClick={this.submitHandler}>Create</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

CreatePostModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};