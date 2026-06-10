import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import GDPR from './pages/GDPR';

function App() {
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      const app = document.querySelector('.app');
      const root = document.getElementById('root');
      
      if (!app) return;
      
      // Target laptops / smaller desktops from 1024px to 1599px
      if (width >= 1024 && width < 1600) {
        const baseWidth = 1536;
        const scale = width / baseWidth;
        
        if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
          app.style.transform = `scale(${scale})`;
          app.style.transformOrigin = 'top center';
          app.style.width = `${baseWidth}px`;
          app.style.margin = '0 auto';
          
          if (root) {
            root.style.height = `${app.getBoundingClientRect().height}px`;
            root.style.overflow = 'hidden';
          }
        } else {
          app.style.zoom = scale;
          // Reset any Firefox fallback styles
          app.style.transform = 'none';
          app.style.width = 'auto';
          app.style.margin = '0';
          if (root) {
            root.style.height = 'auto';
            root.style.overflow = 'visible';
          }
        }
      } else {
        // Reset styles for mobile/tablet and ultra-wide screens
        app.style.zoom = 'normal';
        app.style.transform = 'none';
        app.style.width = 'auto';
        app.style.margin = '0';
        if (root) {
          root.style.height = 'auto';
          root.style.overflow = 'visible';
        }
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/gdpr" element={<GDPR />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
