import React from "react";
import Navbar from "./Navbar";
import "./Createpost.css";

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
                        <button type="button" onClick={this.onSubmit} className="btn1">Cancel</button>
                        <button type="button" onClick={this.onSubmit} className="btn2">Post!</button>
                </form>               
            </div>   
        </div>
      );
    }
  }
  export default Createpost;