import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';
import { Eye, Shield, User, Cookie, Share2, Lock, Clock } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: (
        <>
          <p>We may collect:</p>
          <ul>
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Company Name</li>
            <li>Project Requirements</li>
            <li>Communication Preferences</li>
            <li>Technical information such as IP address, browser type, device information, and cookies</li>
          </ul>
        </>
      )
    },
    {
      icon: Shield,
      title: "How We Use Your Information",
      content: (
        <>
          <p>We use your information to:</p>
          <ul>
            <li>Respond to inquiries</li>
            <li>Provide quotations and proposals</li>
            <li>Deliver requested services</li>
            <li>Improve website performance</li>
            <li>Send updates regarding our services</li>
            <li>Maintain customer relationships</li>
            <li>Comply with legal obligations</li>
          </ul>
        </>
      )
    },
    {
      icon: User,
      title: "Lead Forms",
      content: (
        <p>When you submit a form on our website, the information provided is stored securely and may be used by our sales or support team to contact you regarding your inquiry.</p>
      )
    },
    {
      icon: Cookie,
      title: "Cookies and Analytics",
      content: (
        <>
          <p>We may use cookies, analytics tools, and tracking technologies to:</p>
          <ul>
            <li>Understand visitor behavior</li>
            <li>Improve user experience</li>
            <li>Measure marketing performance</li>
            <li>Optimize website functionality</li>
          </ul>
          <p><em>You may disable cookies through your browser settings.</em></p>
        </>
      )
    },
    {
      icon: Share2,
      title: "Data Sharing",
      content: (
        <>
          <p>We do not sell, rent, or trade personal information. Information may be shared only with:</p>
          <ul>
            <li>Authorized employees</li>
            <li>Service providers assisting our operations</li>
            <li>Legal authorities when required by law</li>
          </ul>
        </>
      )
    },
    {
      icon: Lock,
      title: "Data Security",
      content: (
        <p>We implement reasonable administrative, technical, and organizational safeguards to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission is completely secure.</p>
      )
    },
    {
      icon: Clock,
      title: "Data Retention",
      content: (
        <p>We retain personal information only for as long as necessary to fulfill business purposes, legal obligations, and contractual requirements.</p>
      )
    }
  ];

  return (
    <LegalPageLayout 
      badge="Privacy & Data Protection"
      title="Privacy Policy"
      lastUpdated="June 2026"
      intro='Daneen Al Majaz ("Company", "we", "our", or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect information when you visit app.daneenalmajaz.in or submit information through our forms.'
      sections={sections}
    />
  );
};

export default PrivacyPolicy;
