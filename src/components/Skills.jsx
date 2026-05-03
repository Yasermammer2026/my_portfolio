import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'
import SectionHeading from './ui/SectionHeading'
import SkillBadge from './ui/SkillBadge'

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="orb w-72 h-72 bottom-0 left-0 bg-accent/8" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="What I Know"
          title="My"
          highlight="Skills"
          subtitle="Technologies and tools I work with"
        />

        <div className="space-y-12">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="text-lg font-bold text-white">{group.category}</h3>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* Skill grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {group.items.map((skill, si) => (
                  <SkillBadge
                    key={skill.name}
                    skill={skill}
                    index={gi * 5 + si}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra tech tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 glass rounded-2xl p-8 border border-white/8"
        >
          <p className="text-center text-sm text-slate-500 mb-5 uppercase tracking-widest font-medium">
            Also familiar with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['OOP', 'Data Structures', 'Algorithms', 'Linux', 'Bash', 'VS Code', 'Postman', 'Docker basics'].map(t => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-lg glass text-sm text-slate-400 border border-white/10
                           hover:text-white hover:border-accent/30 transition-all cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
