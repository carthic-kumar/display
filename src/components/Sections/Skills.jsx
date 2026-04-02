import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code, Settings, PenTool, TestTube } from 'lucide-react'

// Color mapping for skill category gradients
const categoryColors = {
  'cyber-blue': '#00d4ff',
  'cyber-purple': '#a855f7',
  'cyber-pink': '#ec4899',
}

export default function Skills() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      icon: Settings,
      title: 'Simulation',
      color: 'cyber-blue',
      skills: [
        { name: 'FEA (Structural)', level: 95 },
        { name: 'Thermal Analysis', level: 90 },
        { name: 'Modal Analysis', level: 88 },
        { name: 'Fatigue Analysis', level: 85 },
        { name: 'CFD (Fluent)', level: 80 },
      ],
    },
    {
      icon: Code,
      title: 'Programming',
      color: 'cyber-purple',
      skills: [
        { name: 'Python (NumPy, SciPy)', level: 92 },
        { name: 'MATLAB', level: 90 },
        { name: 'Scripting/Automation', level: 88 },
        { name: 'Data Analysis', level: 85 },
      ],
    },
    {
      icon: PenTool,
      title: 'CAD & Design',
      color: 'cyber-pink',
      skills: [
        { name: 'CATIA V5', level: 93 },
        { name: 'SolidWorks', level: 90 },
        { name: 'Siemens NX', level: 85 },
        { name: 'GD&T', level: 92 },
        { name: 'DFM/DFA', level: 88 },
      ],
    },
    {
      icon: TestTube,
      title: 'Engineering Practices',
      color: 'cyber-blue',
      skills: [
        { name: 'FMEA', level: 90 },
        { name: 'APQP', level: 85 },
        { name: 'PPAP', level: 83 },
        { name: 'GD&T', level: 92 },
        { name: 'Industry Standards', level: 88 },
      ],
    },
  ]

  const allSkills = skillCategories.flatMap(cat =>
    cat.skills.map(skill => ({ ...skill, category: cat.title }))
  )

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-24 md:py-32 bg-cyber-surface overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-surface via-cyber-dark/20 to-cyber-surface" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Technical Expertise</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Core competencies developed through academic rigor and industry experience
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card p-6 group hover:border-cyber-blue/30 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="p-3 rounded-lg border transition-colors group-hover:duration-300"
                  style={{
                    backgroundColor: `${categoryColors[category.color]}1a`, // ~10% opacity
                    borderColor: `${categoryColors[category.color]}4d`, // ~30% opacity
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = `${categoryColors[category.color]}33` // ~20% opacity
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = `${categoryColors[category.color]}1a`
                  }}
                >
                  <category.icon size={24} style={{ color: categoryColors[category.color] }} />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyber-blue transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={`${category.title}-${skill.name}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-slate-300">{skill.name}</span>
                      <span className="text-xs font-mono text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-bar-fill"
                        style={{
                          background: `linear-gradient(90deg, ${categoryColors[category.color]}, #a855f7)`,
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Tools & Platforms</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Ansys Mechanical', 'Ansys Fluent', 'Ansys Discovery', 'CATIA V5',
              'SolidWorks', 'Siemens NX', 'Python', 'MATLAB', 'Git', 'Docker',
              'Linux', 'Jenkins'
            ].map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-300 text-sm font-medium hover:border-cyber-blue/50 transition-colors"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Radial Skills Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="glass-card p-8 relative overflow-hidden">
            <h3 className="text-xl font-bold text-white text-center mb-8">Skill Distribution</h3>
            <div className="relative h-64 flex items-center justify-center">
              {/* Tick marks and labels */}
              {allSkills.map((skill, index) => {
                const angle = (index / allSkills.length) * Math.PI * 2 - Math.PI / 2
                const x = Math.cos(angle) * 100
                const y = Math.sin(angle) * 100
                const labelX = Math.cos(angle) * 120
                const labelY = Math.sin(angle) * 120

                return (
                  <motion.div
                    key={`${skill.category}-${skill.name}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                    className="absolute"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  >
                    <div className="w-2 h-2 rounded-full bg-cyber-blue" />
                  </motion.div>
                )
              })}

              {/* Center text */}
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text">{allSkills.length}+</div>
                <div className="text-sm text-slate-300">Core Skills</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
