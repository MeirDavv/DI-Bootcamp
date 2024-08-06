import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
    const todos = useSelector((state) => state.todos);

    if (!todos || !todos.length) {
        return <div>No todos available.</div>;
      }

    return(
        <div>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo = {todo} />
            ))}
        </div>
    );
};

export default TodoList;