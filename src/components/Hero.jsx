import { motion } from 'framer-motion'
import WAButton from './WAButton'
import { WA_MSGS } from '../constants'
import { fadeInUp, stagger } from '../animations'

const trustBadges = [
  'Alto giro comprovado',
  'Estoque garantido',
  'Suporte comercial dedicado',
]

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen flex items-start overflow-hidden px-5 md:px-8 lg:px-16 pt-28 lg:pt-36">

      {/* Vídeo de fundo — z-0 dentro do stacking context isolado da section */}
      <video
        src="/loop-stevia.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ backgroundColor: '#f4faff' }}
      />

      {/* Gradiente: forte na esquerda onde está o texto, transparente na direita */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, #f4faff 18%, rgba(244,250,255,0.65) 42%, rgba(244,250,255,0.15) 65%, rgba(244,250,255,0.02) 100%)',
        }}
      />
      {/* Gradiente vertical suave para baixo (reforça leitura em mobile) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none lg:hidden"
        style={{
          background: 'linear-gradient(to bottom, rgba(244,250,255,0.95) 0%, rgba(244,250,255,0.85) 70%, rgba(244,250,255,0.6) 100%)',
        }}
      />

      {/* Conteúdo */}
      <div className="max-w-7xl mx-auto w-full relative z-20 flex justify-center lg:justify-start">
        <motion.div
          className="max-w-2xl text-left"
          variants={stagger(0.1)}
          initial="hidden"
          animate="show"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block py-1 px-3 mb-4 rounded-lg bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest font-label"
          >
            Principal Importador de Stevia do Brasil
          </motion.span>

          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-2 mb-4 text-primary font-bold text-sm uppercase tracking-[0.2em] font-headline"
          >
            <span
              className="material-symbols-outlined text-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
            <span>100% Natural &amp; Certificado</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-extrabold tracking-tighter text-on-background leading-none mb-4 md:mb-6"
          >
            Adicione o Produto de Maior Giro do Mercado Natural ao Seu Portfólio
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-sm md:text-xl text-on-surface-variant font-body mb-5 md:mb-8 max-w-xl leading-relaxed"
          >
            Stevia Dul-C combina alta rotatividade e margem competitiva para distribuidores e lojas naturais. Resultado garantido desde o primeiro pedido.
          </motion.p>

          {/* Trust badges */}
          <motion.div variants={stagger(0.08)} className="flex flex-wrap gap-3 mb-6 md:mb-10">
            {trustBadges.map((badge) => (
              <motion.span
                key={badge}
                variants={fadeInUp}
                className="flex items-center gap-1.5 text-sm font-semibold text-on-surface-variant"
              >
                <span
                  className="material-symbols-outlined text-primary text-base"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                {badge}
              </motion.span>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
            <WAButton msg={WA_MSGS.default} size="lg">
              Falar com um Consultor
            </WAButton>
            <motion.button
              className="border border-outline-variant/30 text-on-surface px-6 py-3 md:px-10 md:py-4 rounded-full font-semibold text-sm md:text-lg"
              whileHover={{ backgroundColor: 'rgba(223,241,251,0.9)', scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              Solicitar Catálogo
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
