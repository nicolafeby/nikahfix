# Firebase Remote Config - Configuration Reference

## Firebase Console Setup

### Parameter Configuration

**Create this parameter in Firebase Console → Remote Config:**

```
Parameter Name: mode
Parameter Type: String
Default Value: invitation

Valid Values:
- invitation (pre-wedding mode)
- release (post-wedding mode)

Description (optional):
Toggle between invitation and release modes for the wedding website
```

---

## Firebase Console URL

Go to: **https://console.firebase.google.com/**

Then navigate:
1. Select your project
2. Left sidebar: **Build** → **Remote Config**
3. Click **"Add parameter"**

---

## Step-by-Step Setup

### 1. Creating the Parameter

```
Click: "Add parameter"
Input:
  Parameter key: mode
  Parameter type: String (from dropdown)
  Default value: invitation
```

### 2. Save & Publish

```
Click: "Save"
Review your changes
Click: "Publish"
Wait for confirmation: "Configuration successfully published"
```

### 3. Verify

- Check that `mode` parameter appears in the list
- Default value shows as `invitation`

---

## Testing Configuration

### Test Different Values

**To switch to Release Mode:**
1. Click pencil icon next to `mode` parameter
2. Change value from `invitation` to `release`
3. Click **Save** → **Publish**
4. Refresh your app in browser
5. See release mode UI

**To switch back:**
1. Same process, change to `invitation`
2. Click **Save** → **Publish**

---

## What Firebase Remote Config Does

| Action | What Happens |
|--------|-------------|
| Create `mode` parameter | App can read config value |
| Set default value | App uses this if Firebase unavailable |
| Publish changes | Changes live to all users |
| Edit value | Changes which UI mode displays |

---

## Firebase API Requirements

This implementation uses:
- `firebase` library (already in package.json)
- `getRemoteConfig()` function
- `fetchAndActivate()` for getting latest config
- `getString()` to read parameter value

All dependencies are already installed ✅

---

## Environment Variables

Your `.env` file should contain:
```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
VITE_FIREBASE_MEASUREMENT_ID=...
```

(No additional env vars needed for Remote Config)

---

## Common Scenarios

### Scenario 1: Pre-Wedding (Before June 25, 2025)
```
Firebase Remote Config:
mode = "invitation"

Users see:
✅ Invitation text
✅ Wedding location
✅ Date and time
✅ Venue maps
✅ "Wish for the Couple" section
```

### Scenario 2: Post-Wedding (After June 25, 2025)
```
Firebase Remote Config:
mode = "release"

Users see:
✅ Thank you message
✅ Prayer section
❌ Location hidden
❌ Maps hidden
✅ "Doa dan Restu" section
```

---

## Important Notes

1. **Global Toggle**: All visitors see the same mode
2. **No Code Deploy**: Just change parameter, no website redeploy needed
3. **Real-time**: Changes appear within cache interval (dev: instant, prod: 1 hour)
4. **Fallback**: If Firebase unreachable, defaults to `invitation` mode
5. **Data Preserved**: Wishes/prayers data stays same when toggling

---

## Support Documents

- `IMPLEMENTATION_SUMMARY.md` - Overview of changes
- `REMOTE_CONFIG_SETUP.md` - Detailed technical setup
- `REMOTE_CONFIG_QUICK_GUIDE.md` - Quick reference for toggling

---

## Verification Checklist

Before your wedding date, verify:

- [ ] You can access Firebase Console
- [ ] Remote Config section is visible
- [ ] `mode` parameter is created
- [ ] Default value is set to `invitation`
- [ ] You can test toggling the value
- [ ] App shows invitation mode currently
- [ ] Documentation is bookmarked for quick access

---

## On Wedding Day

1. Before wedding: mode = `invitation` (already set)
2. After wedding: Edit parameter to `release`
3. Click Publish
4. Share link with guests
5. Guests see thank you + prayer page

That's it! 🎉

---

**Questions?** Check the other documentation files or your Firebase Console help section.
