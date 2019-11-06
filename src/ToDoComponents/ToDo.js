import React, { Component } from 'react';
import './Todo.css';

class ToDo extends Component {

//<div className="main-todo-list">
  //  <div className="todo" id="1">
    //    <input className="todo-checkbox" type="checkbox" />
      //  <span class="todo-text">Take out trash and recycling</span>
    //</div>
//</div> 


    render(){
        return(
            <div 
                id={this.props.todo.id}
                className={this.props.todo.complete && this.props.todoDisplay ? 'hide':''}
                onClick={this.props.todoClickedHandler}
            >
                <input 
                    id={this.props.todo.id}
                    className='todo-checkbox' 
                    type="checkbox"
                    checked={this.props.todo.complete ? true : false}
                />
                <span 
                    className={`${this.props.todo.complete ? 'complete' : ''}`}
                    id={this.props.id}
                >
                    {this.props.children}
                </span>
            </div>
        );

    }
}






export default ToDo;