import React, { Component } from 'react'

class TodoItems extends Component {

    createTasks(item){
        return <li key={item.key}>{item.text}</li>
    }
    render(){
        const todoEntries = this.props.entries
        const listitems = todoEntries.map(this.createTasks)
        return <ul className="Todo-list">{listeitems} </ul>
    }

}

export default TodoItems
