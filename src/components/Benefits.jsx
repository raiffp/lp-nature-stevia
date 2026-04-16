import { motion } from 'framer-motion'
import { fadeInUp, stagger, viewportOnce } from '../animations'

const cards = [
  {
    icon: 'payments',
    title: 'Margem Competitiva',
    text: 'Modelos de parceria que garantem rentabilidade real para distribuidores e lojistas de qualquer porte.',
    bg: 'bg-secondary-container',
    iconColor: 'text-on-secondary-container',
  },
  {
    icon: 'warehouse',
    title: 'Estoque Garantido',
    text: 'Como maior importador do Brasil, garantimos disponibilidade contínua para não travar sua operação.',
    bg: 'bg-tertiary-fixed',
    iconColor: 'text-on-tertiary-fixed-variant',
  },
  {
    icon: 'verified',
    title: 'Qualidade Premium',
    text: '100% natural, sem amargor residual. Pureza que atende os consumidores mais exigentes e reduz devoluções.',
    bg: 'bg-secondary-container',
    iconColor: 'text-on-secondary-container',
  },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-surface px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="max-w-2xl mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
            Vantagens para Distribuidores
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-on-background mb-4">
            Por que distribuidores escolhem a Stevia Dul-C
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {/* Large hero card */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-3 bg-primary-container rounded-2xl p-10 relative overflow-hidden text-on-primary-container"
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-full bg-on-primary-container/20 flex items-center justify-center mb-6">
                <span
                  className="material-symbols-outlined text-on-primary-container"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  trending_up
                </span>
              </div>
              <h3 className="text-3xl font-extrabold mb-4">Alto Giro, Resultado Imediato</h3>
              <p className="text-on-primary-container/80 text-lg leading-relaxed max-w-lg">
                Stevia Dul-C é o adoçante natural mais buscado do mercado. Reconhecimento de marca consolidado garante recompra constante — menos esforço de venda, mais resultado no caixa.
              </p>
            </div>
            <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
              <span className="material-symbols-outlined" style={{ fontSize: '11rem' }}>show_chart</span>
            </div>
          </motion.div>

          {/* Smaller cards */}
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeInUp}
              className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm border border-outline-variant/10"
              whileHover={{ scale: 1.02, boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <motion.div
                className={`w-12 h-12 rounded-full ${card.bg} flex items-center justify-center mb-6`}
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                <span className={`material-symbols-outlined ${card.iconColor}`}>{card.icon}</span>
              </motion.div>
              <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
