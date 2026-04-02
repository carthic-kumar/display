#!/usr/bin/env node

/**
 * Portfolio Verification Script
 * Checks that all dependencies are installed and files are in place
 */

import { existsSync, readdirSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = join(__filename, '..')

console.log('\n🔍 Carthic Portfolio - Verification\n')
console.log('='.repeat(50))

let allGood = true

// Check required directories
const dirs = [
  'src',
  'src/components',
  'src/components/Layout',
  'src/components/Sections',
  'src/components/Three',
  'src/components/UI',
  'public'
]

console.log('\n📁 Checking directories...\n')
dirs.forEach(dir => {
  const path = join(__dirname, dir)
  if (existsSync(path)) {
    console.log(`  ✅ ${dir}/`)
  } else {
    console.log(`  ❌ ${dir}/ - MISSING`)
    allGood = false
  }
})

// Check required files
const requiredFiles = [
  'package.json',
  'vite.config.js',
  'tailwind.config.js',
  'postcss.config.js',
  'index.html',
  'src/main.jsx',
  'src/App.jsx',
  'src/index.css',
  'src/components/Layout/Navbar.jsx',
  'src/components/Layout/Footer.jsx',
  'src/components/UI/LoadingScreen.jsx',
  'src/components/Three/HeroScene.jsx',
  'src/components/Three/GearObject.jsx',
  'src/components/Three/ProfileCard3D.jsx',
  'src/components/Sections/Hero.jsx',
  'src/components/Sections/About.jsx',
  'src/components/Sections/Experience.jsx',
  'src/components/Sections/Projects.jsx',
  'src/components/Sections/Skills.jsx',
  'src/components/Sections/Education.jsx',
  'src/components/Sections/Contact.jsx',
]

console.log('\n📄 Checking files...\n')
requiredFiles.forEach(file => {
  const path = join(__dirname, file)
  if (existsSync(path)) {
    console.log(`  ✅ ${file}`)
  } else {
    console.log(`  ❌ ${file} - MISSING`)
    allGood = false
  }
})

// Check node_modules
console.log('\n📦 Checking dependencies...\n')
const deps = [
  'react',
  'react-dom',
  '@react-three/fiber',
  '@react-three/drei',
  'three',
  'framer-motion',
  'tailwindcss',
  'emailjs-com'
]

deps.forEach(dep => {
  const path = join(__dirname, 'node_modules', dep)
  if (existsSync(path)) {
    console.log(`  ✅ ${dep}`)
  } else {
    console.log(`  ⚠️  ${dep} - not installed (run: npm install)`)
    allGood = false
  }
})

// Check profile image
console.log('\n🖼️  Checking assets...\n')
const profileImg = join(__dirname, 'public', 'profile.jpg')
const placeholderSvg = join(__dirname, 'public', 'profile-placeholder.svg')

if (existsSync(profileImg)) {
  console.log(`  ✅ profile.jpg (your photo)`)
} else if (existsSync(placeholderSvg)) {
  console.log(`  ⚠️  profile.jpg not found - placeholder SVG available`)
  console.log(`     Replace placeholder with your actual profile photo`)
} else {
  console.log(`  ⚠️  No profile image found`)
}

// Summary
console.log('\n' + '='.repeat(50))
if (allGood) {
  console.log('\n✅ Everything looks good!\n')
  console.log('Next steps:')
  console.log('  1. Add your profile photo to public/profile.jpg')
  console.log('  2. Configure EmailJS in src/components/Sections/Contact.jsx')
  console.log('  3. Run: npm run dev')
  console.log('  4. Open: http://localhost:5173\n')
  process.exit(0)
} else {
  console.log('\n❌ Some checks failed. Please review the missing items above.\n')
  console.log('Quick fix:')
  console.log('  rm -rf node_modules')
  console.log('  npm install\n')
  process.exit(1)
}
