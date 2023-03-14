// import { CardForm } from 'react-payment';
 
//  onSubmit: (card) => {
//   const { number, exp_month, exp_year, cvc, name, zip } = card;
//   Stripe.card.createToken({
//     number,
//     exp_month,
//     exp_year,
//     cvc,
//     name,
//     address_zip: zip
//   }, (status, response) => {
//     if (response.error) {
//       alert('Adding card failed with error: ' + response.error.message);
//     } else {
//       const cardToken = response.id;
//       // send cardToken to server to be saved under the current user
//       // show success message and navigate away from form
//     }
//   });
// }
 
// <CardForm
//   onSubmit={this.onSubmit}
//   getName={true}
//   getZip={true}
// />
// import React from 'react'
// import '../component/Payment.css'
// const Payment = () => {
//   return (
//     <div className='pay'>
//       <h3>Payment Page</h3>
//       <form>
//   <div className="mb-3">
//     <label for="exampleInputEmail1" className="form-label">Email address</label>
//     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label for="exampleInputEmail1" className="form-label">Name on Card</label>
//     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//     {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
//   </div>
//   <div className="mb-3">
//     <label for="exampleInputEmail1" className="form-label">Credit Card Number</label>
//     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//     {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
//   </div>
//   <div className="mb-3">
//     <label for="exampleInputEmail1" className="form-label">Expiery Month</label>
//     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//     {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
//   </div>
//   <div className="mb-3">
//     <label for="exampleInputPassword1" className="form-label">CVV</label>
//     <input type="password" className="form-control" id="exampleInputPassword1"/>
//   </div>
//   <div className="mb-3 form-check">
//     <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
//     <label className="form-check-label" for="exampleCheck1">Apply Offers</label>
//   </div>
//   <button type="submit" className="btn btn-primary mb-3">Submit</button>
// </form>
//     </div>
//   )
// }

// export default Payment
import React, { useState } from 'react';

function Payment() {

    // define the initial state of the payment form
    const [cardNumber, setCardNumber] = useState('');
    const [cardExpiryMonth, setCardExpiryMonth] = useState('');
    const [cardExpiryYear, setCardExpiryYear] = useState('');
    const [cardCVV, setCardCVV] = useState('');

    // handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // create a FormData object with the payment details
        const formData = new FormData();
        formData.append('card_number', cardNumber);
        formData.append('card_expiry_month', cardExpiryMonth);
        formData.append('card_expiry_year', cardExpiryYear);
        formData.append('card_cvv', cardCVV);

        // send the payment details to the PHP script
        fetch('process_payment.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // payment was successful
                console.log('Payment successful');
            } else {
                // payment failed
                console.log('Payment failed');
            }
        })
        .catch(error => {
            console.error('Error processing payment:', error);
        });
    };

    return (
        <div>
            <h1>Payment Page</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="card_number">Card Number:</label>
                <input type="text" id="card_number" value={cardNumber} onChange={e => setCardNumber(e.target.value)} /><br />

                <label htmlFor="card_expiry_month">Expiry Month:</label>
                <input type="text" id="card_expiry_month" value={cardExpiryMonth} onChange={e => setCardExpiryMonth(e.target.value)} /><br />

                <label htmlFor="card_expiry_year">Expiry Year:</label>
                <input type="text" id="card_expiry_year" value={cardExpiryYear} onChange={e => setCardExpiryYear(e.target.value)} /><br />

                <label htmlFor="card_cvv">CVV:</label>
                <input type="text" id="card_cvv" value={cardCVV} onChange={e => setCardCVV(e.target.value)} /><br />

                <button type="submit">Pay</button>
            </form>
        </div>
    );
}

export default Payment;
