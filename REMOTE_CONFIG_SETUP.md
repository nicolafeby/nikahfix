# Firebase Remote Config Setup Guide - Nikahfix

## Overview
This project now uses Firebase Remote Config to toggle between two modes:
- **`invitation`** mode: Normal wedding invitation (pre-wedding)
- **`release`** mode: Post-wedding with prayers/blessings request and hidden location info

## Features by Mode

### Invitation Mode
- Shows "Coming soon" banner
- Displays invitation text
- Shows wedding location details
- Shows date, time, and schedule
- "Wish for the Couple" section
- Full venue maps integration

### Release Mode
- Shows "Syukuran" (Thanksgiving) banner
- Displays thank you message and prayer request
- **Hides location details** completely
- Shows only the wedding date
- Changes to "🤲 Doa dan Restu" (Prayer & Blessings) section
- Updates form labels to prayer-focused language

## Setup Instructions

### 1. Enable Remote Config in Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project (nikahfix)
3. In the left sidebar, go to **Build** → **Remote Config**
4. Click **"Create Configuration"** or **"Add parameter"**

### 2. Create the `mode` Parameter

1. Click **"Add parameter"**
2. Set the following:
   - **Parameter key**: `mode`
   - **Parameter type**: String
   - **Default value**: `invitation`
   
3. Add conditions (optional):
   - You can create conditions for different users, regions, app versions, etc.
   
4. Click **"Save"**

### 3. Publishing Configuration

After creating the parameter:
1. Review your changes
2. Click **"Publish"** to make changes live
3. The app will fetch and apply changes within the cache interval

## How It Works

### File Structure
```
src/
├── firebase/
│   ├── config.js              # Firebase initialization + Remote Config setup
│   └── remoteConfigUtils.js   # Utility functions for Remote Config
├── context/
│   └── ConfigContext.jsx      # React Context for global config state
└── components/section/
    ├── title-info/            # Updated with mode switching
    ├── breaking-news/         # Updated with mode switching
    ├── our-date/              # Updated with location hiding
    └── wish/                  # Updated with prayer mode labels
```

### Key Components Updated

1. **ConfigContext.jsx** - Provides `useConfig()` hook
   - Initializes Remote Config
   - Listens to config changes
   - Provides `mode` state to all components

2. **Components using `useConfig()`**:
   - TitleInfo
   - BreakingNews
   - OurDate
   - WishSection

## Testing Locally

### Development Mode (Fast Refresh)
```bash
# In development, cache is set to 0 seconds
# Every component load fetches latest config from Firebase
npm run dev
```

### Production Mode (With Caching)
To test caching behavior:
1. Edit `minimumFetchIntervalMillis` in `src/context/ConfigContext.jsx`
2. Set to a value in milliseconds (e.g., 3600000 for 1 hour)

## Changing Modes in Firebase Console

### To Switch to Release Mode:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project → **Remote Config**
3. Find the `mode` parameter
4. Click edit icon (pencil)
5. Change value from `invitation` to `release`
6. Click **"Save"**
7. Click **"Publish"** to make it live
8. The app will update within the cache interval

### To Switch Back to Invitation Mode:

1. Follow same steps
2. Change value from `release` back to `invitation`
3. Click **"Save"** → **"Publish"**

## Code Example: Using the Config

```jsx
import { useConfig } from '../context/ConfigContext';

function MyComponent() {
  const { mode, loading, error } = useConfig();
  const isRelease = mode === 'release';

  if (loading) return <div>Loading config...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {isRelease ? (
        <p>Thank you for celebrating with us!</p>
      ) : (
        <p>We invite you to our wedding!</p>
      )}
    </div>
  );
}
```

## Default Values

Default configuration (if Firebase Remote Config is unreachable):
```javascript
mode: "invitation"  // Fallback to invitation mode
```

## Environment Variables Required

Make sure your `.env` file includes:
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

## Troubleshooting

### Config not updating?
- Check Firebase Console for publish status
- Clear browser cache (Ctrl+Shift+Delete)
- Check browser console for errors (F12)
- Verify `minimumFetchIntervalMillis` is set correctly

### Fallback to default?
- If Firebase Remote Config fails, mode defaults to "invitation"
- Check network tab in DevTools for failed requests
- Verify Firebase credentials in `.env`

### Real-time changes not showing?
- Changes are fetched on app load
- For real-time, reduce `minimumFetchIntervalMillis` (dev-only)
- Refresh page after publishing changes in Firebase Console

## API Documentation

### `useConfig()` Hook

```javascript
const { mode, loading, error } = useConfig();

// mode: string - Either "invitation" or "release"
// loading: boolean - True while fetching config
// error: string | null - Error message if any
```

## Additional Notes

- The Netflix theme is **maintained** in both modes
- Only wording and visibility of location-related content changes
- All styling remains consistent
- Prayers/blessings functionality uses same Firestore collection as wishes
- Past wishes/prayers are preserved when switching modes

## Support

For issues or questions:
1. Check Firebase Console logs
2. Verify network connectivity
3. Check browser console for errors
4. Ensure Firebase project credentials are correct
