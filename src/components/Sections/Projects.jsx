import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, ChevronRight, Cpu, Heart, Car, Target } from 'lucide-react'

export default function Projects() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [expandedCard, setExpandedCard] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Monte Carlo Simulation Optimization',
      icon: Cpu,
      color: 'cyber-blue',
      category: 'Simulation',
      period: '2023',
      summary: 'Led comprehensive Monte Carlo simulations to optimize structural components, achieving significant weight reduction while maintaining performance.',
      fullDescription: `Developed and implemented advanced Monte Carlo simulation frameworks to evaluate design tolerances and material variations. By analyzing thousands of potential design permutations, identified opportunities to reduce component weight by 15% without compromising structural integrity.

      Key Contributions:
      • Built probabilistic models using Python (NumPy, SciPy, Pandas)
      • Integrated with Ansys for automated FEA workflows
      • Developed custom scripts to process and visualize simulation results
      • Collaborated with manufacturing to validate design margins`,
      technologies: ['Python', 'Ansys', 'Monte Carlo', 'NumPy', 'SciPy'],
      outcomes: ['15% weight reduction', 'Improved safety factor by 8%', 'Reduced material costs by 12%'],
    },
    {
      id: 2,
      title: 'Stent Deployment Simulation',
      icon: Heart,
      color: 'cyber-purple',
      category: 'Medical Devices',
      period: '2022',
      summary: 'High-fidelity FEA simulations of balloon-expandable stent deployment using hyperelastic material models.',
      fullDescription: `Conducted advanced finite element analysis of stent deployment mechanisms to predict performance and optimize design. Utilized hyperelastic material models (Mooney-Rivlin, Ogden) to accurately simulate the non-linear behavior of polymeric components.

      Technical Approach:
      • Modeled large deformations and contact interactions
      • Simulated radial expansion and recoil characteristics
      • Analyzed stress concentrations and fatigue life
      • Validated against experimental test data
      • Created detailed technical reports for regulatory review`,
      technologies: ['Ansys Mechanical', 'Hyperelastic Models', 'Non-linear FEA', 'COMSOL'],
      outcomes: ['Predicted deployment within 5% of experimental results', 'Optimized stent geometry for uniform expansion', 'Documented 30% reduction in fatigue failures'],
    },
    {
      id: 3,
      title: 'Automotive Product Design System',
      icon: Car,
      color: 'cyber-pink',
      category: 'Automotive',
      period: '2020-2021',
      summary: 'Designed and validated lighting systems for mass production at scale of 700,000+ units per year.',
      fullDescription: `Led design and verification of automotive exterior lighting systems for major OEMs. Managed complete product lifecycle from concept through production launch.

      Responsibilities:
      • Created 3D CAD models in CATIA following GM and Ford standards
      • Performed structural, thermal, and optical simulations
      • Conducted DFM/DFA reviews with suppliers
      • Managed APQP documentation and PPAP submissions
      • Coordinated with cross-functional teams (QA, Manufacturing, Supply Chain)

      Designed components for high-volume production while maintaining tight tolerances and reliability targets.`,
      technologies: ['CATIA V5', 'GD&T', 'DFM/DFA', 'Ansys', 'APQP'],
      outcomes: ['700K+ units/year production capacity', 'Zero warranty returns in first year', '20% reduction in assembly time'],
    },
    {
      id: 4,
      title: 'Fatigue Analysis System',
      icon: Target,
      color: 'cyber-blue',
      category: 'Verification',
      period: '2023-Present',
      summary: 'Developed comprehensive fatigue life prediction system incorporating material behavior under cyclic loading conditions.',
      fullDescription: `Built an integrated system for analyzing fatigue life of mechanical components under complex loading conditions. Combined high-cycle and low-cycle fatigue models with damage accumulation theories.

      System Architecture:
      • Rainflow counting algorithm implementation in Python
      • Custom material database with S-N curves and endurance limits
      • Stress-life and strain-life approach capabilities
      • Cumulative damage calculation (Miner's rule)
      • Automated reporting and visualization dashboard

      Applied to critical components in semiconductor equipment, validating designs for 20+ year lifespans.`,
      technologies: ['Python', 'MATLAB', 'Miner\'s Rule', 'S-N Curves', 'Rainflow Counting'],
      outcomes: ['Validated 15+ critical components', 'Extended predicted lifespan by 25%', 'Automated analysis reduced review time by 60%'],
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-24 md:py-32 bg-cyber-dark overflow-hidden"
    >
      <div className="absolute inset-0 mesh-gradient-bg opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Featured Projects</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Key engineering initiatives that demonstrate expertise in simulation, design, and verification
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="perspective-1000"
              onClick={() => setExpandedCard(expandedCard === project.id ? null : project.id)}
            >
              <div className={`glass-card-hover p-6 cursor-pointer h-full transition-all duration-500 ${expandedCard === project.id ? 'scale-[1.02] border-cyber-blue/50' : ''}`}>
                {/* Card Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                    <project.icon size={28} className={`text-${project.color}`} />
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-${project.color}/10 text-${project.color} border border-${project.color}/30 mb-2`}>
                      {project.category}
                    </span>
                    <p className="text-xs text-slate-500">{project.period}</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-blue transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-slate-800/50 border border-slate-700/30 rounded text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Expandable Content */}
                <AnimatePresence>
                  {expandedCard === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-slate-700/50 mt-4">
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-slate-300 mb-2">Overview</h4>
                          <p className="text-sm text-slate-400 whitespace-pre-line leading-relaxed">
                            {project.fullDescription}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-slate-300 mb-2">Key Outcomes</h4>
                          <ul className="space-y-1">
                            {project.outcomes.map((outcome, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-cyber-blue">
                                <ChevronRight size={12} />
                                <span>{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Action */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    Click to {expandedCard === project.id ? 'collapse' : 'expand details'}
                  </span>
                  <ChevronRight
                    size={18}
                    className={`text-cyber-blue transition-transform duration-300 ${
                      expandedCard === project.id ? 'rotate-90' : ''
                    }`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
