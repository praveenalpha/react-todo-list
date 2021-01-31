import React, { Component } from 'react';

import TodoList from "./components/todoList";
import InputBox from "./components/inputBox";


class App extends Component {
  state = { 
    todos: [ {id:1, todo:"itachi"}, {id:2, todo:"hashirama"} , {id:3, todo:"kakashi"}, {id:4, todo:"madara"}]
   }
   handleDelete = (id) => {
      let filteredObj = this.state.todos.filter( todo => {
        return todo.id !== id;
      })
      this.setState(
        {todos: filteredObj}
      )
   }
   addTodo = (obj) => {
      this.setState({
        todos: [...this.state.todos, {id:this.state.todos.length + 1, todo:obj} ]
      })
   }
  render() { 
    return (
      <React.Fragment>
        <InputBox addTodo = {this.addTodo}/>
        <TodoList todoList = {this.state.todos} handleDelete = {this.handleDelete} />
      </React.Fragment>
      );
  }
}
 
export default App;
