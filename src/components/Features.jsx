import React, { useState, useRef } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import './Features.css';

const FeatureCard = ({ title, description, points }) => (
  <div className="feature-card">
    <h3 className="feature-title">{title}</h3>
    <p className="feature-desc">{description}</p>
    <ul className="feature-points">
      {points.map((point, idx) => (
        <li key={idx}>
          <CheckCircle2 size={16} className="text-gold" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
    <a href="#" className="read-more">
      READ MORE <ArrowRight size={14} />
    </a>
  </div>
);

const Features = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const featuresData = [
    {
      title: "Trusted Global Reach Potential",
      description: "We develop mobile apps designed to work seamlessly across UK and global markets, ensuring your solution scales beyond borders while maintaining excellence.",
      points: [
        "Multi-region deployment strategy",
        "Localization and currency support",
        "Global CDN infrastructure",
        "Cross-border compliance"
      ]
    },
    {
      title: "Low User Acquisition",
      description: "Struggling to attract and retain users? Our apps are built with user experience and engagement strategies that drive organic growth and retention.",
      points: [
        "Intuitive onboarding flows",
        "Push notification optimization",
        "App Store Optimization (ASO)",
        "Analytics-driven improvements"
      ]
    },
    {
      title: "Outdated/Inconsistent Business Practices",
      description: "Transform legacy workflows with modern mobile solutions that streamline operations, improve efficiency, and keep your business competitive.",
      points: [
        "Digital transformation consulting",
        "Process automation integration",
        "Real-time data synchronization",
        "Legacy system modernization"
      ]
    }
  ];

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const cardWidth = sliderRef.current.children[0].clientWidth + 24;
      const newActiveSlide = Math.round(scrollLeft / cardWidth);
      if (newActiveSlide !== activeSlide && newActiveSlide >= 0 && newActiveSlide < featuresData.length) {
        setActiveSlide(newActiveSlide);
      }
    }
  };

  return (
    <section className="features container" id="why-us">
      <div className="features-header">
        <h2 className="heading-lg">
          Building an App Shouldn't Be<br />
          <span className="text-gold">This Complicated</span>
        </h2>
        <p className="text-body features-subtitle">
          We've seen it all - unreliable developers, missed deadlines, poor performance, and apps that don't scale. That's why we built a better way to develop mobile applications.
        </p>
      </div>

      <div className="features-grid" ref={sliderRef} onScroll={handleScroll}>
        {featuresData.map((feature, idx) => (
          <div key={idx} className={activeSlide === idx ? 'cover-flow-active' : 'cover-flow-inactive'} style={{ display: 'flex' }}>
            <FeatureCard {...feature} />
          </div>
        ))}
      </div>
      
      <div className="slider-controls-mobile">
        <div className="slider-progress-bar">
          <div 
            className="slider-progress-fill" 
            style={{ width: `${((activeSlide + 1) / featuresData.length) * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
