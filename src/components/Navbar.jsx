import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import logoImg from '../assets/logo-transparent.png';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <>
      <nav className="navbar container">
        <a href="/#" onClick={handleLogoClick} className="navbar-logo" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={logoImg} alt="Daneen Al Majaz" className="navbar-logo-img" />
        </a>

        <ul className="navbar-links">
          <li><a href="/#why-us">Why Us</a></li>
          <li><a href="/#services">Services</a></li>
          <li><a href="/#pricing">Pricing</a></li>
          <li><a href="/#portfolio">Portfolio</a></li>
          <li><a href="/#process">Process</a></li>
          <li><a href="/#testimonials">Testimonials</a></li>
          <li><a href="/#faq">FAQ</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>

        <div className="navbar-actions">
          <a href="#contact" className="btn btn-primary navbar-btn" style={{ textDecoration: 'none' }}>
            <span className="btn-text-desktop">Get Started</span>
            <span className="btn-text-mobile">Get Free Consultation</span>
          </a>
          <a href="tel:+443001240371" className="navbar-call-btn" aria-label="Call Us">
            <Phone size={18} />
          </a>
        </div>
      </nav>

      <a href="tel:+443001240371" className={`floating-call-btn ${scrolled ? 'visible' : ''}`} aria-label="Call Us Now">
        <Phone size={24} />
      </a>
    </>
  );
};

export default Navbar;
