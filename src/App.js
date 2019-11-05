import React, { Component } from 'react';
import './App.css';
import Header from './ToDoComponents/Header';
import ToDo from './ToDoComponents/ToDo';
import Remaining from './ToDoComponents/Remaining'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {
          id: 1,
          text: "Take out trash and recycling",
          complete: false
        },
        {
          id: 2,
          text: "Pick up dry cleaning",
          complete: false
        },
        {
          id: 3,
          text: "Get oil change",
          complete: false
        },
        {
          id: 4,
          text: "Write thank-you notes",
          complete: false
        }
      ],
      todo: '',
    }
  }

  handleInput = (e) => {
    this.setState({ todo: e.target.value });
  }

  handleSubmit = (e) => {
    if (e.key === 'Enter') {
      const newTodo = {
        id: this.state.todos.length + 1,
        text: this.state.todo,
        complete: false
      };
      const updatedTodos = [...this.state.todos, newTodo];
      this.setState(() => ({ todos: updatedTodos }))
      e.target.value = '';
    }
  }

  completeHandler = (e) => {
    const updatedTodo = { ...this.state.todos[e.target.id - 1] }; // make a shallow copy of the item clicked from state
    updatedTodo.complete = !updatedTodo.complete; // flip false to true
    const copyOfState = [...this.state.todos]; // make a shallow copy of the entire state
    copyOfState.splice(e.target.id - 1, 1, updatedTodo); // delete the item that was clicked from state copy and insert our changed copy
    this.setState(() => ({ todos: copyOfState })); // update the changed copy to state
  }

  //Version 2 should include reduce method
  itemsRemainingHandler = () => {
    let items = 0;
    for (let todo of this.state.todos){
      if (todo.complete === false){
        items++;
      }
    }
    return items;
  }

  hideItemsHandler = (e) => {
    console.log(e);
  }



  render() {

    return (
      <div className="App">
        <Header />
        {/* To Do List Component */}
        {this.state.todos.map((item, index) => (
          this.state.todos[index].complete ?
            <ToDo
              className="complete"
              id={item.id}
              todoClickedHandler={this.completeHandler}
            >
              {item.text}
            </ToDo> : <ToDo
              id={item.id}
              todoClickedHandler={this.completeHandler}
            >
              {item.text}
            </ToDo>
        ))}
        {/* End To Do List Component */}
        <input 
          id="text-input" 
          type="text" 
          placeholder="New todo" 
          onChange={this.handleInput} 
          onKeyDown={this.handleSubmit} 
        />
        {/* Start Remaining Count Component */}
        <Remaining value={this.itemsRemainingHandler()}/>
        {/* End Remaining Count Component */}
        {/* Start Button Component */}
        <button onClick={this.hideItemsHandler}>Hide Completed Items</button>
        {/* End Button Component */}

      </div>
    );
  }
}

export default App;
