import React, { useState, useEffect } from 'react';

const ProfitLossStatement: React.FC = () => {
  const [plData, setPLData] = useState<any>(null);

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    // For now, we'll use dummy data
    setPLData({
      revenue: 50000,
      costOfGoodsSold: 20000,
      grossProfit: 30000,
      operatingExpenses: {
        marketing: 5000,
        salaries: 10000,
        rent: 2000,
        utilities: 1000,
      },
      operatingProfit: 12000,
      taxes: 2400,
      netProfit: 9600,
    });
  }, []);

  if (!plData) return <div>Loading...</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Daily Profit & Loss Statement</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Revenue</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">${plData.revenue.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Cost of Goods Sold</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">${plData.costOfGoodsSold.toLocaleString()}</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Gross Profit</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">${plData.grossProfit.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Operating Expenses</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right"></td>
          </tr>
          {Object.entries(plData.operatingExpenses).map(([key, value]) => (
            <tr key={key}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 pl-8">{key.charAt(0).toUpperCase() + key.slice(1)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">${(value as number).toLocaleString()}</td>
            </tr>
          ))}
          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Operating Profit</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">${plData.operatingProfit.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Taxes</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">${plData.taxes.toLocaleString()}</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Net Profit</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">${plData.netProfit.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProfitLossStatement;