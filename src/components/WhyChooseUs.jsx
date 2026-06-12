import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './WhyChooseUs.css';

const BenefitCard = ({ title, description }) => (
  <div className="benefit-card">
    <div className="benefit-icon">
      <CheckCircle2 size={24} className="text-gold" />
    </div>
    <div className="benefit-content">
      <h3 className="benefit-title">{title}</h3>
      <p className="benefit-desc">{description}</p>
    </div>
  </div>
);

const WhyChooseUs = () => {
  const benefits = [
    { title: "Custom-built code", description: "No templates, no shortcuts, only precision-engineered code built for your needs" },
    { title: "Scalable architecture", description: "Systems that handle 100 users today and 1 million tomorrow without a rebuild" },
    { title: "Fixed transparent pricing", description: "Know exactly what you'll pay upfront. No hidden fees, no surprises" },
    { title: "Contractual Delivery Timeline", description: "8-14 weeks is a signed contractual commitment, not a rough estimate." },
    { title: "Dedicated project manager", description: "Your single point of contact who keeps everything on track" },
    { title: "Post-launch support included", description: "We don't disappear after launch, as ongoing support is built in" },
    { title: "NDA from day one", description: "Your ideas are protected from the very first conversation" },
    { title: "100% code ownership", description: "You own everything we build, with full rights and full documentation" }
  ];

  return (
    <section className="why-choose-us container">
      <div className="why-header">
        <div className="why-label">Why Choose Us</div>
        <h2 className="heading-lg">Why UK Businesses <span className="text-gold">Choose Us</span></h2>
        <p className="text-body why-subtitle">
          We're not a template shop. We're engineers who build for performance, growth, and longevity.
        </p>
      </div>

      <div className="benefits-grid">
        {benefits.map((b, i) => <BenefitCard key={i} {...b} />)}
      </div>
    </section>
  );
};

export default WhyChooseUs;
