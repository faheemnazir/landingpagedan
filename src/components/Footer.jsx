import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import logoImg from '../assets/logo-transparent.png';
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-top-row">
          <div className="footer-brand">
            <a href="/#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="footer-logo" style={{ textDecoration: 'none' }}>
              <img src={logoImg} alt="Daneen Al Majaz" style={{ height: '70px', width: 'auto', marginBottom: '16px' }} />
            </a>
            <p className="footer-desc">
              Building world-class mobile applications for startups and enterprise clients globally.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Twitter"><FaTwitter size={18} /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin size={18} /></a>
              <a href="#" aria-label="GitHub"><FaGithub size={18} /></a>
              <a href="#" aria-label="Email"><Mail size={18} /></a>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Services</h4>
              <ul>
                <li><a href="/#services">iOS Development</a></li>
                <li><a href="/#services">Android Development</a></li>
                <li><a href="/#services">Cross-Platform</a></li>
                <li><a href="/#services">UI/UX Design</a></li>
              </ul>
            </div>
            <div className="link-group">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">API Reference</a></li>
                <li><a href="/#faq">Support Center / FAQ</a></li>
              </ul>
            </div>
            <div className="link-group">
              <h4>Legal</h4>
              <ul>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms-and-conditions">Terms of Service</Link></li>
                <li><Link to="/privacy-policy">Cookie Policy</Link></li>
                <li><Link to="/gdpr">GDPR</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-newsletter">
          <div className="newsletter-text">
            <h4>Stay Updated</h4>
            <p>Subscribe to our newsletter for the latest insights on mobile app development.</p>
          </div>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit" className="btn-subscribe">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="container">
        <div className="footer-bottom">
          <p>&copy; 2026 Daneen Al Majaz. All rights reserved.</p>
          <div className="bottom-links">
            <Link to="/privacy-policy">Privacy</Link>
            <Link to="/terms-and-conditions">Terms</Link>
            <Link to="/privacy-policy">Cookies</Link>
          </div>
          <a href="#" className="scroll-to-top" aria-label="Scroll to top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
