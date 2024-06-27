import React from 'react'
import './Navbar.css'
import navlogo from "../New_Assets/logo.png"
import navProfile from "../../assets/nav-profile.svg"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className='navlogo'>
        <img src={navlogo} alt="" className='nav-logo' />
        <h1>ZEN</h1>
      </div>
        <img src={navProfile} alt="" className='nav-profile'/>
    </div>
  )
}

export default Navbar