import React, { Component } from 'react';
// import SearchBar from './searchBar';
import {Link, withRouter} from 'react-router-dom';
import Homepage from './Homepage'
import Ruby from '../Resources/Ruby.svg'
import python from '../Resources/Python.svg'
import swift from '../Resources/Swift.svg'
import java from '../Resources/Java.svg'
import php from '../Resources/PHP.svg'
import cpp from '../Resources/C++.svg'
import cS from '../Resources/csharp.svg'
import c from '../Resources/C.svg'
import js from '../Resources/JS.svg'
import SQL from '../Resources/SQL.png'
import react from '../Resources/react.svg'
import angular from '../Resources/angular.svg'
import perl from '../Resources/perl.png'
import typescript from '../Resources/typescript.svg'
import scala from '../Resources/scala.svg'
import android from '../Resources/android.svg'
import Language from '../Component/Language.js'
import './onboarding.css'



class OnBoardingPage extends Component {
    
    constructor(props) {
        super(props);
        this.onSelect.bind(this);

        this.state = {
            aboutme: "",
            firstName: "",
            lastName: "",
            username: "",
            usernameError: "",
            languages : [],
            selected : [],
            file: "",
            imageURL: ""
        };
        this.LoadLanguages();

      }

    LoadLanguages(){
         this.state.languages.push({
             name: "Ruby",
             svg: Ruby });
        this.state.languages.push({
            name: "python",
            svg: python });
        this.state.languages.push({
            name: "Swift",
            svg: swift });
        this.state.languages.push({
            name: "Java",
            svg: java });
        this.state.languages.push({
            name: "PHP",
            svg: php });
        this.state.languages.push({
            name: "C++",
            svg: cpp });
        this.state.languages.push({
            name: "C Sharp",
            svg: cS });
        this.state.languages.push({
            name: "C",
            svg: c });
        this.state.languages.push({
            name: "Javascript",
            svg: js });
        this.state.languages.push({
            name: "SQL",
            svg: SQL });
        this.state.languages.push({
            name: "React",
            svg: react });
        this.state.languages.push({
            name: "Angular",
            svg: angular });
        this.state.languages.push({
            name: "Perl",
            svg: perl });
        this.state.languages.push({
            name: "Typescript",
            svg: typescript });
        this.state.languages.push({
            name: "Scala",
            svg: scala });
        this.state.languages.push({
            name: "Android",
            svg: android });

    }


    addLanguage(language){
        fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/uacontroller.php",{
            method: "post",
            body: JSON.stringify({
                action: "addOrEditUserArtifacts",
                session_token: sessionStorage.getItem("token"),
                user_id: sessionStorage.getItem("user"),
                userid: sessionStorage.getItem("user"),
                artifactcategory: "Programming Languages",
                artifacturl: language.svg
            })
        })
    };

    addLinks(){

    };

    fileSelectedHandler = e =>{
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {

            this.setState({
                file: file,
                imageUrl: reader.result
            });

        };
        reader.readAsDataURL(file);

    };

    fileUploadHandler = () =>{
        fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/uacontroller.php",{
            method: "post",
            body: JSON.stringify({
                action: "addOrEditUserArtifacts",
                session_token: sessionStorage.getItem("token"),
                user_id: sessionStorage.getItem("user"),
                userid: sessionStorage.getItem("user"),
                artifactcategory: "profilePicture",
                artifacturl: this.state.imageURL
            })
        })
    };

    onSubmit = e => {
        this.state.selected.forEach(this.addLanguage);

        fetch("http://stark.cse.buffalo.edu/cse410/blackhole/api/usercontroller.php",{
              method: "post",
              body: JSON.stringify({
                action: "addOrEditUsers",
                session_token: sessionStorage.getItem("token"),
                user_id: sessionStorage.getItem("user"),
                userid: sessionStorage.getItem("user"),
                username: this.state.username,
                firstName: this.state.firstName,
                lastName: this.state.lastName
              })
        })

    };

    change = e => {
        this.setState({         // change function used to change the state of the Component
            [e.target.name]:
            e.target.value});
    };

    onSelect(language){

        if (this.state.selected.includes(language) === true){

            let temp = [];

            for (let i = 0; i < this.state.selected.length; i++) {
                if(this.state.selected[i] !== language){
                    temp.push(this.state.selected[i]);
                }
            }

            this.setState({
                selected: temp
            });
        }
        else {
            this.state.selected.push(language);
            console.log(language);
            console.log(this.state.selected);

            this.setState({
                selected: this.state.selected
            });
        }



    };

    render(){
        let {imageUrl} = this.state;
        let $imagePreview = null;
        if (imageUrl) {
            $imagePreview = (<img className={"profilePicPreview"} src={imageUrl} alt = {"Profile Avatar"}/>);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
        console.log(imageUrl);
        return (
          <div className = "App">        
              <div className="row col-12 header">

            </div>
            <div className="row">
                
                <div className="col-m-3 col-3 leftnav">
                    <h3><p>Tell us about yourself! Share your story</p>
                        <form id = "aboutMe">
                                <textarea type="text" placeholder= "About Me..." id="rowText1" className="text5"/>
                        </form>
                    </h3>
                </div>
                
                <div class="col-m-9 col-5 main">
                    <h3><p id="Greet"> Welcome! <br/>What kind of development do you do? </p>
                        <br/>
                        <span className={"languages"}>
                            {this.state.languages.map(language =>(
                                <Language className = {"spec-element"}
                                          src = {language.svg}
                                          alt = {language.name}
                                          onClick={() => this.onSelect(language)}
                                />
                            ))}
                        </span>
                    </h3>
                </div>
                
                    {/* which will stack it under the leftnav and main. --> */}
                <div className="col-m-12 col-3 rightbox">
                <h3> <p> While your at it, here's some other things you can add to your profile</p></h3>
                <div id = "uploads">
                    <div className={"imagePreview"}>
                        <input type = "file"
                               className = "buttons"
                               name = "Profile Picture"
                               onChange={this.fileSelectedHandler}
                        />
                        {$imagePreview}
                    </div>
                    <div className={"personals"}>
                        <input className = "loginInput"
                               name = "LinkedIn"
                               onChange={e => this.change(e)}
                        />
                        <br/>
                        <input
                            className = "loginInput"
                            name = "Personal Website"
                            onChange={e=>{this.change(e)}}
                        />
                    </div>
                </div>
                    <div className="names">
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
                </div>
                    <button className = "nextButton" onClick={this.onSubmit}>Submit</button>
            </div>
            
          </div>
        );
        
    }
}
export default (OnBoardingPage);