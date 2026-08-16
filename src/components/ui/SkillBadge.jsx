import { motion } from 'framer-motion'

export default function SkillBadge({ skill, index }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      whileHover={{ y: -2, transition: { duration: 0.15 } }}
      title={skill.proficiency}
      className="skill-badge group inline-flex items-center gap-2 px-3.5 py-2 rounded-full glass
                 border border-white/10 hover:border-white/25 transition-all duration-300 cursor-default"
    >
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: skill.color, boxShadow: `0 0 6px ${skill.color}80` }}
      />
      <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
        {skill.name}
      </span>
    </motion.span>
  )
}
