import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from './todoSlice';

const TodoItem = ({todo}) => {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTodo(todo.id));
    };

    const handleRemove = () => {
        dispatch(removeTodo(todo.id));
    };
    return(
        <li>
            <span
            style={{textDecoration: todo.completed ? 'line-through':'none'}}
            onClick={handleToggle}
            >
                {todo.text}
            </span>
            <button onClick={handleRemove}>Remove</button>
        </li>
    );
};

export default TodoItem;