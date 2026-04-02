import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronDown, ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  const heroRef = useRef(null)
  const isInView = useInView(heroRef, { once: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        {/* This will be replaced with Three.js canvas */}
        <div className="w-full h-full bg-gradient-to-b from-cyber-dark via-cyber-dark/90 to-cyber-dark" />
      </div>

      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 mesh-gradient-bg z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="mb-8 flex justify-center">
            <img
              src="/profile.jpg"
              alt="Carthic Kumar"
              className="w-36 h-36 rounded-full object-cover border-4 border-cyber-blue/50 shadow-lg shadow-cyber-blue/20"
            />
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-blue opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-blue" />
              </span>
              Available for new opportunities
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="block text-white mb-2">Carthic</span>
            <span className="block gradient-text">Kumar</span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-300 mb-4 font-light"
          >
            R&D Verification Engineer
          </motion.h2>

          {/* Company */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-cyber-purple mb-8 font-medium"
          >
            @ Synopsys
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Engineering precision through advanced simulation and design.
            Specializing in FEA, computational mechanics, and product innovation
            that scales to millions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cyber-button group flex items-center gap-2"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg font-semibold border border-slate-600 hover:border-cyber-blue/50 transition-all duration-300 text-slate-300 hover:text-white"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6"
          >
            <motion.a
              href="https://linkedin.com/in/carthickumar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              className="p-3 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-cyber-blue hover:border-cyber-blue/50 transition-all"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:carthic.kumar@purdue.edu"
              whileHover={{ scale: 1.2, y: -3 }}
              className="p-3 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-cyber-purple hover:border-cyber-purple/50 transition-all"
            >
              <Mail size={20} />
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              className="p-3 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:border-white/50 transition-all"
            >
              <Github size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}
