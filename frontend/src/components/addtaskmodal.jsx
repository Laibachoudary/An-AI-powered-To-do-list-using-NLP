import React, { useState } from 'react';
import '../styles/Modal.css'; 

function AddTaskModal({ onAdd }) {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('');

  return (
    <div className="modal">
      <input placeholder="Enter your task" onChange={e => setTask(e.target.value)} />
      <select onChange={e => setPriority(e.target.value)}>
        <option>Select priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button onClick={() => onAdd(task, priority)}>Add Task</button>
    </div>
  );
}

export default AddTaskModal;
