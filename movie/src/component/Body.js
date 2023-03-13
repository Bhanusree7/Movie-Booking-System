import React, { Fragment } from 'react'
import img1 from '../assets/avatar.jpg'
// import img2 from '../assets/voucher1.jpeg'
// import img3 from '../assets/voucher2.jpeg'

const Body = () => {
  return (
    <Fragment>
    <div>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      {/* <img src={img2} className="d-block w-100" alt="..."/> */}
    </div>
    <div className="carousel-item">
      {/* <img src={img3} className="d-block w-100" alt="..."/> */}
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
    </Fragment>
    

  )
}

export default Body
