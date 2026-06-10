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
    const card = container.querySelector('.trust-card');
    if (!card) return;
    const cardWidth = card.clientWidth;
    const gap = 20;
    const index = Math.round(scrollLeft / (cardWidth + gap));
    const clampedIndex = Math.min(index, trustItems.length - 1);
    if (clampedIndex >= 0 && clampedIndex < trustItems.length) {
      setActiveIndex(clampedIndex);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
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
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="trust-bar">
      <div className="trust-bar-inner" ref={scrollContainerRef}>
        {trustItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className={activeIndex === idx ? 'cover-flow-active' : 'cover-flow-inactive'} style={{ display: 'flex' }}>
              <div className="trust-card">
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
        <div className="slider-progress-bar">
          <div 
            className="slider-progress-fill" 
            style={{ width: `${((activeIndex + 1) / trustItems.length) * 100}%` }}
          />
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
