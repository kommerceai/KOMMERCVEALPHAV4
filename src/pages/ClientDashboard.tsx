import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DollarSign, ShoppingCart, Users, BarChart2, ArrowLeft, LogOut, Calculator } from 'lucide-react';
import { supabaseClient } from '../utils/supabaseClient';
import { Client, SalesData } from '../types';
import { demoClients, demoSalesData } from '../utils/demoData';

const ClientDashboard: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [clientData, setClientData] = useState<Client | null>(null);
  const [salesData, setSalesData] = useState<SalesData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // For demo purposes, we're using the demoClients and demoSalesData directly
      const client = demoClients.find(c => c.id === parseInt(id));
      setClientData(client || null);
      setSalesData(demoSalesData[parseInt(id)] || []);
    }
  }, [id]);

  const handleLogout = () => {
    navigate('/clients');
  };

  if (!clientData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{clientData.name} Dashboard</h1>
        <div className="flex items-center space-x-4">
          <Link to="/clients" className="flex items-center text-blue-500 hover:text-blue-600">
            <ArrowLeft className="mr-2" />
            Back to Clients
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center text-red-500 hover:text-red-600"
          >
            <LogOut className="mr-2" />
            Logout
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Revenue" value={`$${clientData.total_revenue.toLocaleString()}`} icon={<DollarSign />} />
        <StatCard title="Total Orders" value={clientData.total_orders.toLocaleString()} icon={<ShoppingCart />} />
        <StatCard title="Active Creators" value={clientData.active_creators.toString()} icon={<Users />} />
        <StatCard title="Active Campaigns" value={clientData.active_campaigns.toString()} icon={<BarChart2 />} />
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <Link to={`/clients/${id}/budget-calculator`} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
        <Calculator className="mr-2" />
        AI Budget Calculator & Forecasting
      </Link>
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

export default ClientDashboard;