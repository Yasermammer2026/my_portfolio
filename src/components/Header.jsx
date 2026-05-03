import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact']

export default function Header() {
  const [scrolled, setScrolled]   = useState(false)
  const [active, setActive]       = useState('home')
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = document.querySelectorAll('section[id]')
      sections.forEach(sec => {
        const top = sec.offsetTop - 120
        if (window.scrollY >= top && window.scrollY < top + sec.offsetHeight)
          setActive(sec.id)
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 glass shadow-xl shadow-black/30' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-black gradient-text"
        >
          YA.
        </motion.a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link}`}
              className={`relative px-4 py-2 text-sm font-medium capitalize rounded-lg transition-colors duration-200
                ${active === link ? 'text-accent' : 'text-slate-400 hover:text-white'}`}
            >
              {active === link && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 bg-accent/10 rounded-lg border border-accent/20"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative">{link}</span>
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="mailto:mummery@tcd.ie"
          className="hidden md:block btn-primary text-sm"
        >
          Hire Me
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <motion.div animate={menuOpen ? 'open' : 'closed'} className="flex flex-col gap-1.5 w-6">
            <motion.span
              variants={{ open: { rotate: 45, y: 8 }, closed: { rotate: 0, y: 0 } }}
              className="block h-0.5 bg-current rounded-full"
            />
            <motion.span
              variants={{ open: { opacity: 0 }, closed: { opacity: 1 } }}
              className="block h-0.5 bg-current rounded-full"
            />
            <motion.span
              variants={{ open: { rotate: -45, y: -8 }, closed: { rotate: 0, y: 0 } }}
              className="block h-0.5 bg-current rounded-full"
            />
          </motion.div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMenuOpen(false)}
                  className={`py-2.5 px-4 rounded-lg capitalize font-medium transition-colors ${
                    active === link ? 'text-accent bg-accent/10' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
