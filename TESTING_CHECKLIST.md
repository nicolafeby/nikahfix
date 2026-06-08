# Pre-Deployment Testing Checklist - Nikahfix Remote Config

## ✅ Code Quality Checks

### Before Testing
- [ ] No TypeScript/ESLint errors (`npm run lint`)
- [ ] All imports are correct
- [ ] No console.error messages (except expected debug logs)
- [ ] Project builds successfully (`npm run build`)

### Firebase Integration
- [ ] `.env` file contains all Firebase credentials
- [ ] Firebase project is active and accessible
- [ ] Remote Config is enabled in Firebase Console
- [ ] `mode` parameter exists in Firebase Console with default value `invitation`

---

## 🧪 Local Testing (Development)

### Invitation Mode Testing

```
Firebase Remote Config: mode = "invitation"
```

**Expected UI Elements Visible:**
- [ ] "Coming soon on Wednesday, 25 Juni 2025" banner
- [ ] "Information" section heading
- [ ] Invitation text: "Hai! Kalian adalah bagian berharga..."
- [ ] Full venue details and address
- [ ] Venue screenshot image
- [ ] "Our Date" section with:
  - [ ] Place information
  - [ ] Date: "Rabu, 25 Juni 2025"
  - [ ] Schedule section
  - [ ] "Akad Nikah" with time
  - [ ] "Resepsi" with time
  - [ ] Google Maps links
- [ ] "Wish for the Couple" section header
- [ ] Wish form with "Send" button

**Interactions:**
- [ ] Click location card → Google Maps opens
- [ ] Click map icons → Correct locations open
- [ ] Add wish → Appears in list
- [ ] Scroll through wishes → Works smoothly

---

### Release Mode Testing

```
Firebase Remote Config: mode = "release"
```

**Expected UI Elements Visible:**
- [ ] "Syukuran - Wednesday, 25 Juni 2025" banner
- [ ] "Terima Kasih" section heading
- [ ] Thank you text: "Alhamdulillah, pernikahan kami telah terlaksana..."
- [ ] Prayer request text
- [ ] "🤲 Doa dan Restu" section header
- [ ] Prayer form with "Kirim Doa" button
- [ ] Placeholder text: "Tuliskan doa dan harapan terbaik untuk kami..."

**Location Should Be Hidden:**
- [ ] ❌ NO venue address shown
- [ ] ❌ NO venue image
- [ ] ❌ NO "Our Date" card with location
- [ ] ❌ NO maps links
- [ ] ❌ NO schedule times
- [ ] ✅ Only date with prayer message shown

**Interactions:**
- [ ] Add prayer → Appears in list
- [ ] Scroll through prayers → Works smoothly
- [ ] Form resets after submit

---

## 🔄 Mode Switching Test

### Switch Invitation → Release

1. [ ] App shows invitation mode
2. [ ] Go to Firebase Console
3. [ ] Edit `mode` parameter: change to `release`
4. [ ] Click Save → Publish
5. [ ] Wait 2-5 seconds
6. [ ] Refresh app (F5)
7. [ ] Verify all release mode elements appear
8. [ ] Verify all invitation elements are hidden

### Switch Release → Invitation

1. [ ] App shows release mode
2. [ ] Go to Firebase Console
3. [ ] Edit `mode` parameter: change to `invitation`
4. [ ] Click Save → Publish
5. [ ] Wait 2-5 seconds
6. [ ] Refresh app (F5)
7. [ ] Verify all invitation mode elements appear
8. [ ] Verify release mode is gone

---

## 📱 Responsive Testing

### Mobile (320px)
- [ ] Layout adapts correctly
- [ ] Text is readable
- [ ] Buttons are tappable
- [ ] Images display properly
- [ ] Forms work on mobile

### Tablet (768px)
- [ ] Layout adapts correctly
- [ ] Grid elements display properly
- [ ] Scrolling is smooth

### Desktop (1024px+)
- [ ] Full layout displays correctly
- [ ] All elements properly spaced

---

## 🎨 Theme Verification

**Netflix Theme Should Be Intact:**
- [ ] Dark background (black)
- [ ] Dark cards (zinc-800)
- [ ] Red Netflix accent button (#E50913)
- [ ] White text on dark background
- [ ] Smooth transitions and hover effects
- [ ] Icons display correctly

---

## 🔐 Security & Error Handling

### Error Scenarios

1. **Firebase Unreachable**
   - [ ] App defaults to `invitation` mode
   - [ ] No crash occurs
   - [ ] Error logged in console

2. **Missing Environment Variables**
   - [ ] Console shows error
   - [ ] App defaults gracefully

3. **Bad Firebase Credentials**
   - [ ] App doesn't crash
   - [ ] Defaults to `invitation` mode

---

## 🔍 Console & DevTools Check

### Browser Console
- [ ] No red errors
- [ ] Remote Config debug logs present:
  - [ ] "✅ Remote Config initialized"
  - [ ] "📢 Mode changed to: ..." (when switching modes)
- [ ] Firebase initialization logs

### Network Tab (DevTools)
- [ ] Firebase Remote Config requests succeed
- [ ] No failed API calls

### Performance
- [ ] App loads in < 3 seconds
- [ ] Mode switching is instant
- [ ] No memory leaks

---

## 🎯 Content Verification

### Invitation Mode Text
```
Expected in TitleInfo:
"Aku dan Kamu akhirnya dipertemukan di waktu yang paling sempurna..."

Expected in BreakingNews:
"Hai! Kalian adalah bagian berharga dalam hidup kami..."
```

### Release Mode Text
```
Expected in TitleInfo:
"Alhamdulillah! Pernikahan kami telah berlangsung dengan lancar..."

Expected in BreakingNews:
"Alhamdulillah, pernikahan kami telah terlaksana dengan lancar..."
```

---

## 📊 Data Persistence

- [ ] Add wish in invitation mode
- [ ] Switch to release mode → Wish still visible
- [ ] Add prayer in release mode
- [ ] Switch back to invitation → Prayer visible in wishes list
- [ ] Data survives across refreshes

---

## 🚀 Pre-Production Deployment

### Before Deploying to Production

- [ ] All tests above pass
- [ ] Build completes without warnings
- [ ] No console errors
- [ ] Firebase credentials are production values
- [ ] Remote Config cache interval appropriate (3600000ms = 1 hour)
- [ ] Documentation is accurate

### Deployment Steps

1. [ ] Commit code to repository
2. [ ] Run `npm run build`
3. [ ] Deploy build output
4. [ ] Verify deployed app works
5. [ ] Test mode switching on production

---

## 📋 Post-Deployment Verification

- [ ] App loads from production URL
- [ ] Invitation mode works
- [ ] Can switch to release mode from Firebase Console
- [ ] Mode changes propagate to live site
- [ ] All links and maps work correctly
- [ ] Mobile version works

---

## 🎉 Wedding Day Checklist

### Before Wedding (June 25, 2025)
- [ ] Confirm Firebase `mode` parameter = `invitation`
- [ ] Test that all invitation elements show
- [ ] Confirm location is visible
- [ ] Test wish section works

### After Wedding
- [ ] Go to Firebase Console
- [ ] Edit `mode` → change to `release`
- [ ] Click Publish
- [ ] Wait for confirmation
- [ ] Share link with guests
- [ ] Guests see thank you page

---

## 🆘 Troubleshooting During Testing

| Issue | Solution |
|-------|----------|
| Mode doesn't change | Hard refresh (Ctrl+Shift+R) |
| Location still visible in release | Clear cache, hard refresh |
| Firebase error in console | Check .env credentials |
| Build fails | Run `npm install` again |
| Styles look wrong | Clear browser cache |

---

## 📝 Sign-Off

**Date Tested:** _______________

**Tester Name:** _______________

**✅ All Tests Passed:** [ ] Yes [ ] No

**Comments:**
```
_________________________________________
_________________________________________
_________________________________________
```

**Ready for Deployment:** [ ] Yes [ ] No

---

## 📞 Support

If issues occur:
1. Check browser console (F12)
2. Review Firebase Console logs
3. Refer to `REMOTE_CONFIG_SETUP.md`
4. Check `.env` file credentials

---

**Good luck with your wedding! 🎉💕**
