import React from 'react';
import { CheckCircle2, Code, ShieldCheck, Rocket } from 'lucide-react';
import './Pricing.css';

const PricingCard = ({ price, title, features, buttonText, highlighted = false }) => (
  <div className={`pricing-card ${highlighted ? 'highlighted' : ''}`}>
    <div className="pricing-header">
      <div className="price-tag">{price}</div>
      <div className="price-title">{title}</div>
    </div>
    <ul className="pricing-features">
      {features.map((feature, idx) => (
        <li key={idx}>
          <CheckCircle2 size={16} className="text-gold" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`btn ${highlighted ? 'btn-primary' : 'btn-outline'}`}>
      {buttonText}
    </button>
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
          price="Starting at $5,999"
          title="Small-to-medium sized project"
          features={[
            "Ideal for MVPs and startups",
            "5-6 month timeline",
            "Single platform",
            "Modern UI Design"
          ]}
          buttonText="Get a Quote"
        />

        <PricingCard
          price="Starting at $9,999"
          title="Medium-to-large sized project"
          features={[
            "iOS and Android development",
            "6-8 month timeline",
            "Advanced UI/UX design",
            "Backend API and database",
            "Ongoing support included"
          ]}
          buttonText="Get Started"
          highlighted={true}
        />

        <PricingCard
          price="Custom"
          title="Enterprise-level solution"
          features={[
            "Complex integrations",
            "Unlimited revisions",
            "Dedicated team",
            "White-label option"
          ]}
          buttonText="Talk to Us"
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
          Need a custom solution? <a href="#contact" className="text-gold">Contact our team</a> for a personalized quote tailored to your specific requirements.
        </div>
      </div>
    </section>
  );
};

export default Pricing;
