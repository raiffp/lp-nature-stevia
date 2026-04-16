import { motion } from 'framer-motion'
import { fadeInLeft, fadeInRight, fadeInUp, stagger, viewportOnce } from '../animations'
import { IMG_FIELD, IMG_LAB } from '../constants'

const highlights = [
  'Padrão Internacional de Pureza',
  'Logística Nacional Estruturada',
  'Baixíssima Taxa de Devolução',
]

export default function Proof() {
  return (
    <section className="py-14 md:py-24 bg-surface-container-low px-5 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
        {/* Images */}
        <motion.div
          className="relative"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              className="mt-12"
              whileHover={{ scale: 1.03, rotate: -1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <img
                alt="Plantação de Stevia Rebaudiana"
                className="rounded-xl shadow-lg w-full"
                src={IMG_FIELD}
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <img
                alt="Controle de Qualidade em Laboratório"
                className="rounded-xl shadow-lg w-full"
                src={IMG_LAB}
              />
            </motion.div>
          </div>
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-surface-container-high rounded-[4rem] rotate-6" />
        </motion.div>

        {/* Copy */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            Por que Stevia Dul-C?
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-on-background mb-5 md:mb-8 leading-tight">
            Pureza que se traduz em resultado no seu negócio.
          </h2>
          <div className="space-y-4 text-sm md:text-lg text-on-surface-variant font-body">
            <p>
              Nossa liderança não é fruto do acaso. É o resultado de um processo de extração proprietário que elimina o amargor residual, entregando o dulçor mais limpo da categoria.
            </p>
            <p>
              Para o distribuidor, isso significa baixa taxa de devolução e alta fidelidade do consumidor final. Somos o benchmark em pureza, com folhas selecionadas de plantios sustentáveis.
            </p>
            <motion.div
              className="pt-6 border-t border-outline-variant/20 space-y-4"
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              {highlights.map((h) => (
                <motion.div key={h} variants={fadeInUp} className="flex items-center gap-4">
                  <span
                    className="material-symbols-outlined text-primary flex-shrink-0"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    stars
                  </span>
                  <span className="font-bold text-on-surface">{h}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
