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

// import React, { useState } from 'react';

// import './Se.css';
// import { Link } from 'react-router-dom'
// function Se(props) {
//   const [isSelected, setIsSelected] = useState(false);

//   const toggleSelected = () => {
//     setIsSelected(!isSelected);
//   };

//   const seatColor = isSelected ? 'green' : 'gray';

//   return (
//     <div
//       className="seat"
//       style={{ backgroundColor: seatColor }}
//       onClick={toggleSelected}
//     >
//       {props.seatNumber}
      
      
//     </div>
    
     


//   );
// }

// export default Se;



// import React, { useState } from 'react';

// import './Se.css';
// import { Link } from 'react-router-dom'
// function Se(props) {
//   const [isSelected, setIsSelected] = useState(false);

//   const toggleSelected = () => {
//     // Check if seat is blocked and don't allow selection
//     if (['3-A', '4-C', '5-C'].includes(props.seatNumber)) {
//       return;
//     }

//     setIsSelected(!isSelected);
//   };

//   const seatColor = isSelected ? 'green' : 'gray';

//   // Add className "blocked" to blocked seats
//   const seatClassName = ['3-A', '4-C', '5-C'].includes(props.seatNumber)
//     ? "seat blocked"
//     : "seat";

//   return (
//     <>
//     <div
//       className={seatClassName}
//       style={{ backgroundColor: seatColor }}
//       onClick={toggleSelected}
//     >
//       {props.seatNumber}
//     </div>
//     </>
//   );
// }

// export default Se;


import React, { useState } from 'react';
import './Se.css';
import { Link } from 'react-router-dom';

function Se(props) {
  const [isSelected, setIsSelected] = useState(false);

  const isBlocked = (seatNumber) => ['3-A', '4-C', '5-C','6-A','4-A','4-B','5-D','3-B'].includes(seatNumber);

  const toggleSelected = () => {
    if (isBlocked(props.seatNumber)) {
      return;
    }
    setIsSelected(!isSelected);
  };

  const seatColor = isSelected ? 'green' : isBlocked(props.seatNumber) ? 'red' : 'gray';

  const seatClassName = isBlocked(props.seatNumber) ? 'seat blocked' : 'seat';

  return (
    <>
      <div
        className={seatClassName}
        style={{ backgroundColor: seatColor }}
        onClick={toggleSelected}
      >
        {props.seatNumber}
      </div>
      {/* <div>
        <p>You've selected:{isSelected.join(', ')}</p>
      </div> */}
    </>
   
  );
}

export default Se;











// import React, { useState } from 'react';
// import './Se.css';
// import { Link } from 'react-router-dom';

// function Se(props) {
//   const [isSelected, setIsSelected] = useState(false);
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   const isBlocked = (seatNumber) => ['3-A', '4-C', '5-C'].includes(seatNumber);

//   const toggleSelected = () => {
//     if (isBlocked(props.seatNumber)) {
//       return;
//     }
//     setIsSelected(!isSelected);
//     if (!isSelected) {
//       setSelectedSeats([...selectedSeats, props.seatNumber]);
//     } else {
//       setSelectedSeats(selectedSeats.filter(seat => seat !== props.seatNumber));
//     }
//   };

//   const seatColor = isSelected ? 'green' : isBlocked(props.seatNumber) ? 'red' : 'gray';

//   const seatClassName = isBlocked(props.seatNumber) ? 'seat blocked' : 'seat';

//   return (
//     <>
//       <div
//         className={seatClassName}
//         style={{ backgroundColor: seatColor }}
//         onClick={toggleSelected}
//       >
//         {props.seatNumber}
//       </div>
//       {selectedSeats.length > 0 && (
//         <p>You have selected seats: {selectedSeats.join(', ')}</p>
//       )}
//     </>
//   );
// }

// export default Se;







// import React, { useState } from 'react';
// import './Se.css';
// import { Link } from 'react-router-dom'

// function Se(props) {
//   const { seatNumber, isSelected, isBlocked, onSelect } = props;

//   const seatColor = isBlocked ? 'red' : isSelected ? 'green' : 'gray';

//   const seatClassName = isBlocked ? 'seat blocked' : 'seat';
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [blockedSeats, setBlockedSeats] = useState(['3-A', '4-C', '5-C']); // example of blocked seats

//   const handleSeatSelect = (seatNumber) => {
//     if (blockedSeats.includes(seatNumber)) {
//       return;
//     }

//     const seatIndex = selectedSeats.indexOf(seatNumber);

//     if (seatIndex > -1) {
//       setSelectedSeats([...selectedSeats.slice(0, seatIndex), ...selectedSeats.slice(seatIndex + 1)]);
//     } else {
//       setSelectedSeats([...selectedSeats, seatNumber]);
//     }

//   return (
//     <div
//       className={seatClassName}
//       style={{ backgroundColor: seatColor }}
//       onClick={() => onSelect(seatNumber)}
//     >
//       {seatNumber}
//     </div>
//   );
// }

// //  function Se(props) {
 
// //   };

//   const numAvailableSeats = 50 - blockedSeats.length - selectedSeats.length;

//   const seats = Array(10)
//     .fill()
//     .map((_, rowIndex) => {
//       return Array(5)
//         .fill()
//         .map((__, colIndex) => {
//           const seatNumber = `${rowIndex + 1}-${String.fromCharCode(65 + colIndex)}`;
//           const isSelected = selectedSeats.includes(seatNumber);
//           const isBlocked = blockedSeats.includes(seatNumber);

//           return (
//             <Se
//               key={seatNumber}
//               seatNumber={seatNumber}
//               isSelected={isSelected}
//               isBlocked={isBlocked}
//               onSelect={handleSeatSelect}
//             />
//           );
//         });
//     });

//   return (
//     <div>
//       <div className="seats-container">{seats}</div>
//       <div className="available-seats">Available Seats: {numAvailableSeats}</div>
//     </div>
//   );
// }

// export default Se;




// import React, { Component } from 'react';
// import './Se.css';

// class Se extends Component {
//   state = {
//     selectedSeats: [],
//     blockedSeats: ['A1', 'B3', 'C5'],
//     seats: ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3', 'C4', 'C5']
//   };

//   selectSeat = (seat) => {
//     if (this.state.selectedSeats.includes(seat)) {
//       this.setState({
//         selectedSeats: this.state.selectedSeats.filter((s) => s !== seat)
//       });
//     } else {
//       this.setState({
//         selectedSeats: [...this.state.selectedSeats, seat]
//       });
//     }
//   };

//   render() {
//     const { seats, blockedSeats, selectedSeats } = this.state;
//     return (
//       <div className="movie-booking-system">
//         <h2>Select Seats</h2>
//         <div className="seats">
//           {seats.map((seat) => (
//             <div
//               className={`seat ${blockedSeats.includes(seat) ? 'blocked' : ''} ${selectedSeats.includes(seat) ? 'selected' : ''}`}
//               key={seat}
//               onClick={() => this.selectSeat(seat)}
//             >
//               {seat}
//             </div>
//           ))}
//         </div>
//         <div className="selected-seats">
//           <p>Selected Seats: {selectedSeats.join(', ')}</p>
//         </div>
//       </div>
//     );
//   }
// }

// export default Se;







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


