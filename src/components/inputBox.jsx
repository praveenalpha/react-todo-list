import React, { Component } from 'react';
class InputBox extends Component {
    state = { 
        todo : ""
     }
     updateTodo = (e) => {
         this.setState({
             todo : e.target.value
         })
     }
     addTodo = ()=>{
         let addTodo = this.props.addTodo;
         addTodo(this.state.todo);
         this.setState({
             todo:""
         })
     }
    render() { 
        return ( 
            <React.Fragment>
                <input type="text" name="" id="" value = {this.state.todo} onChange={ (e)  => {this.updateTodo(e)}} />
                <button type="button" class="btn btn-outline-success"  onClick = { () => {this.addTodo()}}>add task</button>
            </React.Fragment>

        );
    }
}
 
export default InputBox;