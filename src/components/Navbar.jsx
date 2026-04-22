import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import WAButton from './WAButton'
import { WA_MSGS } from '../constants'
import logo from '../assets/logo.svg'

const links = [
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-50/90 backdrop-blur-xl shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <motion.img
          src={logo}
          alt="Stevia Dul-C"
          className="h-10 w-auto select-none"
          whileHover={{ scale: 1.02 }}
        />

        <div className="hidden md:flex items-center gap-8 font-headline font-bold text-sm tracking-tight">
          {links.map((l) => (
            <motion.a
              key={l.href}
              href={l.href}
              className="text-slate-600 hover:text-green-700 transition-colors"
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
            >
              {l.label}
            </motion.a>
          ))}
        </div>

        <WAButton msg={WA_MSGS.default} size="sm">
          Falar com Consultor
        </WAButton>
      </div>
    </motion.nav>
  )
}
