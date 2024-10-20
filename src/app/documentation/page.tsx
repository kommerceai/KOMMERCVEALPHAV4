import React from 'react';
import Link from 'next/link';

const DocumentationPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Kommerce Documentation</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="mb-4">
          Kommerce is a comprehensive e-commerce management platform designed to streamline client management, campaign tracking, and creator collaboration for businesses operating in the social commerce space.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Current Implemented Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Client Management Dashboard</li>
          <li>Campaign Tracking and Analytics</li>
          <li>Creator Management</li>
          <li>AI-powered Budget Calculator and Forecasting</li>
          <li>Multi-client Support</li>
          <li>User Authentication and Authorization</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Setup Instructions for Developers</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Clone the repository: <code className="bg-gray-100 p-1 rounded">git clone https://github.com/your-repo/kommerce.git</code></li>
          <li>Install dependencies: <code className="bg-gray-100 p-1 rounded">npm install</code></li>
          <li>Set up environment variables:
            <ul className="list-disc pl-6 mt-2">
              <li>Copy <code className="bg-gray-100 p-1 rounded">.env.example</code> to <code className="bg-gray-100 p-1 rounded">.env.local</code></li>
              <li>Fill in the required environment variables</li>
            </ul>
          </li>
          <li>Run the development server: <code className="bg-gray-100 p-1 rounded">npm run dev</code></li>
          <li>Open <a href="http://localhost:3000" className="text-blue-600 hover:underline">http://localhost:3000</a> in your browser</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">API Endpoints</h2>
        <p className="mb-4">The following API endpoints are available:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><code className="bg-gray-100 p-1 rounded">GET /api/clients</code> - Retrieve all clients</li>
          <li><code className="bg-gray-100 p-1 rounded">GET /api/clients/:id</code> - Retrieve a specific client</li>
          <li><code className="bg-gray-100 p-1 rounded">POST /api/clients</code> - Create a new client</li>
          <li><code className="bg-gray-100 p-1 rounded">PUT /api/clients/:id</code> - Update a client</li>
          <li><code className="bg-gray-100 p-1 rounded">DELETE /api/clients/:id</code> - Delete a client</li>
          <li><code className="bg-gray-100 p-1 rounded">GET /api/campaigns</code> - Retrieve all campaigns</li>
          <li><code className="bg-gray-100 p-1 rounded">GET /api/campaigns/:id</code> - Retrieve a specific campaign</li>
          <li><code className="bg-gray-100 p-1 rounded">POST /api/campaigns</code> - Create a new campaign</li>
          <li><code className="bg-gray-100 p-1 rounded">PUT /api/campaigns/:id</code> - Update a campaign</li>
          <li><code className="bg-gray-100 p-1 rounded">DELETE /api/campaigns/:id</code> - Delete a campaign</li>
          <li><code className="bg-gray-100 p-1 rounded">GET /api/creators</code> - Retrieve all creators</li>
          <li><code className="bg-gray-100 p-1 rounded">GET /api/creators/:id</code> - Retrieve a specific creator</li>
          <li><code className="bg-gray-100 p-1 rounded">POST /api/creators</code> - Create a new creator</li>
          <li><code className="bg-gray-100 p-1 rounded">PUT /api/creators/:id</code> - Update a creator</li>
          <li><code className="bg-gray-100 p-1 rounded">DELETE /api/creators/:id</code> - Delete a creator</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Data Flow</h2>
        <p className="mb-4">The data flow in Kommerce follows these general steps:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>User authentication and authorization</li>
          <li>Server-side data fetching in page components</li>
          <li>Data passed as props to client components</li>
          <li>Client-side state management for real-time updates</li>
          <li>API calls for data mutations (create, update, delete)</li>
          <li>Real-time updates using WebSocket connections (future implementation)</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Additional Resources</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><Link href="/documentation/api" className="text-blue-600 hover:underline">API Documentation</Link></li>
          <li><Link href="/documentation/components" className="text-blue-600 hover:underline">Component Library</Link></li>
          <li><Link href="/documentation/best-practices" className="text-blue-600 hover:underline">Development Best Practices</Link></li>
        </ul>
      </section>
    </div>
  );
};

export default DocumentationPage;