import React from 'react'
import './Offers.css'
import arrow_icon from '../Assets/arrow.png'

const Offers = () => {
  return (
    <div className="offers">
      <div className="offer-screen">    
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ON BEST SELLERS PRODUCTS</p>
            <div className="offers-latest-btn">
                <div>Check Now</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Offers