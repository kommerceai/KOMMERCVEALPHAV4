import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart2, DollarSign } from 'lucide-react';

interface Campaign {
  id: number;
  name: string;
  creator: string;
  product: string;
  clicks: number;
  impressions: number;
  conversions: number;
  revenue: number;
}

const CampaignTracking: React.FC = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  useEffect(() => {
    // Fetch campaigns from API or database
    // This is a mock implementation
    const mockCampaigns: Campaign[] = [
      { id: 1, name: 'Summer Sale', creator: 'Alice Johnson', product: 'TikTok T-Shirt', clicks: 10000, impressions: 100000, conversions: 500, revenue: 9995 },
      { id: 2, name: 'Back to School', creator: 'Bob Smith', product: 'TikTok Hoodie', clicks: 15000, impressions: 150000, conversions: 750, revenue: 29992.5 },
      { id: 3, name: 'Holiday Special', creator: 'Charlie Brown', product: 'TikTok Cap', clicks: 20000, impressions: 200000, conversions: 1000, revenue: 14990 },
    ];
    setCampaigns(mockCampaigns);
  }, []);

  const calculateROAS = (revenue: number, clicks: number) => {
    const estimatedAdSpend = clicks * 0.1; // Assuming $0.1 per click
    return (revenue / estimatedAdSpend).toFixed(2);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Campaign Tracking</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden p-6">
        <h2 className="text-xl font-semibold mb-4">Campaign Performance</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={campaigns}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="clicks" fill="#8884d8" name="Clicks" />
            <Bar yAxisId="left" dataKey="conversions" fill="#82ca9d" name="Conversions" />
            <Bar yAxisId="right" dataKey="revenue" fill="#ffc658" name="Revenue ($)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Campaign</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Creator</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clicks</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impressions</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversions</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ROAS</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {campaigns.map((campaign) => (
              <tr key={campaign.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <BarChart2 className="flex-shrink-0 h-6 w-6 text-gray-400 mr-2" />
                    <div className="text-sm font-medium text-gray-900">{campaign.name}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{campaign.creator}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{campaign.product}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{campaign.clicks.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{campaign.impressions.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{campaign.conversions.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 text-gray-400 mr-1" />
                    {campaign.revenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{calculateROAS(campaign.revenue, campaign.clicks)}x</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CampaignTracking;