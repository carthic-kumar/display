import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/carthickumar', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:carthic.kumar@purdue.edu', label: 'Email' },
  ]

  return (
    <footer className="bg-cyber-dark border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">Carthic Kumar</h3>
            <p className="text-slate-400 text-sm">
              Engineering Precision Through Simulation & Design
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-cyber-blue hover:border-cyber-blue/50 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-slate-500 text-center md:text-left">
            © {currentYear} Carthic Kumar. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 flex items-center gap-1">
            Built with <Heart size={14} className="text-cyber-pink" /> using React & Three.js
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
