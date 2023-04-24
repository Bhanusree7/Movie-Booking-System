import React from 'react'
import classes from './BookMySeats.css';

const Seats = (props) => {

    return (
        // <div>
        //     {props.values.map(seat => {
        //        return <div key={seat}>{seat}</div>;
        //     })}
        // </div>
        <div className={classes.section}>
        {props.values.map(seat => {
            const isAvailable =   props.availableSeats.includes(seat);
            const isBooked = props.bookedSeats.includes(seat);
            let seatClass;
            if(!isAvailable) {
                seatClass = classes.disabled;
            }
            if(isBooked) {
                seatClass = classes.booked;
            }
            return <div className={seatClass}key={seat}>{seat}  </div>;
        })}
    </div>
      );
  }
  export default Seats;