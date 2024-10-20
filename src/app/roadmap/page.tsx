import React from 'react';

const RoadmapPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Kommerce Development Roadmap</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Phase 1: Core Functionality (Current)</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Client Management Dashboard</li>
          <li>Basic Campaign Tracking</li>
          <li>Creator Management</li>
          <li>User Authentication and Authorization</li>
          <li>AI-powered Budget Calculator (Basic)</li>
        </ul>
        <p className="mt-4"><strong>Timeline:</strong> Completed</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Phase 2: Enhanced Features and Integrations</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Advanced Campaign Analytics and Reporting</li>
          <li>Multi-platform Integration (TikTok Shop, Instagram, Facebook)</li>
          <li>Improved AI-powered Budget Forecasting</li>
          <li>Creator Marketplace and Onboarding</li>
          <li>Custom Client Dashboards</li>
        </ul>
        <p className="mt-4"><strong>Timeline:</strong> Q2 2024 (2-3 months)</p>
        <p><strong>Challenges:</strong> API integrations with multiple platforms, ensuring data consistency</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Phase 3: Advanced Features and Scaling</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Real-time Collaboration Tools</li>
          <li>Advanced Permission Settings and Role Management</li>
          <li>Automated Reporting and Alerts</li>
          <li>Machine Learning-powered Performance Predictions</li>
          <li>API for Third-party Integrations</li>
        </ul>
        <p className="mt-4"><strong>Timeline:</strong> Q3-Q4 2024 (4-5 months)</p>
        <p><strong>Challenges:</strong> Implementing real-time features, scaling the infrastructure</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Phase 4: Enterprise Features and Expansion</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>White-label Solutions</li>
          <li>Advanced Data Analytics and Business Intelligence</li>
          <li>Compliance and Audit Tools</li>
          <li>Global Expansion and Localization</li>
          <li>Integration with ERP and CRM Systems</li>
        </ul>
        <p className="mt-4"><strong>Timeline:</strong> Q1-Q2 2025 (6 months)</p>
        <p><strong>Challenges:</strong> Meeting enterprise-level security and compliance requirements, supporting multiple languages and regions</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Ongoing Priorities</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>User Experience Improvements</li>
          <li>Performance Optimization</li>
          <li>Security Enhancements</li>
          <li>Documentation and Support Resources</li>
          <li>Community Building and Feedback Integration</li>
        </ul>
      </section>
    </div>
  );
};

export default RoadmapPage;