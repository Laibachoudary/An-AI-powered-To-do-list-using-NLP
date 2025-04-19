import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Today from './pages/today';
import Upcoming from './pages/upcoming';
import Calendar from './pages/calendar';
import AddTask from './pages/addtask';

function App() {
  return (
    <Router>
      <div className="app-container" style={{ display: 'flex', flexDirection: 'row' }}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Today />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/addtask" element={<AddTask />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
