import { motion } from 'framer-motion'
import { fadeInUp, viewportOnce } from '../animations'
import { IMG_PRODUCT, YOUTUBE_ID } from '../constants'

export default function VideoSection() {
  return (
    <section className="py-24 bg-surface-container-low px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
            Conheça o Produto
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-on-background mb-4">
            O adoçante que o mercado natural estava esperando
          </h2>
          <p className="text-on-surface-variant text-lg">
            Veja como a Stevia Dul-C está transformando o portfólio de distribuidores em todo o Brasil.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl"
          style={{ aspectRatio: '16/9' }}
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          whileHover={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        >
          {YOUTUBE_ID ? (
            /* Vídeo real — substitua YOUTUBE_ID em constants.js */
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
              title="Stevia Dul-C"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            /* Placeholder até o vídeo estar disponível */
            <div className="relative w-full h-full bg-on-background flex items-center justify-center">
              <img
                src={IMG_PRODUCT}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-25"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 to-on-background/30" />
              <div className="relative z-10 flex flex-col items-center gap-4">
                <motion.div
                  className="w-20 h-20 rounded-full border-2 border-white/50 flex items-center justify-center bg-white/10 backdrop-blur-sm cursor-pointer"
                  whileHover={{ scale: 1.12, borderColor: 'rgba(255,255,255,0.9)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span
                    className="material-symbols-outlined text-white"
                    style={{ fontSize: '2.5rem', fontVariationSettings: "'FILL' 1" }}
                  >
                    play_arrow
                  </span>
                </motion.div>
                <p className="text-white/50 text-xs font-bold uppercase tracking-widest">
                  Vídeo em breve
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
