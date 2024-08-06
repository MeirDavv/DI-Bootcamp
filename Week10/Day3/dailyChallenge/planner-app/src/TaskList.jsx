import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from './tasksSlice';

const TaskList = ({ selectedDate, startEditTask }) => {
    const tasks = useSelector(state => state.tasks.tasksByDay[selectedDate] || []);
    const dispatch = useDispatch();
  
    const handleDeleteTask = (taskId) => {
      dispatch(deleteTask({
        day: selectedDate,
        taskId
      }));
    };
  
    return (
      <div>
        <h2>Tasks for {selectedDate}</h2>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              {task.text}
              <button onClick={() => startEditTask(task)}>Edit</button>
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default TaskList;