import React, {Component} from 'react';

export default class SearchBar extends Component{
    state = {
        searchBar: "search"
    };

    change = (e) => {
        this.setState({         // change function used to change the state of the Component
            [e.target.search]:    
            e.target.value});    // Study this syntax for JS/JSX
    };
    onSubmit = e =>{
        e.preventDefault();
        this.props.onSubmit(this.state)
        this.setState({
            search: ""
            }
        );
    }
    render(){
        return(
           
               <input
               class = "searchBar"
                name = "search"
                placeholder = "Search"
                value = {this.state.search}
                onChange = {e =>this.change}
                />  
            
        );
    }
}