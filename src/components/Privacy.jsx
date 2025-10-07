import React from 'react';
import { motion } from 'framer-motion';

export default function Privacy() {
  return (
    <section id="privacy" className="py-20 bg-primary">
      <motion.div 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Sua <span className="text-accent">privacidade</span> é importante
          </motion.h2>
          <motion.p 
            className="text-xl text-accent/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Compromisso com a proteção dos seus dados
          </motion.p>
        </motion.div>

        <motion.div 
          className="bg-secondary/20 backdrop-blur-sm rounded-xl p-8 border border-secondary/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
        >
          <motion.div 
            className="space-y-6 text-white text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Coletamos apenas as informações estritamente necessárias para ativar seus alertas de preço e preferências de ofertas.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <strong>Nunca vendemos seus dados</strong> para terceiros. Sua informação é utilizada exclusivamente para personalizar sua experiência com o Looton.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Você tem controle total sobre suas notificações e pode ajustar suas preferências a qualquer momento nas configurações do app.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Utilizamos tecnologias de segurança padrão da indústria para proteger suas informações pessoais contra acesso não autorizado.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}