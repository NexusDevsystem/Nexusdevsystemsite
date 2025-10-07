import React from 'react';
import { motion } from 'framer-motion';

// Variante de animação padrão para elementos que entram da esquerda
export const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

// Variante de animação padrão para elementos que entram da direita
export const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

// Variante de animação padrão para elementos que entram de baixo
export const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// Variante de animação para containers com stagger
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Variante de animação para itens individuais
export const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

// Componente de animação genérico
export const AnimatedElement = ({ children, variant, delay = 0, duration = 0.6 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variant}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

// Componente de animação para containers com stagger
export const AnimatedList = ({ children, className = "" }) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
};

// Componente de animação para itens individuais de listas
export const AnimatedListItem = ({ children, index = 0 }) => {
  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.5 } }
  };

  return (
    <motion.div variants={itemVariant} className="w-full">
      {children}
    </motion.div>
  );
};