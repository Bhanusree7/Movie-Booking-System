
import React from "react";
import { Navigate } from "react-router-dom";

function MvePage() {
  const [goToContact, setGoToContact] = React.useState(false);

  if (goToContact) {
    return <Navigate to="/Theatre" />;
  }

  return (
    <div>
      About
      <button
        onClick={() => {
          setGoToContact(true);
        }}
      >
      </button>
    </div>
  );
}

export default MvePage
