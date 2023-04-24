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
import React from 'react'
import '../component/Payment.css'
import {Link} from 'react-router-dom'

const Payment = () => {
  return (
    <div className='pay'>
      <h3>Payment Page</h3>
      <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name on Card</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Credit Card Number</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Expiery Month</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">CVV</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Apply Offers</label>
  </div>
  <button type="submit" className="btn btn-primary "><Link to="/PaymentConfirmationPage">Submit</Link></button>
</form>
    </div>
  )
}

export default Payment