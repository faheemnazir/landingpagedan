import React from 'react';
import './TrustedBrands.css';

import coldstoreImg from '../assets/coldstore.png';
import ziplynowImg from '../assets/ziplynow.png';


import abraqAgroImg from '../assets/new_partnars/01_abraq_agro.png';
import lotusMedicalImg from '../assets/new_partnars/01_lotus_medical.png';
import apnaChickenImg from '../assets/new_partnars/02_apna_chicken.png';
import motoboyImg from '../assets/new_partnars/02_motoboy_ae.png';
import primeCoImg from '../assets/new_partnars/03_prime_co.png';
import cemtacImg from '../assets/new_partnars/04_cemtac.png';
import royalPalmImg from '../assets/new_partnars/04_royal_palm_holidays.png';
import astoraImg from '../assets/new_partnars/05_astora.png';
import tailorProImg from '../assets/new_partnars/05_tailor_pro.png';
import digidalImg from '../assets/new_partnars/06_digindal.png';
import seriesMarriottImg from '../assets/new_partnars/06_series_by_marriott.png';
import kashmirGiftImg from '../assets/new_partnars/07_kashmir_gift.png';
import daintyImg from '../assets/new_partnars/08_dainty.png';
import trustonImg from '../assets/new_partnars/08_truston.png';


const TrustedBrands = () => {
  const brandLogos = [
    { src: lotusMedicalImg, alt: "Lotus Medical Centre" },
    { src: apnaChickenImg, alt: "Apna Chicken Centre" },
    { src: cemtacImg, alt: "Cemtac Cements" },
    { src: tailorProImg, alt: "Tailor Pro" },
    { src: digidalImg, alt: "Digidal" },
    { src: kashmirGiftImg, alt: "Kashmir Gift" },
    { src: trustonImg, alt: "Truston US" },
    { src: abraqAgroImg, alt: "ABRAQ Agro" },
    { src: primeCoImg, alt: "Prime Co. Middle East" },
    { src: royalPalmImg, alt: "Royal Palm Holidays" },
    { src: motoboyImg, alt: "Motoboy.ae" },
    { src: astoraImg, alt: "Astora Equipment Trading" },
    { src: daintyImg, alt: "Spectra Bathe Gallery" },
    { src: coldstoreImg, alt: "ColdStore J&K" },
    { src: ziplynowImg, alt: "ZiplyNow" }
  ];

  // Duplicate for seamless infinite marquee scrolling
  const marqueeBrands = [...brandLogos, ...brandLogos, ...brandLogos];

  const stats = [
    { value: "150+", label: "Happy Clients" },
    { value: "50+", label: "Industry Partners" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <section className="trusted-brands container" id="trusted-brands">
      <div className="trusted-header">
        <h2 className="heading-lg">Trusted By <span className="text-gold">Industry Leaders</span></h2>
        <p className="text-body trusted-subtitle">Partnering with the best to deliver excellence</p>
      </div>

      {/* Infinite Sliding Marquee */}
      <div className="marquee-wrapper">
        <div className="marquee-fade-left"></div>
        <div className="marquee-fade-right"></div>
        <div className="marquee-track">
          <div className="marquee-content">
            {marqueeBrands.map((brand, idx) => (
              <div key={idx} className={`brand-card${brand.blend ? ' brand-card--blend' : ''}`}>
                <img
                  src={brand.src}
                  alt={brand.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="trusted-stats-grid">
        {stats.map((stat, idx) => (
          <div key={idx} className="trusted-stat-card">
            <div className="trusted-stat-value">{stat.value}</div>
            <div className="trusted-stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedBrands;
