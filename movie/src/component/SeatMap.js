// import React from 'react';
// import Se from './Se';

// function SeatMap(props) {
//   const rows = [];
//   for (let i = 0; i < props.numRows; i++) {
//     const rowSeats = [];
//     for (let j = 0; j < props.numCols; j++) {
//       const seatNumber = `${i + 1}-${String.fromCharCode(65 + j)}`;
//       rowSeats.push(<Se key={seatNumber} seatNumber={seatNumber} />);
//     }
//     rows.push(<div key={i} className="row">{rowSeats}</div>);
//   }

//   return <div className="seat-map">{rows}</div>;
// }

// export default SeatMap;

import React from 'react';
import Se from './Se';

function SeatMap(props) {
  const numRows = 12;
  const numCols = 5;
  const rows = [];

  for (let i = 0; i < numRows; i++) {
    const rowSeats = [];
    for (let j = 0; j < numCols; j++) {
      const seatNumber = `${i + 1}-${String.fromCharCode(65 + j)}`;
      rowSeats.push(<Se key={seatNumber} seatNumber={seatNumber} />);
    }
    rows.push(<div key={i} className="row">{rowSeats}</div>);
  }

  return <div className="seat-map">{rows}</div>;
}

export default SeatMap;

// import React, { useState } from 'react';
// import Se from './Se';

// function SeatMap(props) {
//   const numRows = 10;
//   const numCols = 5;

//   const [bookedSeats, setbookedSeats] = useState([]);

//   const handleSeatClick = (seatNumber) => {
//     if (bookedSeats.includes(seatNumber)) {
//       setbookedSeats(bookedSeats.filter((seat) => seat !== seatNumber));
//     } else {
//       setbookedSeats([...bookedSeats, seatNumber]);
//     }
//   };

//   const isSeatSelected = (seatNumber) => bookedSeats.includes(seatNumber);

//   const rows = [];

//   for (let i = 0; i < numRows; i++) {
//     const rowSeats = [];
//     for (let j = 0; j < numCols; j++) {
//       const seatNumber = `${i + 1}-${String.fromCharCode(65 + j)}`;
//       const isSelected = isSeatSelected(seatNumber);
//       rowSeats.push(
//         <Se
//           key={seatNumber}
//           seatNumber={seatNumber}
//           isSelected={isSelected}
//           onClick={handleSeatClick}
//         />
//       );
//     }
//     rows.push(<div key={i} className="row">{rowSeats}</div>);
//   }

//   return <div className="seat-map">{rows}</div>;
// }

// export default SeatMap;




