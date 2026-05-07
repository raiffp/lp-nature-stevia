import { motion } from 'framer-motion'
import { track } from '@vercel/analytics'
import WAIcon from './WAIcon'
import { waUrl } from '../constants'

const sizes = {
  sm: 'px-4 py-2 text-xs gap-1.5 md:px-6 md:py-2.5 md:text-sm md:gap-2',
  md: 'px-5 py-2.5 text-sm gap-2 md:px-8 md:py-3.5 md:text-base',
  lg: 'px-6 py-3 text-sm gap-2 md:px-10 md:py-4 md:text-lg md:gap-3',
  xl: 'px-6 py-3 text-sm gap-2 md:px-12 md:py-5 md:text-xl md:gap-3',
}

const iconSizes = { sm: 'w-4 h-4', md: 'w-4 h-4', lg: 'w-5 h-5', xl: 'w-6 h-6' }

export default function WAButton({ msg, children, size = 'lg', className = '', variant = 'primary', label = 'botao' }) {
  const base =
    variant === 'primary'
      ? 'bg-gradient-to-br from-primary to-primary-container text-on-primary'
      : variant === 'white'
      ? 'bg-surface-container-lowest text-primary shadow-xl'
      : 'bg-surface-container-lowest text-primary'

  return (
    <motion.a
      href={waUrl(msg)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track('clique_whatsapp', { local: label })}
      className={`inline-flex items-center rounded-full font-semibold ${base} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.04, boxShadow: '0 16px 40px rgba(13,99,27,0.25)' }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    >
      <WAIcon className={`${iconSizes[size]} flex-shrink-0`} />
      {children}
    </motion.a>
  )
}
