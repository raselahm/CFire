import React from "react";
import "../Profile.css";
import Navbar from '../Component/Navbar'
import {Link} from "react-router-dom";
import CreatePostModal from "../Component/CreatePostModal";
import PostPreview from "../Component/PostPreview"
import TrendingPreview from "../Component/TrendingPreview";
import ProfileHeader from "../Component/ProfileHeader";
import ProfilePage from "../Component/ProfilePage";
import ProfileSettings from "../Component/ProfileSettings";

class Homepage extends React.Component {

    constructor(props) {
        super(props);
        this.refreshHomePage = this.refreshHomePage.bind(this);
        this.state = {
            posts: [],
            openModal: false

        };
        this.loadPosts();
    }




    loadPosts() {
        fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/postcontroller.php", {
            method: "post",
            body: JSON.stringify({
                action: "getPosts",
                max_posts: "12",
            })
        })
            .then(res => res.json())
            .then(
                result => {
                    if (result.posts) {
                        this.setState({
                            posts: result.posts
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


    refreshHomePage() {
      this.loadPosts();
    }

    render() {
        return (
            <html>
            <head className="test">
                <body className="test">
                <Navbar/>
                <div className="homepage-main">
                    <div className="homepage-trending-group">
                        <TrendingPreview/>
                        <TrendingPreview/>
                        <TrendingPreview/>
                        <TrendingPreview/>
                        <TrendingPreview/>


                    </div>
                    <div className="homepage-button-group">

                        <button className="post-button-b" onClick={e => toggleModal(this, e)}>Create Post B</button>
                    </div>
                    <hr className="hr"/>

                    <div className="homepage-posts-group">
                        {this.state.posts.map(post => (
                            <PostPreview post={post}></PostPreview>
                        ))}

                    </div>

                    <CreatePostModal show={this.state.openModal} onClose={e => toggleModal(this, e)} func={this.refreshHomePage}>
                        This is a modal dialog!
                    </CreatePostModal>
                </div>
                </body>
            </head>
            </html>


        );
    }
}


function toggleModal(app) {
    app.setState({
        openModal: !app.state.openModal
    });
}

export default Homepage;
