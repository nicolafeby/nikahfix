import { remoteConfig } from './config';
import { fetchAndActivate } from 'firebase/remote-config';

export const initRemoteConfig = async () => {
  try {
    // Set cache expiration to 1 hour (3600 seconds) in production
    // Set to 0 for immediate refresh in development
    remoteConfig.settings.minimumFetchIntervalMillis = 0;
    remoteConfig.settings.fetchTimeoutMillis = 10000;
    
    // Fetch and activate remote config
    await fetchAndActivate(remoteConfig);
    console.log('✅ Remote Config initialized');
  } catch (error) {
    console.error('❌ Error initializing Remote Config:', error);
  }
};

export const getConfigMode = () => {
  try {
    const mode = remoteConfig.getString('mode');
    return mode || 'invitation';
  } catch (error) {
    console.error('Error getting config mode:', error);
    return 'invitation';
  }
};

export const isInvitationMode = () => {
  return getConfigMode() === 'invitation';
};

export const isReleaseMode = () => {
  return getConfigMode() === 'release';
};
