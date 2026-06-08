import React, { createContext, useContext, useState, useEffect } from 'react';
import { remoteConfig } from '../firebase/config';
import { fetchAndActivate, onValue } from 'firebase/remote-config';

const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
  const [mode, setMode] = useState('invitation');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initializeConfig = async () => {
      try {
        // Set cache expiration
        remoteConfig.settings.minimumFetchIntervalMillis = 0; // 0 for dev, increase for production
        remoteConfig.settings.fetchTimeoutMillis = 10000;

        // Fetch and activate remote config
        await fetchAndActivate(remoteConfig);
        
        // Get initial mode
        const initialMode = remoteConfig.getString('mode') || 'invitation';
        setMode(initialMode);
        console.log('✅ Remote Config initialized. Mode:', initialMode);

        // Listen for changes
        onValue(remoteConfig, (snapshot) => {
          const newMode = remoteConfig.getString('mode') || 'invitation';
          setMode(newMode);
          console.log('📢 Mode changed to:', newMode);
        });

        setLoading(false);
      } catch (err) {
        console.error('❌ Error initializing Remote Config:', err);
        setError(err.message);
        setMode('invitation'); // Fallback to invitation mode
        setLoading(false);
      }
    };

    initializeConfig();
  }, []);

  return (
    <ConfigContext.Provider value={{ mode, loading, error }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfig must be used within ConfigProvider');
  }
  return context;
};
