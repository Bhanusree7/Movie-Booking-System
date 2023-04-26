import React from 'react';
// import Multiple from './Multiple';
import { FaCheckCircle } from 'react-icons/fa';
import '../component/confirm.css'
const PaymentConfirmation = () => {
  return (
    
      <div className="confirmation-container">
        <div className="confirmation-message">
            <FaCheckCircle className="confirmation-icon" />
            <h2 className="confirmation-header">Payment Confirmed!</h2>
            <p>Thank you for booking your movie tickets with us.</p>
            <p>An email with your booking details has been sent to you.</p>
            {/* <Multiple/> */}
        </div>
    </div>
  );
};

export default PaymentConfirmation;
