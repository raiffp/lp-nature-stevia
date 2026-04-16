import { motion } from 'framer-motion'
import { fadeInUp, viewportOnce } from '../animations'

// SUBSTITUA pelos logos reais dos parceiros
// Exemplo: { src: '/logos/parceiro.png', alt: 'Nome do Parceiro' }
const logos = Array(5).fill(null)

export default function LogosBar() {
  return (
    <section className="py-12 bg-white border-y border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-8">
        <motion.p
          className="text-center text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          Distribuidores que confiam na Stevia Dul-C
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-35"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {logos.map((logo, i) =>
            logo ? (
              <img key={i} src={logo.src} alt={logo.alt} className="h-8 object-contain" />
            ) : (
              <div key={i} className="w-28 h-8 bg-outline-variant/40 rounded" />
            ),
          )}
        </motion.div>
      </div>
    </section>
  )
}
