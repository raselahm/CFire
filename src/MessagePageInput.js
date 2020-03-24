import React from "react";
import "./MessagePage.css";
import MessagePageFriend from "./MessagePageFriend";
import MessagePageMessages from "./MessagePageMessages";

export default class MessagePageInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            userid: "UserName",
            picture: [],
            followerCount: ""

        };
    }


    render() {

        return (

            <div className="messagePageInput-container">
                <textarea className="messagePageInput-textArea" rows="4" cols="150">
                    Input your stuff here...........
                </textarea>
                <button className="messagePageInput-send">Send</button>

            </div>
        );


    }
}
