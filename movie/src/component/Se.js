import React, { useState } from "react";
import '../component/Se.css';
const rows = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  

];

const seats = [];
for (let i = 0; i < rows.length; i++) {
  for (let j = 1; j <= 20; j++) {
    seats.push({ id: `${rows[i]}${j}`, isBooked: false });
  }
}

const Se = () => {
  const [bookedSeats, setBookedSeats] = useState([]);

  const handleSeatClick = (seatId) => {
    const seatIndex = bookedSeats.indexOf(seatId);
    if (seatIndex > -1) {
      const updatedSeats = [...bookedSeats];
      updatedSeats.splice(seatIndex, 1);
      setBookedSeats(updatedSeats);
    } else {
      setBookedSeats([...bookedSeats, seatId]);
    }
  };

  return (
    <div>
      <h2>Multiplex Theater</h2>
      <div className="screen">Screen</div>
      <div className="seats-container">
        {seats.map((seat) => (
          <div
            key={seat.id}
            className={`seat ${seat.isBooked ? "booked" : ""}`}
            onClick={() => handleSeatClick(seat.id)}
          >
            {seat.id}
          </div>
        ))}
      </div>
      <p>
        You have selected {bookedSeats.length}{" "}
        {bookedSeats.length === 1 ? "seat" : "seats"} :{" "}
        {bookedSeats.join(", ")}
      </p>
      <button disabled={bookedSeats.length === 0}>Confirm Booking</button>
    </div>
  );
};

export default Se;