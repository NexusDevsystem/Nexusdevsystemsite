import React from 'react';
import { motion } from 'framer-motion';

// Variantes de animação para o ForWhom
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

export default function ForWhom() {
  const audiences = [
    {
      title: "Gamers de PC",
      description: "Quem quer pagar menos nos jogos da Steam sem ficar caçando promoções em mil lugares diferentes",
      icon: "🎮"
    },
    {
      title: "Entusiastas de PC",
      description: "Quem monta ou atualiza PCs e acompanha quedas de preço em hardware",
      icon: "💻"
    },
    {
      title: "Criadores de Conteúdo",
      description: "Quem precisa achar ofertas rapidamente para compartilhar com sua audiência",
      icon: "📱"
    }
  ];

  return (
    <section id="for-whom" className="py-20 bg-primary">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={container}
      >
        <motion.div 
          className="text-center mb-16"
          variants={item}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Para quem é o <span className="text-accent">Looton</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-accent/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Feito para quem valoriza tempo e quer aproveitar as melhores ofertas sem complicações
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
        >
          {audiences.map((audience, index) => (
            <motion.div 
              key={index} 
              className="bg-secondary/20 backdrop-blur-sm rounded-xl p-8 border border-secondary/30 text-center hover:border-accent/50 transition-all duration-300"
              variants={item}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="text-5xl mb-6 flex justify-center"
                whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
              >
                {audience.icon}
              </motion.div>
              <motion.h3 
                className="text-2xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {audience.title}
              </motion.h3>
              <motion.p 
                className="text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                {audience.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}