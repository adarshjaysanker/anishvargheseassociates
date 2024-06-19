import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className='header'>
        <div className="header-container">
            <div className="logo">
                Anish Varghese Associates
            </div>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">About Us</li>
                    <li className="nav-item">Services</li>
                    <li className="nav-item">Practice Areas</li>
                    <li className="nav-item">Resources</li>
                    <li className="nav-item">Contact Us</li>
                    <li className="nav-item">FAQ</li>
                </ul>
            </nav>
        </div>
    </header>
  );
};

export default Header;
