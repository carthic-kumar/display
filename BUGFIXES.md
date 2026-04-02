# Bug Fixes Applied

This document records all bugs fixed during development.

---

## Fix 1: Missing useEffect Import
**File:** `src/components/Three/ProfileCard3D.jsx`  
**Issue:** `useEffect` was used but not imported  
**Fix:** Added `useEffect` to import statement on line 1

```javascript
import { useRef, useState, useEffect } from 'react'
```

---

## Fix 2: Duplicate React Keys in Skills
**File:** `src/components/Sections/Skills.jsx`  
**Issue:** `GD&T` appeared in two categories, causing duplicate key warning  
**Fix:** Changed key from `skill.name` to composite key `` `${category.title}-${skill.name}` ``  
**Lines affected:** 107 and 184

---

## Fix 3: Missing AnimatePresence Import
**File:** `src/components/Sections/Contact.jsx`  
**Issue:** `AnimatePresence` used but not imported  
**Fix:** Added `AnimatePresence` to framer-motion import on line 2

```javascript
import { motion, useInView, AnimatePresence } from 'framer-motion'
```

---

## Fix 4: Deprecated THREE.Texture.encoding
**File:** `src/components/Three/ProfileCard3D.jsx`  
**Issue:** Three.js r150+ deprecated `.encoding` in favor of `.colorSpace`  
**Fix:** Changed `texture.encoding = THREE.sRGBEncoding` to `texture.colorSpace = THREE.SRGBColorSpace`  
**Lines affected:** 17 and 24

---

## Fix 5: Missing Font File
**File:** `src/components/Three/ProfileCard3D.jsx`  
**Issue:** Text component referenced non-existent font `/fonts/Inter-Bold.woff` causing DataView error  
**Fix:** Removed `font="/fonts/Inter-Bold.woff"` prop from Text component (line 95)  
**Note:** The default font will use the system font; Inter is loaded globally via Google Fonts in `index.html`

---

## Verification

After all fixes:
- ✅ `npm run build` completes successfully
- ✅ No console errors in development
- ✅ No React key warnings
- ✅ No Three.js warnings
- ✅ All animations work smoothly

---

**Last updated:** 2025-04-02
