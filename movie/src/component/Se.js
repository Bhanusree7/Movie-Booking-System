// import React, { useState } from "react";
// import '../component/Se.css';
// import { Link } from "react-router-dom";
// const rows = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
  

// ];

// const seats = [];
// for (let i = 0; i < rows.length; i++) {
//   for (let j = 1; j <= 20; j++) {
//     seats.push({ id: `${rows[i]}${j}`, isBooked: false });
//   }
// }

// const Se = () => {
//   const [bookedSeats, setBookedSeats] = useState([]);

//   const handleSeatClick = (seatId) => {
//     const seatIndex = bookedSeats.indexOf(seatId);
//     if (seatIndex > -1) {
//       const updatedSeats = [...bookedSeats];
//       updatedSeats.splice(seatIndex, 1);
//       setBookedSeats(updatedSeats);
//     } else {
//       setBookedSeats([...bookedSeats, seatId]);
//     }
//   };

//   return (
//     <div className="mul">
//       <h2>Multiplex Theater</h2>
//       <div className="screen">Screen</div>
//       <div className="seats-container">
//         {seats.map((seat) => (
//           <div
//             key={seat.id}
//             className={`seat ${seat.isBooked ? "booked" : ""}`}
//             onClick={() => handleSeatClick(seat.id)}
//           >
//             {seat.id}
//           </div>
//         ))}
//       </div>
//       <p>
//         You have selected {bookedSeats.length}{" "}
//         {bookedSeats.length === 1 ? "seat" : "seats"} :{" "}
//         {bookedSeats.join(", ")}
//       </p>
//       <button ><Link to="/PaymentPage">Confirm Booking</Link></button>
//     </div>
//   );
// };

// export default Se;

import React, { useState } from 'react';
import './Se.css';
import { Link } from 'react-router-dom'
function Se(props) {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelected = () => {
    setIsSelected(!isSelected);
  };

  const seatColor = isSelected ? 'green' : 'gray';

  return (
    <div
      className="seat"
      style={{ backgroundColor: seatColor }}
      onClick={toggleSelected}
    >
      {props.seatNumber}
      
    </div>
    
     


  );
}

export default Se;


// import React, { useState } from "react";
// import "./Se.css";

// const ROWS = 5;
// const SEATS_PER_ROW = 10;

// export default function App() {
//   const [seats, setSeats] = useState(
//     Array(ROWS)
//       .fill()
//       .map((_, rowIndex) =>
//         Array(SEATS_PER_ROW)
//           .fill()
//           .map((_, seatIndex) => ({
//             id: `${rowIndex + 1}-${seatIndex + 1}`,
//             row: rowIndex + 1,
//             number: seatIndex + 1,
//             isAvailable: true,
//             color: "white"
//           }))
//       )
//       .flat()
//   );

//   const handleSeatSelect = (id) => {
//     setSeats(
//       seats.map((seat) =>
//         seat.id === id
//           ? { ...seat, isAvailable: !seat.isAvailable, color: seat.isAvailable ? "green" : "white" }
//           : seat
//       )
//     );
//   };

//   return (
//     <div className="App">
//       <h1>Movie Booking System</h1>
//       <div className="cinema">
//         {[...Array(ROWS)].map((_, rowIndex) => (
//           <div key={rowIndex} className="row">
//             {[...Array(SEATS_PER_ROW)].map((_, seatIndex) => {
//               const seat = seats.find(
//                 (seat) => seat.row === rowIndex + 1 && seat.number === seatIndex + 1
//               );
//               return (
//                 <div
//                   key={seat.id}
//                   className={`seat ${seat.isAvailable ? "available" : "unavailable"} ${seat.color}`}
//                   onClick={() => handleSeatSelect(seat.id)}
//                 >
//                   {seat.number}
//                 </div>
//               );
//             })}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


