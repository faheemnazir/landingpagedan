import React, { useRef, useState } from 'react';
import { Lightbulb, ArrowLeft, ArrowRight } from 'lucide-react';
import './Challenges.css';

const ChallengeCard = ({ title, problem, solutions }) => (
  <div className="challenge-card">
    <div className="card-top">
      <span className="problem-badge">Problem</span>
      <h3 className="challenge-title">{title}</h3>
      <p className="problem-text">{problem}</p>
    </div>
    <div className="card-divider"></div>
    <div className="card-bottom">
      <div className="solution-header">
        <Lightbulb size={16} className="solution-icon-svg" />
        <span>OUR SOLUTION</span>
      </div>
      <ul className="solution-list">
        {solutions.map((sol, idx) => (
          <li key={idx}>
            <span className="bullet-dot"></span>
            {sol}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Challenges = () => {
  const challengesData = [
    {
      title: "Developers Who Disappear",
      problem: "Freelancers go silent mid-project. Agencies over-promise and under-deliver. You are left with broken code, no support, and weeks of lost time with nothing to show for your money.",
      solutions: [
        "A named project manager owns your build from day one to post-launch — no handoffs.",
        "A dedicated project manager oversees every milestone, ensuring clear communication and accountability throughout the build.",
        "Legally binding agreements, including NDAs and milestone-based contracts, protect your project from start to finish."
      ]
    },

    {
      title: "Apps That Crash Under Pressure",
      problem: "Freezing at checkout. Crashing at 500 users. One-star reviews that compound permanently. One bad session destroys trust — and everyone that user tells hears the same story.",
      solutions: [
        "Zero-defect policy — automated and manual QA across every device and OS version.",
        "Performance-engineered: sub-second load times and smooth 60fps by default.",
        "Post-launch crash monitoring included in every package, not sold as an add-on."
      ]
    },
    {
      title: "Low User Retention After Launch",
      problem: "Many apps get downloads but users drop off within days due to poor design, slow flows, and weak engagement. Acquiring a user costs money — losing them to bad UX wastes every penny of it.",
      solutions: [
        "UI/UX designed around real user behaviour — every screen prototyped and approved before build.",
        "Friction removed across every critical user journey: onboarding, checkout, re-engagement.",
        "Behavioural analytics wired in at launch so retention issues surface immediately."
      ]
    },
    {
      title: "Hidden Costs and Budget Overruns",
      problem: "The quote looked reasonable. Then came the change requests, the scope additions, the surprise invoices. By the time the app shipped — if it shipped — the budget was double what was agreed.",
      solutions: [
        "Fixed price from £5,999 — the price we quote is the price you pay, full stop.",
        "Full itemised cost breakdown delivered before you commit to anything.",
        "No surprise invoices. No scope-creep charges. Everything in writing, always."
      ]
    },
    {
      title: "Scaling Under Heavy Demand",
      problem: "Apps that pass testing collapse when thousands of real users log in during a campaign, a seasonal spike, or a press mention. Infrastructure failure at peak demand kills growth momentum instantly.",
      solutions: [
        "Scalable cloud infrastructure designed to handle peak traffic from day one.",
        "Load testing conducted before every launch — not after the first crash.",
        "Architecture built for 1 million users, even if you start with 100."
      ]
    },
    {
      title: "Deadlines That Keep Moving",
      problem: "Your launch date keeps slipping. Competitors are shipping while you chase replies that never come. Every week of delay is revenue someone else is collecting instead of you.",
      solutions: [
        "8–12 week delivery is a contractual commitment, not a rough estimate.",
        "Milestone-by-milestone accountability built into every signed agreement.",
        "Staging access at week 6 — you test the real app before we submit to App Store."
      ]
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
      
      const isAtEnd = Math.abs(scrollWidth - clientWidth - scrollLeft) <= 10;
      
      const cardWidth = container.children[0].clientWidth + 24; // width + gap
      
      let newActiveSlide = Math.round(scrollLeft / cardWidth);
      if (isAtEnd) {
        newActiveSlide = challengesData.length - 1;
      } else {
        newActiveSlide = Math.min(newActiveSlide, challengesData.length - 1);
      }
      
      if (newActiveSlide !== activeSlide) {
        setActiveSlide(newActiveSlide);
      }
    }
  };

  const scrollPrev = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.children[0].clientWidth + 24; // width + gap
      sliderRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollNext = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.children[0].clientWidth + 24; // width + gap
      sliderRef.current.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="challenges container" id="why-us">
      <div className="challenges-header">
        <h2 className="badge text-gold">THE CHALLENGE</h2>
        <h2 className="heading-lg">Overcoming App Development <span className="text-gold">Challenges for UK Businesses</span></h2>
        <p className="text-body challenges-subtitle">
          Most UK businesses hit the same six walls before they ship a single line of code. Here is exactly what goes wrong — and how we eliminate every one of them, guaranteed in writing.
        </p>
      </div>

      <div className="challenges-grid" ref={sliderRef} onScroll={handleScroll}>
        {challengesData.map((item, idx) => (
          <ChallengeCard key={idx} {...item} />
        ))}
      </div>

      {/* Slider Scroll Arrow Controls */}
      <div className="slider-controls">
        <button className="control-btn prev" onClick={scrollPrev} aria-label="Previous slide" disabled={activeSlide === 0}>
          <ArrowLeft size={18} />
        </button>
        <div className="slider-dots">
          {challengesData.map((_, idx) => (
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
        <button className="control-btn next" onClick={scrollNext} aria-label="Next slide" disabled={activeSlide >= challengesData.length - 1}>
          <ArrowRight size={18} />
        </button>
      </div>

      <div className="challenges-callout">
        <div className="callout-header">
          <div className="callout-title">Our answer: end-to-end development — no hand-offs, no gaps, no excuses.</div>
        </div>
        <p className="callout-desc">
          We run a complete SDLC from signed NDA through system architecture, UI/UX design, multi-device QA, and App Store deployment. One dedicated team. Every milestone contractual. Fixed price from £5,999. You see progress every single week — not just at the beginning and the end.
        </p>
      </div>
    </section>
  );
};

export default Challenges;
