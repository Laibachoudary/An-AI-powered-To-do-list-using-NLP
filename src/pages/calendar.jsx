import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import '../styles/CalendarCustom.css'; 

function CalendarPage() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-container">
      <h2>Calendar</h2>
      <Calendar onChange={setDate} value={date} />
      <p>Selected Date: <strong>{date.toDateString()}</strong></p>
    </div>
  );
}

export default CalendarPage;
