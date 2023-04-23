
// import React from "react";
// import { Navigate } from "react-router-dom";

// function MvePage() {
//   const [goToContact, setGoToContact] = React.useState(false);

//   if (goToContact) {
//     return <Navigate to="/Theatre" />;
//   }

//   return (
//     <div>
//       About
//       <button
//         onClick={() => {
//           setGoToContact(true);
//         }}
//       >
//       </button>
//     </div>
//   );
// }

// export default MvePage
// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// function MvePage() {
//   const navigate=useNavigate();
//   function handleClick(){
//     navigate("/Launching")
//   }
//   return (
//     <div>
//       <button onClick={(e)=>handleClick()}>Click me to redirect</button>
//     </div>
//   )
// }

// export default MvePage
import React from 'react'
import Launching from '../component/Launching'
import Se from '../component/Se'
// import SeatMap from '../component/SeatMap'
import MovieTicketBookingPage from '../component/MovieTicketBookingPage'
// import MovieBooking from '../component/moviebooking'
function MvePage() {
  return (
    <div>
      <Launching></Launching>
      <Se></Se>
      {/* <SeatMap></SeatMap> */}
      <MovieTicketBookingPage></MovieTicketBookingPage>
    </div>
  )
}

export default MvePage


