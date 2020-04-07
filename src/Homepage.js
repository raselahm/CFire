import React from "react";
import "./Homepage.css";
import Navbar from "./Navbar"
import { Link } from "react-router-dom";

class Homepage extends React.Component {

    render() {
  
  
      return (
        <html>
        <div className="rr row Homepage">
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
            <Link to = '/postPage'><img className="project-element" src = "https://via.placeholder.com/200"/></Link>
              </div>
              <div className="col-2 project-element">
              <Link to = '/postPage'><img className="project-element" src = "https://via.placeholder.com/200"/></Link>
              </div>
              <div className="col-2 project-element">
              <Link to = '/postPage'><img className="project-element" src = "https://via.placeholder.com/200"/></Link>
              </div>
              <div className="col-2 project-element">
              <Link to = '/postPage'><img className="project-element" src = "https://via.placeholder.com/200"/></Link>
              </div>
          </div>

          {/* Row for create post button. */}
          <div className="row">
            <div className="col-9 create-post">
              </div>
              <div className="col-2 create-post">
                <Link to = '/Createpost'><a className="post-button" href="#">Create Post</a></Link>
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
            <Link to = '/postPage'><img className="group-element" src = "https://via.placeholder.com/800x200?text=Project+Name+and+Description"/></Link>
            </div>
            <div className="col-1"></div>
          </div>

          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
            <Link to = '/postPage'><img className="group-element" src = "https://via.placeholder.com/800x200?text=Project+Name+and+Description"/></Link>
            </div>
            <div className="col-1"></div>
          </div>


          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
            <Link to = '/postPage'><img className="group-element" src = "https://via.placeholder.com/800x200?text=Project+Name+and+Description"/></Link>
            </div>
            <div className="col-1"></div>
          </div>


          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
            <Link to = '/postPage'><img className="group-element" src = "https://via.placeholder.com/800x200?text=Project+Name+and+Description"/></Link>
            </div>
            <div className="col-1"></div>
          </div>




        </div>
        </html>
      );
    }
  }
  
  export default Homepage;