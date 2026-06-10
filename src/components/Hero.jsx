import React, { useState } from 'react';
import { ArrowRight, Star, CheckCircle, Phone, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Hero.css';

const Hero = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    business_email: '',
    business_name: '',
    project_type: '',
    project_details: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    emailjs.send(
      'service_c9hhcov',
      'template_6ydk44z',
      formData,
      '_0hhWSB1UlH1s_11l'
    )
      .then(() => {
        setStatus('success');
      })
      .catch((err) => {
        setStatus('error');
        console.error('Failed to send email:', err);
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <section className="hero container">
      <div className="hero-content">
        <div className="hero-badge">
          <Star size={16} color="#C8A46B" fill="#C8A46B" />
          <Star size={16} color="#C8A46B" fill="#C8A46B" />
          <Star size={16} color="#C8A46B" fill="#C8A46B" />
          <Star size={16} color="#C8A46B" fill="#C8A46B" />
          <Star size={16} color="#C8A46B" fill="#C8A46B" />
          <span className="badge-text">Trusted by Fortune 500 Companies</span>
        </div>

        <h1 className="hero-title">
          Custom Mobile App Development for <span className="hero-title-gradient">UK Businesses</span>
        </h1>

        <p className="hero-subtitle">
          We design and develop scalable, high-performance mobile apps tailored to your business goals — from idea to launch. No templates. No compromises. No hidden fees.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn-start" style={{ textDecoration: 'none' }}>
            Start Your Project <ArrowRight size={18} />
          </a>
          <a href="#portfolio" className="btn-view" style={{ textDecoration: 'none' }}>
            View Our Work
          </a>
          
          <div className="hero-pricing-badge">
            <span className="badge-label">Starting At</span>
            <span className="badge-price">£5,999</span>
          </div>
        </div>
      </div>

      <div className="hero-form-wrapper" id="hero-form">
        <div className="hero-form-card">
          <div style={{ width: '100%' }}>
            {/* The Content Wrapper */}
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <h3 className="form-title" style={{ marginBottom: '8px' }}>Get Your <span style={{ color: '#D4B483' }}> Free </span>Consultation <br /></h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px', marginBottom: '24px' }}>£5,999 • iOS + Android • 8-14 weeks • Reply within 1 business day</p>

              <form className="hero-form" onSubmit={handleSubmit} style={{ margin: 0 }}>
                <div className="form-row">
                  <div className="form-group">
                    <label style={{ fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' }}>Full Name</label>
                    <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} placeholder="Your full name" required />
                  </div>
                  <div className="form-group">
                    <label style={{ fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' }}>Phone</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+44 7XXX XXXXXX" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label style={{ fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' }}>Business Email</label>
                    <input type="email" name="business_email" value={formData.business_email} onChange={handleChange} placeholder="you@company.co.uk" required />
                  </div>
                  <div className="form-group">
                    <label style={{ fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' }}>Business Name</label>
                    <input type="text" name="business_name" value={formData.business_name} onChange={handleChange} placeholder="Your company name" required />
                  </div>
                </div>

                <div className="form-group">
                  <label style={{ fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' }}>Project Type</label>
                  <select className="form-select" name="project_type" value={formData.project_type} onChange={handleChange} required>
                    <option value="" disabled>Select your app type</option>
                    <option value="ios">iOS App (Apple)</option>
                    <option value="android">Android App (Google)</option>
                    <option value="cross-platform">iOS and Android (Cross-platform)</option>
                    <option value="mvp">MVP / Proof of Concept</option>
                    <option value="enterprise">Enterprise Solution</option>
                    <option value="redesign">App Redesign / Rebuild</option>
                  </select>
                </div>

                <div className="form-group">
                  <label style={{ fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' }}>Project Details</label>
                  <textarea name="project_details" value={formData.project_details} onChange={handleChange} placeholder="Describe your app idea..." rows="3" required></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={status === 'loading'} style={{ textTransform: 'uppercase', fontWeight: 600, letterSpacing: '1px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {status === 'loading' ? 'Sending...' : 'Get Free Consultation'} {status === 'idle' && <ArrowRight size={18} style={{ marginLeft: '8px' }} />}
                </button>

                {status === 'error' && <p style={{ color: '#F44336', fontSize: '13px', textAlign: 'center', marginTop: '12px' }}>Failed to send request. Please try again or email us directly.</p>}
              </form>

              <div className="form-footer" style={{ alignItems: 'center', textAlign: 'center', gap: '8px', borderTop: 'none', paddingTop: '16px', marginTop: '16px' }}>
                <div style={{ display: 'flex', gap: '16px', color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>
                  <span>• No obligation</span>
                  <span>• NDA available</span>
                </div>
                <p className="text-small" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>
                  No sales pitch. Just an honest conversation about your project.
                </p>
              </div>
            </div>

            {/* The Success Message - Rendered as a Modal Popup */}
            <div className="success-modal-overlay" style={{
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(5px)',
              zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px',
              visibility: status === 'success' ? 'visible' : 'hidden', opacity: status === 'success' ? 1 : 0,
              pointerEvents: status === 'success' ? 'auto' : 'none', transition: 'all 0.3s ease'
            }}>
              <div className="success-message-card" style={{
                backgroundColor: '#111', padding: '56px 40px', border: '1px solid rgba(212, 180, 131, 0.2)',
                borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '28px', justifyContent: 'center',
                maxWidth: '500px', width: '100%', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                transform: status === 'success' ? 'scale(1)' : 'scale(0.95)', transition: 'transform 0.3s ease'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#D4B483' }}>
                  <CheckCircle size={36} />
                  <h3 style={{ fontSize: '32px', fontWeight: 700, margin: 0, color: '#D4B483' }}>
                    Thank You{formData.full_name ? `, ${formData.full_name.split(' ')[0].charAt(0).toUpperCase() + formData.full_name.split(' ')[0].slice(1)}` : ''}!
                  </h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <h4 style={{ fontSize: '20px', color: '#fff', margin: 0, fontWeight: 500 }}>Your inquiry has been successfully received.</h4>
                  <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '16px', lineHeight: '1.7', margin: 0 }}>
                    A senior consultant from Daneen Al Majaz IT Services will contact you within one business day to arrange your free discovery call — no commitment required.
                  </p>
                </div>
                <div style={{ marginTop: '16px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 600 }}>For Urgent Inquiries</p>
                  <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
                    {/* Desktop phone (unclickable text) */}
                    <div className="desktop-phone-only" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#D4B483', fontSize: '16px', fontWeight: 500 }}>
                      <Phone size={18} />
                      <span style={{ color: '#fff' }}>+44 0300 124 0371</span>
                    </div>
                    {/* Mobile phone (clickable link) */}
                    <a href="tel:+443001240371" className="mobile-phone-only" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#D4B483', fontSize: '16px', fontWeight: 500, textDecoration: 'none' }}>
                      <Phone size={18} />
                      <span style={{ color: '#fff' }}>+44 0300 124 0371</span>
                    </a>
                    {/* Email (clickable everywhere) */}
                    <a href="mailto:info@daneenalmajaz.in" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#D4B483', fontSize: '16px', fontWeight: 500, textDecoration: 'none' }}>
                      <Mail size={18} />
                      <span style={{ color: '#fff' }}>info@daneenalmajaz.in</span>
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setStatus('idle');
                    setFormData({ full_name: '', phone: '', business_email: '', business_name: '', project_type: '', project_details: '' });
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  style={{
                    background: 'transparent', border: '1px solid #D4B483', color: '#D4B483', padding: '16px', borderRadius: '8px', cursor: 'pointer', marginTop: '16px', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '1px', width: '100%', transition: 'all 0.3s'
                  }}
                  onMouseOver={(e) => { e.target.style.background = 'rgba(212, 180, 131, 0.1)' }}
                  onMouseOut={(e) => { e.target.style.background = 'transparent' }}
                >
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
