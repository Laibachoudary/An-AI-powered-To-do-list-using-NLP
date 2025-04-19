import React, { useState } from 'react';
import "../styles/AddTask.css";

function AddTask() {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Task:", task);
    // Yahan baad mein task ko save karna hoga
  };

  return (
    <div className="add-task-container">
      <h2>Add a New Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;

