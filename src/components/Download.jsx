import React from 'react';
import { ArrowDown, Smartphone, Download as DownloadIcon } from 'lucide-react';
import { motion } from 'framer-motion';

// Variantes de animação para o Download
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
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function Download() {
  return (
    <section id="download" className="py-20 bg-gradient-to-br from-primary to-secondary">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={container}
      >
        <motion.div 
          className="text-center"
          variants={container}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            variants={item}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Baixe o <span className="text-accent">Looton</span> agora
          </motion.h2>
          <motion.p 
            className="text-xl text-accent/80 max-w-3xl mx-auto mb-12"
            variants={item}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Baixe a versão beta do Looton e comece a economizar tempo e dinheiro nas suas compras de jogos da Steam
          </motion.p>

          <motion.div 
            className="flex flex-col md:flex-row gap-8 justify-center items-center"
            variants={container}
          >
            <motion.div 
              className="bg-secondary/20 backdrop-blur-sm rounded-xl p-8 border border-secondary/30 max-w-md w-full"
              variants={item}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="w-16 h-16 text-accent mx-auto mb-6 flex items-center justify-center"
                animate={{ 
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                <Smartphone className="w-12 h-12" />
              </motion.div>
              <motion.h3 
                className="text-2xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Disponível para
              </motion.h3>
              <ul className="space-y-3 mb-6 text-accent/90">
                <motion.li 
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <span className="text-green-500">✓</span>
                  <span>Android - APK Beta (v1.2.0)</span>
                </motion.li>
                <motion.li 
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <span className="text-yellow-500">⚠</span>
                  <span>iOS (Sem data prevista)</span>
                </motion.li>
              </ul>
            </motion.div>

            <motion.div 
              className="max-w-md w-full"
              variants={item}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div 
                className="bg-primary/50 backdrop-blur-sm rounded-xl p-8 border border-secondary/30"
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <motion.h3 
                  className="text-2xl font-bold text-white mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Pronto para começar?
                </motion.h3>
                <motion.p 
                  className="text-accent/90 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Junte-se a milhares de gamers que já economizam tempo e dinheiro com o Looton.
                </motion.p>
                
                <motion.a 
                  href="/downloads/looton_beta_1.2.0.apk" 
                  download="looton_beta_1.2.0.apk"
                  className="w-full bg-accent text-primary font-bold py-4 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-accent/90 transition-colors block cursor-hover"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.98 }}
                >
                  <DownloadIcon className="w-5 h-5" />
                  Baixar APK Beta
                </motion.a>
                
                <motion.p 
                  className="text-sm text-accent/70 mt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  Versão 1.2.0 - APK Beta gratuita com todas as funcionalidades básicas
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-16 bg-secondary/10 backdrop-blur-sm rounded-xl p-8 border border-secondary/30 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <motion.h3 
              className="text-2xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              Frase do Looton
            </motion.h3>
            <motion.p 
              className="text-xl text-accent/90 italic text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              "Pare de caçar descontos. O Looton encontra por você."
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}