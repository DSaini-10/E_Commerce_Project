import React from 'react'
import './Hero.css'

import arrow_icon from '../Assets/arrow.png'

const Hero = () => {
  return (

    <div className="hero">
        <div className="hero-left">
            <div className='screen'>
            <h2>LATEST LAUNCHES BRING </h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new 🤩</p>
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>New Arrivals</div>
                <img src={arrow_icon} alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero