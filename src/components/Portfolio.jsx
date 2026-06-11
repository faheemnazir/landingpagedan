import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';
import './Portfolio.css';

// Import project images from assets
import bakirImg from '../assets/bakir.png';
import cemtacImg from '../assets/cemtac.png';
import coldstoreImg from '../assets/coldstore.png';
import digidalImg from '../assets/digidal.png';
import kashmiriRealtorImg from '../assets/kashmiriRealtor.png';
import snookerImg from '../assets/snooker.png';
import valeMountsImg from '../assets/vale_mounts.png';
import ziplynowImg from '../assets/ziplynow.png'; // 8th image

const ProjectCard = ({ title, tags, description, stats, category, image, link, bg = '#ffffff', fit = 'contain', padding = '12px' }) => {
  const handleClick = (e) => {
    // Prevent double navigation if the user clicks directly on the project-link <a> tag
    if (e.target.closest('.project-link')) return;
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="project-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="project-image-placeholder" style={{ backgroundColor: bg, padding: padding }}>
        {category && <span className="image-category-badge">{category}</span>}
        {image && (
          <img 
            src={image} 
            alt={title} 
            className="project-image-full" 
            style={{ objectFit: fit }} 
          />
        )}
      </div>
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
        
        <div className="project-stats">
          <div className="stat">
            <span className="stat-value">{stats.users}</span> Users
          </div>
          <div className="stat">
            <span className="stat-value">★ {stats.rating}</span>
          </div>
          <div className="stat">
            <span className="stat-value">{stats.downloads}</span> Downloads
          </div>
        </div>

        <div className="project-tags">
          {tags.map((tag, idx) => (
            <span key={idx} className="project-tag">{tag}</span>
          ))}
        </div>

        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          Visit Website <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "🏠 Kashmiri Realtor",
      image: kashmiriRealtorImg,
      link: "https://stage.kashmirirealtor.com/",
      category: "Real Estate",
      tags: ["iOS", "Android", "Maps", "Search"],
      description: "A premium property finder and real estate platform tailored for the Kashmir region. The app connects buyers, sellers, and renters through real-time listings, interactive map navigation, and verified property profiles. Built to serve the unique geography and market of Jammu & Kashmir, it simplifies property discovery from Srinagar to the valleys.",
      stats: { users: "40K+", rating: "4.8", downloads: "100K+" },
      bg: "#ffffff",
      fit: "contain",
      padding: "12px"
    },
    {
      title: "🏗️ CEMTAC Cement",
      image: cemtacImg,
      link: "https://cemtac.com/",
      category: "Industrial ERP",
      tags: ["Logistics", "B2B", "Supply Chain"],
      description: "An enterprise resource planning and delivery tracking portal built for CEMTAC Cements, one of Jammu & Kashmir's leading cement manufacturers. The platform streamlines order management, distributor logistics, and supply chain visibility — connecting field operations with the head office in real time. MES-approved, the only J&K cement brand certified by Military Engineering Services.",
      stats: { users: "10K+", rating: "4.7", downloads: "25K+" },
      bg: "#ffffff",
      fit: "contain",
      padding: "12px"
    },
    {
      title: "🎱 The Snooker Academy",
      image: snookerImg,
      link: "https://thesnookeracademy.in/",
      category: "Sports SaaS",
      tags: ["Leisure", "Booking System", "SaaS"],
      description: "A real-time table booking and tournament management platform for The Snooker Academy. Players can reserve tables, view availability, register for tournaments, and track match results — all from a single app. Designed to modernize snooker club operations and enhance the player experience.",
      stats: { users: "15K+", rating: "4.7", downloads: "30K+" },
      bg: "#ffffff",
      fit: "contain",
      padding: "12px"
    },
    {
      title: "🏨 BAKR HMS",
      image: bakirImg,
      link: "https://hms.daneenalmajaz.in/",
      category: "On-Site Management",
      tags: ["Civil", "Project Mgmt", "Collaboration"],
      description: "An on-site management and progress tracking portal for BAKR, connecting field engineers with the head office. The system supports project milestone tracking, task assignments, daily progress reports, and team collaboration — bringing transparency and control to complex construction and hospitality operations.",
      stats: { users: "5K+", rating: "4.6", downloads: "12K+" },
      bg: "#ffffff",
      fit: "contain",
      padding: "12px"
    },
    {
      title: "❄️ ColdStore Pro",
      image: coldstoreImg,
      link: "https://cs.daneenalmajaz.in/",
      category: "Smart Logistics / IoT",
      tags: ["IoT", "Sensors", "Real-time"],
      description: "An IoT-enabled smart monitoring application for cold storage units, delivering real-time temperature and humidity tracking with instant alerts. Built for institutional-grade facilities, it ensures regulatory compliance, prevents spoilage, and gives operators full visibility into storage conditions from any device.",
      stats: { users: "8K+", rating: "4.9", downloads: "15K+" },
      bg: "#ffffff",
      fit: "contain",
      padding: "12px"
    },
    {
      title: "📦 ZipplyNow",
      image: ziplynowImg,
      link: "https://zipplynow.com",
      category: "Logistics SaaS",
      tags: ["Delivery", "Real-time", "SaaS"],
      description: "Zip. Zap. Zoom. ZipplyNow is an on-demand hyper-local delivery and courier service platform connecting businesses and consumers for fast, trackable last-mile deliveries. The platform supports multi-vendor order management, real-time rider tracking, and seamless checkout — purpose-built for the fast-paced local commerce economy.",
      stats: { users: "85K+", rating: "4.8", downloads: "120K+" },
      bg: "#ffffff",
      fit: "contain",
      padding: "12px"
    },
    {
      title: "🎬 DigiDal Media",
      image: digidalImg,
      link: "https://www.digidalglobal.com/",
      category: "Streaming SaaS",
      tags: ["Streaming", "Content Creation", "Social"],
      description: "DigiDal is a digital media distribution and audience analytics platform empowering local content creators to reach wider audiences. From streaming and publishing to performance insights, it gives creators and media houses the tools to grow, monetize, and manage their digital presence — all on one platform.",
      stats: { users: "200K+", rating: "4.8", downloads: "500K+" },
      bg: "#ffffff",
      fit: "contain",
      padding: "12px"
    },
    {
      title: "🔩 Vale Montis",
      image: valeMountsImg,
      link: "https://valemontis.com/",
      category: "Hardware Retail / E-Commerce",
      tags: ["E-Commerce", "Hardware", "Retail"],
      description: "An e-commerce catalog and ordering app for Vale Montis, specializing in industrial wall mounts, brackets, and hardware accessories. The platform features rapid product discovery, a detailed specification catalog, and a streamlined checkout experience — designed for contractors, retailers, and end consumers.",
      stats: { users: "12K+", rating: "4.8", downloads: "20K+" },
      bg: "#ffffff",
      fit: "contain",
      padding: "12px"
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const handleScroll = () => {
    if (sliderRef.current) {
      const container = sliderRef.current;
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      
      const isAtEnd = scrollLeft > 10 && Math.abs(scrollWidth - clientWidth - scrollLeft) <= 10;
      
      const cardWidth = container.children[0].clientWidth + 16; // width + gap on mobile
      
      let newActiveSlide = Math.round(scrollLeft / cardWidth);
      if (scrollLeft <= 10) {
        newActiveSlide = 0;
      } else if (isAtEnd) {
        newActiveSlide = projects.length - 1;
      } else {
        newActiveSlide = Math.min(newActiveSlide, projects.length - 1);
      }
      
      if (newActiveSlide !== activeSlide) {
        setActiveSlide(newActiveSlide);
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && sliderRef.current) {
            sliderRef.current.scrollTo({ left: 0 });
            setActiveSlide(0);
          }
        });
      },
      { threshold: 0 }
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);

  const scrollPrev = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.children[0].clientWidth + 16;
      sliderRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.children[0].clientWidth + 16;
      sliderRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <section className="portfolio container" id="portfolio">
      <div className="portfolio-header">
        <h2 className="heading-lg text-gold">Portfolio</h2>
        <p className="text-body portfolio-subtitle">
          Trusted by leading brands worldwide to build exceptional mobile experiences that users love and investors fund.
        </p>
      </div>

      <div className="portfolio-grid" ref={sliderRef} onScroll={handleScroll}>
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>

      {/* Mobile Slider Controls */}
      <div className="slider-controls">
        <button className="control-btn prev" onClick={scrollPrev} aria-label="Previous slide" disabled={activeSlide === 0}>
          <ArrowLeft size={18} />
        </button>
        <div className="slider-dots">
          {projects.map((_, idx) => (
            <span 
              key={idx} 
              className={`slider-dot ${activeSlide === idx ? 'active' : ''}`}
              onClick={() => {
                if (sliderRef.current) {
                  const cardWidth = sliderRef.current.children[0].clientWidth + 16;
                  sliderRef.current.scrollTo({
                    left: cardWidth * idx,
                    behavior: 'smooth'
                  });
                }
              }}
            />
          ))}
        </div>
        <button className="control-btn next" onClick={scrollNext} aria-label="Next slide" disabled={activeSlide >= projects.length - 1}>
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
