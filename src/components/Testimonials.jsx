import React, { useState, useRef } from 'react';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import './Testimonials.css';

const TestimonialCard = ({ quote, author, role, company }) => (
  <div className="testimonial-card">
    <Quote size={32} className="text-gold quote-icon" />
    <div className="stars">
      {[1, 2, 3, 4, 5].map((_, i) => (
        <Star key={i} size={16} fill="currentColor" />
      ))}
    </div>
    <p className="testimonial-text">{quote}</p>
    <div className="testimonial-author">
      <div className="author-avatar">{author.charAt(0).toUpperCase()}</div>
      <div className="author-info">
        <h4 className="author-name">{author}</h4>
        <p className="author-role">{role ? `${role}, ` : ''}{company}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The software Daneen Al Majaz IT Services built for Cemtac has completely transformed how we manage operations. The HRM and inventory system is reliable, fast, and exactly what we needed.",
      author: "Imtiyaz Ahmad",
      role: "Client",
      company: "CEMTAC CEMENTS"
    },
    {
      quote: "The Apna Chicken Center app is mind-blowing. The billing system, token numbers, and custom ordering experience set us apart from every competitor.",
      author: "Mohammad Saad Shah",
      role: "Customer & App User",
      company: "APNA CHICKEN CENTER"
    },
    {
      quote: "Daneen Al Majaz transformed our vision into a stunning mobile app that exceeded all expectations. Their attention to detail and technical expertise is unmatched. Our user engagement increased by 300% in the first quarter.",
      author: "Kashifa khan",
      role: "CEO",
      company: "FinanceHub"
    },
    {
      quote: "Daneen Al Majaz transformed our entire digital infrastructure. Their team delivered beyond our expectations — on time, on budget, and with exceptional quality.",
      author: "Mr Selva",
      role: "CEO",
      company: "Dainty"
    },
    {
      quote: "The e-commerce platform they built for us increased our online sales by 300% in just 6 months. Truly world-class development team.",
      author: "Mr Abrar",
      role: "",
      company: "Deprel"
    },
    {
      quote: "Exceptional AI integration work. They understood our complex requirements and delivered a robust, scalable solution that powers our entire operations.",
      author: "Mr Muntazir",
      role: "",
      company: "QashmiriFied"
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const cardWidth = sliderRef.current.children[0].clientWidth + 24; // width + gap
      const newActiveSlide = Math.round(scrollLeft / cardWidth);
      if (newActiveSlide !== activeSlide) {
        setActiveSlide(newActiveSlide);
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
    <section className="testimonials container" id="testimonials">
      <div className="testimonials-header"><h2>
        <span className="heading-lg text-gold">Built on Trust</span>, <span className='heading-lg'>Proven by Results</span>
      </h2>

        <p className="text-body testimonials-subtitle">
          Don't just take our word for it. Here's what our clients say about working with us.
        </p>
      </div>

      <div className="testimonials-grid" ref={sliderRef} onScroll={handleScroll}>
        {testimonials.map((test, idx) => (
          <TestimonialCard key={idx} {...test} />
        ))}
      </div>

      {/* Mobile Slider Controls */}
      <div className="slider-controls-mobile">
        <button className="control-btn prev" onClick={scrollPrev} aria-label="Previous testimonial">
          <ArrowLeft size={18} />
        </button>
        <div className="slider-dots">
          {testimonials.map((_, idx) => (
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
        <button className="control-btn next" onClick={scrollNext} aria-label="Next testimonial">
          <ArrowRight size={18} />
        </button>
      </div>

      <div className="recognized-excellence">
        <h3 className="heading-md">Recognized Excellence</h3>
        <p className="text-body">Award-winning development team trusted worldwide.</p>
        <div className="excellence-stats">
          <div className="excellence-stat">
            <div className="excellence-value text-gold">Top 1%</div>
            <div className="excellence-label">Global Developers</div>
          </div>
          <div className="excellence-stat">
            <div className="excellence-value text-gold">98%</div>
            <div className="excellence-label">Client Retention</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
