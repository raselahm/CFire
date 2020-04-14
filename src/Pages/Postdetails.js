import React from "react";
import Navbar from "./Navbar.jsx";
import "./Postdetails.css";
import { Link } from "react-router-dom";

class Postdetails extends React.Component {

      
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
            <h3>Project Title</h3> 
            <div className="postDescription col-6">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non semper risus. Integer aliquam turpis in ipsum egestas sollicitudin. Mauris condimentum est arcu, eget sollicitudin nulla sollicitudin id. Phasellus fringilla volutpat elementum. Fusce sit amet nunc vel ex scelerisque commodo. Suspendisse rutrum interdum lacus, sed ullamcorper tellus ullamcorper vel. Nam vehicula sollicitudin purus, ac blandit tellus blandit eget. Duis gravida imperdiet porta.</p>
                <p>Duis lacinia et dui porta luctus. Nunc eleifend porttitor pulvinar. Quisque vehicula a dui vitae congue. Aliquam blandit urna convallis nisi fermentum vulputate. In ornare feugiat dui eget varius. Pellentesque non sodales arcu. Vivamus id ornare mi.</p>
                <p>Integer quis urna enim. Morbi nulla lorem, cursus vel luctus eget, volutpat vel sem. Aenean urna sem, fringilla a lectus ac, pretium auctor lacus. Integer facilisis iaculis venenatis. Integer eget orci sed felis pellentesque placerat. Praesent iaculis orci quis fermentum efficitur. Nullam venenatis, arcu quis sagittis viverra, diam turpis ornare nunc, eu pellentesque odio ipsum nec velit. Vestibulum vulputate a nisi eu cursus. Donec commodo odio enim, id sollicitudin sapien semper sit amet. Nulla ac ligula ac ante semper iaculis ut et elit.

</p>
            </div>           
                <form>
                        <textarea type="text" placeholder = "Type your comment" id="row text2" className="text"/>
                        <Link to = '/homepage'><button type="button" onClick={this.onSubmit} className="btn">Post Comment</button></Link>
                </form> 
                
                              
            </div>   
        </div>
      );
    }
  }
  export default Postdetails;