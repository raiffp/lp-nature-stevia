import { motion } from 'framer-motion'
import WAButton from './WAButton'
import { WA_MSGS } from '../constants'
import { fadeInUp, viewportOnce } from '../animations'

export default function FinalCTA() {
  return (
    <section className="mx-4 md:mx-8 mb-14 md:mb-24">
      <motion.div
        className="max-w-7xl mx-auto rounded-[2rem] overflow-hidden relative bg-gradient-to-br from-primary via-primary-container to-tertiary p-8 md:p-12 lg:p-24 text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-on-primary-container mb-4 md:mb-6 leading-tight"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            Seu portfólio precisa desse produto.
          </motion.h2>

          <motion.p
            className="text-sm md:text-xl text-on-primary-container/80 mb-6 md:mb-10 font-body"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            Fale agora com um consultor e receba uma proposta personalizada para o seu negócio em até 24 horas.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <WAButton msg={WA_MSGS.proposta} size="xl" variant="white" label="final_cta">
              Falar com Consultor no WhatsApp
            </WAButton>
          </motion.div>

          <motion.p
            className="text-on-primary-container/40 text-sm mt-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            Resposta em até 24 horas úteis
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}
