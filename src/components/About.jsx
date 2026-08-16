import { motion } from 'framer-motion'
import { personal } from '../data/portfolio'
import SectionHeading from './ui/SectionHeading'

const highlights = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
      </svg>
    ),
    title: 'Trinity College Dublin',
    subtitle: 'B.A. Computer Science, Year 4',
    color: '#00abf0',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
              d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    title: 'ML Engineer Intern',
    subtitle: 'Ubotica · Edge AI & Anomaly Detection',
    color: '#f97316',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    title: 'Security Research',
    subtitle: 'IBM & TCD Collaboration',
    color: '#7c3aed',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
      </svg>
    ),
    title: 'Full-Stack Development',
    subtitle: 'Python, SQL, REST APIs',
    color: '#10b981',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>
      </svg>
    ),
    title: 'Bilingual',
    subtitle: 'English & Arabic',
    color: '#f59e0b',
  },
]

const links = [
  { label: 'GitHub',   href: personal.github,   icon: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  )},
  { label: 'LinkedIn', href: personal.linkedin, icon: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )},
  { label: 'Email',    href: `mailto:${personal.email}`, icon: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
  )},
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-dark-2 relative overflow-hidden">
      {/* Background accent */}
      <div className="orb w-96 h-96 -top-32 right-0 bg-accent-2/8" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading label="Who I Am" title="About" highlight="Me" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden gradient-border">
              <img
                src={personal.image}
                alt={personal.name}
                className="w-full object-cover"
                style={{
                  height: '520px',
                  objectPosition: 'center 20%',
                  filter: 'contrast(1.05) brightness(1.02) saturate(1.05)',
                }}
              />
              {/* Bottom fade to blend into background */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-2 via-dark-2/20 to-transparent" />
              {/* Subtle side vignettes */}
              <div className="absolute inset-0"
                   style={{ boxShadow: 'inset 20px 0 40px #0d1a2d, inset -20px 0 40px #0d1a2d' }} />
              {/* Name tag overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="glass-strong rounded-2xl px-5 py-3 border border-white/10 inline-block">
                  <div className="text-white font-bold text-base">{personal.name}</div>
                  <div className="text-accent text-sm font-medium">{personal.role}</div>
                </div>
              </div>
            </div>

            {/* Decorative squares */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl bg-accent/5 border border-accent/15 -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-2xl bg-accent-2/5 border border-accent-2/15 -z-10" />

            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-6 left-6 glass-strong rounded-2xl px-5 py-3 border border-white/10"
            >
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <div>
                  <div className="text-sm font-semibold text-white">Dublin, Ireland</div>
                  <div className="text-xs text-slate-400">From Palestine</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold text-white mb-2">{personal.name}</h3>
            <p className="text-accent font-medium mb-6">{personal.role} · Trinity College Dublin</p>

            <p className="text-slate-400 leading-relaxed mb-8 text-base">
              {personal.bio}
            </p>


            {/* Social links */}
            <div className="flex gap-3 flex-wrap">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass border border-white/10
                             text-slate-300 hover:text-white hover:border-accent/30 transition-all text-sm font-medium"
                >
                  {link.icon}
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
