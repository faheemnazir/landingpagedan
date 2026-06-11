import React, { useState, useRef } from 'react';
import { Lightbulb, PenTool, Code2, ShieldCheck, Rocket, Headset, ArrowLeft, ArrowRight } from 'lucide-react';
import './Process.css';

const ProcessStep = ({ icon: Icon, time, title, description }) => (
  <div className="process-step">
    <div className="process-icon-wrapper">
      <div className="process-icon">
        <Icon size={24} className="text-gold" />
      </div>
      <div className="process-line"></div>
    </div>
    <div className="process-content">
      <div className="process-time text-gold">{time}</div>
      <h3 className="process-title">{title}</h3>
      <p className="process-desc">{description}</p>
    </div>
  </div>
);

const Process = () => {
  const steps = [
    {
      icon: Lightbulb,
      time: "1-2 weeks",
      title: "Discovery & Strategy",
      description: "We dive deep into your business goals, target audience, and competitive landscape to create a comprehensive project roadmap."
    },
    {
      icon: PenTool,
      time: "2-3 weeks",
      title: "Design & Prototyping",
      description: "Our designers create stunning, user-centric interfaces with interactive prototypes for validation before development begins."
    },
    {
      icon: Code2,
      time: "8-14 weeks",
      title: "Development",
      description: "Agile development sprints with weekly demos, ensuring transparency and incorporating your feedback at every stage."
    },
    {
      icon: ShieldCheck,
      time: "2-3 weeks",
      title: "Quality Assurance",
      description: "Rigorous testing across devices, platforms, and scenarios to ensure flawless performance and security."
    },
    {
      icon: Rocket,
      time: "1-2 weeks",
      title: "Launch & Deploy",
      description: "Smooth app store submission, launch strategy, and marketing support to maximize initial traction."
    },
    {
      icon: Headset,
      time: "Ongoing",
      title: "Support & Growth",
      description: "Ongoing monitoring, updates, feature enhancements, and optimization based on user feedback and analytics."
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const cardWidth = sliderRef.current.children[0].clientWidth + 24; // width + gap
      const newActiveSlide = Math.round(scrollLeft / cardWidth);
      const clampedSlide = Math.min(newActiveSlide, 3);
      if (clampedSlide !== activeSlide) {
        setActiveSlide(clampedSlide);
      }
    }
  };

  const scrollPrev = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.children[0].clientWidth + 24;
      sliderRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.children[0].clientWidth + 24;
      sliderRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <section className="process container" id="process">
      <div className="process-header">
        <h2 className="heading-lg text-gold">Our Process</h2>
        <p className="text-body process-subtitle">
          A proven, transparent process that transforms your vision into a world-class mobile application.
        </p>
      </div>

      <div className="process-timeline" ref={sliderRef} onScroll={handleScroll}>
        {steps.map((step, idx) => (
          <ProcessStep key={idx} {...step} />
        ))}
      </div>

      {/* Mobile Slider Controls */}
      <div className="slider-controls-mobile">
        <button className="control-btn prev" onClick={scrollPrev} aria-label="Previous step" disabled={activeSlide === 0}>
          <ArrowLeft size={18} />
        </button>
        <div className="slider-dots">
          {[0, 1, 2, 3].map((idx) => (
            <span
              key={idx}
              className={`slider-dot ${activeSlide === idx ? 'active' : ''}`}
              onClick={() => {
                if (sliderRef.current) {
                  const cardWidth = sliderRef.current.children[0].clientWidth + 24;
                  sliderRef.current.scrollTo({
                    left: cardWidth * idx,
                    behavior: 'smooth'
                  });
                }
              }}
            />
          ))}
        </div>
        <button className="control-btn next" onClick={scrollNext} aria-label="Next step" disabled={activeSlide === 3}>
          <ArrowRight size={18} />
        </button>
      </div>

      <div className="process-cta">
        <div className="cta-card">
          <h3 className="heading-md">Ready to Start Your Journey?</h3>
          <p className="text-body">Schedule a free consultation to discuss your project and see how we can bring your vision to life.</p>
          <a href="#contact" className="btn btn-primary" style={{ textDecoration: 'none' }}>Schedule Free Consultation</a>
        </div>
      </div>
    </section>
  );
};

export default Process;
