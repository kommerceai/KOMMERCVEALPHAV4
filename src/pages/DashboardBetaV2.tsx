import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DollarSign, ShoppingCart, Users, TrendingUp, ChevronRight, ChevronLeft, ArrowLeft } from 'lucide-react';

// Mock data for demonstration
const salesData = [
  { date: '2023-11-21', revenue: 12000, blendedCPA: 7.2, aov: 68 },
  { date: '2023-11-22', revenue: 13000, blendedCPA: 7.1, aov: 69 },
  { date: '2023-11-23', revenue: 14000, blendedCPA: 7.3, aov: 70 },
  { date: '2023-11-24', revenue: 15000, blendedCPA: 7.4, aov: 71 },
  { date: '2023-11-25', revenue: 16000, blendedCPA: 7.5, aov: 72 },
  { date: '2023-11-26', revenue: 15500, blendedCPA: 7.4, aov: 71 },
  { date: '2023-11-27', revenue: 16618, blendedCPA: 7.43, aov: 71 },
];

const MetricCard = ({ title, value, change, secondaryValue }) => (
  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
    <div className="mt-1">
      <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
      {secondaryValue && (
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{secondaryValue}</div>
      )}
      {change && (
        <div className={`text-xs mt-1 ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {change >= 0 ? '↑' : '↓'} {Math.abs(change)}%
        </div>
      )}
    </div>
  </div>
);

interface DashboardBetaV2Props {
  onSwitchBack: () => void;
}

const DashboardBetaV2: React.FC<DashboardBetaV2Props> = ({ onSwitchBack }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`flex h-screen ${isDarkMode ? 'dark' : ''}`}>
      <aside className={`bg-gray-900 text-white transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'w-16' : 'w-64'}`}>
        <div className="p-4">
          <h2 className={`text-xl font-bold mb-4 ${isSidebarCollapsed ? 'hidden' : ''}`}>TikTok Shop CRM</h2>
          <nav className="space-y-2">
            <button className="w-full text-left py-2 px-4 rounded hover:bg-gray-800 flex items-center">
              <DollarSign className="mr-2 h-4 w-4" />
              {!isSidebarCollapsed && <span>Summary</span>}
            </button>
            <button className="w-full text-left py-2 px-4 rounded hover:bg-gray-800 flex items-center">
              <ShoppingCart className="mr-2 h-4 w-4" />
              {!isSidebarCollapsed && <span>Orders</span>}
            </button>
            <button className="w-full text-left py-2 px-4 rounded hover:bg-gray-800 flex items-center">
              <Users className="mr-2 h-4 w-4" />
              {!isSidebarCollapsed && <span>Customers</span>}
            </button>
            <button className="w-full text-left py-2 px-4 rounded hover:bg-gray-800 flex items-center">
              <TrendingUp className="mr-2 h-4 w-4" />
              {!isSidebarCollapsed && <span>Analytics</span>}
            </button>
          </nav>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto bg-gray-100 dark:bg-gray-800">
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <button
                onClick={onSwitchBack}
                className="mr-4 text-blue-500 hover:text-blue-600 flex items-center"
              >
                <ArrowLeft className="mr-2" size={16} />
                Back to Classic View
              </button>
              <h1 className="text-2xl font-bold dark:text-white">Dashboard Beta v2</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm"
              >
                {isDarkMode ? 'Light' : 'Dark'}
              </button>
              <button
                onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm"
              >
                {isSidebarCollapsed ? 'Expand' : 'Collapse'}
              </button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
            <MetricCard title="Revenue" value="$16,618" change={7.21} secondaryValue="vs. $15,500 prev. period" />
            <MetricCard title="Blended CPA" value="$7.43" change={-0.40} secondaryValue="vs. $7.46 prev. period" />
            <MetricCard title="AOV" value="$71" change={0} secondaryValue="No change from prev. period" />
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">Performance Overview</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#8884d8" name="Revenue" />
                <Line yAxisId="right" type="monotone" dataKey="blendedCPA" stroke="#82ca9d" name="Blended CPA" />
                <Line yAxisId="right" type="monotone" dataKey="aov" stroke="#ffc658" name="AOV" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">Forecast View</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Here's what's expected to happen to your business next month:</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <MetricCard title="Projected Revenue" value="$18,280" change={10} />
              <MetricCard title="Projected CPA" value="$7.35" change={-1.08} />
              <MetricCard title="Projected AOV" value="$73" change={2.82} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardBetaV2;