import { motion } from 'framer-motion'
import WAButton from './WAButton'
import { WA_MSGS } from '../constants'
import { fadeInLeft, fadeInRight, fadeInUp, stagger, viewportOnce } from '../animations'

const pains = [
  'Fornecedores com estoque instável que travam sua operação',
  'Produtos de baixo giro consumindo capital de giro e espaço de prateleira',
  'Margem comprimida sem suporte ou parceria real do fornecedor',
  'Consumidores pedindo Stevia e você sem o produto certo para oferecer',
]

const solutions = [
  'Alto giro — o produto não fica parado na prateleira',
  'Margem competitiva com modelos de parceria flexíveis',
  'Estoque garantido — somos o maior importador do Brasil',
  'Marca reconhecida que os consumidores já procuram ativamente',
]

export default function PainSolution() {
  return (
    <section className="py-14 md:py-24 bg-surface-container-low px-5 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
        {/* Pain */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 block">
            O Problema
          </span>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-on-background mb-5 md:mb-8 leading-tight">
            Produtos parados são dinheiro parado.
          </h2>
          <motion.div className="space-y-5" variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={viewportOnce}>
            {pains.map((p) => (
              <motion.div key={p} variants={fadeInUp} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-error mt-0.5 flex-shrink-0">cancel</span>
                <p className="text-on-surface-variant">{p}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Solution */}
        <motion.div
          className="bg-surface-container-lowest rounded-2xl p-6 md:p-10 shadow-sm border border-outline-variant/15"
          variants={fadeInRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            A Solução
          </span>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-on-background mb-5 md:mb-8 leading-tight">
            O produto que trabalha por você.
          </h2>
          <motion.div className="space-y-5" variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={viewportOnce}>
            {solutions.map((s) => (
              <motion.div key={s} variants={fadeInUp} className="flex items-start gap-3">
                <span
                  className="material-symbols-outlined text-primary mt-0.5 flex-shrink-0"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <p className="text-on-surface-variant">{s}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-8">
            <WAButton msg={WA_MSGS.parceiro} size="md">
              Quero Ser Parceiro
            </WAButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
