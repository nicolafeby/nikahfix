# Nikahfix Remote Config - Quick Toggle Guide

## Fastest Way to Switch Modes

### Option 1: Firebase Console (Recommended)
1. Open: https://console.firebase.google.com/
2. Select project → **Remote Config**
3. Click the `mode` parameter (pencil icon to edit)
4. Change value: `invitation` ↔ `release`
5. Click **Save** → **Publish**

### Option 2: Firebase CLI (For Developers)
```bash
# Download current config
firebase remoteconfig:get > remote_config.json

# Edit remote_config.json, change mode value

# Upload updated config
firebase remoteconfig:publish remote_config.json
```

---

## What Changes in Each Mode

| Aspect | Invitation | Release |
|--------|-----------|---------|
| Banner | Coming soon | Syukuran (Thanksgiving) |
| Main message | Undangan (Invitation) | Terima kasih (Thank you) |
| Location shown | ✅ Yes | ❌ Hidden |
| Schedule shown | ✅ Yes | ❌ Hidden |
| Wish section | Wish for the Couple | 🤲 Doa dan Restu (Prayers) |
| Form button | Send | Kirim Doa (Send Prayer) |

---

## Current Configuration

**Current Mode**: Check Firebase Console → Remote Config → `mode` parameter

**Last Updated**: [You can manually note this]

---

## Steps for Release Day

1. **Before the wedding**: Keep mode = `invitation` (default)

2. **After the wedding**: 
   - Go to Firebase Console
   - Edit `mode` parameter
   - Change to `release`
   - Publish
   - **Done!** 🎉

3. **Users will see**:
   - Thank you message
   - Prayer/blessing section instead of invitation
   - No location details displayed
   - Thanksgiving banner

---

## Testing (Development)

Test both modes locally:

```javascript
// In src/context/ConfigContext.jsx, temporarily hardcode mode:
const [mode, setMode] = useState('release'); // Change to test

// Or use React DevTools to inspect ConfigContext
```

---

## Rollback

If something goes wrong:
- Change mode back to `invitation` in Firebase Console
- Publish
- Refresh app (Ctrl+R or Cmd+R)

---

## Notes

- ✅ Netflix theme stays the same
- ✅ All wishes/prayers data is preserved
- ✅ No code deployment needed - Pure configuration change
- ✅ Changes appear within seconds to 1 hour (depending on cache)
- ✅ All visitors see the same mode (global toggle)

---

**Questions? Check REMOTE_CONFIG_SETUP.md for detailed documentation**
