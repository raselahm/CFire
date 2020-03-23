import React from "react";
import "./Homepage.css";
import Navbar from "./Navbar"

class Homepage extends React.Component {

    render() {
  
  
      return (
        <div className="row Homepage">
          <header className="col-12 Home-Header">
            <Navbar/> 
          </header>

          {/* Divs to hold the trending projects. */}
          <div className="row">
          <div className="col-1"></div>

            <div className="col-11 projects">
              <h2 className="project-headline">Trending Projects</h2>
              </div>
          </div>
          <div className="row">
          <div className="col-1"></div>

            <div className="col-2 project-element">
              <img className="project-element" src = "https://via.placeholder.com/200"/>
              </div>
              <div className="col-2 project-element">
              <img className="project-element" src = "https://via.placeholder.com/200"/>
              </div>
              <div className="col-2 project-element">
              <img className="project-element" src = "https://via.placeholder.com/200"/>
              </div>
              <div className="col-2 project-element">
              <img className="project-element" src = "https://via.placeholder.com/200"/>
              </div>
          </div>

          {/* Row for create post button. */}
          <div className="row">
            <div className="col-9 create-post">
              </div>
              <div className="col-2 create-post">
                <a className="post-button" href="#">Create Post</a>
              </div>
          </div>

          {/* Row for groups */}
          <div className="row">
          <div className="col-1"></div>
          <div className="col-10 group">
              <h2 className="group-headline">Group Looking For People</h2>
              </div>
          </div>

          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
            <img className="group-element" src = "https://via.placeholder.com/800x200?text=Project+Name+and+Description"/>
            </div>
            <div className="col-1"></div>
          </div>

          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
            <img className="group-element" src = "https://via.placeholder.com/800x200?text=Project+Name+and+Description"/>
            </div>
            <div className="col-1"></div>
          </div>


          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
            <img className="group-element" src = "https://via.placeholder.com/800x200?text=Project+Name+and+Description"/>
            </div>
            <div className="col-1"></div>
          </div>


          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
            <img className="group-element" src = "https://via.placeholder.com/800x200?text=Project+Name+and+Description"/>
            </div>
            <div className="col-1"></div>
          </div>




        </div>
      );
    }
  }
  
  export default Homepage;