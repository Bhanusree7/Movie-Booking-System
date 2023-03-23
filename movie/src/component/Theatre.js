import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Theatre.css'

const TheatreSelection = () => {
  const [selectedTheatre, setSelectedTheatre] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleTheatreChange = (event) => {
    setSelectedTheatre(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div className='Ctr'>
      <label htmlFor="theatre-select">Select a Theatre:</label>
      <select id="theatre-select" value={selectedTheatre} onChange={handleTheatreChange}>
        <option value="">--Please choose a theatre--</option>
        <option value="theatre-1">Theatre 1</option>
        <option value="theatre-2">Theatre 2</option>
        <option value="theatre-3">Theatre 3</option>
      </select>

      {selectedTheatre && (
        <div>
          <label htmlFor="date-select">Select a Date:</label>
          <select id="date-select" value={selectedDate} onChange={handleDateChange}>
            <option value="">--Please choose a date--</option>
            <option value="2023-03-15">March 15, 2023</option>
            <option value="2023-03-16">March 16, 2023</option>
            <option value="2023-03-17">March 17, 2023</option>
          </select>
        </div>
      )}

      {selectedDate && (
        <div>
          <label htmlFor="time-select">Select a Show Time:</label>
          <select id="time-select" value={selectedTime} onChange={handleTimeChange}>
            <option value="">--Please choose a show time--</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="4:00 PM">4:00 PM</option>
            <option value="7:00 PM">7:00 PM</option>
          </select>
        </div>
      )}

      {selectedTime && (
        <div>
          <p>
            You have selected {selectedTheatre} theatre, {selectedDate} date and {selectedTime} show time.
          </p>
          <button onClick={() => alert('Booking seats...')}><Link to="/MvePage">Book Seats</Link></button>
        </div>
      )}
    </div>
  );
};

export default TheatreSelection;
