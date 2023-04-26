import React from 'react';
import SeatMap from './SeatMap';
import Se from './Se';
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTv } from "@fortawesome/free-solid-svg-icons";

function MovieTicketBookingPage() {

  return (
    <div className="movie-ticket-booking-page">
      <h1 style={{ marginTop: '4rem' }}><center>Screen</center></h1>
      <ul>
      <li>Red:Unavailable</li>
      <li>Green:Selected</li>
      <li>Gray:Available</li>
      </ul>
      {/* <FontAwesomeIcon icon={faTv} size="2x" color="#333" /> */}
      <SeatMap numRows={12} numCols={5} />
    
      
     

      {/* <p>You've selected:</p> */}
      {/* <SeatMap  /> */}
      {/* <p>
         You have selected {bookedSeats.length}{" "}
        {bookedSeats.length === 1 ? "seat" : "seats"} :{" "}
         {bookedSeats.join(", ")}
       </p> */}
      {/* <div>
        {
          selectedScreen && selectedSeats?.length>0&&(
            <div>
              <h3> Selected Seats: <>{selectedSeats.map(index=>index+1).join(", ")}</></h3>
              <h3>No.of tickets: {selectedSeats?.length}</h3>
              </div>
          )
        }
      </div> */}
     
      <button ><Link to="/PaymentPage">Confirm Booking</Link></button>
    </div>
  );
}

export default MovieTicketBookingPage;
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