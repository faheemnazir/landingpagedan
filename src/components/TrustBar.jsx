import React from 'react';
import { Landmark, ShieldCheck, PoundSterling, Clock, Check, CheckCircle2 } from 'lucide-react';
import './TrustBar.css';

const trustItems = [
  {
    icon: Landmark,
    title: "UK Registered",
    desc: "Legal standing",
    check: "Verified"
  },
  {
    icon: ShieldCheck,
    title: "NDA Day One",
    desc: "IP protection",
    check: "Pre-kickoff"
  },
  {
    icon: PoundSterling,
    title: "Srarting Fixed Price",
    desc: "£5,999",
    check: "No surprises",
  },
  {
    icon: Clock,
    title: "8–14 Weeks",
    desc: "Timeline",
    check: "Milestone-tracked"
  },
  {
    icon: Check,
    title: "1000+",
    desc: "Projects Delivered",
    check: "Full transfer"
  },
  {
    textIcon: "12+",
    title: "Years of Experience",
    desc: "Industry expertise",
    check: "Proven track record"
  }


];

const TrustBar = () => {
  return (
    <section className="trust-bar">
      <div className="trust-bar-inner">
        {trustItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="trust-card">
              <div className="trust-card-icon">
                {item.textIcon
                  ? <span className="trust-text-icon">{item.textIcon}</span>
                  : <Icon size={24} />
                }
              </div>
              <h4 className="trust-card-title">{item.title}</h4>
              <p className="trust-card-desc">{item.desc}</p>
              <span className="trust-card-check">
                <CheckCircle2 size={14} /> {item.check}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TrustBar;
