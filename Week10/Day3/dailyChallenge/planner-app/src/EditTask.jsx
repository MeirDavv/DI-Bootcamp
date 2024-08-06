import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from './tasksSlice';

const EditTask = ({ selectedDate, task, endEditTask }) => {
  const [taskText, setTaskText] = useState(task.text);
  const dispatch = useDispatch();

  const handleEditTask = () => {
    dispatch(editTask({
      day: selectedDate,
      taskId: task.id,
      updatedTask: { ...task, text: taskText }
    }));
    endEditTask();
  };

  return (
    <div>
      <input 
        type="text" 
        value={taskText} 
        onChange={(e) => setTaskText(e.target.value)} 
      />
      <button onClick={handleEditTask}>Edit Task</button>
      <button onClick={endEditTask}>Cancel</button>
    </div>
  );
};

export default EditTask;