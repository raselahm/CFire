import React from "react";
import "../MessagePage.css";


export default class Message extends React.Component {
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

            <div className="message-container">
                <div className="message-text">
                    <div className="message-text-name">
                        Username:
                    </div>
                    <div className="message-text-content">
                        Content asdfasdflkja df asd flakjsdflkaj
                    </div>
                </div>
                <span className="message-footer">
                   .
                </span>
            </div>
        );


    }
}
