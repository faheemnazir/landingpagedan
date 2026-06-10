import React, { useState, useRef, useEffect } from 'react';
import { Landmark, ShieldCheck, PoundSterling, Clock, Check, CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react';
import './TrustBar.css';

const trustItems = [
  {
    icon: Landmark,
    title: "UK Registered",
    desc: "Legal standing",
    check: "Verified"
  },
  {
    icon: ShieldCheck,
    title: "NDA Day One",
    desc: "IP protection",
    check: "Pre-kickoff"
  },
  {
    icon: PoundSterling,
    title: "Srarting Fixed Price",
    desc: "£5,999",
    check: "No surprises",
  },
  {
    icon: Clock,
    title: "8–14 Weeks",
    desc: "Timeline",
    check: "Milestone-tracked"
  },
  {
    icon: Check,
    title: "1000+",
    desc: "Projects Delivered",
    check: "Full transfer"
  },
  {
    textIcon: "12+",
    title: "Years of Experience",
    desc: "Industry expertise",
    check: "Proven track record"
  }
];

const TrustBar = () => {
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    
    const isAtEnd = scrollLeft > 10 && Math.abs(scrollWidth - clientWidth - scrollLeft) <= 10;
    
    const card = container.querySelector('.trust-card');
    if (!card) return;
    const cardWidth = card.clientWidth;
    const gap = 20;
    
    let newIndex = Math.round(scrollLeft / (cardWidth + gap));
    if (scrollLeft <= 10) {
      newIndex = 0;
    } else if (isAtEnd) {
      newIndex = trustItems.length - 1;
    } else {
      newIndex = Math.min(newIndex, trustItems.length - 1);
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
      observer.observe(container);
    }
    
    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  const handleScrollTo = (direction) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const card = container.querySelector('.trust-card');
    if (!card) return;
    const cardWidth = card.clientWidth;
    const gap = 20;
    const scrollAmount = cardWidth + gap;
    if (direction === 'left') {
      const targetIndex = Math.max(0, activeIndex - 1);
      container.scrollTo({ left: targetIndex * scrollAmount, behavior: 'smooth' });
    } else {
      const targetIndex = Math.min(trustItems.length - 1, activeIndex + 1);
      container.scrollTo({ left: targetIndex * scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="trust-bar">
      <div className="trust-bar-inner" ref={scrollContainerRef} onScroll={handleScroll}>
        {trustItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="trust-card">
              <div className="trust-card-icon">
                {item.textIcon
                  ? <span className="trust-text-icon">{item.textIcon}</span>
                  : <Icon size={24} />
                }
              </div>
              <h4 className="trust-card-title">{item.title}</h4>
              <p className="trust-card-desc">{item.desc}</p>
              <span className="trust-card-check">
                <CheckCircle2 size={14} /> {item.check}
              </span>
            </div>
          );
        })}
      </div>

      <div className="slider-controls">
        <button 
          className="control-btn prev" 
          onClick={() => handleScrollTo('left')} 
          aria-label="Previous card"
          disabled={activeIndex === 0}
        >
          <ArrowLeft size={18} />
        </button>
        <div className="slider-dots">
          {trustItems.map((_, idx) => (
            <span 
              key={idx} 
              className={`slider-dot ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => {
                if (!scrollContainerRef.current) return;
                const container = scrollContainerRef.current;
                const card = container.querySelector('.trust-card');
                if (!card) return;
                const cardWidth = card.clientWidth;
                const gap = 20;
                container.scrollTo({ left: idx * (cardWidth + gap), behavior: 'smooth' });
              }}
            ></span>
          ))}
        </div>
        <button 
          className="control-btn next" 
          onClick={() => handleScrollTo('right')} 
          aria-label="Next card"
          disabled={activeIndex >= trustItems.length - 1}
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default TrustBar;
