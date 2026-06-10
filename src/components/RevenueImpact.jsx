import React from 'react';
import './RevenueImpact.css';

const RevenueImpact = () => {
  const stats = [
    {
      value: "3×",
      label: "higher customer lifetime value for businesses with a branded mobile app vs website-only",
      highlight: true
    },
    {
      value: "68%",
      label: "of UK consumers prefer to shop and book via a mobile app over a mobile website",
      highlight: false,
      gold: true
    },
    {
      value: "40%",
      label: "reduction in customer support costs through in-app self-service and automated workflows",
      highlight: false,
      gold: true
    },
    {
      value: "55%",
      label: "boost in repeat purchases driven by push notifications and personalised offers",
      highlight: false,
      gold: true
    },
    {
      value: "£5,999",
      label: "fixed starting price — vs £30,000+ quoted by most London agencies for the same scope",
      highlight: false
    },
    {
      value: "14 wks",
      label: "average time from signed NDA to live App Store product — contractually guaranteed",
      highlight: false
    }
  ];

  return (
    <section className="revenue-impact container" id="why-it-matters">
      <div className="revenue-content">
        <div className="left-column">
          <h3 className="badge text-gold ">WHY IT MATTERS</h3>
          <h2 className="heading-lg">
            <span className="text-gold">Unlock New Revenue</span> by Putting Your Business in Your Customers' Pockets
          </h2>
          <p className="text-body revenue-subtitle">
            UK businesses that invest in a custom mobile app are consistently outperforming those that don't. From faster customer service to automated operations and repeat purchase loops — here is the kind of measurable impact Daneen Al Majaz IT Services delivers for our clients.
          </p>
          <a href="#contact" className="btn btn-gold cta-btn " >
            Get My Free Consultation <span className="arrow">→</span>
          </a>
        </div>

        <div className="right-column">
          <div className="revenue-stats-grid">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`revenue-stat-card ${stat.highlight ? 'highlighted-card' : ''}`}
              >
                <div className={`stat-num ${stat.gold ? 'text-gold' : ''}`}>{stat.value}</div>
                <div className="stat-desc">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueImpact;
