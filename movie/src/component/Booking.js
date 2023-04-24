import React, { useState } from 'react';

function Booking() {
  const [totalSeats, setTotalSeats] = useState(50); // set the total number of seats
  const [bookedSeats, setBookedSeats] = useState([2, 6, 12, 24]); // set the list of booked seats
  
  const availableSeats = totalSeats - bookedSeats.length; // calculate the number of available seats
  
  return (
    <div>
      <p>Total Seats: {totalSeats}</p>
      <p>Booked Seats: {bookedSeats.join(", ")}</p>
      <p>Available Seats: {availableSeats}</p>
    </div>
  );
}

export default Booking;
