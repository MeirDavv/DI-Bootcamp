import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Calendar from './Calendar';
import TaskList from './TaskList';
import AddTask from './AddTask';
import EditTask from './EditTask';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [editingTask, setEditingTask] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date.toISOString().split('T')[0]);
  };

  const startEditTask = (task) => {
    setEditingTask(task);
  };

  const endEditTask = () => {
    setEditingTask(null);
  };

  return (
    <Provider store={store}>
      <div className="app">
        <h1>Daily Planner</h1>
        <Calendar selectedDate={new Date(selectedDate)} onDateChange={handleDateChange} />
        <TaskList selectedDate={selectedDate} startEditTask={startEditTask} />
        {editingTask ? (
          <EditTask selectedDate={selectedDate} task={editingTask} endEditTask={endEditTask} />
        ) : (
          <AddTask selectedDate={selectedDate} />
        )}
      </div>
    </Provider>
  );
};

export default App;