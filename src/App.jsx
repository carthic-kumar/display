import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import LoadingScreen from './components/UI/LoadingScreen'
import Hero from './components/Sections/Hero'
import About from './components/Sections/About'
import Experience from './components/Sections/Experience'
import Projects from './components/Sections/Projects'
import Skills from './components/Sections/Skills'
import Education from './components/Sections/Education'
import Contact from './components/Sections/Contact'
import HeroScene from './components/Three/HeroScene'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [heroLoaded, setHeroLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading / Three.js initialization
    const timer = setTimeout(() => {
      setHeroLoaded(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        <LoadingScreen />
      </AnimatePresence>

      <div className="relative">
        {/* Navigation */}
        <Navbar />

      {/* Hero Section with 3D Background */}
      <section id="hero" className="relative min-h-screen">
        {heroLoaded ? (
          <HeroScene />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-slate-900 to-cyber-dark" />
        )}
        <Hero />
      </section>

      {/* Other Sections */}
      <main className="relative z-10 bg-cyber-dark">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
    </>
  )
}
