import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { DollarSign, Package, ShoppingCart, Users, Store, BarChart2, ArrowRight, RefreshCw } from 'lucide-react';
import { demoClients, demoBlogPosts, demoSalesData } from '../utils/demoData';
import DashboardBetaV2 from './DashboardBetaV2';

const Dashboard: React.FC = () => {
  const [showBetaV2, setShowBetaV2] = useState(false);

  const totalRevenue = demoClients.reduce((sum, client) => sum + client.total_revenue, 0);
  const totalOrders = demoClients.reduce((sum, client) => sum + client.total_orders, 0);
  const totalCreators = demoClients.reduce((sum, client) => sum + client.active_creators, 0);
  const totalCampaigns = demoClients.reduce((sum, client) => sum + client.active_campaigns, 0);

  const overallSalesData = Object.values(demoSalesData).reduce((acc, clientSales) => {
    clientSales.forEach(sale => {
      const existingMonth = acc.find(item => item.month === sale.month);
      if (existingMonth) {
        existingMonth.sales += sale.sales;
      } else {
        acc.push({ ...sale });
      }
    });
    return acc;
  }, [] as { month: string; sales: number }[]);

  if (showBetaV2) {
    return <DashboardBetaV2 onSwitchBack={() => setShowBetaV2(false)} />;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">KommerceALPHA Admin Dashboard</h1>
        <button
          onClick={() => setShowBetaV2(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
        >
          <RefreshCw className="mr-2" size={16} />
          Switch to Beta v2
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <StatCard title="Total Revenue" value={`$${totalRevenue.toLocaleString()}`} icon={<DollarSign />} />
        <StatCard title="Total Orders" value={totalOrders.toLocaleString()} icon={<ShoppingCart />} />
        <StatCard title="Active Creators" value={totalCreators.toString()} icon={<Users />} />
        <StatCard title="Active Campaigns" value={totalCampaigns.toString()} icon={<BarChart2 />} />
        <StatCard title="Total Clients" value={demoClients.length.toString()} icon={<Store />} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Overall Sales Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={overallSalesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Top Performing Clients</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Revenue</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Orders</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {demoClients.slice(0, 5).map((client) => (
                  <tr key={client.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{client.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${client.total_revenue.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{client.total_orders.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link to={`/clients/${client.id}`} className="text-indigo-600 hover:text-indigo-900">View Dashboard</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4">
            <Link to="/clients" className="text-blue-500 hover:text-blue-600 flex items-center">
              View All Clients
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoBlogPosts.map((post) => (
            <div key={post.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{post.content.substring(0, 100)}...</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="/clients" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center">
            Manage Clients
          </Link>
          <Link to="/creators" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded text-center">
            Manage Creators
          </Link>
          <Link to="/campaigns" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded text-center">
            Manage Campaigns
          </Link>
        </div>
      </div>
    </div>
  );
};

const StatCard: React.FC<{ title: string; value: string; icon: React.ReactNode }> = ({ title, value, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow flex items-center">
    <div className="mr-4 text-blue-500">{icon}</div>
    <div>
      <p className="text-sm text-gray-600">{title}</p>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  </div>
);

export default Dashboard;