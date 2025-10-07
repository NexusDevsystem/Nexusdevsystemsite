import React from 'react';
import { motion } from 'framer-motion';

// Variantes de animação para o About
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.7 }
  }
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-primary to-secondary">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={container}
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            variants={item}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Sobre o <span className="text-accent">Looton</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-accent/90 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              O Looton nasceu da frustração de ficar procurando promoções de jogos da Steam em diversos lugares diferentes, perdendo as melhores ofertas por falta de tempo ou informação.
            </motion.p>
            <motion.p 
              className="text-lg text-accent/90 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Nossa missão é unificar todas as promoções reais de jogos e DLCs para PC da Steam em um só lugar, economizando seu tempo e te ajudando a economizar dinheiro.
            </motion.p>
            <motion.p 
              className="text-lg text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Com tecnologia avançada de monitoramento e curadoria manual, garantimos que você só receba notificações sobre promoções reais e confiáveis.
            </motion.p>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            variants={item}
          >
            <motion.div 
              className="bg-secondary/20 backdrop-blur-sm rounded-xl p-8 border border-secondary/30 w-full max-w-md"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-center">
                <motion.img 
                  src="/screenshots/icon.png" 
                  alt="Ícone do Looton" 
                  className="w-24 h-24 mx-auto mb-6 rounded-xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                />
                <motion.h3 
                  className="text-2xl font-bold text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  O radar definitivo
                </motion.h3>
                <motion.p 
                  className="text-accent/90"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  Para gamers que valorizam tempo e dinheiro
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}