import { experience } from '../data/portfolio'
import SectionHeading from './ui/SectionHeading'
import TimelineItem from './ui/TimelineItem'

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="orb w-80 h-80 bottom-0 right-0 bg-accent-2/8" />

      <div className="max-w-4xl mx-auto">
        <SectionHeading
          label="My Journey"
          title="Work"
          highlight="Experience"
          subtitle="Where I've contributed and grown"
        />

        <div>
          {experience.map((item, i) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={i}
              isLast={i === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
