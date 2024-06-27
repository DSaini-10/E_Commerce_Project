import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className="newsletter">
        <h1>Get Exclusive Offers Before Everyone Else</h1>
        <p>Subscribe to stay updated with the latest trends</p>
        <div>
            <input type="email" placeholder='Your Email'/>
            <button>Subscribe</button>
        </div>
    </div>

  )
}

export default NewsLetter