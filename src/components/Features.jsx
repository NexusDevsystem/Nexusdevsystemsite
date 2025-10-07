import React from 'react';
import { motion } from 'framer-motion';

// Variantes de animação para o Features
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export default function Features() {
  const features = [
    {
      title: "Centralização de Ofertas",
      description: "Agrega ofertas de games e DLCs para PC da Steam em um só lugar",
      icon: "🎮"
    },
    {
      title: "Filtros Inteligentes",
      description: "Filtra e organiza por gênero, faixa de preço, nota da comunidade e tipo de oferta",
      icon: "🔍"
    },
    {
      title: "Notificações Inteligentes",
      description: "Avisa quando o preço cai ou quando surge uma promoção dentro do seu alvo",
      icon: "🔔"
    },
    {
      title: "Favoritos & Listas",
      description: "Crie listas para acompanhar quedas de preço de seus jogos favoritos",
      icon: "❤️"
    },
    {
      title: "Histórico de Preços",
      description: "Acompanhe a evolução de preços e validade das ofertas para evitar ciladas",
      icon: "📊"
    },
    {
      title: "Lojas Verificadas",
      description: "Curadoria de lojas confiáveis para reduzir spam e oferecer segurança",
      icon: "✅"
    }
  ];

  return (
    <section id="features" className="py-20 bg-primary">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={container}
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
            O que o <span className="text-accent">Looton</span> faz por você
          </motion.h2>
          <motion.p 
            className="text-xl text-accent/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Um conjunto de recursos projetados para tornar sua busca por ofertas mais eficiente
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={container}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-secondary/20 backdrop-blur-sm rounded-xl p-8 border border-secondary/30 hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105"
              variants={item}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="text-4xl mb-6"
                whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
              >
                {feature.icon}
              </motion.div>
              <motion.h3 
                className="text-2xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {feature.title}
              </motion.h3>
              <motion.p 
                className="text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}