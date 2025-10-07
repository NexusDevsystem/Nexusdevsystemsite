import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-secondary py-12">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <motion.h3 
              className="text-xl font-bold text-white mb-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Nexus Devsystem
            </motion.h3>
            <motion.p 
              className="text-accent/80"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Desenvolvedora do Looton - Radar de Ofertas Gamer
            </motion.p>
          </div>
          
          <motion.div 
            className="flex flex-col items-center md:items-end"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="mailto:nexusdevsystem@gmail.com" className="text-accent/80 mb-1 cursor-hover">nexusdevsystem@gmail.com</a>
            <p className="text-accent/80 mb-2">Soluções tecnológicas inovadoras</p>
            <p className="text-accent/60">
              © {new Date().getFullYear()} Nexus Devsystem - Todos os direitos reservados
            </p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}