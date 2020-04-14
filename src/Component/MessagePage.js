import React from "react";
import "../MessagePage.css";
import MessagePageFriend from "./MessagePageFriend";
import MessagePageMessages from "./MessagePageMessages";
import MessagePageInput from "./MessagePageInput";
import Message from "./Message";
import Navbar from "./Navbar";

export default class MessagePage extends React.Component {
    constructor(props) {
        super(props);
        this.getRecip = this.getRecip.bind(this);
        this.state = {
            isLoaded: false,
            error: null,
            userid: "UserName",
            recipientid: "",

            recipientName:"",
            senderName: "",

            messageText: "",
            messages: [],
            conversations: []
        };

        this.getConversations();
    }

    loadMessages() {

        var firstRequest = [];
        var secondRequest = [];

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

                        firstRequest = result.messages;

                    }
                },
                error => {
                    this.setState({
                        error
                    });
                }
            );
        fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/messagecontroller.php", {
            method: "post",
            body: JSON.stringify({
                action: "getMessages",
                userid: this.state.recipientid,
                session_token: sessionStorage.getItem("token"),
                user_id: sessionStorage.getItem("user"),
                recipientid: sessionStorage.getItem("user")
            })
        })
            .then(res => res.json())
            .then(
                result => {
                    if (result.messages) {
                        secondRequest = result.messages;

                    }
                    var temp = firstRequest.concat(secondRequest);
                    var sortable = [];
                    var i;
                    for( i = 0; i < temp.length; i++){
                        sortable.push([temp[i],temp[i].message_id]);
                    }

                    sortable.sort(function(a, b) {
                        return a[1] - b[1];
                    });
                    this.setState({
                        messages: sortable
                    });

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

                    if(result.recipient_ids) {
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


    getNames(){
        fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/usercontroller.php", {
            method: "post",
            body: JSON.stringify({
                action: "getUsers",
                userid: this.state.recipientid
            })
        })
            .then(res => res.json())
            .then(
                result => {
                    if(result.users){
                        this.setState({
                            recipientName: result.users[0].username

                        });
                    }
                },
                error => {
                    alert("error!");
                }
            );

        fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/usercontroller.php", {
            method: "post",
            body: JSON.stringify({
                action: "getUsers",
                userid: sessionStorage.getItem("user")
            })
        })
            .then(res => res.json())
            .then(
                result => {
                    if(result.users){
                        this.setState({
                            senderName: result.users[0].username
                        });
                    }

                },
                error => {
                    alert("error!");
                }
            );
    };

    getRecip(evt) {

        this.setState({
            recipientid: evt
        });
        this.getNames();

        this.loadMessages();
    }

    myChangeHandler = event => {
        this.setState({
            messageText: event.target.value
        });
    };


    displayUsername(id) {
        console.log("ID" + id);
        console.log(this.state.recipientName);
        if(id===this.state.recipientid){
            return this.state.recipientName
        }
        if(id === sessionStorage.getItem("user")){
            return this.state.senderName
        }
    }


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

                                <Message text={message[0]} userName={this.displayUsername(message[0].user_id)}/>
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

