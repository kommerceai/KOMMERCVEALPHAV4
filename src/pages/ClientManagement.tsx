import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Users, Plus, Edit, Trash2, BarChart2, LogIn } from 'lucide-react';
import { supabaseClient } from '../utils/supabaseClient';
import { Client } from '../types';
import { demoClients } from '../utils/demoData';

const ClientManagement: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // For demo purposes, we're using the demoClients directly
    setClients(demoClients);
  }, []);

  const handleClientLogin = (clientId: number) => {
    navigate(`/clients/${clientId}`);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Client Management</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Revenue</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Orders</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Active Creators</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Active Campaigns</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {clients.map((client) => (
              <tr key={client.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Users className="flex-shrink-0 h-6 w-6 text-gray-400 mr-2" />
                    <div className="text-sm font-medium text-gray-900">{client.name}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{client.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(client.created_at).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${client.total_revenue.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{client.total_orders.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{client.active_creators}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{client.active_campaigns}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleClientLogin(client.id)}
                    className="text-blue-600 hover:text-blue-900 flex items-center mr-2"
                  >
                    <LogIn size={18} className="mr-1" />
                    Login
                  </button>
                  <Link to={`/clients/${client.id}`} className="text-indigo-600 hover:text-indigo-900 mr-2">
                    <BarChart2 size={18} />
                  </Link>
                  <button className="text-green-600 hover:text-green-900 mr-2">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientManagement;