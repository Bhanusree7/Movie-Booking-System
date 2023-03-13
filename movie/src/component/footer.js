import React from 'react'
import './FooterStyles.css'
const footer = () => {
  return (
    <div>
      

      <section className="contact">
        <div className="main-contact">
            <h3>E-Commerce</h3>
            <h5>Let's Connect With Us</h5>
            <div className="icons">
                <a href="/"><i className="fa fas-facebook"></i></a>
                <a href="/"><i className="bx bxl-instagram-alt"></i></a>
                <a href="/"><i className="bx bxl-twitter"></i></a>
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
            <h3>Our Services</h3>
            <li><a href="/">Pricing</a></li>
            <li><a href="/">Free Shipping</a></li>
            <li><a href="/">Gift Cards</a></li>
        </div>

        <div className="main-contact">
            <h3>Shopping</h3>
            <li><a href="/">Clothing Store</a></li>
            <li><a href="/">Furniture Store</a></li>
            <li><a href="/">Groceries</a></li>
            <li><a href="/">Sales</a></li>
        </div>
    </section>
    <div className="last-text">
        <p>
            Copyright © 2022 All rights reserved | This belongs to E-Commerce
            Website
        </p>
    </div>
    <a href="/" class="top"><i className="bx bx-up-arrow-alt"></i></a>

    </div>
  )
}

export default footer
