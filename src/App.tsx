import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import ProductManagement from './pages/ProductManagement';
import OrderTracking from './pages/OrderTracking';
import CreatorManagement from './pages/CreatorManagement';
import CampaignTracking from './pages/CampaignTracking';
import Settings from './pages/Settings';
import ClientManagement from './pages/ClientManagement';
import ClientDashboard from './pages/ClientDashboard';
import BudgetCalculator from './pages/BudgetCalculator';
import CampaignManagementAI from './pages/CampaignManagementAI';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<ProductManagement />} />
            <Route path="/orders" element={<OrderTracking />} />
            <Route path="/creators" element={<CreatorManagement />} />
            <Route path="/campaigns" element={<CampaignTracking />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/clients" element={<ClientManagement />} />
            <Route path="/clients/:id" element={<ClientDashboard />} />
            <Route path="/clients/:id/budget-calculator" element={<BudgetCalculator />} />
            <Route path="/campaign-ai" element={<CampaignManagementAI />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;