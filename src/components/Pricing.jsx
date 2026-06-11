import React from 'react';
import { CheckCircle2, Star, Code, ShieldCheck, Rocket, ArrowRight } from 'lucide-react';
import './Pricing.css';

const PricingCard = ({ price, title, features, buttonText, highlighted = false, badgeText }) => (
  <div className={`pricing-card ${highlighted ? 'highlighted' : ''}`}>
    <div className={`pricing-header ${highlighted ? 'highlighted-header' : ''}`}>
      {badgeText && (
        <div className="pricing-badge">
          <Star size={14} fill="#ffffff" strokeWidth={1.5} /> {badgeText}
        </div>
      )}
      <div className="price-title">{title}</div>
      <div className="price-tag">{price}</div>
    </div>
    <div className="pricing-body">
      <ul className="pricing-features">
        {features.map((feature, idx) => (
          <li key={idx}>
            <CheckCircle2 size={16} className="text-gold" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a href="#contact-form" className="btn btn-outline" style={{ marginTop: 'auto', width: '100%', display: 'flex', justifyContent: 'center', gap: '8px', textDecoration: 'none' }}>
        {buttonText} <ArrowRight size={18} />
      </a>
    </div>
  </div>
);

const Pricing = () => {
  return (
    <section className="pricing container" id="pricing">
      <div className="pricing-section-header">
        <h2 className="heading-lg">Simple, <span className="text-gold">Transparent Pricing</span></h2>
        <p className="text-body pricing-subtitle">
          Choose the perfect plan for your project. No hidden fees, just exceptional value and world-class development.
        </p>
      </div>

      <div className="pricing-grid">
        <PricingCard
          title="STARTER"
          price="from £5,999"
          features={[
            "Single platform — iOS or Android",
            "Up to 10 app screens",
            "UI/UX design included",
            "Backend API development",
            "App Store submission handled",
            "30 days post-launch support"
          ]}
          buttonText="Get a free quote"
        />

        <PricingCard
          title="PROFESSIONAL"
          price="from £9,999"
          badgeText="Most Popular"
          features={[
            "iOS and Android — both platforms",
            "Unlimited screens",
            "Advanced UI/UX and prototyping",
            "Scalable backend architecture",
            "Third-party integrations (payments, maps)",
            "Full QA and automated testing suite",
            "Admin dashboard included",
            "6 months post-launch support"
          ]}
          buttonText="Get a free quote"
          highlighted={true}
        />

        <PricingCard
          title="ENTERPRISE"
          price="Custom Pricing"
          features={[
            "Everything in Professional",
            "Enterprise security & compliance",
            "Custom CMS and admin architecture",
            "Real-time analytics dashboard",
            "Dedicated development team",
            "Priority support for 12 months"
          ]}
          buttonText="Talk to us"
        />
      </div>

      <div className="included-features">
        <h3 className="included-title">What's Included in All Plans</h3>
        <div className="included-grid">
          <div className="included-item">
            <Code className="text-gold" size={24} />
            <h4>Source Code</h4>
            <p>Full ownership & documentation</p>
          </div>
          <div className="included-item">
            <ShieldCheck className="text-gold" size={24} />
            <h4>Quality Guarantee</h4>
            <p>Bug-free & tested delivery</p>
          </div>
          <div className="included-item">
            <Rocket className="text-gold" size={24} />
            <h4>Launch Support</h4>
            <p>App store submission help</p>
          </div>
        </div>
        <div className="included-footer text-small">
          Need a custom solution? <a href="#contact-form" className="text-gold">Contact our team</a> for a personalized quote tailored to your specific requirements.
        </div>
      </div>
    </section>
  );
};

export default Pricing;
