import React from "react";
import "../Homepage.css";

class PostPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userLiked: false,
            usersThatLiked: new Map(),
            arr: []
        };
        this.loadLikes();
    }

    loadLikes() {
        console.log("ID" + this.props.post.post_id);
        fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/ptcontroller.php", {
            method: "post",
            body: JSON.stringify({
                action: "getPostTags",
                tag: "sample",
                postid: this.props.post.post_id
            })
        })
            .then(res => res.json())
            .then(
                result => {
                    if (result) {
                        console.log(result)
                        this.setState({
                            userLiked: true,
                            arr: result
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

    likePost = event => {
            event.preventDefault();
            console.log("SALJDLFJSDLKFJSDF" + this.props.post.post_id);
        fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/ptcontroller.php", {
            method: "post",
            body: JSON.stringify({
                action: "addOrEditPostTags",
                user_id: sessionStorage.getItem("user"),
                session_token: sessionStorage.getItem("token"),
                userid: sessionStorage.getItem("user"),
                tag: "sample",
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

    // conditionalDisplay() {
    //     if (this.props.post.parent_id) {
    //         return "";
    //     } else {
    //         return (
    //             <div className="comment-block">
    //                 <div className="comment-indicator">
    //                     <div className="comment-indicator-text">
    //                         {this.getCommentCount()} Comments
    //                     </div>
    //                     <img
    //                         src={require("../comment.svg")}
    //                         className="comment-icon"
    //                         onClick={e => this.showModal()}
    //                         alt="View Comments"
    //                     />
    //                 </div>
    //                 <div className={this.showHideComments()}>
    //                     <CommentForm
    //                         onAddComment={this.setCommentCount}
    //                         parent={this.props.post.post_id}
    //                         commentCount={this.getCommentCount()}
    //                     />
    //                 </div>
    //             </div>
    //         );
    //     }
    // }


    render() {
        return (
            <div className="post-preview-main">
                {this.props.post.post_text}
                <img className="like"
                     src="https://i7.uihere.com/icons/998/832/946/upvote-9fbfa83dcbcc4553543fbbcee0c4e206.png"
                     onClick={this.likePost}/>


            </div>

        );
    }
}

export default PostPreview;
