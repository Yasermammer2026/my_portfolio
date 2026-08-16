import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { personal } from '../data/portfolio'

const ROLES = personal.roles

/* Typewriter hook — uses refs to avoid stale closures so it never freezes */
function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('')
  const state = useRef({ wordIdx: 0, charIdx: 0, deleting: false })
  const timer = useRef(null)

  useEffect(() => {
    function tick() {
      const { wordIdx, charIdx, deleting } = state.current
      const current = words[wordIdx % words.length]

      if (!deleting) {
        const next = charIdx + 1
        setDisplay(current.slice(0, next))
        state.current.charIdx = next
        if (next === current.length) {
          /* finished typing — wait then start deleting */
          timer.current = setTimeout(() => {
            state.current.deleting = true
            tick()
          }, pause)
          return
        }
      } else {
        const next = charIdx - 1
        setDisplay(current.slice(0, next))
        state.current.charIdx = next
        if (next === 0) {
          state.current.deleting = false
          state.current.wordIdx  = wordIdx + 1
        }
      }
      timer.current = setTimeout(tick, deleting ? speed / 2 : speed)
    }

    timer.current = setTimeout(tick, speed)
    return () => clearTimeout(timer.current)
  }, []) // runs once — state is managed via ref

  return display
}

export default function Hero() {
  const typedText = useTypewriter(ROLES)

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  }

  const itemVariants = {
    hidden:  { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden hero-bg">
      {/* Background orbs */}
      <div className="orb w-96 h-96 top-1/4 -left-20 bg-accent/15 animate-pulse-slow" />
      <div className="orb w-80 h-80 bottom-1/4 -right-10 bg-accent-2/15 animate-pulse-slow"
           style={{ animationDelay: '2s' }} />
      <div className="orb w-64 h-64 top-1/2 left-1/2 -translate-x-1/2 bg-accent/8" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
           style={{ backgroundImage: 'linear-gradient(#00abf0 1px, transparent 1px), linear-gradient(90deg, #00abf0 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                               bg-accent/10 border border-accent/25 text-accent text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                ML Engineer · Dublin, Ireland
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-4">
              <span className="text-white">Hi, I'm</span>
              <br />
              <span className="gradient-text">{personal.name.split(' ')[0]}</span>
              <br />
              <span className="text-white/80 text-4xl md:text-5xl font-bold">
                {personal.name.split(' ').slice(1).join(' ')}
              </span>
            </motion.h1>

            {/* Typing role */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6 h-10">
              <span className="text-xl md:text-2xl font-semibold text-accent typing-cursor">
                {typedText}
              </span>
            </motion.div>

            <motion.p variants={itemVariants} className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
              Computer Science student at{' '}
              <span className="text-white font-medium">Trinity College Dublin</span>, with
              hands-on experience in machine learning, embedded systems, and Edge AI.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="#contact"  className="btn-outline">Let's Talk</a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl glass border border-white/10
                           text-slate-300 hover:text-white hover:border-white/25 transition-all text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex gap-8">
              {[
                { val: '4+',   label: 'Years Study' },
                { val: 'TCD',  label: 'University' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="text-2xl font-black gradient-text">{stat.val}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Soft ambient glow behind the photo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/30 to-accent-2/30
                              blur-3xl scale-125 animate-pulse-slow" />

              {/* Spinning gradient border ring */}
              <div className="absolute -inset-[5px] rounded-full opacity-80 blur-[2px]"
                   style={{ background: 'conic-gradient(from 0deg, #00abf0, #7c3aed, #00abf0)',
                            animation: 'spin 8s linear infinite' }} />

              {/* White separator ring so photo doesn't touch the conic gradient */}
              <div className="absolute -inset-[3px] rounded-full bg-dark-2" />

              {/* Image container */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl"
              >
                <img
                  src={personal.image}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 20%', filter: 'contrast(1.05) brightness(1.02) saturate(1.05)' }}
                />
                {/* Subtle vignette to blend edges into dark background */}
                <div className="absolute inset-0 rounded-full"
                     style={{ boxShadow: 'inset 0 0 60px 20px #050d1a' }} />
              </motion.div>

              {/* Floating badge: TCD */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-4 -right-4 glass-strong rounded-2xl px-4 py-3 shadow-xl border border-accent/20"
              >
                <div className="text-xs text-slate-400">Currently at</div>
                <div className="text-sm font-bold text-white">Trinity College</div>
                <div className="text-accent text-xs">Dublin</div>
              </motion.div>

              {/* Floating badge: Location */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-6 glass-strong rounded-2xl px-4 py-3 shadow-xl border border-white/15"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-white">📍 Dublin, Ireland</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">From Palestine</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-slate-600 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-accent rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
