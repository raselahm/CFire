import React from "react";
import Navbar from "../NavBar/Navbar";
import './PostPage.css'
import Comment from "./Comment";
import DeletePostModal from "./DeletePostModal";


class PostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            posttext: "",
            comment_submit_text: "",
            post_submit_text:"",
            comments: [],
            edit: false,
            buttonName: "Edit",
            deleteModal: false
        };
        this.loadComments();
    }

    loadComments() {
        fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/postcontroller.php", {
            method: "post",
            body: JSON.stringify({
                action: "getPosts",
                posttype: "comment",
                max_posts: "12",
                parentid: this.props.location.aboutProps.post.post_id
            })
        })
            .then(res => res.json())
            .then(
                result => {
                    if (result.posts) {
                        this.setState({
                            comments: result.posts
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

    postComment = event => {
        event.preventDefault();
        fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/postcontroller.php", {
            method: "post",
            body: JSON.stringify({
                action: "addOrEditPosts",
                posttype: "comment",
                session_token: sessionStorage.getItem("token"),
                userid: sessionStorage.getItem("user"),
                user_id: sessionStorage.getItem("user"),
                posttext: this.state.comment_submit_text,
                parentid: this.props.location.aboutProps.post.post_id

            })
        })
            .then(res => res.json())
            .then(
                result => {
                    if (result.status) {
                        console.log("Posted");
                    }
                    this.loadComments();
                },
                error => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    submitEditPost = event => {
        event.preventDefault();
        const timestamp = Date.now(); // This would be the timestamp you want to format
        console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp));
        fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/postcontroller.php", {
            method: "post",
            body: JSON.stringify({
                action: "addOrEditPosts",
                session_token: sessionStorage.getItem("token"),
                userid: sessionStorage.getItem("user"),
                user_id: sessionStorage.getItem("user"),
                posttext: this.state.post_submit_text,
                posttype:"post",
                postid: this.props.location.aboutProps.post.post_id,
                timestamp: this.props.location.aboutProps.post.timestamp
            })
        })
            .then(res => res.json())
            .then(
                result => {
                    if (result.status) {
                        console.log("Posted");
                    }
                },
                error => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    postOwner() {
        if (sessionStorage.getItem("user") === this.props.location.aboutProps.post.user_id) {
            return (
                <div>
                    <button onClick={this.changeState}>{this.state.buttonName}</button>
                    <button  onClick={e => deleteState(this, e)}>Delete</button>
                    <DeletePostModal show={this.state.deleteModal} onClose={e => deleteState(this, e)} post={this.props.location.aboutProps.post} />

                </div>
            );
        }
    }

    editDisplay() {
        if (this.state.edit) {
            return (
                <div>
                    <input  type="text" onChange={this.postEditChangeHandler} defaultValue={this.props.location.aboutProps.post.post_text}/>
                    <button onClick={this.submitEditPost}> Submit Edit Post</button>
                </div>
            );
        } else {
            return <div>
                {this.props.location.aboutProps.post.post_text}

            </div>
        }
    }

    changeState = e => {
        if (this.state.edit) {
            this.setState({
                edit: !this.state.edit,
                buttonName: "Edit"
            });
        }else{
            this.setState({
                edit: !this.state.edit,
                buttonName: "Cancel"
            });
        }

    }

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };



    commentChangeHandler = event => {
        this.setState({
            comment_submit_text: event.target.value
        });
    }

    postEditChangeHandler = event =>{
        this.setState({
            post_submit_text: event.target.value
        });
    }

    render() {
        return (

            <div className="homepage-main">
                <Navbar/>
                <div className="postpage-main">
                    d
                    <div className="postpage-post">
                        {this.editDisplay()}
                    </div>
                    <div className="postpage-comments">
                        <div className="postpage-comment-submission">
                            <input onChange={this.commentChangeHandler}/>
                            <button onClick={this.postComment}>submit</button>
                        </div>
                        <div className="postpage-comment-list">
                            {this.state.comments.map(comment => (
                                <Comment comment={comment}/>
                            ))}

                        </div>
                    </div>
                    {this.postOwner()}
                </div>
            </div>

        );
    }
}
function deleteState(app){
    app.setState({
        deleteModal: !app.state.deleteModal
    });
}
export default PostPage;