import React from "react";
import "./MessagePage.css";
import MessagePageFriend from "./MessagePageFriend";
import Message from "./Message";
import Navbar from "../NavBar/Navbar";

export default class MessagePage extends React.Component {
    constructor(props) {
        super(props);
        this.getRecip = this.getRecip.bind(this);
        this.state = {
            isLoaded: false,
            error: null,
            userid: "UserName",
            recipientid: "",
            messageText: "",
            messages: [],
            conversations: []
        };
        this.loadMessages();
        this.getConversations();
    }

    loadMessages() {
        fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/messagecontroller.php", {
            method: "post",
            body: JSON.stringify({
                action: "getMessages",
                userid: sessionStorage.getItem("user"),
                session_token: sessionStorage.getItem("token"),
                user_id: sessionStorage.getItem("user"),
                recipientid: this.state.recipientid
            })
        })
            .then(res => res.json())
            .then(
                result => {
                    if (result.messages) {
                        this.setState({
                            messages: result.messages
                        });
                    }
                },
                error => {
                    this.setState({
                        error
                    });
                }
            );
    }

    submitHandler = event => {
        event.preventDefault();
        fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/messagecontroller.php", {
            method: "post",
            body: JSON.stringify({
                action: "addOrEditMessages",
                user_id: sessionStorage.getItem("user"),
                session_token: sessionStorage.getItem("token"),
                recipientid: this.state.recipientid,
                message: this.state.messageText,
                userid: sessionStorage.getItem("user")
            })
        })
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        //messageText: result.Status
                    });
                    this.loadMessages();
                },
                error => {
                    alert("error!");
                }
            );
    };

    getConversations = event => {
        fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/messagecontroller.php", {
            method: "post",
            body: JSON.stringify({
                action: "getConversations",
                userid: sessionStorage.getItem("user")
            })
        })
            .then(res => res.json())
            .then(
                result => {
                    if (result.recipient_ids) {
                        this.setState({
                            conversations: result.recipient_ids
                        });
                    }
                },
                error => {
                    alert("error!");
                }
            );
    };

    getRecip(evt) {
        console.log("REACHED" + evt);
        this.setState({
            recipientid: evt
        });
        this.loadMessages();
    }

    myChangeHandler = event => {
        this.setState({
            messageText: event.target.value
        });
    };


    render() {
        return (
            <div className="messagePage-settings">
                <Navbar/>
                <div className="messagePage-main">
                    <div className="messagePage-friends">
                        {this.state.conversations.map(conversation => (
                            <MessagePageFriend convo={conversation} func={this.getRecip}/>

                        ))}

                    </div>
                    <div className="messagePage-messages">
                        <div className="messagePagemessages-messages">
                            {this.state.messages.map(message => (
                                <Message text={message}/>
                            ))}
                        </div>
                        <div className="messagePageInput-container">
                        <textarea className="messagePageInput-textArea" rows="4" cols="150"
                                  onChange={this.myChangeHandler} defaultValue="Input your stuff here...........">
                        </textarea>
                            <button className="messagePageInput-send" onClick={this.submitHandler}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}