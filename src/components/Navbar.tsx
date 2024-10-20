import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Package, Users, BarChart2, Home, Settings, Briefcase, Brain } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800 flex items-center">
              <ShoppingBag className="mr-2" />
              KommerceALPHA
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <NavLink to="/" icon={<Home size={20} />} text="Dashboard" />
            <NavLink to="/products" icon={<Package size={20} />} text="Products" />
            <NavLink to="/orders" icon={<ShoppingBag size={20} />} text="Orders" />
            <NavLink to="/creators" icon={<Users size={20} />} text="Creators" />
            <NavLink to="/campaigns" icon={<BarChart2 size={20} />} text="Campaigns" />
            <NavLink to="/clients" icon={<Briefcase size={20} />} text="Clients" />
            <NavLink to="/campaign-ai" icon={<Brain size={20} />} text="Campaign AI" />
            <NavLink to="/settings" icon={<Settings size={20} />} text="Settings" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ to: string; icon: React.ReactNode; text: string }> = ({ to, icon, text }) => (
  <Link to={to} className="flex items-center text-gray-600 hover:text-gray-800">
    {icon}
    <span className="ml-2">{text}</span>
  </Link>
);

export default Navbar;