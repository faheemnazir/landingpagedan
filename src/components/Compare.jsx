import React from 'react';
import { Check, X } from 'lucide-react';
import './Compare.css';

const CompareRow = ({ feature, ourFeature, theirFeature, isPrice = false }) => (
  <div className="compare-row">
    <div className="compare-feature">{feature}</div>
    <div className="compare-ours">
      {isPrice ? (
        <span className="price-gold">{ourFeature}</span>
      ) : (
        <Check size={20} className="text-gold" />
      )}
    </div>
    <div className="compare-theirs">
      {isPrice ? (
        <span className="price-gray">{theirFeature}</span>
      ) : (
        theirFeature ? <Check size={20} color="#666" /> : <X size={20} color="#666" />
      )}
    </div>
  </div>
);

const Compare = () => {
  return (
    <section className="compare container">
      <div className="compare-card">
        <div className="compare-header">
          <h2 className="heading-lg">Compare Our Services</h2>
          <p className="text-body compare-subtitle">See how we stack up against the competition</p>
        </div>

        <div className="compare-table">
          <div className="compare-table-header">
            <div className="col-feature">FEATURE</div>
            <div className="col-ours"><span className="badge-gold">Daneen Al Majaz</span></div>
            <div className="col-theirs">London Agencies</div>
          </div>

          <CompareRow feature="Custom-built code" />
          <CompareRow feature="Scalable architecture" />
          <CompareRow feature="Fixed transparent pricing" />
          <CompareRow feature="Dedicated project manager" />
          <CompareRow feature="Post-launch support included" />
          <CompareRow feature="NDA from day one" theirFeature={true} />
          <CompareRow feature="100% code ownership" />
          <CompareRow feature="Starting price" isPrice={true} ourFeature="£5,999" theirFeature="£30,000" />
        </div>
      </div>
      
      <div className="compare-action">
        <a href="#contact" className="btn btn-primary" style={{ textDecoration: 'none' }}>Start Your Project Today</a>
      </div>
    </section>
  );
};

export default Compare;
