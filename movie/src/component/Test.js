// import React, { useState } from 'react';
// import './Test.css'; // import your CSS file

// function Test() {
//   const [seats, setSeats] = useState([
//     { id: 1, isAvailable: true },
//     { id: 2, isAvailable: false },
//     { id: 3, isAvailable: true },
//     // add more seats as needed
//   ]);

//   return (
//     <div className="movie-booking">
//       <h2>Choose your seats</h2>
//       <div className="seats-container">
//         {seats.map((seat) => (
//           <div
//             key={seat.id}
//             className={`seat ${!seat.isAvailable ? 'unavailable' : ''}`}
//             onClick={() => {
//               if (seat.isAvailable) {
//                 setSeats(
//                   seats.map((s) =>
//                     s.id === seat.id ? { ...s, isAvailable: false } : s
//                   )
//                 );
//               }
//             }}
//           >
//             {seat.id}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Test;

import React, { useState } from 'react';
import './Test.css'; // import your CSS file

function Test() {
  const [seats, setSeats] = useState([
    { id: 1, isAvailable: true },
    { id: 2, isAvailable: false },
    { id: 3, isAvailable: true },
    // add more seats as needed
  ]);

  return (
    <div className="movie-booking">
      <h2>Choose your seats</h2>
      <div className="seats-container">
        {seats.map((seat) => (
          <div
            key={seat.id}
            className={`seat ${!seat.isAvailable ? 'unavailable' : ''}`}
            onClick={() => {
              if (seat.isAvailable) {
                setSeats(
                  seats.map((s) =>
                    s.id === seat.id ? { ...s, isAvailable: false } : s
                  )
                );
              }
            }}
          >
            {seat.id}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Test;