import { motion } from 'framer-motion'

export default function SectionHeading({ label, title, highlight, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      {label && (
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase
                         bg-accent/10 text-accent border border-accent/20 mb-4">
          {label}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg max-w-xl mx-auto">{subtitle}</p>
      )}
      <div className="flex items-center justify-center gap-2 mt-6">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent/60" />
        <div className="w-2 h-2 rounded-full bg-accent" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent/60" />
      </div>
    </motion.div>
  )
}
