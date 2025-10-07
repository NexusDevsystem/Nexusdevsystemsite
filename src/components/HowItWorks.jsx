import React from 'react';
import { motion } from 'framer-motion';

// Variantes de animação para o HowItWorks
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

export default function HowItWorks() {
  const steps = [
    {
      step: 1,
      title: "Escolha suas categorias",
      description: "Selecione as categorias de jogos para PC que você mais curte na Steam.",
      icon: "🎮"
    },
    {
      step: 2,
      title: "Defina seus critérios",
      description: "Configure alertas de preço e use os filtros para encontrar exatamente o que você procura.",
      icon: "⚙️"
    },
    {
      step: 3,
      title: "Receba notificações",
      description: "Quando uma oferta bater no seu critério, você recebe uma notificação com o link direto.",
      icon: "🔔"
    },
    {
      step: 4,
      title: "Aproveite as ofertas",
      description: "Abra a oferta, confira loja, preço, prazo e reputação, e clique no link para comprar direto na Steam.",
      icon: "✅"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
      
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
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
            Como o <span className="text-accent">Looton</span> funciona
          </motion.h2>
          <motion.p 
            className="text-xl text-accent/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Um processo simples que te poupa horas de busca por promoções espalhadas
          </motion.p>
        </motion.div>

        
        <div className="relative">
          {/* Linha do tempo */}\n          <div className="absolute left-1/2 transform -translate-x-1/2 top-24 h-[calc(100%-4rem)] w-1 bg-gradient-to-b from-accent to-transparent hidden md:block z-0"></div>
          
          <motion.div 
            className="space-y-12 md:space-y-0 relative z-10"
            variants={container}
          >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
              variants={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="bg-secondary/20 backdrop-blur-sm rounded-xl p-8 border border-secondary/30">
                  <div className="flex items-center gap-4">
                    <div className="bg-accent text-primary font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center">
                      {step.step}
                    </div>
                    <motion.h3 
                      className="text-2xl font-bold text-white"
                      whileHover={{ x: 5 }}
                    >
                      {step.title}
                    </motion.h3>
                  </div>
                  <motion.p 
                    className="mt-4 text-white text-lg"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    {step.description}
                  </motion.p>
                </div>
              </motion.div>
              
              <motion.div 
                className="md:w-1/6 flex justify-center relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-2xl border-4 border-accent z-10">
                  {step.icon}
                </div>
              </motion.div>
              
              <div className="md:w-1/2"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
    </section>
  );
}