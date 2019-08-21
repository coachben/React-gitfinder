import React, { Component } from 'react'

class Search extends Component {

    state ={
        text: ''
    };

   onChange = (e)=>this.setState({ [e.target.name]: e.target.value });

   onSubmit = (e) => {
       //this demonstrates how to pass a prop upwards. to the app component
        e.preventDefault()
        this.props.searchUsers(this.state.text)
        this.setState({text: ''});
    }

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit } >
                    <input type="text" 
                    name="text" 
                    placeholder="Search Users.."
                    value={this.state.text} 
                    onChange={this.onChange}
                     />
                    <input 
                    type="submit" 
                    className="btn btn-dark btn-block"/>
                </form>
    
            </div>
        )
    }
}

export default Search
