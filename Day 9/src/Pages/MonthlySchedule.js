// src/Monthly.js
import React, { useState } from 'react';
import './Monthly.css';
import Sidebar1 from '../Component/Sidebar1';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];

function MonthlySchedule() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const startDate = new Date(new Date().getFullYear(), selectedMonth, 1);
  const endDate = new Date(new Date().getFullYear(), selectedMonth + 1, 0);

  const createCalendar = () => {
    const calendar = [];
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      const day = currentDate.getDate();
      const dayOfWeek = daysOfWeek[currentDate.getDay()];
      const shift = getShiftForDate(currentDate);

      calendar.push(
        <tr key={day}>
          <td>{day}</td>
          <td>{dayOfWeek}</td>
          <td>{shift}</td>
        </tr>
      );

      currentDate.setDate(currentDate.getDate() + 1);
    }

    return calendar;
  };

  const getShiftForDate = (date) => {
    // Check if the current day is Saturday or Sunday and set it as a "Holiday."
    if (date.getDay() === 0 /* Sunday / || date.getDay() === 6 / Saturday */) {
      return 'Holiday';
    }

    // For other days, let's assume every even-numbered day is a "Day" shift, and odd-numbered days are "Night" shifts.
    return date.getDate() % 2 === 0 ? 'Day' : 'Night';
  };

  return (
    <div className="monthly-schedule">
        <div>
            <Sidebar1/>
        </div>
      <h1>Monthly Schedule</h1>
      <div className="month-dropdown">
        <label htmlFor="monthSelect">Select a Month: </label>
        <select
          id="monthSelect"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(parseInt(e.target.value, 10))}
        >
          {monthNames.map((month, index) => (
            <option key={index} value={index}>
              {month}
            </option>
          ))}
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Day</th>
            <th>Shift</th>
          </tr>
        </thead>
        <tbody>{createCalendar()}</tbody>
      </table>
    </div>
  );
}

export default MonthlySchedule;
