import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Mail } from 'lucide-react';
import logoImg from '../assets/logo-transparent.png';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
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
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-top-row">
          <div className="footer-brand">
            <a href="/#" onClick={handleLogoClick} className="footer-logo" style={{ textDecoration: 'none' }}>
              <img src={logoImg} alt="Daneen Al Majaz" style={{ height: '70px', width: 'auto', marginBottom: '16px' }} />
            </a>
            <p className="footer-desc">
              Building world-class mobile applications for startups and enterprise clients globally.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/daneenalmajaz/?_rdr" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook size={18} /></a>
              <a href="https://www.instagram.com/daneenalmajaz?igsh=MXFrbjA0c3dlaG8xcA%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={18} /></a>
              <a href="https://x.com/Daneenalmajaz" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter size={18} /></a>
              <a href="https://www.linkedin.com/company/daneen-al-majaz/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin size={18} /></a>
            </div>
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
            <h4>Services</h4>
            <ul>
              <li><a href="/#services">iOS Development</a></li>
              <li><a href="/#services">Android Development</a></li>
              <li><a href="/#services">Cross-Platform</a></li>
              <li><a href="/#services">UI/UX Design</a></li>
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
          <div className="link-group">
            <h4>Reach Us Directly</h4>
            <ul>
              <li><a href="mailto:info@daneenalmajaz.in">info@daneenalmajaz.in</a></li>
              <li><a href="tel:+443001240371">+44 0300 124 0371 (UK)</a></li>
              <li style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px', lineHeight: '20px' }}>Mon–Sat, 9am–6pm GMT/IST</li>
              <li style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px', lineHeight: '20px' }}>Response within 1 business day</li>
            </ul>
          </div>
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
