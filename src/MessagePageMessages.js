import React from "react";
import "./MessagePage.css";
import MessagePageFriend from "./MessagePageFriend";
import Message from "./Message";
import MessagePageInput from "./MessagePageInput"
export default class MessagePageMessages extends React.Component {
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

        return(
            
         <div className="messagePagemessages-container">
             <div className ="messagePagemessages-messages">
                 <Message></Message>
                 <Message></Message>
                 <Message></Message>
                 <Message></Message>
                 <Message></Message>
                 <Message></Message>
                 <Message></Message>
                 <Message></Message>
                 <Message></Message>
                 <Message></Message>
                 <Message></Message>

             </div>
             <MessagePageInput> </MessagePageInput>
         </div>
        );


    }
}
