import React, { useState } from 'react';
import './App.css';
import Header from './ToDoComponents/Header';
import ToDo from './ToDoComponents/ToDo';
import Remaining from './ToDoComponents/Remaining'

const initialState = {
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
  isHidden: false
}

const App = () => {
  const [todos, setTodos] = useState(initialState.todos);
  const [isHidden, setIsHidden] = useState(initialState.isHidden);
  const [todo, setTodo] = useState(initialState.todo);

  const handleInput = (e) => {
    setTodo(e.target.value);
  }

  const handleSubmit = (e) => {
    if (e.key === 'Enter') {
      const newTodo = {
        id: todos.length + 1,
        text: todo,
        complete: false
      };
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      e.target.value = '';
    }
  }

  const completeHandler = (todo) => {
    const updatedTodo = { ...todos[todo.id - 1] }; // make a shallow copy of the item clicked from state
    updatedTodo.complete = !updatedTodo.complete; // flip false to true
    const copyOfState = [...todos]; // make a shallow copy of the entire state
    copyOfState.splice(todo.id - 1, 1, updatedTodo); // delete the item that was clicked from state copy and insert our changed copy
    setTodos(copyOfState);
  }


  const itemsRemainingHandler = () => {
    let trash = todos.reduce((acc,currentValue) => {
      return !currentValue.complete ? acc+1 : acc;
    },0)
    return trash;
  }

  const hideItemsHandler = () => {
    setIsHidden(!isHidden);
  }

    return (
      <div className="App">
        <Header />
        {/* To Do List Component */}
        {todos.map(item => (
            <ToDo
              todo={item}
              id={item.id}
              todoClickedHandler={() => completeHandler(item)}
              todoDisplay={isHidden}
            >
              {item.text}
            </ToDo>
        ))}
        {/* End To Do List Component */}
        <input 
          id="text-input" 
          type="text" 
          placeholder="New todo" 
          onChange={handleInput}
          onKeyDown={handleSubmit}
        />
        {/* Start Remaining Count Component */}
        <Remaining value={itemsRemainingHandler()}/>
        {/* End Remaining Count Component */}
        {/* Start Button Component */}
        <button onClick={hideItemsHandler}>Hide Completed Items</button>
        {/* End Button Component */}

      </div>
    );
};

export default App;
