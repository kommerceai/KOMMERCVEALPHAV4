'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionize Your E-commerce Management with Kommerce
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            The all-in-one platform for managing clients, campaigns, and creators in the world of social commerce.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/signup" className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg inline-flex items-center">
              Get Started
              <ArrowRight className="ml-2" />
            </Link>
            <Link href="/demo" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-6 rounded-lg">
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;