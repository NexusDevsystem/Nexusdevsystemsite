import React from 'react';
import { motion } from 'framer-motion';

// Variantes de animação para o News
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

export default function News() {
  const news = [
    {
      title: "Como Obter Acesso ao Looton",
      date: "5 de novembro de 2025",
      excerpt: "Saiba como obter acesso antecipado ao Looton na Google Play Store.",
      category: "Acesso"
    }
  ];

  return (
    <section id="news" className="py-20 bg-gradient-to-br from-primary via-secondary to-primary">
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
            Notícias
          </motion.h2>
          <motion.p 
            className="text-xl text-accent/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Fique por dentro das últimas notícias sobre o Looton
          </motion.p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          variants={container}
        >
          {news.map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-gradient-to-r from-secondary/30 to-accent/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-accent/20 shadow-2xl shadow-accent/10 hover:shadow-accent/20 transition-all duration-500"
              variants={item}
              whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-accent/40 text-accent text-sm font-medium mb-3 md:mb-0">
                    {item.category}
                  </span>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-accent/70 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span className="text-accent/80">{item.date}</span>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-start mb-6">
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <img 
                      src="/[CITYPNG.COM]HD Google Play PlayStore Logo Symbol PNG - 3000x3000.png" 
                      alt="Google Play Store" 
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-accent/90 text-lg leading-relaxed">{item.excerpt}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-accent/20">
                  <div></div>
                  <a href="/news/access-info" className="flex items-center text-accent hover:text-accent/80 font-medium">
                    <span>Saiba mais</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href="/news"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent to-accent/80 text-primary font-bold rounded-full hover:from-accent/90 hover:to-accent/70 transition-all duration-300 cursor-hover shadow-lg shadow-accent/30 hover:shadow-accent/50"
          >
            Ver Todas as Notícias
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}