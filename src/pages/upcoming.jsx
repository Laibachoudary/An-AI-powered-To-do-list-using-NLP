import React from 'react';
import TaskCard from '../components/taskcard';

const tasks = [
  { title: 'Meeting with Team', category: 'Work', priority: 'High' },
  { title: 'Dentist appointment', category: 'Health', priority: 'Medium' },
  { title: 'Shopping', category: 'Personal', priority: 'Low' }
];

function Today() {
  return (
    <div className="task-container">
      <h2>Today</h2>
      {tasks.map((task, index) => <TaskCard key={index} {...task} />)}
    </div>
  );
}

export default Today;
