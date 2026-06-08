import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield } from 'lucide-react';
import './LegalPageLayout.css';

const LegalPageLayout = ({ badge, title, lastUpdated, intro, sections }) => {
  const navigate = useNavigate();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
      
      <div className="container">
        <div className="legal-header">
          <div className="badge">
            <Shield size={16} />
            <span>{badge}</span>
          </div>
          <h1 className="heading-xl">{title}</h1>
          <p className="legal-updated">Last Updated: {lastUpdated}</p>
          <p className="legal-intro">{intro}</p>
        </div>

        <div className="legal-content">
          {sections.map((section, idx) => (
            <div key={idx} className="legal-section">
              <div className="section-icon">
                <section.icon size={24} className="text-gold" />
              </div>
              <div className="section-content">
                <h2>{section.title}</h2>
                <div className="section-body">
                  {section.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="legal-footer">
          <button className="btn btn-primary" onClick={() => navigate('/')}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalPageLayout;
