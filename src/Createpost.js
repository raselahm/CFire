import React from "react";
import Navbar from "./Navbar.jsx";
import "./Createpost.css";
import { Link } from "react-router-dom";

class Createpost extends React.Component {

      
    render() {
      return (
        //NavBar
        <div id="row wholepage" className="wholepage">
            <div className="row Createpost">
        <header className="col-12 Home-Header">
          <Navbar/> 
        </header>
            </div>
            <div id="row wholeform" className="wholeform">    
            <p><strong><center>MAKE A POST</center></strong></p>            
                <form>
                        <textarea type="text" placeholder= "Title..." id="row text1" className="text1"/>
                </form>               
                
                <form>
                        <textarea type="text" placeholder = "Post Description..." id="row text2" className="text2"/>
                        <Link to = '/Homepage'><button type="button" onClick={this.onSubmit} className="btn1">Cancel</button></Link>
                        <Link to = '/Homepage'><button type="button" onClick={this.onSubmit} className="btn2">Post!</button></Link>
                </form>               
            </div>   
        </div>
      );
    }
  }
  export default Createpost;