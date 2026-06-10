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
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    
    const isAtEnd = Math.abs(scrollWidth - clientWidth - scrollLeft) <= 10;
    
    const card = container.querySelector('.feature-card');
    if (!card) return;
    const cardWidth = card.clientWidth;
    const gap = 24;
    
    let newIndex = Math.round(scrollLeft / (cardWidth + gap));
    if (isAtEnd) {
      newIndex = featuresData.length - 1;
    } else {
      newIndex = Math.min(newIndex, featuresData.length - 1);
    }
    
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
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

      <div className="features-grid" ref={scrollContainerRef} onScroll={handleScroll}>
        {featuresData.map((feature, idx) => (
          <FeatureCard key={idx} {...feature} />
        ))}
      </div>
      
      <div className="slider-dots" style={{ justifyContent: 'center', marginTop: '24px' }}>
        {featuresData.map((_, idx) => (
          <div 
            key={idx} 
            className={`slider-dot ${idx === activeIndex ? 'active' : ''}`}
            onClick={() => {
              if (!scrollContainerRef.current) return;
              const container = scrollContainerRef.current;
              const card = container.querySelector('.feature-card');
              if (!card) return;
              const cardWidth = card.clientWidth;
              const gap = 24;
              container.scrollTo({ left: idx * (cardWidth + gap), behavior: 'smooth' });
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Features;
