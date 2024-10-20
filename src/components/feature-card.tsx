'use client';

import React from 'react';
import { Users, BarChart2, UserPlus, Brain, Share2, FileText } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const iconComponents = {
  Users,
  BarChart2,
  UserPlus,
  Brain,
  Share2,
  FileText,
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  const IconComponent = iconComponents[icon as keyof typeof iconComponents];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-blue-500 mb-4">
        <IconComponent size={32} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;