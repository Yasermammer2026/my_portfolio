import { motion } from 'framer-motion'

export default function TimelineItem({ item, index, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative flex gap-6 group"
    >
      {/* Timeline line & dot */}
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.15 }}
          className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
                     border border-white/10 glass group-hover:border-accent/40 transition-all duration-300"
          style={{ boxShadow: `0 0 20px ${item.color}30` }}
        >
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
        </motion.div>
        {!isLast && (
          <div className="timeline-line w-0.5 flex-1 mt-2 min-h-[40px] opacity-40" />
        )}
      </div>

      {/* Content */}
      <div className="pb-12 flex-1">
        <div className="glass rounded-2xl p-6 border border-white/8 hover:border-white/15
                        transition-all duration-300 group-hover:shadow-lg">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
            <div>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="font-medium" style={{ color: item.color }}>{item.company}</p>
              {item.type && (
                <p className="text-sm text-slate-500 italic">{item.type}</p>
              )}
            </div>
            <div className="text-right">
              <span className="text-sm font-medium text-slate-300 bg-white/5 px-3 py-1 rounded-lg">
                {item.period}
              </span>
              {item.location && (
                <p className="text-xs text-slate-500 mt-1">{item.location}</p>
              )}
            </div>
          </div>

          {/* Description */}
          <ul className="space-y-1.5 mb-4">
            {item.description.map((point, i) => (
              <li key={i} className="flex gap-2 text-sm text-slate-400 leading-relaxed">
                <span style={{ color: item.color }} className="mt-1.5 flex-shrink-0">▸</span>
                {point}
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {item.tags.map(tag => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 text-slate-400
                           border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
