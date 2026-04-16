import { motion } from 'framer-motion'
import { fadeInUp, stagger, viewportOnce } from '../animations'

// SUBSTITUA pelos depoimentos reais quando disponíveis
const testimonials = [
  { quote: null, name: null, company: null, city: null },
  { quote: null, name: null, company: null, city: null },
  { quote: null, name: null, company: null, city: null },
]

function Stars() {
  return (
    <div className="flex gap-1 mb-5">
      {Array(5)
        .fill(null)
        .map((_, i) => (
          <span
            key={i}
            className="material-symbols-outlined text-base"
            style={{ color: '#f59e0b', fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
        ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-14 md:py-24 bg-surface px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-8 md:mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
            Parceiros
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-on-background">
            O que dizem nossos distribuidores
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-surface-container-lowest rounded-2xl p-5 md:p-8 shadow-sm border border-outline-variant/10"
              whileHover={{ scale: 1.02, boxShadow: '0 8px 32px rgba(0,0,0,0.07)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <Stars />
              <p className="text-on-surface-variant leading-relaxed mb-6 italic">
                {t.quote ?? '"[Depoimento em breve]"'}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-on-secondary-container text-sm">
                    person
                  </span>
                </div>
                <div>
                  <div className="font-bold text-on-surface text-sm">
                    {t.name ?? '[Nome do Distribuidor]'}
                  </div>
                  <div className="text-xs text-on-surface-variant">
                    {t.company && t.city ? `${t.company} · ${t.city}` : '[Empresa · Cidade]'}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
