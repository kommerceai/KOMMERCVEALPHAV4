import React, { useState, useEffect } from 'react';
import { setApiConfig, getApiConfig, testApiConnection } from '../utils/api';
import Notification from '../components/Notification';

const Settings: React.FC = () => {
  const [appKey, setAppKey] = useState('');
  const [appSecret, setAppSecret] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    const config = getApiConfig();
    if (config) {
      setAppKey(config.appKey);
      setAppSecret(config.appSecret);
      setAccessToken(config.accessToken);
    }
  }, []);

  const handleSave = async () => {
    if (!appKey || !appSecret || !accessToken) {
      setNotification({ message: 'Please fill in all fields', type: 'error' });
      return;
    }

    setApiConfig({ appKey, appSecret, accessToken });
    const result = await testApiConnection();
    if (result.success) {
      setNotification({ message: 'API configuration saved and tested successfully', type: 'success' });
    } else {
      setNotification({ message: `Failed to connect to API: ${result.message}`, type: 'error' });
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">API Settings</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="appKey" className="block text-sm font-medium text-gray-700">
              App Key
            </label>
            <input
              type="text"
              id="appKey"
              value={appKey}
              onChange={(e) => setAppKey(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="appSecret" className="block text-sm font-medium text-gray-700">
              App Secret
            </label>
            <input
              type="password"
              id="appSecret"
              value={appSecret}
              onChange={(e) => setAppSecret(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="accessToken" className="block text-sm font-medium text-gray-700">
              Access Token
            </label>
            <input
              type="text"
              id="accessToken"
              value={accessToken}
              onChange={(e) => setAccessToken(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Save and Test Configuration
          </button>
        </div>
      </div>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
};

export default Settings;