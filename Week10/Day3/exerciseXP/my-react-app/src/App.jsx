import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './todoList';
import AddTodo from './AddTodo';

const App = () => {
  return(
    <Provider store = {store}>
      <div>
        <h1>Todo App</h1>
        <AddTodo/>
        <TodoList/>
      </div>
    </Provider>
  )
}

export default App
