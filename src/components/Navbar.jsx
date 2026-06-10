import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import logoImg from '../assets/logo-transparent.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className="navbar container">
      <a href="/#" onClick={handleLogoClick} className="navbar-logo" style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={logoImg} alt="Daneen Al Majaz" className="navbar-logo-img" />
      </a>

      <ul className="navbar-links">
        <li><a href="/#home">Home</a></li>
        <li><a href="/#why-us">Why Us</a></li>
        <li><a href="/#services">Services</a></li>
        <li><a href="/#pricing">Pricing</a></li>
        <li><a href="/#portfolio">Portfolio</a></li>
        <li><a href="/#process">Process</a></li>
        <li><a href="/#testimonials">Testimonials</a></li>
        <li><a href="/#faq">FAQ</a></li>
      </ul>

      <a href="#contact" className="btn btn-primary navbar-btn" style={{ textDecoration: 'none' }}>Get Started</a>

      <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`navbar-mobile-overlay ${isOpen ? 'active' : ''}`} onClick={closeMenu}>
        <div className="navbar-mobile-drawer" onClick={(e) => e.stopPropagation()}>
          <div className="drawer-header">
            <a href="/#" className="navbar-logo" onClick={(e) => { handleLogoClick(e); closeMenu(); }}>
              <img src={logoImg} alt="Daneen Al Majaz" style={{ height: '44px', width: 'auto' }} />
            </a>
          </div>
          <ul className="drawer-links">
            <li><a href="/#home" onClick={closeMenu}>Home</a></li>
            <li><a href="/#why-us" onClick={closeMenu}>Why Us</a></li>
            <li><a href="/#services" onClick={closeMenu}>Services</a></li>
            <li><a href="/#pricing" onClick={closeMenu}>Pricing</a></li>
            <li><a href="/#portfolio" onClick={closeMenu}>Portfolio</a></li>
            <li><a href="/#process" onClick={closeMenu}>Process</a></li>
            <li><a href="/#testimonials" onClick={closeMenu}>Testimonials</a></li>
            <li><a href="/#faq" onClick={closeMenu}>FAQ</a></li>
          </ul>
          <div className="drawer-footer">
            <a href="#contact" className="btn btn-primary drawer-btn" style={{ textDecoration: 'none' }} onClick={closeMenu}>Get Started</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
