import React from "react";
import "../MessagePage.css";

export default class MessagePageFriend extends React.Component {
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
            <div className="messagePageFriend-main">
                <div className="messagePageFriend-icon-container">
                    <div className="messagePageFriend-profileIcon">
                    </div>

                </div>
                <div className="messagePageFreind-profileName"></div>
                Username

            </div>
        );


    }
}


