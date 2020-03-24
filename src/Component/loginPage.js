import React, { Component } from 'react';
import './loginPage.css';
import Form from './loginForm'
import Navbar from "./Navbar"
import logo from './CFire.jpg'


import SearchBar from './searchBar';



export default class loginPage extends Component {
  onSubmit = fields => {
    console.log("App Component recieved, ", fields);
  }
  render(){
    return (
      <div id = "WholeApp">                
        <Form  onSubmit={fields => this.onSubmit(fields)}/>
        <span class = "divider"/>      
        <img className = "logo" src= {logo} alt="logo" />
        <span class = "greeting">Welcome to CFire!</span>
      </div>
    );
  }
}
