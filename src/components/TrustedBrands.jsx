import React from 'react';
import './TrustedBrands.css';

const TrustedBrands = () => {
  const brandLogos = [
    { src: "/images/114a6bba-3d7e-4f6a-b5b4-f098bb5b9d45-removebg-preview.png", alt: "Client Logo" },
    { src: "/images/ChatGPT_Image_Apr_6__2026__01_46_46_PM-removebg-preview.png", alt: "Client Logo" },
    { src: "/images/Screenshot_2026-01-16_155336-removebg-preview (1).png", alt: "Client Logo" },
    { src: "/images/digital_white-removebg-preview.png", alt: "Client Logo" },
    { src: "/images/image (10).png", alt: "Client Logo" },
    { src: "/images/image (12).png", alt: "Client Logo" },
    { src: "/images/image (7).png", alt: "Client Logo" },
    { src: "/images/image (8).png", alt: "Client Logo" },
    { src: "/images/image (9).png", alt: "Client Logo" },
    { src: "/images/image__11_-removebg-preview.png", alt: "Client Logo" },
    { src: "/images/image__15_-removebg-preview (1).png", alt: "Client Logo" },
    { src: "/images/image__16_-removebg-preview.png", alt: "Client Logo" },
    { src: "/images/image__5_-removebg-preview.png", alt: "Client Logo" },
    { src: "/images/royal_palm_full_white.png", alt: "Client Logo" },
    { src: "/images/spectra_white-removebg-preview.png", alt: "Client Logo", className: "logo-lg" },
    { src: "/images/tailor pro.png", alt: "Client Logo", className: "logo-lg" }
  ];

  // Duplicate for seamless infinite marquee scrolling
  const marqueeBrands = [...brandLogos, ...brandLogos];

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
