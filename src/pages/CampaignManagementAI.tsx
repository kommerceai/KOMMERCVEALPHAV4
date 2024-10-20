import React, { useState } from 'react';
import BudgetCalculator from '../components/campaign-ai/BudgetCalculator';
import ForecastingTool from '../components/campaign-ai/ForecastingTool';
import ProfitLossStatement from '../components/campaign-ai/ProfitLossStatement';

const CampaignManagementAI: React.FC = () => {
  const [activeTab, setActiveTab] = useState('budget-calculator');

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Campaign Management AI</h1>
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {['Budget Calculator', 'Forecasting Tool', 'Profit & Loss'].map((tab) => (
            <button
              key={tab.toLowerCase().replace(' ', '-')}
              className={`
                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                ${activeTab === tab.toLowerCase().replace(' ', '-')
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
              `}
              onClick={() => setActiveTab(tab.toLowerCase().replace(' ', '-'))}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-4">
        {activeTab === 'budget-calculator' && <BudgetCalculator />}
        {activeTab === 'forecasting-tool' && <ForecastingTool />}
        {activeTab === 'profit-&-loss' && <ProfitLossStatement />}
      </div>
    </div>
  );
};

export default CampaignManagementAI;