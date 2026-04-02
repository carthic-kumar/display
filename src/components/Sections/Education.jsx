import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Award, MapPin, Calendar, BookOpen } from 'lucide-react'

export default function Education() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const education = [
    {
      institution: 'Purdue University',
      degree: 'Master of Science',
      field: 'Mechanical Engineering',
      period: '2021 – 2023',
      location: 'West Lafayette, IN',
      icon: GraduationCap,
      color: 'cyber-blue',
      highlights: [
        'Specialization in Advanced Materials & Manufacturing',
        'Research: Hyperelastic Material Models for Biomedical Devices',
        'Teaching Assistant - Mechanical Behavior of Materials',
        'GPA: 3.8/4.0',
      ],
      courses: [
        'Advanced Finite Element Analysis',
        'Computational Fluid Dynamics',
        'Mechanics of Composite Materials',
        'Design for Manufacturing',
        'Vibration & Acoustics',
      ],
    },
    {
      institution: 'Anna University',
      degree: 'Bachelor of Engineering',
      field: 'Mechanical Engineering',
      period: '2016 – 2020',
      location: 'Chennai, India',
      icon: Award,
      color: 'cyber-purple',
      highlights: [
        'First Class with Distinction',
        'SAE collegiate chapter - Active member',
        'Capstone project: "Optimization of Heat Exchanger Fins"',
        'University ranking: Top 5%',
      ],
      courses: [
        'Engineering Mechanics',
        'Machine Design',
        'Manufacturing Processes',
        'Thermodynamics',
        'Fluid Mechanics',
      ],
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative py-24 md:py-32 bg-cyber-dark overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-slate-900/10 to-cyber-dark" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Education</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Academic foundation built at top-tier engineering institutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card p-8 group hover:border-cyber-blue/30 transition-all duration-500"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-lg bg-${edu.color}/10 border border-${edu.color}/30 group-hover:bg-${edu.color}/20 transition-colors`}>
                  <edu.icon size={28} className={`text-${edu.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyber-blue transition-colors">
                    {edu.institution}
                  </h3>
                  <p className={`text-${edu.color} font-medium`}>{edu.degree} in {edu.field}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-300 mt-2">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {edu.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                  <Award size={16} className="text-cyber-purple" />
                  Highlights
                </h4>
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="flex items-start gap-2 text-sm text-slate-300"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-${edu.color} mt-1.5 flex-shrink-0`} />
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Relevant Courses */}
              <div className="border-t border-slate-700/30 pt-4">
                <h4 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                  <BookOpen size={16} className="text-cyber-blue" />
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course) => (
                    <span
                      key={course}
                      className={`px-3 py-1 text-xs bg-${edu.color}/10 border border-${edu.color}/30 rounded text-slate-300`}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="glass-card p-8">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Certifications & Training</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Ansys Certified Mechanical Analyst',
                'Six Sigma Yellow Belt',
                'GD&T Professional (ASME)',
                'CATIA V5 Advanced Design',
                'SolidWorks CSWA',
                'Python for Data Science',
              ].map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-slate-800/30 border border-slate-700/30 rounded-lg text-center"
                >
                  <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 flex items-center justify-center">
                    <Award size={20} className="text-cyber-blue" />
                  </div>
                  <p className="text-sm text-slate-300">{cert}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
