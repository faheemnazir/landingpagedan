import React from 'react';
import './TrustedBrands.css';

// Import the existing client logos
import bakirImg from '../assets/bakir.png';
import cemtacImg from '../assets/cemtac.png';
import coldstoreImg from '../assets/coldstore.png';
import digidalImg from '../assets/digidal.png';
import kashmiriRealtorImg from '../assets/kashmiriRealtor.png';
import snookerImg from '../assets/snooker.png';
import valeMountsImg from '../assets/vale_mounts.png';
import ziplynowImg from '../assets/ziplynow.png';

// Import trusted partner logos
import lotusImg from '../assets/partners/lotus_medical.jpeg';
import apnaChickenImg from '../assets/partners/apna_chicken.jpeg';
import angelWingsImg from '../assets/partners/angel_wings.jpeg';
import cemtacPartnerImg from '../assets/partners/cemtac.jpeg';
import tailorProLightImg from '../assets/partners/tailor_pro_light.jpeg';
import digidalPartnerImg from '../assets/partners/digidal.jpeg';
import kashmirGiftImg from '../assets/partners/kashmir_gift.jpeg';
import trustonImg from '../assets/partners/truston.jpeg';
import marriottImg from '../assets/partners/series_marriott.jpeg';
import auraImg from '../assets/partners/aura.jpeg';
import daintyImg from '../assets/partners/dainty.jpeg';
import abraqImg from '../assets/partners/abraq_agro.jpeg';
import primeCoImg from '../assets/partners/prime_co.jpeg';
import motoboyImg from '../assets/partners/motoboy.jpeg';
import astoraImg from '../assets/partners/astora.jpeg';
import royalPalmImg from '../assets/partners/royal_palm.jpeg';
import deprelImg from '../assets/partners/deprel.jpeg';
import spectraImg from '../assets/partners/spectra_bathe.jpeg';
import tailorProImg from '../assets/partners/tailor_pro.jpeg';

const TrustedBrands = () => {
  const brandLogos = [
    // Original client logos (already have dark/transparent backgrounds)
    { src: kashmiriRealtorImg, alt: "Kashmiri Realtor" },
    { src: cemtacImg, alt: "Cemtac Cement" },
    { src: snookerImg, alt: "The Snooker Academy" },
    { src: valeMountsImg, alt: "Vale Mounts" },
    { src: coldstoreImg, alt: "ColdStore J&K" },
    { src: bakirImg, alt: "Bakir Group" },
    { src: digidalImg, alt: "Digidal" },
    { src: ziplynowImg, alt: "ZiplyNow" },
    // New trusted partner logos (white bg — need blend mode)
    { src: lotusImg, alt: "Lotus Medical Centre", blend: true },
    { src: apnaChickenImg, alt: "Apna Chicken Centre", blend: true },
    { src: angelWingsImg, alt: "Angel Wings", blend: true },
    { src: cemtacPartnerImg, alt: "Cemtac Cements", blend: true },
    { src: tailorProLightImg, alt: "Tailor Pro", blend: true },
    { src: digidalPartnerImg, alt: "Digidal", blend: true },
    { src: kashmirGiftImg, alt: "Kashmir Gift", blend: true },
    { src: trustonImg, alt: "Truston US", blend: true },
    { src: marriottImg, alt: "Series by Marriott", blend: true },
    { src: auraImg, alt: "Aura", blend: true },
    { src: daintyImg, alt: "Dainty", blend: true },
    { src: abraqImg, alt: "ABRAQ Agro", blend: true },
    { src: primeCoImg, alt: "Prime Co. Middle East", blend: true },
    { src: motoboyImg, alt: "Motoboy", blend: true },
    { src: astoraImg, alt: "Astora Equipment Trading", blend: true },
    { src: royalPalmImg, alt: "Royal Palm Holidays", blend: true },
    { src: deprelImg, alt: "Deprel", blend: true },
    { src: spectraImg, alt: "Spectra Bathe Gallery", blend: true },
    { src: tailorProImg, alt: "Tailor Pro", blend: true },
  ];

  // Duplicate for seamless infinite marquee scrolling
  const marqueeBrands = [...brandLogos, ...brandLogos, ...brandLogos];

  const stats = [
    { value: "500+", label: "Happy Clients" },
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
                  loading="lazy" 
                  decoding="async" 
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
