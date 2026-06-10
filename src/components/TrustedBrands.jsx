import React from 'react';
import './TrustedBrands.css';

// Import the same client logos as the portfolio section
import bakirImg from '../assets/bakir.png';
import cemtacImg from '../assets/cemtac.png';
import coldstoreImg from '../assets/coldstore.png';
import digidalImg from '../assets/digidal.png';
import kashmiriRealtorImg from '../assets/kashmiriRealtor.png';
import snookerImg from '../assets/snooker.png';
import valeMountsImg from '../assets/vale_mounts.png';
import ziplynowImg from '../assets/ziplynow.png';

const TrustedBrands = () => {
  const brandLogos = [
    { src: kashmiriRealtorImg, alt: "Kashmiri Realtor" },
    { src: cemtacImg, alt: "Cemtac Cement" },
    { src: snookerImg, alt: "The Snooker Academy" },
    { src: valeMountsImg, alt: "Vale Mounts" },
    { src: coldstoreImg, alt: "ColdStore J&K" },
    { src: bakirImg, alt: "Bakir Group" },
    { src: digidalImg, alt: "Digidal" },
    { src: ziplynowImg, alt: "ZiplyNow" }
  ];

  // Duplicate for seamless infinite marquee scrolling
  const marqueeBrands = [...brandLogos, ...brandLogos, ...brandLogos];

  const stats = [
    { value: "500+", label: "Happy Clients" },
    { value: "50+", label: "Industry Partners" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <section className="trusted-brands container" id="trusted-brands">
      <div className="trusted-header">
        <h2 className="heading-lg">Trusted By <span className="text-gold">Industry Leaders</span></h2>
        <p className="text-body trusted-subtitle">Partnering with the best to deliver excellence</p>
      </div>

      {/* Infinite Sliding Marquee */}
      <div className="marquee-wrapper">
        <div className="marquee-fade-left"></div>
        <div className="marquee-fade-right"></div>
        <div className="marquee-track">
          <div className="marquee-content">
            {marqueeBrands.map((brand, idx) => (
              <div key={idx} className="brand-card">
                <img 
                  loading="lazy" 
                  decoding="async" 
                  src={brand.src} 
                  alt={brand.alt} 
                  className={brand.className || ''} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="trusted-stats-grid">
        {stats.map((stat, idx) => (
          <div key={idx} className="trusted-stat-card">
            <div className="trusted-stat-value">{stat.value}</div>
            <div className="trusted-stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedBrands;
