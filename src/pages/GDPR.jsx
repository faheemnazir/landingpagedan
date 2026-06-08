import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';
import { ShieldCheck, Database, CheckSquare, CheckCircle, AlertTriangle, Globe, Lock, Clock, AlertCircle, MessageSquare } from 'lucide-react';

const GDPR = () => {
  const sections = [
    {
      icon: ShieldCheck,
      title: "Commitment to Data Protection",
      content: (
        <p>Daneen Al Majaz is committed to protecting personal information and complying with applicable data protection laws including the General Data Protection Regulation (GDPR).</p>
      )
    },
    {
      icon: Database,
      title: "Data Controller",
      content: (
        <p>For purposes of GDPR, Daneen Al Majaz acts as the Data Controller for information collected through app.daneenalmajaz.in.</p>
      )
    },
    {
      icon: Database,
      title: "Personal Data We Process",
      content: (
        <>
          <p>We may process:</p>
          <ul>
            <li>Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Company Information</li>
            <li>Project Requirements</li>
            <li>Technical Data</li>
            <li>Usage Data</li>
            <li>Marketing Preferences</li>
          </ul>
        </>
      )
    },
    {
      icon: CheckSquare,
      title: "Legal Basis for Processing",
      content: (
        <>
          <p>We process personal data based on:</p>
          <ul>
            <li><strong>Consent:</strong> When you voluntarily submit information through forms.</li>
            <li><strong>Contractual Necessity:</strong> When processing is required to provide requested services.</li>
            <li><strong>Legitimate Interests:</strong> For business development, website security, analytics, and operational improvements.</li>
            <li><strong>Legal Obligations:</strong> Where required by law.</li>
          </ul>
        </>
      )
    },
    {
      icon: CheckCircle,
      title: "Data Subject Rights",
      content: (
        <>
          <p>Under GDPR, you may exercise the following rights:</p>
          <ul>
            <li><strong>Right of Access:</strong> Request a copy of personal data we hold.</li>
            <li><strong>Right to Rectification:</strong> Request correction of inaccurate information.</li>
            <li><strong>Right to Erasure:</strong> Request deletion of personal data.</li>
            <li><strong>Right to Restrict Processing:</strong> Request limited use of your information.</li>
            <li><strong>Right to Data Portability:</strong> Receive your information in a portable format.</li>
            <li><strong>Right to Object:</strong> Object to certain processing activities.</li>
            <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time.</li>
          </ul>
        </>
      )
    },
    {
      icon: AlertTriangle,
      title: "Automated Decision Making",
      content: (
        <p>We do not engage in automated decision-making that produces legal or similarly significant effects.</p>
      )
    },
    {
      icon: Globe,
      title: "International Transfers",
      content: (
        <p>Where personal information is transferred outside the European Economic Area, appropriate safeguards shall be implemented.</p>
      )
    },
    {
      icon: Lock,
      title: "Security Measures",
      content: (
        <>
          <p>We maintain appropriate security measures including:</p>
          <ul>
            <li>Encryption of data in transit</li>
            <li>Access controls and authentication</li>
            <li>Secure hosting environments</li>
            <li>Monitoring systems</li>
          </ul>
        </>
      )
    },
    {
      icon: Clock,
      title: "Data Retention",
      content: (
        <p>Personal information is retained only as long as necessary to fulfill the purposes outlined in this notice.</p>
      )
    },
    {
      icon: AlertCircle,
      title: "Complaints",
      content: (
        <p>If you believe your rights have been violated, you may lodge a complaint with the relevant supervisory authority.</p>
      )
    },
    {
      icon: MessageSquare,
      title: "Contact for GDPR Requests",
      content: (
        <>
          <p>Daneen Al Majaz</p>
          <p><strong>Email:</strong> info@daneenalmajaz.in</p>
          <p><strong>Website:</strong> app.daneenalmajaz.in</p>
        </>
      )
    }
  ];

  return (
    <LegalPageLayout 
      badge="GDPR Compliance"
      title="GDPR Compliance & Data Protection Notice"
      lastUpdated="June 2026"
      intro=''
      sections={sections}
    />
  );
};

export default GDPR;
