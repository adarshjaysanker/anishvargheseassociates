import React from 'react';
import './footer.css'

function Footer() {
  return (
    <div className='footer'>
    <div className='footer-container'>
      <div className='footer-content'>
        <h3 className='footer-title'>Contact Us</h3>
        <p className='footer-info'>123 Legal Street, City Name, Pin Code</p>
        <p className='footer-info'>Email: info@example.com</p>
        <p className='footer-info'>Phone: +91-1234567890</p>
      </div>
      <div className='footer-social'>
        <h3 className='footer-title'>Follow Us</h3>
        <div className='social-icons'>
          <a href='https://www.facebook.com' className='social-icon' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='https://www.twitter.com' className='social-icon' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='https://www.linkedin.com' className='social-icon' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-linkedin-in'></i>
          </a>
          <a href='https://www.instagram.com' className='social-icon' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-instagram'></i>
          </a>
        </div>
      </div>
    </div>
    <div className='footer-bottom'>
      <p className='footer-text'>&copy; 2024 Anish Varghese Associates. All Rights Reserved.</p>
      <p className='footer-text'>
        <a href='/privacy-policy' className='footer-link'>Privacy Policy</a> | <a href='/terms-of-use' className='footer-link'>Terms of Use</a>
      </p>
    </div>
  </div>
  )
}

export default Footer
