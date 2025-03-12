import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Close menu when resizing to desktop
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo section */}
        <div className="navbar-logo">
          <div className="logo-icon">
            <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="20" fill="#488D94" />
              <circle cx="25" cy="25" r="15" fill="black" stroke="white" strokeWidth="2" />
              <circle cx="25" cy="25" r="5" fill="white" />
              <rect x="42" y="22" width="8" height="6" fill="#488D94" rx="1" />
            </svg>
          </div>
          <span className="logo-text">Eeshal Electronics</span>
        </div>

        {/* Hamburger menu button for mobile */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Navigation menu - desktop and mobile */}
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <a href="#" className="navbar-link">Home</a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">Services</a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">About</a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">Products</a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;