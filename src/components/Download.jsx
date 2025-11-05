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
            Acesse o <span className="text-accent">Looton</span> na Play Store
          </motion.h2>
          <motion.p 
            className="text-xl text-accent/80 max-w-3xl mx-auto mb-12"
            variants={item}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            O app está atualmente em acesso antecipado na Google Play Store. Para obter acesso, envie seu email cadastrado na Google Play para nosso Instagram ou via email.
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
                Acesso Antecipado
              </motion.h3>
              <div className="flex justify-center mb-4">
                <motion.img 
                  src="/screenshots/icon.png" 
                  alt="Ícone do Looton" 
                  className="w-16 h-16 rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                />
              </div>
              <ul className="space-y-3 mb-6 text-accent/90">
                <motion.li 
                  className="flex items-center gap-2 justify-center"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <span className="text-green-500 text-2xl">✓</span>
                  <span className="text-xl">Google Play Store</span>
                </motion.li>
                <motion.li 
                  className="flex items-center gap-2 justify-center"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <span className="text-yellow-500 text-2xl">⚠</span>
                  <span className="text-xl">Acesso Antecipado</span>
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
                  Obtenha acesso antecipado
                </motion.h3>
                <motion.p 
                  className="text-accent/90 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Envie seu email cadastrado na Google Play para nosso Instagram ou via email para obter acesso ao Looton.
                </motion.p>
                
                <motion.div className="space-y-4">
                  <motion.a 
                    href="https://www.instagram.com/nexus.devsystem" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-6 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-opacity block cursor-hover"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>@nexus.devsystem</span>
                  </motion.a>
                  
                  <motion.a 
                    href="mailto:nexusdevsystem@gmail.com" 
                    className="w-full bg-accent text-primary font-bold py-4 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-accent/90 transition-colors block cursor-hover"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>nexusdevsystem@gmail.com</span>
                  </motion.a>
                </motion.div>
                
                <motion.p 
                  className="text-sm text-accent/70 mt-4 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  Após receber acesso, você poderá baixar o app na Google Play Store
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-16 bg-secondary/10 backdrop-blur-sm rounded-xl p-8 border border-secondary/30 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <motion.h3 
              className="text-2xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              Como obter acesso?
            </motion.h3>
            <motion.p 
              className="text-xl text-accent/90 italic text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              Envie seu email da Google Play para nosso Instagram ou email e você receberá acesso antecipado ao Looton.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}