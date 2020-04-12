import React from "react";
import Navbar from "./Navbar.jsx";
import "../CreatePost.css";
import { Link } from "react-router-dom";

class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post_text: "",
            post_title: "",
            postmessage: ""
        };
    }

    submitHandler = event => {
        event.preventDefault();
        fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/postcontroller.php", {
            method: "post",
            body: JSON.stringify({
                action: "addOrEditPosts",
                user_id: sessionStorage.getItem("user"),
                session_token: sessionStorage.getItem("token"),
                posttext: this.state.post_text
                //TITLE DOESNT EXIST 
                //title: this.state.post_title

            })
        })
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        postmessage: result.Status
                    });
                },
                error => {
                    alert("error!");
                }
            );
        console.log(postMessage);
    };


    titleHandler = event => {
        this.setState({
            post_title: event.target.value
        });
    };

    descriptionHandler = event => {

        this.setState({
            post_text: event.target.value
        });
        console.log(this.state);
    };



    render() {
        return (
            //NavBar
            <div id="row wholepage" className="wholepage">
                <div className="row Createpost">
                    <header className="col-12 Home-Header">
                        <Navbar />
                    </header>
                </div>
                <div id="row wholeform" className="wholeform">
                    <p><strong>MAKE A POST</strong></p>
                    <form>
                        <textarea type="text" placeholder="Title..." id="row text1" className="text1" onChange={this.titleHandler} />
                    </form>

                    <form>
                        <textarea type="text" placeholder="Post Description..." id="row text2" className="text2" onChange={this.descriptionHandler} />
                        <Link to='/Homepage'><button type="button" className="btn1">Cancel</button></Link>
                        <Link to='/Homepage'><button type="button" className="btn2" onClick={this.submitHandler}>Post!</button></Link>
                    </form>
                </div>
            </div>
        );
    }
}
export default CreatePost;