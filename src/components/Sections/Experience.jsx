import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, GraduationCap, Award, ChevronRight, Calendar } from 'lucide-react'

export default function Experience() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const experiences = [
    {
      company: 'Synopsys',
      role: 'R&D Verification Engineer',
      period: 'Jun 2023 – Present',
      type: 'work',
      icon: Briefcase,
      color: 'cyber-blue',
      achievements: [
        'Verify and validate cutting-edge semiconductor design tools',
        'Develop test plans and methodologies for complex verification flows',
        'Automate test infrastructure using Python and scripting',
        'Collaborate with R&D to identify and resolve design issues',
        'Maintain and improve verification test suites',
      ],
    },
    {
      company: 'Ansys',
      role: 'Intern - CFD Engineer',
      period: 'May 2022 – Aug 2022',
      type: 'work',
      icon: Briefcase,
      color: 'cyber-purple',
      achievements: [
        'Conducted CFD simulations for automotive aerodynamics',
        'Optimized meshing strategies for improved accuracy',
        'Analyzed thermal management systems for electronics',
        'Generated technical reports and presentation materials',
      ],
    },
    {
      company: 'SL Corporation',
      role: 'Design Engineer',
      period: 'Jan 2020 – May 2021',
      type: 'work',
      icon: Briefcase,
      color: 'cyber-pink',
      achievements: [
        'Designed automotive lighting components for OEMs',
        'Performed FEA on structural components for durability',
        'Participated in DFM/DFA reviews with manufacturing teams',
        'Managed product lifecycle from concept to production',
      ],
    },
    {
      company: 'Purdue University',
      role: 'MS Mechanical Engineering',
      period: '2021 – 2023',
      type: 'education',
      icon: GraduationCap,
      color: 'cyber-blue',
      achievements: [
        'Specialization in Advanced Materials & Manufacturing',
        'Research in Finite Element Analysis and Computational Mechanics',
        'Developed hyperelastic material models for bio-medical applications',
      ],
    },
    {
      company: 'Anna University',
      role: 'BS Mechanical Engineering',
      period: '2016 – 2020',
      type: 'education',
      icon: GraduationCap,
      color: 'cyber-purple',
      achievements: [
        'First Class with Distinction',
        'Active participation in SAE collegiate chapters',
        'Undertaken capstone projects in CAD and manufacturing',
      ],
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-24 md:py-32 bg-cyber-surface"
    >
      <div className="absolute inset-0 mesh-gradient-bg opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Experience & Education</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A journey through verification engineering, design innovation, and academic excellence
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-blue via-cyber-purple to-cyber-pink transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                  className={`absolute left-6 md:left-1/2 w-4 h-4 rounded-full border-2 border-cyber-dark transform -translate-x-1/2 z-10 ${
                    exp.type === 'work'
                      ? 'bg-cyber-blue shadow-[0_0_10px_#00d4ff]'
                      : 'bg-cyber-purple shadow-[0_0_10px_#a855f7]'
                  }`}
                />

                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass-card-hover p-6 cursor-pointer group"
                  >
                    {/* Header */}
                    <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className={`p-3 rounded-lg bg-${exp.color}/10 border border-${exp.color}/30 group-hover:bg-${exp.color}/20 transition-colors`}>
                        <exp.icon size={24} className={`text-${exp.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyber-blue transition-colors">
                          {exp.role}
                        </h3>
                        <p className={`text-${exp.color} font-medium mb-2`}>{exp.company}</p>
                        <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <ul className={`space-y-2 mt-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="flex items-start gap-2 text-sm text-slate-300"
                        >
                          <ChevronRight size={14} className={`mt-1 flex-shrink-0 text-${exp.color} ${index % 2 === 0 ? 'md:rotate-180' : ''}`} />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Expand hint */}
                    <div className={`mt-4 text-xs text-slate-500 flex items-center gap-1 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span>Click to expand</span>
                      <ChevronRight size={12} className={`transition-transform group-hover:translate-x-1 ${index % 2 === 0 ? 'md:-rotate-180' : ''}`} />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
