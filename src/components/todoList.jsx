import React, { Component } from 'react';
class TodoList extends Component {
    state = {  }
    render() { 
        let todos = this.props.todoList;
        let handleDelete = this.props.handleDelete;
        console.log(todos);
        return ( 
            <ul class="list-group">
                {todos.map( (todo) => {
                    return(
                         <li class="list-group-item"> {todo.todo} <button type="button" class="btn btn-outline-danger" onClick = {()=> handleDelete(todo.id)}>X</button></li>
                    )
                })}
            </ul>
            

        );
    }
}
 
export default TodoList;