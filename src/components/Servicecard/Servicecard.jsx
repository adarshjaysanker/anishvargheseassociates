import React from 'react';
import './servicecard.css'

function Servicecard({title, description}) {
  return (
    <div className='servicecard'>
      <div className="service-content">
        <h3 className='service-title'>{title}</h3>
        <p className='service-description'>{description}</p>
      </div>
      <button className='learn-more'>Learn More</button>
    </div>
  )
}

export default Servicecard
