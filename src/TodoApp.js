import React, { Component } from 'react';

class TodoApp extends Component{


    componentDidUpdate() {
        this.props.inputElement.current.focus()
      }

    render(){
        return(
            <header className="App-header">
            <h2> Welcome to The ToDo App </h2>

            <form onSubmit ={this.props.additem}>
              <input
              placeholder="Task"
              ref = {this.props.inputElement}
              value = {this.props.currentItem.text}
              onChange={this.props.handleInput}

            />
              <button type="submit" className="btn btn-dark" >Add Task </button>
            </form>
            <div className="todo-list">
              <ul>
                <li><input type="checkbox" /> Learn React</li>
                <li> <input type="checkbox" />Awesome awesome</li>
                <li><input type="checkbox" /> Ship it</li>
              
              </ul>
            </div>
          </header>
        );
    }
}


export default TodoApp;