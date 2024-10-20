import React, { useState } from 'react';

const BudgetCalculator: React.FC = () => {
  const [campaignType, setCampaignType] = useState('creator');
  const [budget, setBudget] = useState('');
  const [result, setResult] = useState<any>(null);

  const calculateBudget = () => {
    // This is where you'd implement the actual budget calculation logic
    // For now, we'll just set some dummy data
    setResult({
      estimatedReach: Math.floor(Math.random() * 100000),
      estimatedConversions: Math.floor(Math.random() * 1000),
      estimatedROI: (Math.random() * 5 + 1).toFixed(2),
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Budget Calculator</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="campaignType" className="block text-sm font-medium text-gray-700">Campaign Type</label>
          <select
            id="campaignType"
            value={campaignType}
            onChange={(e) => setCampaignType(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="creator">Creator Campaign</option>
            <option value="meta">Meta (Facebook/Instagram) Campaign</option>
            <option value="tiktok">TikTok Campaign</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700">Budget</label>
          <input
            type="number"
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter budget"
          />
        </div>
        <button
          onClick={calculateBudget}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Calculate
        </button>
      </div>
      {result && (
        <div className="mt-4">
          <h3 className="font-semibold">Results:</h3>
          <p>Estimated Reach: {result.estimatedReach}</p>
          <p>Estimated Conversions: {result.estimatedConversions}</p>
          <p>Estimated ROI: {result.estimatedROI}x</p>
        </div>
      )}
    </div>
  );
};

export default BudgetCalculator;