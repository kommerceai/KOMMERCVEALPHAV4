import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ForecastingTool: React.FC = () => {
  const [days, setDays] = useState('30');
  const [forecastData, setForecastData] = useState<any[]>([]);

  const generateForecast = () => {
    const data = [];
    let revenue = 1000;
    let roi = 2;

    for (let i = 0; i < parseInt(days); i++) {
      revenue *= 1 + (Math.random() * 0.1 - 0.05); // Random growth between -5% and 5%
      roi *= 1 + (Math.random() * 0.05 - 0.025); // Random ROI change between -2.5% and 2.5%
      data.push({
        day: i + 1,
        revenue: Math.round(revenue),
        roi: roi.toFixed(2),
      });
    }

    setForecastData(data);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Forecasting Tool</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="days" className="block text-sm font-medium text-gray-700">Number of days to forecast</label>
          <input
            type="number"
            id="days"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Number of days to forecast"
          />
        </div>
        <button
          onClick={generateForecast}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Generate Forecast
        </button>
      </div>
      {forecastData.length > 0 && (
        <div className="mt-4 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={forecastData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#8884d8" name="Revenue" />
              <Line yAxisId="right" type="monotone" dataKey="roi" stroke="#82ca9d" name="ROI" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default ForecastingTool;