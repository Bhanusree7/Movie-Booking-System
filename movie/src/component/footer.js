import React from 'react'
import './FooterStyles.css'
// import {AiFillFacebook} from 'react-icons/fa';
const footer = () => {
  return (
    <div>
      

      <section className="contact">
        <div className="main-contact">
            <h3>One stop Booking</h3>
            <h5>Connect With Us</h5>
            <div className="icons">
                {/* <a href="/"><AiFillFacebook/>Facebook</a> */}
                <a href="/">Instagram<i className="bx bxl-instagram-alt"></i></a>
                <a href="/">Twitter<i className="bx bxl-twitter"></i></a>
            </div>
        </div>

        <div className="main-contact">
            <h3>Explore</h3>
            <li><a href="/">Home</a></li>
            <li><a href="/">Featured</a></li>
            <li><a href="/">New</a></li>
            <li><a href="/">Contact</a></li>
        </div>

        <div className="main-contact">
            <h3>Our Deals</h3>
            <li><a href="/">Vouchers</a></li>
            <li><a href="/">Offers</a></li>
            <li><a href="/">Premium Membership</a></li>
        </div>

        <div className="main-contact">
            <h3>Others</h3>
            <li><a href="/">24 Hr Service</a></li>
            <li><a href="/">Automated Mail Generation</a></li>
            <li><a href="/">User-Friendly</a></li>
            <li><a href="/">Minimalistic</a></li>
        </div>
    </section>
    <div className="last-text">
        <p>
            Copyright © 2022 All rights reserved | This belongs to Cineplex Connect
            Website
        </p>
    </div>
    <a href="/" class="top"><i className="bx bx-up-arrow-alt"></i></a>

    </div>
  )
}

export default footer
