import React from "react";
import "../Homepage.css";

class PostPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userLiked: false,
            displayedLike: "https://i7.uihere.com/icons/998/832/946/upvote-9fbfa83dcbcc4553543fbbcee0c4e206.png",
            likes: []
        };
        this.loadLikes();
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
                    console.log(result);
                    if (result.post_tags) {
                        console.log("IM LOST")
                        this.setState({
                            isLoaded: true,

                            likes: result.post_tags
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
                    if (result.post_tags !== undefined) {
                        console.log("IM LOST")
                        console.log(result.post_tags);
                        this.setState({
                            userLiked: true,
                            displayedLike: "https://i7.uihere.com/icons/237/974/400/upvote-7ccac87c950ed5a8ce2f412f29940d33.png"
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

    }


    likePost = event => {
        if(!this.state.userLiked) {
            event.preventDefault();
            console.log("SALJDLFJSDLKFJSDF" + this.props.post.post_id);
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
                                displayedLike: "https://i7.uihere.com/icons/237/974/400/upvote-7ccac87c950ed5a8ce2f412f29940d33.png"
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
        } else{
            this.conditionalDisplay()
        }

    };


    conditionalDisplay(){
        if(this.state.displayedLike === "https://i7.uihere.com/icons/998/832/946/upvote-9fbfa83dcbcc4553543fbbcee0c4e206.png"){
            this.setState(
                {
                    displayedLike: "https://i7.uihere.com/icons/237/974/400/upvote-7ccac87c950ed5a8ce2f412f29940d33.png"
                }
            )
        }else{
            this.setState(
                {
                    displayedLike: "https://i7.uihere.com/icons/998/832/946/upvote-9fbfa83dcbcc4553543fbbcee0c4e206.png"
                }
            )
        }
    }


    render() {
        return (
            <div className="post-preview-main">
                {this.props.post.post_text}
                <p>{this.state.likes.length}</p>
                <img className="like"
                     src={this.state.displayedLike}
                     onClick={this.likePost}/>

            </div>

        );
    }
}

export default PostPreview;
