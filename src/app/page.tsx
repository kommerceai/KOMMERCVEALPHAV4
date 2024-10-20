import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import FeatureCard from '../components/feature-card';
import HeroSection from '../components/hero-section';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Client Management"
              description="Efficiently manage multiple client accounts and their campaigns from a centralized dashboard."
              icon="Users"
            />
            <FeatureCard
              title="Campaign Tracking"
              description="Monitor and analyze campaign performance with real-time data and insightful visualizations."
              icon="BarChart2"
            />
            <FeatureCard
              title="Creator Collaboration"
              description="Streamline your workflow with influencers and content creators for maximum impact."
              icon="UserPlus"
            />
            <FeatureCard
              title="AI-Powered Budgeting"
              description="Leverage artificial intelligence to optimize budget allocation and forecast campaign performance."
              icon="Brain"
            />
            <FeatureCard
              title="Multi-Platform Integration"
              description="Seamlessly connect with popular e-commerce and social media platforms for comprehensive management."
              icon="Share2"
            />
            <FeatureCard
              title="Custom Reporting"
              description="Generate detailed, customizable reports to showcase results and drive data-driven decisions."
              icon="FileText"
            />
          </div>
        </section>
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to supercharge your e-commerce management?</h2>
          <p className="text-xl mb-8">Join Kommerce today and take your business to the next level.</p>
          <Link href="/signup" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center">
            Get Started
            <ArrowRight className="ml-2" />
          </Link>
        </section>
      </main>
    </div>
  );
};

export default HomePage;