import React, { Component } from 'react';
import SearchBar from './searchBar';
import {Link} from 'react-router-dom';
import './onboarding.css'



export default class OnBoardingPage extends Component {
    render(){
        return (
          <div className = "App">        
              <div class="row col-12 header">
                <h1>Header</h1>
                
            </div>
            <div class="row">
                
                <div class="col-m-3 col-3 leftnav">
                <h3><p>Tell us about yourself! Share your story</p>
                <form id = "aboutMe">
                        <textarea type="text" placeholder= "Title..." id="rowText1" className="text1"/>
                </form>
                </h3>
                
                </div>
                
                <div class="col-m-9 col-5 main">
                <h3><p id="Greet"> Welcome! <br/>What kind of development do you do? </p>
                <SearchBar className = "searchSpec"/>
                <br/>
                <span>
                    <div className = "col-2 row1">
                        <div className="col-2 spec-element">
                        <img className="spec-element" src = "https://via.placeholder.com/200"/>
                        </div>
                        <div className="col-2 spec-element">
                        <img className="spec-element" src = "https://via.placeholder.com/200"/>
                        </div>
                        <div className="col-2 spec-element">
                        <img className="spec-element" src = "https://via.placeholder.com/200"/>
                        </div>
                        <div className="col-2 spec-elementt">
                        <img className="spec-element" src = "https://via.placeholder.com/200"/>
                        </div>
                    </div>
                    <div className = "col-2 row2">
                    <div className="col-2 spec-element">
                        <img className="col-2 spec-element" src = "https://via.placeholder.com/200"/>
                        </div>
                        <div className="col-2 spec-element">
                        <img className="spec-element" src = "https://via.placeholder.com/200"/>
                        </div>
                        <div className="col-2 spec-element">
                        <img className="spec-element" src = "https://via.placeholder.com/200"/>
                        </div>
                        <div className="col-2 spec-elementt">
                        <img className="spec-element" src = "https://via.placeholder.com/200"/>
                        </div>
                    </div>
                    <div className = "col-2 row2">
                    <div className="col-2 spec-element">
                        <img className="spec-element" src = "https://via.placeholder.com/200"/>
                        </div>
                        <div className="col-2 spec-element">
                        <img className="spec-element" src = "https://via.placeholder.com/200"/>
                        </div>
                        <div className="col-2 spec-element">
                        <img className="spec-element" src = "https://via.placeholder.com/200"/>
                        </div>
                        <div className="col-2 spec-elementt">
                        <img className="spec-element" src = "https://via.placeholder.com/200"/>
                        </div>
                    </div>
                    <div className = "col-2 row3">
                    <div className="col-2 spec-element">
                        <img className="spec-element" src = "https://via.placeholder.com/200"/>
                        </div>
                        <div className="col-2 spec-element">
                        <img className="spec-element" src = "https://via.placeholder.com/200"/>
                        </div>
                        <div className="col-2 spec-element">
                        <img className="spec-element" src = "https://via.placeholder.com/200"/>
                        </div>
                        <div className="col-2 spec-element">
                        <img className="spec-element" src = "https://via.placeholder.com/200"/>
                        </div>
                    </div>
                </span>
               
               
                </h3>
                </div>
                
                    {/* which will stack it under the leftnav and main. --> */}
                <div class="col-m-12 col-3 rightbox">
                <h3> <p> While your at it, heres some other things you can upload</p></h3>
                <div id = "uploads">
                <button>Resume</button>
                <button>LinkedIn</button>
                <button>Website</button>
                </div>
                </div>
                    <button class = "nextButton">Submit</button>
            </div>
            
          </div>
        );
        
    }
}