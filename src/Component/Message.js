import React from "react";
import "../MessagePage.css";


export default class Message extends React.Component {
    constructor(props) {

        super(props);
        this.state ={
            username: ""
        };

    }

    // getUsername(){
    //     fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/usercontroller.php", {
    //         method: "post",
    //         body: JSON.stringify({
    //             action: "getUsers",
    //             userid: this.props.userName
    //         })
    //     })
    //         .then(res => res.json())
    //         .then(
    //             result => {
    //                 if(result.users){
    //                     console.log(result.users[0].username)
    //
    //                     this.setState({
    //                         username: result.users[0].username
    //
    //                     });
    //                 }
    //             },
    //             error => {
    //                 alert("error!");
    //             }
    //         );
    // };


    render() {

        return (

            <div className="message-container">
                <div className="message-text">
                    <div className="message-text-name">
                        {this.props.userName}:
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
