import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, ArrowLeft, ArrowRight, X } from 'lucide-react';
import './Portfolio.css';

// Import project images from assets
import bakirImg from '../assets/bakir.png';
import cemtacImg from '../assets/cemtac.png';
import digidalImg from '../assets/digidal.png';
import kashmiriRealtorImg from '../assets/kashmiriRealtor.png';
import apnaChickenImg from '../assets/new_partnars/02_apna_chicken.png';
import valeMountsImg from '../assets/vale_mounts.png';
import zipply from '../assets/tech/portfolioimages/zipply.png';
import coldstorage from '../assets/tech/portfolioimages/coldstorage.png';
import digidal from '../assets/tech/portfolioimages/digidal.png';

const ProjectCard = ({ title, number, tags, description, stats, category, image, link, bg = '#ffffff', fit = 'contain', padding = '12px', onCardClick }) => {
  return (
    <div className="project-card" onClick={onCardClick} style={{ cursor: 'pointer' }}>
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
        <h3 className="project-title">
          {title}
        </h3>
        <p className="project-desc">{description}</p>

        <div className="project-stats">
          <div className="stat">
            <span className="stat-value">{stats.users}</span> Users
          </div>
          <div className="stat">
            <span className="stat-value">★ {stats.rating}</span>
          </div>
          {stats.downloads && (
            <div className="stat">
              <span className="stat-value">{stats.downloads}</span> Downloads
            </div>
          )}
        </div>

        <div className="project-tags">
          {tags.map((tag, idx) => (
            <span key={idx} className="project-tag">{tag}</span>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          onClick={(e) => e.stopPropagation()}
        >
          Visit Website <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "⚡ ZipplyNow",
      number: "06",
      image: zipply,
      link: "https://zipplynow.com",
      category: "Logistics SaaS",
      tags: ["Delivery", "Real-time", "Flutter", "E-commerce"],
      description: "A Flutter-based on-demand logistics system built for hyperlocal deliveries. Features real-time order tracking on live maps, role-based workflows for customers/merchants/riders, and in-app push notifications.",
      bullets: [
        "Real-time order tracking with live map updates",
        "Multi-role flows: customer, delivery rider & merchant",
        "In-app push notifications & delivery status updates",
        "Cross-platform Flutter codebase for iOS & Android"
      ],
      stats: { users: "300", rating: "4.8", downloads: "1k+" },
      bg: "#ffffff",
      fit: "contain",
      padding: "12px"
    },
    {
      title: "🌡 Daneen Cold Storage",
      number: "01",
      image: coldstorage,
      link: "https://cs.daneenalmajaz.in/",
      category: "Smart Logistics / ERP",
      tags: ["ERP", "Inventory", "SaaS", "J&K"],
      description: "A full-stack cold storage management platform for Kashmir's horticulture industry. Enables real-time inventory tracking, crate management, automated billing, and storage occupancy analytics for institutional-grade facilities.",
      bullets: [
        "Live inventory & stock inward/outward tracking",
        "Automated billing & invoice generation",
        "Role-based access for operators and managers",
        "Dashboard with storage occupancy analytics"
      ],
      stats: { users: "400", rating: "4.8" },
      bg: "#ffffff",
      fit: "contain",
      padding: "12px"
    },
    {
      title: "🏗 Cemtac ERP System",
      number: "02",
      image: cemtacImg,
      link: "https://cemtac.com/",
      category: "Manufacturing ERP",
      tags: ["ERP", "Inventory", "Distribution", "Custom Software"],
      description: "A comprehensive custom ERP solution designed for Cemtac Cements to manage employees, inventory, billing, task assignments, and daily operations from one unified platform. Built for manufacturing environments, it provides real-time visibility into stock levels, workforce activities, sales transactions, and operational performance across departments.",
      bullets: [
        "HRM system for employee management, attendance, and payroll workflows",
        "nventory management with real-time stock tracking and warehouse control",
        "illing & invoicing system with sales and payment management",
        "Mobile and web access for seamless operational management"
      ],
      stats: { users: "800+", rating: "4.9" },
      bg: "#ffffff",
      fit: "contain",
      padding: "12px"
    },
    {
      title: "🐔 Apna Chicken Centre",
      number: "03",
      image: apnaChickenImg,
      link: "https://apnachickencenter.in/",
      category: "Poultry E-Commerce / App",
      tags: ["Poultry", "E-Commerce", "Mobile App", "Home Delivery"],
      description: "An end-to-end poultry e-commerce platform with a dedicated mobile application and website, enabling customers to order fresh, hygienically processed chicken directly from their smartphones or desktop devices. The platform combines seamless online ordering, custom-cut selections, scheduled deliveries, and real-time convenience to modernize the traditional poultry shopping experience.",
      bullets: [
        "Seamless online ordering & custom-cut poultry selection",
        "Scheduled home delivery routes with real-time tracking",
        "Integrated e-commerce website & dedicated mobile application",
        "Hygienic processing & cold chain storage quality control"
      ],
      stats: { users: "3.5k+", rating: "4.9", downloads: "2.5k+" },
      bg: "#ffffff",
      fit: "contain",
      padding: "12px"
    },
    {
      title: "🏡 Kashmiri Realtor",
      number: "04",
      image: kashmiriRealtorImg,
      link: "https://stage.kashmirirealtor.com/",
      category: "Real Estate Portal",
      tags: ["Real Estate", "Listings", "Kashmir", "Portal"],
      description: "A premium real estate discovery platform for the Kashmir property market. Buyers, sellers and agents browse residential and commercial listings with location-based filters, agent profiles, and direct enquiry flows.",
      bullets: [
        "Property listings with filters area, type & price range",
        "Agent profiles with direct enquiry & contact system",
        "Map-based property discovery for Kashmir localities",
        "Stage environment maintained for QA and client review"
      ],
      stats: { users: "200", rating: "4.8" },
      bg: "#ffffff",
      fit: "contain",
      padding: "12px"
    },
    {
      title: "🏨 BAKR HMS",
      number: "05",
      image: bakirImg,
      link: "https://hms.daneenalmajaz.in/",
      category: "Hospitality SaaS",
      tags: ["HMS", "SaaS", "Hospitality", "Dashboard"],
      description: "A comprehensive Hotel Management System covering the full operations lifecycle, including reservations, front desk check-in/out, housekeeping status, guest billing, and real-time occupancy and revenue dashboards.",
      bullets: [
        "Front desk: reservations, check-in & check-out management",
        "Room status & housekeeping workflow tracking",
        "Guest billing, invoice generation & payment tracking",
        "Occupancy & revenue analytics dashboard"
      ],
      stats: { users: "350", rating: "4.9" },
      bg: "#ffffff",
      fit: "contain",
      padding: "12px"
    },

    {
      title: "🌐 DigiDal Media",
      number: "07",
      image: digidal,
      link: "https://www.digidalglobal.com/",
      category: "Streaming SaaS",
      tags: ["Streaming", "Content Creation", "Social"],
      description: "DigiDal is a digital media distribution and audience analytics platform empowering local content creators to reach wider audiences. From streaming and publishing to performance insights, it gives creators full control.",
      bullets: [
        "Service pages: SEO, branding, social media & paid ads",
        "Portfolio & case study showcase section",
        "Lead generation forms & client enquiry flows",
        "Clean, professional, conversion-focused design"
      ],
      stats: { users: "180", rating: "4.8" },
      bg: "#ffffff",
      fit: "contain",
      padding: "12px"
    },
    {
      title: "🏔 Vale Montis",
      number: "08",
      image: valeMountsImg,
      link: "https://valemontis.com/",
      category: "Luxury Hospitality / E-Commerce",
      tags: ["Hospitality", "Luxury", "Retail"],
      description: "It's a hospitality platform for Vale Montis, a premium mountain-valley luxury brand. Features immersive brand storytelling, room & suite showcase, experiences catalogue, and seamless booking integration.",
      bullets: [
        "Full-screen immersive hero with brand narrative",
        "Room & suite showcase with booking integration",
        "Experiences, dining & activities feature sections",
        "High-end visual design crafted for luxury positioning"
      ],
      stats: { users: "200", rating: "4.8" },
      bg: "#ffffff",
      fit: "contain",
      padding: "12px"
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const sliderRef = useRef(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const handleScroll = () => {
    if (sliderRef.current) {
      const container = sliderRef.current;
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;

      const isAtEnd = scrollLeft > 10 && Math.abs(scrollWidth - clientWidth - scrollLeft) <= 10;
      const firstChild = container.children[0];
      const cardWidth = firstChild ? firstChild.clientWidth + 16 : 300; // width + gap on mobile

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
      const firstChild = sliderRef.current.children[0];
      const cardWidth = firstChild ? firstChild.clientWidth + 16 : 300;
      sliderRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (sliderRef.current) {
      const firstChild = sliderRef.current.children[0];
      const cardWidth = firstChild ? firstChild.clientWidth + 16 : 300;
      sliderRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <section className="portfolio container" id="portfolio">
      <div className="portfolio-header">
        <h2 className="heading-lg text-gold">Portfolio: Selected Work</h2>
        <p className="text-body portfolio-subtitle">
          Trusted by leading brands to build exceptional digital products that users love.
        </p>
      </div>

      <div className="portfolio-grid" ref={sliderRef} onScroll={handleScroll}>
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            {...project}
            onCardClick={() => setSelectedProject(project)}
          />
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
                  const firstChild = sliderRef.current.children[0];
                  const cardWidth = firstChild ? firstChild.clientWidth + 16 : 300;
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

      {/* Details Popup Modal */}
      {selectedProject && (
        <div className="portfolio-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="portfolio-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="portfolio-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="portfolio-modal-content">
              <div className="portfolio-modal-details-sec">
                <span className="modal-category">{selectedProject.category}</span>
                <h2 className="modal-title">
                  {selectedProject.title}
                </h2>

                <p className="modal-desc">{selectedProject.description}</p>

                {selectedProject.bullets && selectedProject.bullets.length > 0 && (
                  <ul className="modal-bullets">
                    {selectedProject.bullets.map((bullet, idx) => (
                      <li key={idx} className="modal-bullet-item">
                        <span className="bullet-arrow">→</span> {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="modal-stats">
                  <div className="modal-stat">
                    <span className="stat-label">Users</span>
                    <span className="stat-value">{selectedProject.stats.users}</span>
                  </div>
                  <div className="modal-stat">
                    <span className="stat-label">Rating</span>
                    <span className="stat-value">★ {selectedProject.stats.rating}</span>
                  </div>
                  {selectedProject.stats.downloads && (
                    <div className="modal-stat">
                      <span className="stat-label">Downloads</span>
                      <span className="stat-value">{selectedProject.stats.downloads}</span>
                    </div>
                  )}
                </div>

                <div className="modal-tags">
                  {selectedProject.tags.map((tag, idx) => (
                    <span key={idx} className="modal-tag">{tag}</span>
                  ))}
                </div>

                <div className="modal-actions">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary modal-visit-btn"
                  >
                    Visit Website <ArrowUpRight size={16} />
                  </a>
                  <button
                    className="btn btn-secondary modal-back-btn"
                    onClick={() => setSelectedProject(null)}
                  >
                    Back to Listing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
