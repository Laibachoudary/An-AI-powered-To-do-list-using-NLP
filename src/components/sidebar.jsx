import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Menu</h3>
      <ul>
        <li><Link to="/">Today</Link></li>
        <li><Link to="/upcoming">Upcoming</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
      </ul>
      <Link to="/addtask">
        <button className="add-task-btn">➕ Add task</button>
      </Link>
      
    </div>
  );
}

export default Sidebar;
