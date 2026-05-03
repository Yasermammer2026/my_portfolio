import { motion } from 'framer-motion'
import { education } from '../data/portfolio'
import SectionHeading from './ui/SectionHeading'

export default function Education() {
  return (
    <section id="education" className="section-padding bg-dark-2 relative overflow-hidden">
      <div className="orb w-72 h-72 top-0 left-1/2 bg-accent/6" />

      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="My Background"
          title="Education"
          highlight="& Training"
          subtitle="The foundations of my technical knowledge"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative glass-strong rounded-3xl p-8 border border-white/10 overflow-hidden group"
            >
              {/* Background accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10 blur-xl"
                style={{ backgroundColor: item.color }}
              />

              {/* Icon */}
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl text-2xl mb-5
                           border border-white/10 glass"
                style={{ boxShadow: `0 0 20px ${item.color}30` }}
              >
                {item.icon}
              </div>

              {/* Period badge */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex-1">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3
                               bg-white/5 border border-white/10"
                    style={{ color: item.color }}
                  >
                    {item.period}
                  </span>
                  <h3 className="text-xl font-bold text-white leading-tight mb-1">
                    {item.degree}
                  </h3>
                  <p className="font-semibold text-base" style={{ color: item.color }}>
                    {item.institution}
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-4">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                {item.location}
              </div>

              {/* Detail */}
              <p className="text-slate-400 text-sm leading-relaxed">{item.detail}</p>

              {/* Bottom accent line */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Languages card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 glass rounded-2xl p-6 border border-white/8"
        >
          <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
            <span>🌍</span> Languages
          </h3>
          <div className="flex flex-wrap gap-4">
            {[
              { lang: 'English', level: 'Fluent',       flag: '🇮🇪', pct: 90 },
              { lang: 'Arabic',  level: 'Native',       flag: '🇵🇸', pct: 100 },
            ].map(l => (
              <div key={l.lang} className="flex-1 min-w-40">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-white flex items-center gap-2">
                    <span>{l.flag}</span>{l.lang}
                  </span>
                  <span className="text-xs text-slate-400">{l.level}</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${l.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                    className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
