import React from 'react';
import { motion } from 'framer-motion';

export default function NewIdentityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary text-white">
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-accent/40 text-accent text-sm font-medium mb-6">
              Atualização
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nova Identidade Visual do Looton
            </h1>
            <div className="flex items-center text-accent/80 mb-8">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span>16 de outubro de 2025</span>
            </div>
          </motion.div>

          <div className="flex justify-center mb-12">
            <img 
              src="/screenshots/icon.png" 
              alt="Novo ícone do Looton" 
              className="w-32 h-32 object-contain"
            />
          </div>

          <div className="prose prose-invert max-w-none text-accent/90 leading-relaxed mb-12">
            <p className="text-xl mb-6">
              Estamos empolgados em anunciar a nova identidade visual do Looton! 
              O novo ícone foi cuidadosamente projetado para representar nossa identidade e valores.
            </p>
            
            <p className="mb-6">
              O design estilizado em forma de 'L' simboliza o Looton com um estilo mais gamer, 
              enquanto as linhas que formam um 'X' fazem referência à empresa NexusDevSystem, 
              criadora do aplicativo. Esta atualização visual reflete nosso compromisso com a inovação 
              e a experiência do usuário.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Conceito do Design</h2>
            
            <p className="mb-6">
              O novo ícone combina elementos que representam tanto o nome do aplicativo quanto 
              a empresa por trás do projeto. O 'L' estilizado remete ao Looton com um estilo 
              visual mais gamer e moderno, enquanto o 'X' simboliza a NexusDevSystem, 
              criando uma identidade visual que representa a união do produto e da empresa.
            </p>
            
            <p className="mb-6">
              Este redesign faz parte de nosso contínuo esforço para melhorar a experiência 
              do usuário e manter uma identidade visual coesa e moderna. Acreditamos que 
              esta nova identidade visual trará uma percepção mais profissional e moderna 
              ao Looton, mantendo a essência do nosso propósito: ajudar gamers a economizar 
              tempo e dinheiro com ofertas de jogos.
            </p>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="/news" 
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-secondary to-secondary/80 text-white font-bold rounded-full hover:from-secondary/90 hover:to-secondary/70 transition-all duration-300 shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Ver Outras Notícias
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}