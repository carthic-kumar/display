import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Mail, Send, Linkedin, MapPin, Phone, Loader2 } from 'lucide-react'
import emailjs from 'emailjs-com'

export default function Contact() {
  const sectionRef = useRef(null)
  const formRef = useRef()
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Using EmailJS - user needs to configure their own service
      const result = await emailjs.send(
        'service_t9w4jnq', // Replace with your EmailJS service ID
        'template_9rqxgta', // Replace with your EmailJS template ID
        {
          from_name: formState.name,
          from_email: formState.email,
          subject: formState.subject,
          message: formState.message,
          to_email: 'carthicweb@gmail.com',
        },
        'gT47_RMjMc0IXSyRd' // Replace with your EmailJS user ID
      )

      if (result.status === 200) {
        setSubmitStatus('success')
        setFormState({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitStatus(null), 5000)
      }
    } catch (error) {
      console.error('Email send error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'carthic.kumar@purdue.edu',
      href: 'mailto:carthic.kumar@purdue.edu',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/carthickumar',
      href: 'https://linkedin.com/in/carthickumar',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Open to opportunities',
      href: null,
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 md:py-32 bg-cyber-surface overflow-hidden"
    >
      <div className="absolute inset-0 mesh-gradient-bg opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Get in Touch</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Interested in collaboration or have an engineering challenge? Let's connect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 rounded-lg bg-cyber-blue/10 border border-cyber-blue/30 flex-shrink-0">
                      <item.icon size={20} className="text-cyber-blue" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-300 hover:text-cyber-blue transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-300">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Why Connect */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-white mb-4">Why Connect?</h3>
              <ul className="space-y-3">
                {[
                  'Open to R&D and verification engineering roles',
                  'Interested in simulation-driven design projects',
                  'Available for technical consultations',
                  'Looking to solve challenging engineering problems',
                ].map((reason, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-3 text-slate-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyber-purple mt-2 flex-shrink-0" />
                    {reason}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 md:p-10">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 focus:border-cyber-blue transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 focus:border-cyber-blue transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 focus:border-cyber-blue transition-all"
                    placeholder="Project Inquiry / Collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 focus:border-cyber-blue transition-all resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-lg font-semibold bg-gradient-to-r from-cyber-blue to-cyber-purple text-white flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-cyber-blue/20"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm text-center"
                    >
                      Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center"
                    >
                      Failed to send message. Please try again or email directly.
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Note about email configuration */}
                <p className="text-xs text-slate-500 text-center mt-4">
                  Note: This form requires EmailJS configuration.
                  <br />
                  See README for setup instructions.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
