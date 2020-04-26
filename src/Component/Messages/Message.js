import React from "react";
import "./MessagePage.css";


export default class Message extends React.Component {
    constructor(props) {

        super(props);
        console.log(props);
    }


    render() {

        return (

            <div className="message-container">
                <div className="message-text">
                    <div className="message-text-name">
                        Username:
                    </div>
                    <div className="message-text-content">
    
                        {this.props.text.message}
                    </div>
                </div>
                <div className="message-footer">
                   
                </div>
            </div>
        );


    }
}
