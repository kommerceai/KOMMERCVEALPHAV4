import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, DollarSign } from 'lucide-react';
import { supabaseClient } from '../utils/supabaseClient';
import { BudgetData } from '../types';
import { demoBudgetData } from '../utils/demoData';

const BudgetCalculator: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [budgetData, setBudgetData] = useState<BudgetData | null>(null);
  const [newBudget, setNewBudget] = useState<number>(0);
  const [forecast, setForecast] = useState<{ revenue: number; roas: number } | null>(null);

  useEffect(() => {
    if (id) {
      // For demo purposes, we're using the demoBudgetData directly
      setBudgetData(demoBudgetData[parseInt(id)]);
      setNewBudget(demoBudgetData[parseInt(id)].current_budget);
    }
  }, [id]);

  const calculateForecast = () => {
    if (budgetData) {
      const budgetIncrease = newBudget / budgetData.current_budget;
      const forecastedRevenue = budgetData.current_revenue * budgetIncrease;
      const forecastedROAS = forecastedRevenue / newBudget;

      setForecast({
        revenue: forecastedRevenue,
        roas: forecastedROAS,
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">AI Budget Calculator & Forecasting</h1>
        <Link to={`/clients/${id}`} className="flex items-center text-blue-500 hover:text-blue-600">
          <ArrowLeft className="mr-2" />
          Back to Dashboard
        </Link>
      </div>
      {budgetData && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Current Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard title="Current Budget" value={`$${budgetData.current_budget.toLocaleString()}`} icon={<DollarSign />} />
            <StatCard title="Current Revenue" value={`$${budgetData.current_revenue.toLocaleString()}`} icon={<DollarSign />} />
            <StatCard title="Current ROAS" value={budgetData.current_roas.toFixed(2)} icon={<DollarSign />} />
          </div>
        </div>
      )}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Budget Calculator</h2>
        <div className="flex items-center space-x-4">
          <label htmlFor="newBudget" className="font-medium">New Budget:</label>
          <input
            type="number"
            id="newBudget"
            value={newBudget}
            onChange={(e) => setNewBudget(Number(e.target.value))}
            className="border rounded-md p-2"
          />
          <button
            onClick={calculateForecast}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Calculate Forecast
          </button>
        </div>
      </div>
      {forecast && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Forecast Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <StatCard title="Forecasted Revenue" value={`$${forecast.revenue.toLocaleString()}`} icon={<DollarSign />} />
            <StatCard title="Forecasted ROAS" value={forecast.roas.toFixed(2)} icon={<DollarSign />} />
          </div>
        </div>
      )}
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

export default BudgetCalculator;