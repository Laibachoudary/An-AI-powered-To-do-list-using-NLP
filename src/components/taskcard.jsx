import React from 'react';
import '../styles/TaskCard.css';

function TaskCard({ title, category, priority }) {
  return (
    <div className="task-card">
      <div className="task-info">
        <h4>{title}</h4>
        <small>{category} • {priority.toLowerCase()} priority</small>
      </div>
      <div className="task-actions">
        <button>✏️</button>
        <button>✅</button>
        <button>🗑️</button>
      </div>
    </div>
  );
}

export default TaskCard;
