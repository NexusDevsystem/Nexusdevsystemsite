import React from 'react';
import { motion } from 'framer-motion';

// Variantes de animação para o NewsPage
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
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function NewsPage() {
  const news = [
    {
      id: 1,
      title: "Como Obter Acesso ao Looton",
      date: "5 de novembro de 2025",
      excerpt: "Saiba como obter acesso antecipado ao Looton na Google Play Store.",
      image: "/screenshots/icon.png",
      category: "Acesso",
      content: "O Looton está atualmente em acesso antecipado na Google Play Store. O procedimento é simples: envie-nos uma mensagem informando o e-mail cadastrado na Google Play pelo Instagram (@nexus.devsystem) ou pelo e-mail nexusdevsystem@gmail.com. Cadastraremos seu endereço e, assim, você terá acesso ao Looton, poderá utilizar todas as funcionalidades e contribuirá para aprimorarmos o aplicativo e avançarmos na liberação para o público geral."
    },
    {
      id: 2,
      title: "Nova Identidade Visual do Looton",
      date: "16 de outubro de 2025",
      excerpt: "Descubra o novo ícone do Looton com design gamer e referência à NexusDevSystem.",
      image: "/screenshots/icon.png",
      category: "Atualização",
      content: "Estamos empolgados em anunciar a nova identidade visual do Looton! O novo ícone foi cuidadosamente projetado para representar nossa identidade e valores. O design estilizado em forma de 'L' simboliza o Looton com um estilo mais gamer, enquanto as linhas que formam um 'X' fazem referência à empresa NexusDevSystem, criadora do aplicativo. Esta atualização visual reflete nosso compromisso com a inovação e a experiência do usuário."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary text-white">
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Notícias
            </motion.h1>
            <motion.p 
              className="text-xl text-accent/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Fique por dentro de todas as notícias do Looton
            </motion.p>
          </motion.div>

          {news.map((item) => (
            <a 
              key={item.id} 
              href={item.id === 1 ? "/news/access-info" : "/news/new-identity"}
              className="block"
            >
              <motion.div 
                className="bg-gradient-to-r from-secondary/30 to-accent/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-accent/20 shadow-2xl shadow-accent/10 mb-12 hover:shadow-accent/30 transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                    <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-accent/40 text-accent text-sm font-medium mb-4 md:mb-0">
                      {item.category}
                    </span>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-accent/70 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <span className="text-accent/80">{item.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-start mb-8">
                    <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                      <img 
                        src={item.id === 1 ? "/[CITYPNG.COM]HD Google Play PlayStore Logo Symbol PNG - 3000x3000.png" : "/screenshots/icon.png"} 
                        alt={item.title} 
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-4">{item.title}</h2>
                      <p className="text-accent/90 text-xl leading-relaxed mb-6">{item.excerpt}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-8 border-t border-accent/20">
                    <div></div>
                    <div className="flex items-center text-accent font-medium">
                      <span>Ler mais</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </a>
          ))}

          <div className="text-center">
            <a 
              href="/" 
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent to-accent/80 text-primary font-bold rounded-full hover:from-accent/90 hover:to-accent/70 transition-all duration-300 shadow-lg shadow-accent/30"
            >
              Voltar para o início
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}