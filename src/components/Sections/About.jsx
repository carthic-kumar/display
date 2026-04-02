import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Cpu, Gauge, Zap, Brain } from 'lucide-react'

export default function About() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const highlights = [
    {
      icon: Gauge,
      title: '15% Weight Reduction',
      description: 'Led Monte Carlo simulations that optimized structural design while maintaining performance',
    },
    {
      icon: Cpu,
      title: 'High-Fidelity FEA',
      description: 'Advanced structural, thermal, modal, and fatigue analysis using industry-leading tools',
    },
    {
      icon: Zap,
      title: '700K Products/Year',
      description: 'Designed and validated automotive products at scale with DFM/DFA principles',
    },
    {
      icon: Brain,
      title: 'Cost Optimization',
      description: 'Reduced manufacturing costs through intelligent design and material selection',
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 md:py-32 bg-cyber-dark overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-slate-900/10 to-cyber-dark" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">About Me</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            A mechanical engineer specializing in advanced simulation, verification,
            and design optimization. Combining deep technical expertise with
            practical manufacturing knowledge.
          </p>
        </motion.div>

        {/* Main Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card p-8 md:p-12 mb-16"
        >
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">
                Engineering Precision Through Simulation
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                With over 3 years of experience in mechanical design and verification,
                I specialize in translating complex engineering requirements into robust,
                manufacturable solutions. My expertise spans finite element analysis,
                computational fluid dynamics, and design for manufacturing.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                At Synopsys, I lead verification efforts for high-stakes engineering
                projects, ensuring that designs meet rigorous performance and reliability
                standards. My background includes pioneering work in medical device
                simulation, automotive component design, and cost reduction initiatives.
              </p>
              <p className="text-slate-300 leading-relaxed">
                I believe that great engineering comes from the intersection of deep
                theoretical knowledge and hands-on experimentation. Every simulation
                tells a story—my job is to read it correctly and apply those insights
                to create better designs.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-slate-800/30 border border-slate-700/30">
                <h4 className="text-cyber-blue font-semibold mb-2">Core Expertise</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• Structural FEA (Linear & Non-linear)</li>
                  <li>• Thermal & Fatigue Analysis</li>
                  <li>• Computational Fluid Dynamics</li>
                  <li>• Medical Device Simulation</li>
                  <li>• Design for Manufacturing</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-slate-800/30 border border-slate-700/30">
                <h4 className="text-cyber-purple font-semibold mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {['Ansys', 'Fluent', 'Discovery', 'Python', 'MATLAB', 'CATIA', 'SolidWorks'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-slate-800/50 border border-slate-700/30 rounded text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card-hover p-6 group"
            >
              <div className="mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 w-fit group-hover:from-cyber-blue/30 group-hover:to-cyber-purple/30 transition-colors">
                  <item.icon size={28} className="text-cyber-blue" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
