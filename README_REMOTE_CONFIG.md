# Nikahfix - Wedding Invitation Remote Config Implementation

> A refactored digital wedding invitation with Firebase Remote Config to toggle between **invitation** and **release** modes.

## 🎯 Project Overview

Your wedding website has been enhanced with a **toggle mechanism** to switch between two distinct experiences:

### 📨 Invitation Mode (Pre-Wedding)
Shows your digital wedding invitation with all details:
- Wedding location, date, and time
- Venue maps and navigation links
- Event schedule (Akad Nikah, Resepsi)
- Photo gallery and story sections
- Guest wishes section

### 🙏 Release Mode (Post-Wedding)
Transforms into a thank-you and prayer page:
- Thanksgiving message
- Prayer and blessing requests instead of invitation
- **Location details are completely hidden**
- Date displayed with gratitude message
- Prayer/blessing section instead of wishes
- Maintains the Netflix theme throughout

---

## ✨ Key Features

✅ **No Code Changes Required** - Toggle modes through Firebase Console only
✅ **Instant Updates** - Changes apply in real-time to all visitors
✅ **Theme Preserved** - Netflix dark theme remains unchanged
✅ **Location Privacy** - Complete hiding of location data in release mode
✅ **Fallback Support** - Works without Firebase Remote Config (defaults to invitation)
✅ **Data Persistent** - All wishes/prayers preserved when switching modes

---

## 📁 Project Structure

```
nikahfix/
├── src/
│   ├── firebase/
│   │   ├── config.js                 ← Firebase initialization + Remote Config
│   │   └── remoteConfigUtils.js      ← Remote Config utility functions
│   ├── context/
│   │   └── ConfigContext.jsx         ← Global config state management
│   ├── components/section/
│   │   ├── title-info/               ← Updated: Mode-aware content
│   │   ├── breaking-news/            ← Updated: Mode-aware messaging
│   │   ├── our-date/                 ← Updated: Location hiding
│   │   ├── wish/                     ← Updated: Prayer mode labels
│   │   ├── header/                   ← No changes needed
│   │   ├── bride-groom/
│   │   ├── love-story/
│   │   ├── our-gallery/
│   │   ├── footer/
│   │   └── ... (other components)
│   └── App.jsx                       ← Updated: ConfigProvider wrapper
├── IMPLEMENTATION_SUMMARY.md         ← What was implemented
├── FIREBASE_CONFIG_REFERENCE.md      ← Firebase setup guide
├── REMOTE_CONFIG_SETUP.md            ← Detailed technical guide
├── REMOTE_CONFIG_QUICK_GUIDE.md      ← Quick reference for toggling
└── README.md                         ← This file

```

---

## 🚀 Quick Start

### 1. Set Up Firebase Remote Config

Go to **[Firebase Console](https://console.firebase.google.com/)**:

1. Select your project → **Build** → **Remote Config**
2. Click **"Add parameter"**
3. Create a **String** parameter:
   - **Key**: `mode`
   - **Default Value**: `invitation`
4. Click **Save** → **Publish**

### 2. Start Your App

```bash
npm run dev
```

App will automatically:
- Initialize Firebase Remote Config
- Fetch the `mode` value
- Display invitation mode by default
- Listen for changes in real-time

### 3. Test Mode Switching

1. Open app in browser
2. Open Firebase Console in another tab
3. Edit `mode` parameter: change to `release`
4. Publish changes
5. Refresh app → See release mode instantly! 🎉

---

## 📋 Files Modified / Created

### New Files
- ✨ `src/context/ConfigContext.jsx` - Global config state management
- ✨ `src/firebase/remoteConfigUtils.js` - Firebase Remote Config utilities
- 📖 `IMPLEMENTATION_SUMMARY.md` - Implementation overview
- 📖 `FIREBASE_CONFIG_REFERENCE.md` - Firebase setup reference
- 📖 `REMOTE_CONFIG_SETUP.md` - Detailed technical guide
- 📖 `REMOTE_CONFIG_QUICK_GUIDE.md` - Quick toggle reference

### Updated Files
- 🔧 `src/firebase/config.js` - Added Remote Config initialization
- 🔧 `src/App.jsx` - Wrapped with ConfigProvider
- 🔧 `src/components/section/title-info/index.jsx` - Mode-aware content
- 🔧 `src/components/section/breaking-news/index.jsx` - Mode-aware messaging
- 🔧 `src/components/section/our-date/our-date.jsx` - Location hiding
- 🔧 `src/components/section/wish/index.jsx` - Prayer mode labels

---

## 📊 Content Comparison

### Before / After Content

| Element | Invitation Mode | Release Mode |
|---------|-----------------|--------------|
| **Banner** | Coming soon on Wednesday, 25 Juni 2025 | Syukuran - Wednesday, 25 Juni 2025 |
| **Heading** | Information | Terima Kasih (Thank You) |
| **Main Text** | Undangan pernikahan kami... | Alhamdulillah, pernikahan kami telah terlaksana... |
| **Location** | ✅ Fully visible | ❌ Completely hidden |
| **Schedule** | ✅ Shown | ❌ Hidden |
| **Maps Links** | ✅ Active | ❌ Removed |
| **Wish Section** | Wish for the Couple | 🤲 Doa dan Restu (Prayer & Blessings) |
| **Form Label** | Message | Doa & Harapan Terbaik (Prayer & Best Wishes) |
| **Submit Button** | Send | Kirim Doa (Send Prayer) |

---

## 🔧 How It Works

```
┌─────────────────────────────────────┐
│  User Opens App                     │
└──────────────┬──────────────────────┘
               ↓
┌─────────────────────────────────────┐
│  ConfigProvider initializes         │
│  - Connects to Firebase             │
│  - Fetches latest 'mode' parameter  │
└──────────────┬──────────────────────┘
               ↓
┌─────────────────────────────────────┐
│  mode state is set                  │
│  - "invitation" or "release"        │
└──────────────┬──────────────────────┘
               ↓
┌─────────────────────────────────────┐
│  Components use useConfig() hook    │
│  - Read current mode                │
│  - Check isRelease condition        │
└──────────────┬──────────────────────┘
               ↓
┌─────────────────────────────────────┐
│  Conditional JSX Rendering          │
│  - Different content per mode       │
│  - Same styling & theme             │
└──────────────┬──────────────────────┘
               ↓
┌─────────────────────────────────────┐
│  User Sees Final UI                 │
│  (Invitation or Release Mode)       │
└─────────────────────────────────────┘
```

---

## 🎮 Using the Config Hook

```jsx
import { useConfig } from '../context/ConfigContext';

export default function MyComponent() {
  const { mode, loading, error } = useConfig();
  const isRelease = mode === 'release';
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      {isRelease ? (
        <p>Thank you for celebrating with us! 🙏</p>
      ) : (
        <p>We invite you to our wedding! 💕</p>
      )}
    </div>
  );
}
```

---

## 📅 Timeline Example

### Before Wedding (June 25, 2025)
```
Firebase Remote Config: mode = "invitation"
✅ Users see invitation with all wedding details
✅ Location and schedule visible
✅ Invitation to attend
```

### After Wedding (June 25, 2025 onwards)
```
1. Go to Firebase Console
2. Edit 'mode' parameter to "release"
3. Click Publish
4. Within seconds, all visitors see:
   ✅ Thank you message
   ✅ Prayer section
   ❌ Location hidden
   ✅ Gratitude messaging
```

---

## 🔒 Security & Performance

✅ **Secure**: Firebase handles authentication
✅ **Fast**: Config cached locally (0s dev, 1h production)
✅ **Reliable**: Fallback to defaults if Firebase unavailable
✅ **Scalable**: Works for unlimited visitors
✅ **Private**: Location data hidden when needed

---

## 🆘 Troubleshooting

### "I don't see the changes"
1. Check Firebase Console - is it published?
2. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
3. Check browser console (F12) for errors
4. Wait 5 seconds for cache to clear

### "Mode shows 'invitation' all the time"
1. Verify Firebase credentials in `.env`
2. Check Network tab in DevTools for failed requests
3. Ensure Remote Config is enabled in Firebase
4. Check that `mode` parameter exists in Firebase Console

### "I can't access Firebase Console"
1. Verify you have correct Firebase project selected
2. Check your Firebase project billing is active
3. Verify user permissions in Firebase

---

## 📚 Documentation

- **[IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md)** - Overview of all changes
- **[FIREBASE_CONFIG_REFERENCE.md](./FIREBASE_CONFIG_REFERENCE.md)** - Firebase setup steps
- **[REMOTE_CONFIG_SETUP.md](./REMOTE_CONFIG_SETUP.md)** - Detailed technical guide
- **[REMOTE_CONFIG_QUICK_GUIDE.md](./REMOTE_CONFIG_QUICK_GUIDE.md)** - Quick reference

---

## ✅ Verification Checklist

- [x] Firebase Remote Config initialized
- [x] `mode` parameter ready to be created
- [x] ConfigContext provides global state
- [x] All components updated with conditional rendering
- [x] Location details hidden in release mode
- [x] Prayer/blessing messaging implemented
- [x] Netflix theme preserved
- [x] No errors in code
- [x] Documentation complete

---

## 🎉 You're All Set!

Your website is ready to support both invitation and release modes through Firebase Remote Config.

### Next Steps:
1. ✅ Create `mode` parameter in Firebase Console
2. ✅ Test switching modes locally
3. ✅ Deploy to production when ready
4. 📅 On wedding day: Edit parameter to "release"
5. 🎊 Share updated link with guests

### Questions?
Refer to the documentation files included with this project.

---

**Happy wedding! 💕 and congratulations on your special day! 🎉**

---

*Last Updated: June 8, 2025*
*Implementation: Firebase Remote Config Toggle System*
*Theme: Netflix Dark Mode (Preserved)*
