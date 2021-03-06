import React from "react";
import "../MessagePage.css";

export default class MessagePageFriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            username: "PlaceHolder"

        };

        this.getUsername()

    }

    getUsername(){
        fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/usercontroller.php", {
            method: "post",
            body: JSON.stringify({
                action: "getUsers",
                userid: this.props.convo
            })
        })
            .then(res => res.json())
            .then(
                result => {
                    if(result.users){
                        console.log(result.users[0].username)
                        this.setState({
                            username: result.users[0].username

                        });
                    }
                },
                error => {
                    alert("error!");
                }
            );
    };



    render() {

        return (

            <div className="messagePageFriend-main" onClick={(evt) => this.props.func(this.props.convo)} >
                <div className="messagePageFriend-icon-container"  >

                    <div className="messagePageFriend-profileIcon">
                    </div>
                </div>
                <div className="messagePageFreind-profileName" > {this.state.username}</div>
                

            </div>
            
        );


    }
}

