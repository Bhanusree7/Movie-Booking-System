import React, { useState } from 'react';

function Booking() {
  const [totalSeats, setTotalSeats] = useState(60); // set the total number of seats
  const [bookedSeats, setBookedSeats] = useState(['3-A', '4-C', '5-C','6-A','4-A','4-B','5-D','3-B']); // set the list of booked seats
  
  const availableSeats = totalSeats - bookedSeats.length; // calculate the number of available seats
  
  return (
    <div>
      <p>Total Seats: {totalSeats}</p>
      {/* <p>Booked Seats: {bookedSeats.join(", ")}</p> */}
      <p>Available Seats: {availableSeats}</p>
    </div>
  );
}

export default Booking;
