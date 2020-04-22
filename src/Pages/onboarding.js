import React, { Component } from 'react';
// import SearchBar from './searchBar';
import {Link} from 'react-router-dom';
import Homepage from './Homepage'
import Ruby from '../Resources/Ruby.svg'
import python from '../Resources/Python.svg'
import swift from '../Resources/Swift.svg'
import java from '../Resources/Java.svg'
import php from '../Resources/PHP.png'
import cpp from '../Resources/C++.svg'
import cS from '../Resources/C#.svg'
import c from '../Resources/C.svg'
import './onboarding.css'



export default class OnBoardingPage extends Component {

    state = {
        aboutme: "",
        firstName: "",
        lastName: "",
        username: "",
        usernameError: ""
    }

    onSubmit = e => {

        fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/SocialAuth.php",{
              method: "post",
              body: JSON.stringify({
                action: "addOrEditUsers",
                sessiontoken: sessionStorage.getItem("token"),
                user_id: sessionStorage.getItem("user"),
                userid: sessionStorage.getItem("user"),
                username: this.state.username,
                firstName: this.state.firstName,
                lastName: this.state.lastName                
              })
          })



    }


    onSelect = e => {
        
        fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/uacontroller.php",{
              method: "post",
              body: JSON.stringify({
                action: "addOrEditUserArtifacts",
                sessiontoken: sessionStorage.getItem("token"),
                user_id: sessionStorage.getItem("user"),
                userid: sessionStorage.getItem("user"),
                artifactcategory: "",
                artifacttype: ""
                                
              })
          })

    }

    render(){
        return (
          <div className = "App">        
              <div class="row col-12 header">
               
                
            </div>
            <div class="row">
                
                <div class="col-m-3 col-3 leftnav">
                <h3><p>Tell us about yourself! Share your story</p>
                <form id = "aboutMe">
                        <textarea type="text" placeholder= "About Me..." id="rowText1" className="text5"/>
                </form>
                </h3>
                
                </div>
                
                <div class="col-m-9 col-5 main">
                <h3><p id="Greet"> Welcome! <br/>What kind of development do you do? </p>
                {/* <SearchBar className = "searchSpec"/> */}
                <br/>
                
                <span >
                    
                        <div className = "col-2 row1">
                            <div className="col-2 spec-element">
                                <img className="spec-element" src = {Ruby} alt = "Ruby on Rails Pragramming " onClick = {this.onSelect} style={{border_color: this.state.borderColor}}/>
                            </div>
                            <div className="col-2 spec-element">
                                <img className="spec-element" src = {cpp} alt = "C++ Programming " />
                            </div>
                            <div className="col-2 spec-element">
                                <img className="spec-element" src = {c} alt = "C Programming"/>
                            </div>
                            <div className="col-2 spec-elementt">
                                <img className="spec-element" src = {cS} alt = "C Sharp Programming" />
                            </div>
                    </div>
                    <div className = "col-2 row2">
                        <div className="col-2 spec-element">
                            <img className="spec-element" src = {python} alt = "Python Programming" />
                        </div>
                        <div className="col-2 spec-element">
                            <img className="spec-element" src = {java} alt = "Java Programming"/>
                        </div>
                        <div className="col-2 spec-element">
                            <img className="spec-element" src = {php} alt = "PHP Programming"/>
                        </div>
                        <div className="col-2 spec-elementt">
                            <img className="spec-element" src = {swift} alt = "Swift Programming"/>
                        </div>
                    </div>
                    <div className = "col-2 row2">
                    <div className="col-2 spec-element">
                            <img className="spec-element" src = "https://via.placeholder.com/200" alt = "" />
                        </div>
                        <div className="col-2 spec-element">
                            <img className="spec-element" src = "https://via.placeholder.com/200" alt = "" />
                        </div>
                        <div className="col-2 spec-element">
                            <img className="spec-element" src = "https://via.placeholder.com/200" alt = "" />
                        </div>
                        <div className="col-2 spec-elementt">
                            <img className="spec-element" src = "https://via.placeholder.com/200" alt = "" />
                        </div>
                    </div>
                    <div className = "col-2 row3">
                    <div className="col-2 spec-element">
                            <img className="spec-element" src = "https://via.placeholder.com/200" alt = "" />
                        </div>
                        <div className="col-2 spec-element">
                            <img className="spec-element" src = "https://via.placeholder.com/200" alt = "" />
                        </div>
                        <div className="col-2 spec-element">
                            <img className="spec-element" src = "https://via.placeholder.com/200" alt = "" />
                        </div>
                        <div className="col-2 spec-element">
                            <img className="spec-element" src = "https://via.placeholder.com/200" alt = "" />
                        </div>
                    </div>
                    <div className = "col-2 row3">
                    <div className="col-2 spec-element">
                            <img className="spec-element" src = "https://via.placeholder.com/200" alt = "" />
                        </div>
                        <div className="col-2 spec-element">
                            <img className="spec-element" src = "https://via.placeholder.com/200" alt = "" />
                        </div>
                        <div className="col-2 spec-element">
                            <img className="spec-element" src = "https://via.placeholder.com/200" alt = "" />
                        </div>
                        <div className="col-2 spec-element">
                            <img className="spec-element" src = "https://via.placeholder.com/200" alt = "" />
                        </div>
                    </div>
                    <div className = "col-2 row3">
                    <div className="col-2 spec-element">
                            <img className="spec-element" src = "https://via.placeholder.com/200" alt = "" />
                        </div>
                        <div className="col-2 spec-element">
                            <img className="spec-element" src = "https://via.placeholder.com/200" alt = "" />
                        </div>
                        <div className="col-2 spec-element">
                            <img className="spec-element" src = "https://via.placeholder.com/200" alt = "" />
                        </div>
                        <div className="col-2 spec-element">
                            <img className="spec-element" src = "https://via.placeholder.com/200" alt = "" />
                        </div>
                    </div>

                </span>
               
               
                </h3>
                </div>
                
                    {/* which will stack it under the leftnav and main. --> */}
                <div class="col-m-12 col-3 rightbox">
                <h3> <p> While your at it, heres some other things you can upload</p></h3>
                <div id = "uploads">
                <button className = "buttons" >Resume</button>
                <button className = "buttons" >LinkedIn</button>
                <button className = "buttons" >Website</button>
                </div>
                <div className = "loginForm">
                <input 
                    className = "loginInput"
                    name = "firstName"
                    placeholder = "First Name" 
                    value = {this.state.firstName}
                    // onChange function allows you to change the state of the component
                    // Similar to lambda function in java for syntax
                    onChange = {e => this.change(e)}
                    required
                    /> 
                    <br/>
                    <input 
                    className = "loginInput"
                    name = "lastName"
                    placeholder = "Last Name" 
                    value = {this.state.lastName}
                    // onChange function allows you to change the state of the component
                    // Similar to lambda function in java for syntax
                    onChange = {e => this.change(e)}
                    required
                    /> 
                    <br/>
                    <input type = "text"
                    className = "loginInput"
                    name = "username"
                    placeholder = "Username" 
                    value = {this.state.username}
                    // onChange function allows you to change the state of the component
                    // Similar to lambda function in java for syntax
                    onChange = {e => this.change(e)}
                    required
                    /> 
                    <br/>
                    <div style = {{fontSize:8, color: "red"}}>
                        {this.state.usernameError}
                    </div>
                </div>
                </div>
                    <Link to = '/Homepage'> <button class = "nextButton">Submit</button></Link>
            </div>
            
          </div>
        );
        
    }
}