import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <section className="container">
      <div className="stats-card">
        <div className="stats-header">
          <h2 className="heading-lg">We Fix All of This</h2>
          <p className="text-body stats-subtitle">
            Our proven process, experienced team, and commitment to excellence ensures you get a reliable, high-performance app that scales with your business - delivered on time and within budget.
          </p>
        </div>
        
        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-value">100%</div>
            <div className="stat-label">Project Completion Rate</div>
          </div>
          
          <div className="stat-box">
            <div className="stat-value">95%</div>
            <div className="stat-label">On-Time Delivery</div>
          </div>
          
          <div className="stat-box">
            <div className="stat-value">99.9%</div>
            <div className="stat-label">App Uptime</div>
          </div>
          
          <div className="stat-box">
            <div className="stat-value">10M+</div>
            <div className="stat-label">Users Supported</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
