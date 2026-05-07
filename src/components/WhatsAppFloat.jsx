import { motion } from 'framer-motion'
import { track } from '@vercel/analytics'
import WAIcon from './WAIcon'
import { waUrl, WA_MSGS } from '../constants'

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center">
      {/* Pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
      />

      <motion.a
        href={waUrl(WA_MSGS.float)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          track('clique_whatsapp', { local: 'float' })
          window.gtag_report_conversion()
        }}
        className="relative flex items-center gap-3 bg-[#25D366] text-white pl-4 pr-5 py-4 rounded-full shadow-2xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 300, damping: 18 }}
        whileHover={{ scale: 1.07, boxShadow: '0 16px 40px rgba(37,211,102,0.4)' }}
        whileTap={{ scale: 0.95 }}
      >
        <WAIcon className="w-6 h-6 flex-shrink-0" />
        <span className="font-semibold text-sm">Falar com Consultor</span>
      </motion.a>
    </div>
  )
}
