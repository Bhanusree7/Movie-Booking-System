import React from 'react';
import SeatMap from './SeatMap';
import Se from './Se';
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTv } from "@fortawesome/free-solid-svg-icons";

function MovieTicketBookingPage() {
  return (
    <div className="movie-ticket-booking-page">
      <h1 style={{ marginTop: '4rem' }}><center>Movie Ticket Booking</center></h1>
      {/* <FontAwesomeIcon icon={faTv} size="2x" color="#333" /> */}
      <SeatMap numRows={12} numCols={5} />
      {/* <SeatMap  /> */}
      {/* <p>
         You have selected {bookedSeats.length}{" "}
        {bookedSeats.length === 1 ? "seat" : "seats"} :{" "}
         {bookedSeats.join(", ")}
       </p> */}
      <button ><Link to="/PaymentPage">Confirm Booking</Link></button>
    </div>
  );
}

export default MovieTicketBookingPage;
