import React from 'react'
import '../component/Mve.css'
import { Link } from "react-router-dom"
import img1 from '../assets/avatar.jpg'
import img2 from '../assets/bholo.jpeg'
import img3 from '../assets/Demon.jpeg'
import img4 from '../assets/operation.jpeg'
import img5 from '../assets/quant.jpeg'
import img6 from '../assets/65.jpeg'
import img7 from '../assets/child.jpeg'
import img8 from '../assets/agent.jpeg'
const Mve = () => {
  return (
    <>
           <div className='mn'>
            <h2>Latest Movies</h2>
        </div>
        <div className="Products">  
        
            {/* <div className="pro-container">
                <div className="pro">
                    <img src={img1} alt="product1"/>
                    <div className="des">
                        <span>brand</span>
                        <h4>Avatar</h4>
                        <div className="star">
                            <p>⭐⭐⭐⭐⭐</p>
                        </div>
                        <button type="button" className="btn btn-outline-warning">Book Now</button>
                    </div>
                    <a href="/">🛒</a>
                </div>
            </div> */}
    
            <div className="pro-container">
                <div className="pro">
                    <img src={img2} alt="product1"/>
                    <div className="des">
                        {/* <span>brand</span> */}
                        <h4>Bholaa</h4>
                        <div className="star">
                            <p>⭐⭐⭐⭐⭐</p>
                            <p>Drama/Family</p>
                        </div>
                        <button type="button" className="btn btn-outline-warning"><Link to="/seatLayout">Book Now</Link></button>
                    </div>
                    {/* <a href="/">🛒</a> */}
                </div>
            </div>
    
            <div className="pro-container">
                <div className="pro">
                    <img src={img3} alt="product1"/>
                    <div className="des">
                        {/* <span>brand</span> */}
                        <h4>Deymon Slayer</h4>
                        <div className="star">
                            <p>⭐⭐⭐⭐⭐</p>
                            <p>Action/Drama</p>
                        </div>
                        <button type="button" className="btn btn-outline-warning">Book Now</button>
                    </div>
                    {/* <a href="/">🛒</a> */}
                </div>
            </div>
    
            <div className="pro-container">
                <div className="pro">
                    <img src={img4} alt="product1"/>
                    <div className="des">
                        {/* <span>brand</span> */}
                        <h4>Operation Fortune</h4>
                        <div className="star">
                            <p>⭐⭐⭐⭐⭐</p>
                            <p>Action Thriller</p>
                        </div>
                        <button type="button" className="btn btn-outline-warning">Book Now</button>
                    </div>
                    {/* <a href="/">🛒</a> */}
                </div>
            </div>
    
            <div className="pro-container">
                <div className="pro">
                    <img src={img5} alt="product1"/>
                    <div className="des">
                        {/* <span>brand</span> */}
                        <h4>Quantumania</h4>
                        <div className="star">
                            <p>⭐⭐⭐⭐⭐</p>
                            <p>Sci-fi</p>
                        </div>
                        <button type="button" className="btn btn-outline-warning">Book Now</button>
                    </div>
                    {/* <a href="/">🛒</a> */}
                </div>
            </div>
    
            <div className="pro-container">
                <div className="pro">
                    <img src={img6} alt="product1"/>
                    <div className="des">
                        {/* <span>brand</span> */}
                        <h4>65</h4>
                        <div className="star"> 
                            <p>⭐⭐⭐⭐⭐</p>
                            <p>Thriller</p>
                        </div>
                        <button type="button" className="btn btn-outline-warning">Book Now</button>
                    </div>
                    {/* <a href="/">🛒</a> */}
                </div>
            </div>
    
            <div className="pro-container">
                <div className="pro">
                    <img src={img7} alt="product1"/>
                    <div className="des">
                        {/* <span>brand</span> */}
                        <h4>Children of the Corn</h4>
                        <div className="star">
                            <p>⭐⭐⭐⭐⭐</p>
                            <p>Thriller/Suspence</p>
                        </div>
                        <button type="button" className="btn btn-outline-warning">Book Now</button>
                    </div>
                    {/* <a href="/">🛒</a> */}
                </div>
            </div>
    
            {/* <div className="pro-container">
                <div className="pro">
                    <img src={img8} alt="product1"/>
                    <div className="des">
                        <span>brand</span>
                        <h4>Kids' Western Wear</h4>
                        <div className="star">
                            <p>⭐⭐⭐⭐⭐</p>
                        </div>
                        <h4>Rs. 700</h4>
                    </div>
                    <a href="/">🛒</a>
                </div>
            </div>
    
            <div className="pro-container">
                <div className="pro">
                    <img src="images/prod9.png" alt="product1">
                    <div className="des">
                        <span>brand</span>
                        <h4>Kids' Sweatshirt</h4>
                        <div className="star">
                            <p>⭐⭐⭐⭐⭐</p>
                        </div>
                        <h4>Rs. 650</h4>
                    </div>
                    <a href="/">🛒</a>
                </div>
            </div> */}
        </div>
   {/* </div> */}
    {/* </div> */}
    </>
  )
}

export default Mve
