import React, { useState } from 'react';
import './TechStack.css';

const TechStack = () => {
  const categories = [
    "App Technologies",
    "Backend & Web",
    "Cloud & DevOps",
    "Database",
    "Design & QA"
  ];

  const [activeTab, setActiveTab] = useState("App Technologies");

  const stackData = {
    "App Technologies": [
      { name: "React Native", desc: "Cross-platform" },
      { name: "Flutter", desc: "Cross-platform" },
      { name: "Swift", desc: "iOS native" },
      { name: "Kotlin", desc: "Android native" },
      { name: "Expo", desc: "RN toolchain" },
      { name: "TypeScript", desc: "App logic" }
    ],
    "Backend & Web": [
      { name: "Node.js", desc: "Backend runtime" },
      { name: "Next.js", desc: "Web framework" },
      { name: "JavaScript", desc: "Core language" },
      { name: "GraphQL", desc: "API layer" },
      { name: "REST API", desc: "Integrations" },
      { name: "Express.js", desc: "Server layer" }
    ],
    "Cloud & DevOps": [
      { name: "AWS", desc: "Cloud hosting" },
      { name: "Google Cloud", desc: "Cloud hosting" },
      { name: "Docker", desc: "Containerisation" },
      { name: "CI/CD", desc: "Auto deploy" },
      { name: "Firebase", desc: "Push & auth" },
      { name: "App Monitor", desc: "Crash tracking" }
    ],
    "Database": [
      { name: "PostgreSQL", desc: "Relational DB" },
      { name: "MongoDB", desc: "NoSQL DB" },
      { name: "MySQL", desc: "Relational DB" },
      { name: "Redis", desc: "Caching layer" },
      { name: "Supabase", desc: "BaaS platform" },
      { name: "SQLite", desc: "On-device storage" }
    ],
    "Design & QA": [
      { name: "Figma", desc: "UI/UX design" },
      { name: "Prototyping", desc: "Clickable flows" },
      { name: "Jest", desc: "Unit testing" },
      { name: "Detox", desc: "E2E testing" },
      { name: "App Store QA", desc: "Submission review" },
      { name: "Device Testing", desc: "Multi-device QA" }
    ]
  };

  const getTechLogoUrl = (name) => {
    const logoKeys = {
      "React Native": "react-native",
      "Flutter": "flutter",
      "Swift": "swift",
      "Kotlin": "kotlin",
      "Expo": "expo",
      "TypeScript": "typescript",
      "Node.js": "nodejs",
      "Next.js": "nextjs",
      "JavaScript": "javascript",
      "GraphQL": "graphql",
      "REST API": "restapi",
      "Express.js": "express",
      "AWS": "aws",
      "Google Cloud": "googlecloud",
      "Docker": "docker",
      "CI/CD": "cicd",
      "Firebase": "firebase",
      "App Monitor": "appmonitor",
      "PostgreSQL": "postgresql",
      "MongoDB": "mongodb",
      "MySQL": "mysql",
      "Redis": "redis",
      "Supabase": "supabase",
      "SQLite": "sqlite",
      "Figma": "figma",
      "Prototyping": "prototyping",
      "Jest": "jest",
      "Detox": "detox",
      "App Store QA": "appstoreqa",
      "Device Testing": "devicetesting"
    };
    const key = logoKeys[name] || "typescript";
    return new URL(`../assets/tech/${key}.svg`, import.meta.url).href;
  };

  const getIconColorClass = (name) => {
    switch (name) {
      case "React Native":
      case "TypeScript":
      case "Google Cloud":
      case "Docker":
      case "PostgreSQL":
      case "SQLite":
      case "App Store QA":
        return "icon-blue";
      case "Flutter":
      case "Supabase":
      case "Device Testing":
        return "icon-teal";
      case "Swift":
      case "AWS":
      case "Firebase":
      case "MySQL":
        return "icon-orange";
      case "Kotlin":
      case "Figma":
        return "icon-purple";
      case "Node.js":
      case "MongoDB":
      case "CI/CD":
      case "Prototyping":
        return "icon-green";
      case "JavaScript":
        return "icon-yellow";
      case "GraphQL":
      case "Detox":
        return "icon-pink";
      case "REST API":
        return "icon-blue-purple";
      case "Redis":
      case "Jest":
      case "App Monitor":
        return "icon-red";
      default:
        return "icon-gray";
    }
  };

  return (
    <section className="tech-stack container" id="tech-stack">
      <div className="tech-stack-header">
        <h2 className="heading-lg" style={{ fontSize: '2.5rem', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: '1.25', margin: '0 0 10px 0' }}>
          What Technologies Does <span className="text-gold" style={{ color: '#dfb15b', borderBottom: '2px solid #dfb15b', paddingBottom: '4px' }}>Daneen Al Majaz</span> <br /> Use for Mobile App Development?
        </h2>
        <div className="title-underline"></div>
        <p className="text-body tech-stack-subtitle">
          We use a modern, open-technology stack — no proprietary lock-in, no frameworks that trap you. Every tool we choose is proven at scale, maintainable by any developer, and selected specifically for your project's performance requirements.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="tech-tabs-container">
        <div className="tech-tabs">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`tab-btn ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal Cards Grid */}
      <div className="tech-cards-wrapper">
        <div className="tech-cards-row">
          {stackData[activeTab].map((item, idx) => {
            const logoUrl = getTechLogoUrl(item.name);
            const colorClass = getIconColorClass(item.name);
            return (
              <div key={idx} className="tech-flat-card">
                <div className={`tech-icon-box ${colorClass}`}>
                  <img src={logoUrl} alt={item.name} className="tech-logo-img" />
                </div>
                <h3 className="tech-name">{item.name}</h3>
                <p className="tech-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
