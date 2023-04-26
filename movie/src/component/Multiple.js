// import { useState } from 'react';

// const Seat = ({ isSelected }) => {
//   const seatColor = isSelected ? 'green' : 'gray';
//   return <div style={{ backgroundColor: seatColor }}>Seat</div>;
// };

// const Multiple = () => {
//   const [isSelected, setIsSelected] = useState(false);

//   const handleRowClick = () => {
//     setIsSelected(!isSelected);
//   };

//   return (
//     <div onClick={handleRowClick}>
//       <Seat isSelected={isSelected} />
//       <Seat isSelected={isSelected} />
//       <Seat isSelected={isSelected} />
//       <Seat isSelected={isSelected} />
//     </div>
//   );
// };
// export default Multiple

// import React, { useState } from 'react';

// const Multiple = () => {
//   // define state variables
//   const [rows, setRows] = useState([
//     { id: 1, seats: [false, false, false, false, false, false] },
//     { id: 2, seats: [false, false, false, false, false, false] },
//     { id: 3, seats: [false, false, false, false, false, false] },
//     { id: 4, seats: [false, false, false, false, false, false] },
//     { id: 5, seats: [false, false, false, false, false, false] },
//     { id: 6, seats: [false, false, false, false, false, false] },
//     { id: 7, seats: [false, false, false, false, false, false] },
//     { id: 8, seats: [false, false, false, false, false, false] },
//     { id: 9, seats: [false, false, false, false, false, false] },
//     { id: 10, seats: [false, false, false, false, false, false] },
//   ]);
//   const [selectedSeats, setSelectedSeats] = useState([]);
  
//   // define seat click handler
//   const handleSeatClick = (rowIndex, seatIndex) => {
//     // toggle seat selection
//     const updatedRows = [...rows];
//     updatedRows[rowIndex].seats[seatIndex] = !updatedRows[rowIndex].seats[seatIndex];
//     setRows(updatedRows);
    
//     // update selected seats
//     const seatId = `${updatedRows[rowIndex].id}-${seatIndex + 1}`;
//     const updatedSelectedSeats = selectedSeats.includes(seatId)
//       ? selectedSeats.filter(id => id !== seatId)
//       : [...selectedSeats, seatId];
//     setSelectedSeats(updatedSelectedSeats);
//   };
  
//   // define row color getter
//   const getRowColor = rowIndex => {
//     if (selectedSeats.some(id => id.startsWith(`${rows[rowIndex].id}-`))) {
//       // row contains selected seats
//       return 'green';
//     } else if (rows[rowIndex].seats.every(seat => seat)) {
//       // row is fully booked
//       return 'red';
//     } else {
//       // row is available
//       return 'white';
//     }
//   };
  
//   return (
//     <div>
//       <h1>Movie Ticket Booking System</h1>
//       <p>Select seats by clicking on them. Selected seats are highlighted in green.</p>
//       <p>Booked seats are highlighted in red.</p>
//       <table>
//         <tbody>
//           {rows.map((row, rowIndex) => (
//             <tr key={row.id} style={{ backgroundColor: getRowColor(rowIndex) }}>
//               <td>Row {row.id}</td>
//               {row.seats.map((isBooked, seatIndex) => (
//                 <td
//                   key={seatIndex}
//                   onClick={() => handleSeatClick(rowIndex, seatIndex)}
//                   style={{ backgroundColor: isBooked ? 'red' : selectedSeats.includes(`${row.id}-${seatIndex + 1}`) ? 'green' : 'white' }}
//                 >
//                   Seat {seatIndex + 1}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <p>Selected seats: {selectedSeats.join(', ')}</p>
//     </div>
//   );
// };

// export default Multiple



// import React,{useState} from 'react'
// import { Link } from 'react-router-dom';

// const Multiple = () => {
//   const [selectedSeat, setSelectedSeat] = useState('');
//   // const [selectedDate, setSelectedDate] = useState('');
//   // const [selectedTime, setSelectedTime] = useState('');

//   const handleTheatreChange = (event) => {
//     setSelectedSeat(event.target.value);
//   };

//   // const handleDateChange = (event) => {
//   //   setSelectedDate(event.target.value);
//   // };

//   // const handleTimeChange = (event) => {
//   //   setSelectedTime(event.target.value);
//   // };

//   return (
//     <div className='Ctr'>
//       <label htmlFor="theatre-select">Select a Theatre:</label>
//       <select id="theatre-select" value={selectedSeat} onChange={handleTheatreChange}>
//         <option value="">--Please choose a theatre--</option>
//         <option value="theatre-1">Theatre 1</option>
//         <option value="theatre-2">Theatre 2</option>
//         <option value="theatre-3">Theatre 3</option>
//       </select>

//       {/* {selectedSeat && (
//         <div>
//           <label htmlFor="date-select">Select a Date:</label>
//           <select id="date-select" value={selectedDate} onChange={handleDateChange}>
//             <option value="">--Please choose a date--</option>
//             <option value="2023-03-15">March 15, 2023</option>
//             <option value="2023-03-16">March 16, 2023</option>
//             <option value="2023-03-17">March 17, 2023</option>
//           </select>
//         </div>
//       )}

//       {selectedDate && (
//         <div>
//           <label htmlFor="time-select">Select a Show Time:</label>
//           <select id="time-select" value={selectedTime} onChange={handleTimeChange}>
//             <option value="">--Please choose a show time--</option>
//             <option value="10:00 AM">10:00 AM</option>
//             <option value="1:00 PM">1:00 PM</option>
//             <option value="4:00 PM">4:00 PM</option>
//             <option value="7:00 PM">7:00 PM</option>
//           </select>
//         </div>
//       )} */}

//       {/* {selectedTime && ( */}
//         <div>
//           <p>
//             You have selected {selectedSeat.join(', ')} 
//           </p>
//           <button onClick={() => alert('Booking seats...')}><Link to="/MvePage">Book Seats</Link></button>
//         </div>
//       {/* )} */}
//     </div>
//   );
// };
// export default Multiple




// import React, { useState } from 'react';
// import './Se.css';

// function Seat(props) {
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

// function SeatRow(props) {
//   const [isSelected, setIsSelected] = useState(false);

//   const toggleSelected = () => {
//     setIsSelected(!isSelected);
//     props.toggleSelected(!isSelected, props.rowNumber);
//   };

//   const rowSeats = [];
//   for (let i = 0; i < props.numSeats; i++) {
//     const seatNumber = `${props.rowLetter}${i + 1}`;
//     rowSeats.push(<Seat key={seatNumber} seatNumber={seatNumber} isSelected={isSelected} />);
//   }

//   return (
//     <div className="seat-row" onClick={toggleSelected}>
//       <div className="row-letter">{props.rowLetter}</div>
//       <div className="row-seats">{rowSeats}</div>
//     </div>
//   );
// }

// function SeatMap(props) {
//   const [selectedSeats, setSelectedSeats] = useState({});

//   const toggleSelected = (isSelected, seatId) => {
//     if (isSelected) {
//       setSelectedSeats({...selectedSeats, [seatId]: true});
//     } else {
//       const {[seatId]: _, ...newSelectedSeats} = selectedSeats;
//       setSelectedSeats(newSelectedSeats);
//     }
//   };

//   const rows = [];
//   for (let i = 0; i < props.numRows; i++) {
//     const rowLetter = String.fromCharCode(65 + i);
//     rows.push(
//       <SeatRow
//         key={rowLetter}
//         rowLetter={rowLetter}
//         numSeats={props.numSeats}
//         toggleSelected={toggleSelected}
//         rowNumber={i}
//       />
//     );
//   }

//   return <div className="seat-map">{rows}</div>;
// }

// function Multiple() {
//   return (
//     <div className="movie-ticket-booking-page">
//       <h1>Movie Ticket Booking</h1>
//       <SeatMap numRows={10} numSeats={10} />
//     </div>
//   );
// }

// export default Multiple;


// import React, { useState } from 'react';
// import './Multiple.css'
// const rows = [
//   ['A1', 'A2', 'A3', 'A4', 'A5'],
//   ['B1', 'B2', 'B3', 'B4', 'B5'],
//   ['C1', 'C2', 'C3', 'C4', 'C5'],
//   ['D1', 'D2', 'D3', 'D4', 'D5'],
//   ['E1', 'E2', 'E3', 'E4', 'E5'],
// ];

// const Multiple = () => {
//   const [selectedRow, setSelectedRow] = useState(null);
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   const handleRowSelect = (rowNumber) => {
//     setSelectedRow(rowNumber);
//     setSelectedSeats(rows[rowNumber]);
//   }

//   const Seat = ({ seat, selected, onClick }) => {
//     const isSelectedSeat = selected && selectedSeats.includes(seat);
//     const seatClassName = isSelectedSeat ? 'seat seat-selected' : 'seat';

//     return (
//       <div className={seatClassName} onClick={onClick}>
//         {seat}
//       </div>
//     );
//   }

//   return (
//     <div>
//       {rows.map((row, index) => (
//         <div className="row" key={index}>
//           {row.map((seat, index) => (
//             <Seat
//               key={index}
//               seat={seat}
//               selected={selectedRow === index}
//               onClick={() => handleRowSelect(index)}
//             />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Multiple;


import React, { useState } from 'react';
import './Multiple.css'
import { Link } from "react-router-dom";

const r = [
  ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8'],
  ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8'],
  ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8'],
  ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8'],
  ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8'],
  ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8'],
  ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8'],
  ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8'],
  // ['I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9'],
];

const Multiple = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleRowSelect = (rowNumber) => {
    setSelectedRow(rowNumber);
    setSelectedSeats(r[rowNumber]);
  }

  const Seat = ({ seat, onClick }) => {
    const isSelectedSeat = selectedSeats.includes(seat);
    const seatClassName = isSelectedSeat ? 'seat seat-selected' : 'seat';

    return (
      <div className={seatClassName} onClick={onClick}>
        {seat}
      </div>
    );
  }

  return (
    <div>
    
      <div className='head'>
       <h1 style={{ marginTop: '4rem' }}><center>Screen</center></h1></div>
      {r.map((row, index) => (
        <div className="r" key={index}>
          {row.map((seat, index) => (
            <Seat
              key={index}
              seat={seat}
              onClick={() => handleRowSelect(index)}
            />
          ))}
        </div>
      ))}
      <div className='pu'>
        <p>You have booked an entire row of : {selectedSeats.join(", ")}</p>
        <ul>
  
      <li>Green: Selected</li>
      <li>Gray: Available</li>
        </ul>
       <button ><Link to="/PaymentPage">Confirm Booking</Link></button></div>
    </div>
  );
}

export default Multiple;