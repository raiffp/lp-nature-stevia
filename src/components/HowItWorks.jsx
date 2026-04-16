import { motion } from 'framer-motion'
import WAButton from './WAButton'
import { WA_MSGS } from '../constants'
import { fadeInUp, stagger, viewportOnce } from '../animations'

const steps = [
  {
    num: '01',
    icon: 'chat',
    title: 'Fale com um Consultor',
    text: 'Entre em contato via WhatsApp. Entendemos seu negócio e apresentamos as opções de parceria disponíveis.',
  },
  {
    num: '02',
    icon: 'description',
    title: 'Receba sua Proposta',
    text: 'Proposta comercial personalizada com condições, margens e plano de distribuição para o seu território.',
  },
  {
    num: '03',
    icon: 'local_shipping',
    title: 'Comece a Distribuir',
    text: 'Primeiro pedido processado, produto entregue. Portfólio com o maior giro do mercado natural.',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-surface px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="max-w-2xl mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
            Como Funciona
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-on-background mb-4">
            Comece a distribuir em 3 passos
          </h2>
          <p className="text-on-surface-variant text-lg">
            Processo simples, sem burocracia. Da conversa ao primeiro pedido em poucos dias.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {steps.map((step, i) => (
            <motion.div key={step.num} variants={fadeInUp} className="relative">
              {/* Big number background */}
              <span
                className="absolute -top-4 -left-2 font-headline font-black pointer-events-none select-none"
                style={{
                  fontSize: '6rem',
                  lineHeight: 1,
                  color: 'rgba(13,99,27,0.07)',
                }}
              >
                {step.num}
              </span>

              <div className="pt-10 pl-2">
                <motion.div
                  className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.15, rotate: -8 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                >
                  <span
                    className="material-symbols-outlined text-on-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {step.icon}
                  </span>
                </motion.div>

                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{step.text}</p>
              </div>

              {/* Connector line between steps */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-14 left-[calc(100%+1.5rem)] w-full h-px border-t-2 border-dashed border-outline-variant/30" />
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-14 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <WAButton msg={WA_MSGS.inicio} size="lg">
            Quero Ser Parceiro Agora
          </WAButton>
        </motion.div>
      </div>
    </section>
  )
}
