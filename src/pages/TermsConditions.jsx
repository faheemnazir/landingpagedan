import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';
import { FileText, Globe, AlertCircle, Shield, AlertTriangle, Scale } from 'lucide-react';

const TermsConditions = () => {
  const sections = [
    {
      icon: FileText,
      title: "Acceptance of Terms",
      content: (
        <p>By using this website, you acknowledge that you have read, understood, and agreed to these Terms. If you do not agree, please discontinue use of the website.</p>
      )
    },
    {
      icon: Globe,
      title: "Website Purpose",
      content: (
        <p>This website is intended to provide information regarding software development, web development, mobile applications, AI solutions, digital services, and related business offerings.</p>
      )
    },
    {
      icon: AlertCircle,
      title: "User Responsibilities",
      content: (
        <ul>
          <li>To provide accurate information</li>
          <li>Not to submit false or misleading data</li>
          <li>Not to interfere with website functionality</li>
          <li>Not to attempt unauthorized access to systems or data</li>
          <li>Not to engage in unlawful activities through the website</li>
        </ul>
      )
    },
    {
      icon: Shield,
      title: "Intellectual Property",
      content: (
        <p>All content on this website, including text, graphics, logos, designs, images, software, and branding, is the property of Daneen Al Majaz unless otherwise stated and is protected by applicable intellectual property laws. Unauthorized reproduction or distribution is prohibited.</p>
      )
    },
    {
      icon: AlertTriangle,
      title: "No Guarantee",
      content: (
        <p>Information provided on the website is for general informational purposes only. We make reasonable efforts to ensure accuracy but do not guarantee completeness, accuracy, availability, or reliability.</p>
      )
    },
    {
      icon: FileText,
      title: "Service Proposals",
      content: (
        <p>Any quotations, estimates, proposals, or project discussions submitted through the website are non-binding until a formal written agreement has been executed.</p>
      )
    },
    {
      icon: Globe,
      title: "Third-Party Links",
      content: (
        <p>The website may contain links to third-party websites. We are not responsible for their content, policies, or practices.</p>
      )
    },
    {
      icon: Shield,
      title: "Limitation of Liability",
      content: (
        <p>To the maximum extent permitted by law, Daneen Al Majaz shall not be liable for indirect damages, consequential damages, loss of profits, data loss, or business interruption arising from the use of this website.</p>
      )
    },
    {
      icon: FileText,
      title: "Changes to Terms",
      content: (
        <p>We reserve the right to modify these Terms at any time. Continued use of the website constitutes acceptance of updated Terms.</p>
      )
    },
    {
      icon: Scale,
      title: "Governing Law",
      content: (
        <p>These Terms shall be governed by and interpreted in accordance with applicable laws of the jurisdiction in which Daneen Al Majaz operates.</p>
      )
    }
  ];

  return (
    <LegalPageLayout 
      badge="Legal Information"
      title="Terms & Conditions"
      lastUpdated="June 2026"
      intro='Welcome to app.daneenalmajaz.in. By accessing or using this website, you agree to comply with these Terms & Conditions.'
      sections={sections}
    />
  );
};

export default TermsConditions;
