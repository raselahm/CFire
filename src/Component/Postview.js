import React from "react";
import Navbar from "./Navbar";
import "./Postview.css";

class Postview extends React.Component {

      
    render() {
      return (
        //NavBar
        <div id="row wholepage" className="wholepage">
            <div className="row Postview.css">
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
                </form>               
            </div>   
        </div>
      );
    }
  }
  
  export default Postview;