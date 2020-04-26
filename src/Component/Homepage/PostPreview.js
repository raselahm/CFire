import React from "react";
import "./Homepage.css";
import {Link} from "react-router-dom";

class PostPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userLiked: false,
            likeId: "",
            displayedLike: "https://i7.uihere.com/icons/998/832/946/upvote-9fbfa83dcbcc4553543fbbcee0c4e206.png",
            likes: []
        };
        this.loadLikes();
    }

    userLikes() {
        fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/ptcontroller.php", {
            method: "post",
            body: JSON.stringify({
                action: "getPostTags",
                postid: this.props.post.post_id,
                tag: "test2",
                userid: sessionStorage.getItem("user")

            })
        })
            .then(res => res.json())
            .then(
                result => {
                    if (result.post_tags) {
                        console.log(result.post_tags)
                        this.setState({
                            userLiked: true,
                            likeId: result.post_tags[0].post_tag_id
                        });
                    } else {
                        console.log("REACHED")
                        this.setState({
                            userLiked: false
                        })
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


    loadLikes() {
        console.log("ID" + this.props.post.post_id);
        fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/ptcontroller.php", {
            method: "post",
            body: JSON.stringify({
                action: "getPostTags",
                postid: this.props.post.post_id,
                tag: "test2"

            })
        })
            .then(res => res.json())
            .then(
                result => {
                    if (result.post_tags) {
                        this.setState({
                            isLoaded: true,
                            likes: result.post_tags
                        });
                    }
                    this.userLikes();
                },
                error => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );

    }

    likePost = event => {
        event.preventDefault();
            fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/ptcontroller.php", {
                method: "post",
                body: JSON.stringify({
                    action: "addOrEditPostTags",
                    user_id: sessionStorage.getItem("user"),
                    session_token: sessionStorage.getItem("token"),
                    userid: sessionStorage.getItem("user"),
                    tag: "test2",
                    postid: this.props.post.post_id
                })
            })
                .then(res => res.json())
                .then(
                    result => {
                        if (result.Status) {
                            this.loadLikes();
                            this.setState({
                                isLoaded: true,
                                userLiked: true
                            });
                        }
                    },
                    error => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                );

    };

    disLikePost = event => {
        event.preventDefault();
        console.log("REACHED");
            fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/ptcontroller.php", {
                method: "post",
                body: JSON.stringify({
                    action: "deletePostTags",
                    user_id: sessionStorage.getItem("user"),
                    session_token: sessionStorage.getItem("token"),
                    userid: sessionStorage.getItem("user"),
                    posttagid: this.state.likeId
                })
            })
                .then(res => res.json())
                .then(
                    result => {
                        if (result.Status) {
                            this.loadLikes();
                            this.setState({
                                isLoaded: true,
                                userLiked: false
                            });
                        }
                    },
                    error => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                );
    };


    whichLike() {

        if (this.state.userLiked) {
            return (
                <img className="like"
                     src="https://i7.uihere.com/icons/237/974/400/upvote-7ccac87c950ed5a8ce2f412f29940d33.png"
                     onClick={this.disLikePost}/>

            );
        } else {
            return (
                <img className="like"
                     src="https://i7.uihere.com/icons/998/832/946/upvote-9fbfa83dcbcc4553543fbbcee0c4e206.png"
                     onClick={this.likePost}/>
            );
        }
    }



    render() {
        return (

            <div className="post-preview-main">


                {this.props.post.post_text}
                <p className="post-preview-text">{this.state.likes.length}</p>
                {this.whichLike()}

            </div>

        );
    }
}

export default PostPreview;


// to={{
//     pathname: '/PostPage',
//         aboutProps: {
//         post: this.props.post
//     }
// }}