// import React from 'react'
// import Theatre from '../component/Theatre'

// const TheatrePage = () => {
//   return (
//     <div>
//       <Theatre/>
//     </div>
//   )
// }

import React from "react";
import { Navigate } from "react-router-dom";

function TheatrePage() {
  const [goToContact, setGoToContact] = React.useState(false);

  if (goToContact) {
    return <Navigate to="/contact" />;
  }

  return (
    <div>
      About
      <button
        onClick={() => {
          setGoToContact(true);
        }}
      >
        {" "}
        Go to the contact page
      </button>
    </div>
  );
}

export default TheatrePage
