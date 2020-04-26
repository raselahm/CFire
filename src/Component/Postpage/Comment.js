import React from "react";
import Navbar from "../NavBar/Navbar";
import './PostPage.css'


export default class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            posttext: "",
            submit_text: "",
            comments: []

        };
    }

    render() {
        return (
            <div>
                {this.props.comment.post_text}
            </div>
        );
    }
}

