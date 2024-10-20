import axios from "axios";

const API_URL = "https://open-api.tiktokglobalshop.com";

interface ApiConfig {
  appKey: string;
  appSecret: string;
  accessToken: string;
}

let apiConfig: ApiConfig | null = null;

export const setApiConfig = (config: ApiConfig) => {
  apiConfig = config;
  localStorage.setItem('apiConfig', JSON.stringify(config));
};

export const getApiConfig = (): ApiConfig | null => {
  if (apiConfig) return apiConfig;
  const storedConfig = localStorage.getItem('apiConfig');
  if (storedConfig) {
    apiConfig = JSON.parse(storedConfig);
    return apiConfig;
  }
  return null;
};

const generateSignature = (params: Record<string, string>, appSecret: string) => {
  const sortedParams = Object.keys(params)
    .sort()
    .reduce((result, key) => {
      result[key] = params[key];
      return result;
    }, {} as Record<string, string>);

  const signString = Object.entries(sortedParams)
    .map(([key, value]) => `${key}${value}`)
    .join('');

  const signStringWithSecret = appSecret + signString + appSecret;
  return crypto.createHash('sha256').update(signStringWithSecret).digest('hex');
};

export const getAuthorizedShops = async () => {
  const config = getApiConfig();
  if (!config) {
    throw new Error('API configuration not set. Please go to the Settings page to configure the API.');
  }

  const timestamp = Math.floor(Date.now() / 1000).toString();
  const params = {
    app_key: config.appKey,
    timestamp,
  };

  const signature = generateSignature(params, config.appSecret);

  try {
    const response = await axios.get(`${API_URL}/authorization/202309/shops`, {
      params: {
        ...params,
        sign: signature,
      },
      headers: {
        'Content-Type': 'application/json',
        'x-tts-access-token': config.accessToken,
      },
    });

    if (response.data.code !== 0) {
      throw new Error(`API Error: ${response.data.message || 'Unknown error'}`);
    }

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new Error(`API Error: ${error.response.status} - ${error.response.data.message || 'Unknown error'}`);
      } else if (error.request) {
        throw new Error('Network Error: No response received from the server. Please check your internet connection.');
      }
    }
    throw error;
  }
};

export const testApiConnection = async () => {
  try {
    const result = await getAuthorizedShops();
    return { success: true, message: 'API connection successful', data: result };
  } catch (error) {
    return { success: false, message: error instanceof Error ? error.message : 'An unknown error occurred' };
  }
};