import React from "react";
import "./Homepage.css";
import Navbar from "./Navbar"

class Homepage extends React.Component {

    render() {
  
  
      return (
        <div className="Homepage">
          <header className="Home-Header">
            <Navbar/> 
          </header>
        </div>
      );
    }
  }
  
  export default Homepage;