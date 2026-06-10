import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logoImg from '../assets/logo-transparent.png';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

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

      <a href="#contact" className="btn btn-primary navbar-btn" style={{ textDecoration: 'none' }}>
        <span className="btn-text-desktop">Get Started</span>
        <span className="btn-text-mobile">Get Free Consultation</span>
      </a>
    </nav>
  );
};

export default Navbar;
