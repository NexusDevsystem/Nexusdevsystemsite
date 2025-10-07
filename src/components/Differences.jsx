import React from 'react';
import { motion } from 'framer-motion';

// Variantes de animação para o Differences
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
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Differences() {
  const differences = [
    {
      title: "Foco em Qualidade",
      description: "Curadoria rigorosa e sinalização de lojas confiáveis para evitar fraudes",
      icon: "✅"
    },
    {
      title: "Alertas Inteligentes",
      description: "Notificações relevantes que evitam spam e economizam seu tempo",
      icon: "🎯"
    },
    {
      title: "Interface Limpa",
      description: "Design otimizado com dark mode nativo para melhor experiência visual",
      icon: "🎨"
    },
    {
      title: "Sem Pegadinhas",
      description: "Não vendemos nada dentro do app; apenas redirecionamos para as lojas oficiais",
      icon: "🛡️"
    },
    {
      title: "Privacidade Respeitada",
      description: "Coletamos apenas o necessário e nunca vendemos seus dados",
      icon: "🔒"
    },
    {
      title: "Monitoramento Contínuo",
      description: "Rastreamento 24/7 de preços e promoções nas principais lojas",
      icon: "🔄"
    }
  ];

  return (
    <section id="differences" className="py-20 bg-gradient-to-br from-secondary to-primary">
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
            Por que escolher o <span className="text-accent">Looton</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-accent/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Diferenciais que fazem do Looton a melhor ferramenta para encontrar ofertas gamers
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
        >
          {differences.map((diff, index) => (
            <motion.div 
              key={index} 
              className="bg-primary/50 backdrop-blur-sm rounded-xl p-8 border border-secondary/30 hover:border-accent/50 transition-all duration-300"
              variants={item}
              whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="text-3xl mb-4"
                whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
              >
                {diff.icon}
              </motion.div>
              <motion.h3 
                className="text-xl font-bold text-white mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {diff.title}
              </motion.h3>
              <motion.p 
                className="text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                {diff.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}