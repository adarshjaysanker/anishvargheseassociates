import React from 'react';
import './banner.css'

function Banner() {
  return (
    <div className='banner'>
      <div className="banner-content">
        <h1 className='banner-title'>Anish Varghese Associates</h1>
        <p className='banner-tagline'>Your Trusted Partner in Indian Constitutional Law</p>
        <button className="connect-button" onClick={() => window.location.href = 'mailto:adarshjayasanker5@gmail.com'}>CONNECT WITH US NOW</button>
      </div>
    </div>
  )
}

export default Banner
