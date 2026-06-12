import React, { useState, useRef, useEffect } from 'react';
import { Star, Quote, ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
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
    <a href="#contact-form" className="testimonial-cta-btn">
      Book Consultation <ArrowUpRight size={14} style={{ marginLeft: '2px' }} />
    </a>
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
      quote: "Daneen Al Majaz transformed our entire digital infrastructure. Their team delivered beyond our expectations, on time, on budget, and with exceptional quality.",
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
      const container = sliderRef.current;
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      
      const isAtEnd = scrollLeft > 10 && Math.abs(scrollWidth - clientWidth - scrollLeft) <= 10;
      
      const cardWidth = container.children[0].clientWidth + 24; // width + gap
      
      let newActiveSlide = Math.round(scrollLeft / cardWidth);
      if (scrollLeft <= 10) {
        newActiveSlide = 0;
      } else if (isAtEnd) {
        newActiveSlide = testimonials.length - 1;
      } else {
        newActiveSlide = Math.min(newActiveSlide, testimonials.length - 1);
      }
      
      if (newActiveSlide !== activeSlide) {
        setActiveSlide(newActiveSlide);
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && sliderRef.current) {
            sliderRef.current.scrollTo({ left: 0 });
            setActiveSlide(0);
          }
        });
      },
      { threshold: 0 }
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);

  const scrollPrev = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.children[0].clientWidth + 24;
      const currentScroll = sliderRef.current.scrollLeft;
      const currentIndex = Math.floor((currentScroll - 10) / cardWidth);
      const targetIndex = Math.max(0, currentIndex);
      sliderRef.current.scrollTo({ left: targetIndex * cardWidth, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.children[0].clientWidth + 24;
      const currentScroll = sliderRef.current.scrollLeft;
      const currentIndex = Math.ceil((currentScroll + 10) / cardWidth);
      const targetIndex = Math.min(testimonials.length - 1, currentIndex);
      sliderRef.current.scrollTo({ left: targetIndex * cardWidth, behavior: 'smooth' });
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
      <div className="slider-controls">
        <button className="control-btn prev" onClick={scrollPrev} aria-label="Previous testimonial" disabled={activeSlide === 0}>
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
        <button className="control-btn next" onClick={scrollNext} aria-label="Next testimonial" disabled={activeSlide >= testimonials.length - 1}>
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
