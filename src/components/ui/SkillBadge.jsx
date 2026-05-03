import { motion } from 'framer-motion'

const proficiencyDots = { Beginner: 1, Intermediate: 2, Advanced: 3, Expert: 4 }

export default function SkillBadge({ skill, index }) {
  const dots = proficiencyDots[skill.proficiency] ?? 2

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="skill-badge group relative glass rounded-2xl p-5 border border-white/10
                 hover:border-white/20 transition-all duration-300 cursor-default flex flex-col gap-3"
    >
      {/* Accent left stripe */}
      <div
        className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
        style={{ backgroundColor: skill.color }}
      />

      {/* Skill name */}
      <span className="text-sm font-semibold text-white pl-3">{skill.name}</span>

      {/* Proficiency label + dots */}
      <div className="flex items-center justify-between pl-3">
        <span className="text-xs text-slate-500 font-medium">{skill.proficiency}</span>
        <div className="flex gap-1">
          {[1, 2, 3, 4].map(i => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{
                backgroundColor: i <= dots ? skill.color : 'rgba(255,255,255,0.1)',
                boxShadow: i <= dots ? `0 0 6px ${skill.color}80` : 'none',
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
