import React, { useState, useEffect, useRef } from 'react';
import { Smartphone, Cloud, Palette, Bug, BarChart3, ArrowLeft, ArrowRight } from 'lucide-react';
import './Services.css';

const ServiceCard = ({ icon: Icon, title, description, points }) => (
  <div className="service-card">
    <div className="service-icon">
      <Icon size={24} className="text-gold" />
    </div>
    <h3 className="service-title">{title}</h3>
    <p className="service-desc">{description}</p>
    <ul className="service-points">
      {points.map((point, idx) => (
        <li key={idx}>
          <span className="point-dot"></span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Services = () => {
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      icon: Smartphone,
      title: "iOS App Development",
      description: "Native Swift and SwiftUI applications optimized for iPhone and iPad with seamless Apple ecosystem integration.",
      points: [
        "Swift & SwiftUI",
        "App Store Optimization",
        "Apple Design Guidelines",
        "TestFlight Beta Testing"
      ]
    },
    {
      icon: Smartphone,
      title: "Android App Development",
      description: "Cutting-edge Kotlin applications delivering exceptional performance across all Android devices.",
      points: [
        "Kotlin & Jetpack Compose",
        "Material Design",
        "Google Play Console",
        "Multi-device Support"
      ]
    },
    {
      icon: Cloud,
      title: "Backend and API Development",
      description: "Build once, deploy everywhere with React Native and Flutter for maximum reach and efficiency.",
      points: [
        "React Native",
        "Flutter",
        "Code Reusability",
        "Faster Time-to-Market"
      ]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centric design that looks stunning and drives engagement through intuitive interfaces.",
      points: [
        "Wireframing & Prototyping",
        "User Testing",
        "Design Systems",
        "Motion Design"
      ]
    },
    {
      icon: Bug,
      title: "Quality Assurance",
      description: "Rigorous testing protocols ensuring bug-free, high-performance applications on all devices.",
      points: [
        "Automated Testing",
        "Performance Testing",
        "Security Audits",
        "UAT Support"
      ]
    },
    {
      icon: BarChart3,
      title: "App Analytics & Maintenance",
      description: "Continuous monitoring and updates to keep your app performing at its best.",
      points: [
        "Usage Analytics",
        "Crash Reporting",
        "Feature Updates",
        "Server Maintenance"
      ]
    }
  ];

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    
    const isAtEnd = scrollLeft > 10 && Math.abs(scrollWidth - clientWidth - scrollLeft) <= 10;
    
    const card = container.querySelector('.service-card');
    if (!card) return;
    const cardWidth = card.clientWidth;
    const gap = 24;
    
    let newIndex = Math.round(scrollLeft / (cardWidth + gap));
    if (scrollLeft <= 10) {
      newIndex = 0;
    } else if (isAtEnd) {
      newIndex = services.length - 1;
    } else {
      newIndex = Math.min(newIndex, services.length - 1);
    }
    
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && container) {
            container.scrollTo({ left: 0 });
            setActiveIndex(0);
          }
        });
      },
      { threshold: 0 }
    );

    if (container) {
      container.addEventListener('scroll', handleScroll);
      observer.observe(container);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
        observer.unobserve(container);
      }
    };
  }, []);

  const handleScrollTo = (direction) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const card = container.querySelector('.service-card');
    if (!card) return;
    const cardWidth = card.clientWidth;
    const gap = 24;
    const scrollAmount = cardWidth + gap;
    if (direction === 'left') {
      const targetIndex = Math.max(0, activeIndex - 1);
      container.scrollTo({ left: targetIndex * scrollAmount, behavior: 'smooth' });
    } else {
      const targetIndex = Math.min(services.length - 1, activeIndex + 1);
      container.scrollTo({ left: targetIndex * scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="services container" id="services">
      <div className="services-header">
        <h2 className="heading-lg text-gold">Our Services</h2>
        <p className="text-body services-subtitle">
          From concept to launch and beyond, we provide comprehensive app development services tailored to your business needs.
        </p>
      </div>

      <div className="services-grid" ref={scrollContainerRef}>
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>

      <div className="slider-controls">
        <button 
          className="control-btn prev" 
          onClick={() => handleScrollTo('left')} 
          aria-label="Previous service"
          disabled={activeIndex === 0}
        >
          <ArrowLeft size={18} />
        </button>
        <div className="slider-dots">
          {services.map((_, idx) => (
            <span 
              key={idx} 
              className={`slider-dot ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => {
                if (!scrollContainerRef.current) return;
                const container = scrollContainerRef.current;
                const card = container.querySelector('.service-card');
                if (!card) return;
                const cardWidth = card.clientWidth;
                const gap = 24;
                container.scrollTo({ left: idx * (cardWidth + gap), behavior: 'smooth' });
              }}
            ></span>
          ))}
        </div>
        <button 
          className="control-btn next" 
          onClick={() => handleScrollTo('right')} 
          aria-label="Next service"
          disabled={activeIndex >= services.length - 1}
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default Services;
