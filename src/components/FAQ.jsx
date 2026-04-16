import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp, stagger, viewportOnce } from '../animations'

const faqs = [
  {
    q: 'Qual é o pedido mínimo para começar?',
    a: 'O pedido mínimo é definido de acordo com o perfil e porte do distribuidor. Fale com nosso consultor e receba uma proposta adequada ao seu negócio.',
  },
  {
    q: 'Vocês atendem distribuidores em todo o Brasil?',
    a: 'Sim. Temos cobertura nacional com logística estruturada para entrega ágil em todo o território brasileiro.',
  },
  {
    q: 'O produto possui certificações?',
    a: 'Sim. Stevia Dul-C é 100% certificado e atende todos os requisitos regulatórios do mercado brasileiro. Documentação completa disponível sob solicitação.',
  },
  {
    q: 'Posso ter exclusividade de território?',
    a: 'Trabalhamos com modelos de distribuição exclusiva e não-exclusiva. Converse com nosso consultor para entender as opções disponíveis para a sua região.',
  },
]

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <motion.div
      className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 overflow-hidden"
      variants={fadeInUp}
      whileHover={{ borderColor: 'rgba(13,99,27,0.2)' }}
      transition={{ duration: 0.2 }}
    >
      <button
        className="w-full flex items-center justify-between p-6 text-left font-bold text-on-surface text-lg gap-4"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{faq.q}</span>
        <motion.span
          className="material-symbols-outlined text-primary flex-shrink-0"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          add
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-on-surface-variant leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-24 bg-surface-container-low px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
            Dúvidas Frequentes
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-on-background">
            Perguntas de distribuidores
          </h2>
        </motion.div>

        <motion.div
          className="space-y-3"
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
