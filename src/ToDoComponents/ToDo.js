import React, { Component } from 'react';

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
                id={this.props.id}
                onClick={this.props.todoClickedHandler}
            >
                <input 
                    className="todo-checkbox" 
                    type="checkbox"
                />
                <span 
                    className={this.props.className} 
                    id={this.props.id}
                >
                    {this.props.children}
                </span>
            </div>
        );

    }
}






export default ToDo;