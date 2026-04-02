import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)

    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-cyber-dark"
        >
          <div className="text-center">
            {/* 3D Cube Animation */}
            <motion.div
              animate={{ rotateY: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 mx-auto mb-8 relative"
            >
              <div className="absolute inset-0 border-4 border-cyber-blue/30 rounded-lg" />
              <div className="absolute inset-2 border-4 border-cyber-purple/50 rounded-md" />
              <div className="absolute inset-4 border-4 border-cyber-pink/70 rounded-sm" />
            </motion.div>

            {/* Loading Text */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold mb-4 gradient-text"
            >
              Initializing Simulation
            </motion.h2>

            {/* Progress Bar */}
            <div className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden mx-auto mb-2">
              <motion.div
                className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <p className="text-slate-400 text-sm font-mono">
              {Math.round(Math.min(progress, 100))}% Complete
            </p>

            {/* Code Simulation Lines */}
            <div className="mt-6 text-left font-mono text-xs text-slate-500 space-y-1">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-cyber-blue">⟩</span> Loading geometry...
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-cyber-purple">⟩</span> Initializing physics engine...
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <span className="text-cyber-pink">⟩</span> Building component tree...
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
