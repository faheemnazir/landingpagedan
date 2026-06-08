import React from 'react';
import './TrustedBrands.css';

const TrustedBrands = () => {
  const brands = [
    {
      type: 'prime',
      element: (
        <div className="brand-prime">
          <span className="prime-main">PRIME CO.</span>
          <span className="prime-sub">(MIDDLE EAST) LTD.</span>
        </div>
      )
    },
    {
      type: 'truston',
      element: (
        <div className="brand-truston">TRUSTON</div>
      )
    },
    {
      type: 'monstride',
      element: (
        <div className="brand-monstride">
          <span className="monstride-badge">M</span>
          <div className="monstride-text">
            <span className="monstride-main">Monstride</span>
            <span className="monstride-sub">.de</span>
          </div>
        </div>
      )
    },
    {
      type: 'prime',
      element: (
        <div className="brand-prime">
          <span className="prime-main">PRIME CO.</span>
          <span className="prime-sub">(MIDDLE EAST) LTD.</span>
        </div>
      )
    },
    {
      type: 'monstride',
      element: (
        <div className="brand-monstride">
          <span className="monstride-badge">M</span>
          <div className="monstride-text">
            <span className="monstride-main">Monstride</span>
            <span className="monstride-sub">.de</span>
          </div>
        </div>
      )
    }
  ];

  // Duplicate the array for seamless infinite marquee scrolling
  const marqueeBrands = [...brands, ...brands, ...brands];

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
                {brand.element}
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
