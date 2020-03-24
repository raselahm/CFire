import React from "react";
import "./MessagePage.css";
import MessagePageFriend from "./MessagePageFriend";
import MessagePageMessages from "./MessagePageMessages";
import MessagePageInput from "./MessagePageInput";
import Navbar from './Navbar'

export default class MessagePage extends React.Component {
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

            

            <div className="messagePage-main">
                <Navbar/>

                <div className="messagePage-friends">
                    <MessagePageFriend></MessagePageFriend>
                    <MessagePageFriend></MessagePageFriend>
                    <MessagePageFriend></MessagePageFriend>
                    <MessagePageFriend></MessagePageFriend>
                    <MessagePageFriend></MessagePageFriend>
                    <MessagePageFriend></MessagePageFriend>
                    <MessagePageFriend></MessagePageFriend>
                    <MessagePageFriend></MessagePageFriend>
                    <MessagePageFriend></MessagePageFriend>
                    <MessagePageFriend></MessagePageFriend>
                    <MessagePageFriend></MessagePageFriend>

                </div>
                <div className="messagePage-messages">
                    <MessagePageMessages></MessagePageMessages>
                </div>


            </div>
        );


    }
}


