import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question">
        <span>{question}</span>
        {isOpen ? <ChevronUp size={20} className="text-gold" /> : <ChevronDown size={20} className="text-gold" />}
      </div>
      {isOpen && (
        <div className="faq-answer">
          {typeof answer === 'string' ? <p>{answer}</p> : answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "How long does it take to develop a mobile app in the UK?",
      answer: (
        <div>
          <p style={{ marginBottom: '12px', lineHeight: '1.6' }}>
            Timelines shift depending on how complex the app is and how many integrations it needs. Our UK mobile app developers generally see projects fall into these brackets:
          </p>
          <ul style={{ paddingLeft: '20px', listStyleType: 'disc', color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', lineHeight: '1.6' }}>
            <li style={{ marginBottom: '6px' }}>Simple apps with minimal features — about <strong>3–5 months</strong>.</li>
            <li style={{ marginBottom: '6px' }}>Medium apps with integrations and custom UI — around <strong>6–9 months</strong>.</li>
            <li style={{ marginBottom: '6px' }}>Feature-rich or enterprise-grade apps — <strong>10–12 months or more</strong>.</li>
            <li style={{ marginBottom: '6px' }}>Continuous builds with AI and compliance-heavy workflows — ongoing cycles.</li>
          </ul>
        </div>
      )
    },
    { question: "Do you develop for both iOS and Android?", answer: "Yes, we offer both native and cross-platform development services." },
    { question: "What is your app development process?", answer: "Our process includes Discovery, Design, Development, QA, and Launch." },
    { question: "How much does it cost to develop a mobile app?", answer: "Costs vary depending on features and complexity. Please refer to our pricing section or contact us for a quote." },
    { question: "Do you provide post-launch support and maintenance?", answer: "Yes, we provide ongoing support and maintenance packages." },
    { question: "Will I own the source code and intellectual property?", answer: "Yes, you have 100% ownership of the source code upon project completion." },
    { question: "Can you help with app store submission and approval?", answer: "Absolutely, we handle the entire submission process for both Apple App Store and Google Play." },
    { question: "Do you sign NDAs to protect my app idea?", answer: "Yes, we sign NDAs from day one to protect your intellectual property." },
    { question: "What technologies do you use for app development?", answer: "We use Swift, Kotlin, React Native, Flutter, and modern backend stacks." },
    { question: "Can you integrate third-party services and APIs?", answer: "Yes, we have extensive experience integrating various third-party APIs and services." }
  ];

  return (
    <section className="faq container" id="faq">
      <div className="faq-header">
        <h2 className="heading-lg text-gold">FAQ</h2>
        <p className="text-body faq-subtitle">Everything you need to know about our app development services.</p>
      </div>

      <div className="faq-list">
        {faqs.map((faq, idx) => (
          <FAQItem key={idx} {...faq} />
        ))}
      </div>

      <div className="faq-cta">
        <p className="text-body">Still have questions? We're here to help!</p>
        <button className="btn btn-primary">Contact Us</button>
      </div>
    </section>
  );
};

export default FAQ;
