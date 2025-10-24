import React from 'react';
import { motion } from 'framer-motion';

// Variantes de animação para o Roadmap
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

export default function Roadmap() {
  const updates = [
    {
      version: "v1.3.1 (Última Versão)",
      date: "24 de outubro de 2025",
      type: "Lançado",
      items: [
        "Novidade: Implementação do sistema de monitoramento com opções de notificação por promoções ou preço específico",
        "Novidade: Integração da loja Epic Games com seção dedicada a jogos gratuitos da semana e melhores ofertas",
        "Novidade: Atualização do layout com imagens de jogos ampliadas e funcionalidade de zoom ao clicar",
        "Novidade: Aprimoramento do botão de redirecionamento para a página do jogo na loja com design mais visível e intuitivo",
        "Otimização: Melhoria significativa no tempo de carregamento da aba hardware",
        "Otimização: Aumento na estabilidade geral do aplicativo",
        "Aprimoramento na experiência do usuário com navegação mais intuitiva"
      ],
      status: "completed"
    },
    {
      version: "v1.2.0",
      date: "5 de outubro de 2025",
      type: "Lançado",
      items: [
        "Otimização: Remoção da tela de abertura e estados de carregamento para inicialização mais rápida do aplicativo",
        "Novidade: Implementação da funcionalidade de inicialização direta do aplicativo",
        "Novidade: Adição de indicadores de preço para melhor acompanhamento de preços",
        "Otimização: Atualização das imagens do aplicativo e da tela de abertura"
      ],
      status: "completed"
    },
    {
      version: "v1.1.0",
      date: "5 de outubro de 2025",
      type: "Lançado",
      items: [
        "Novidade: Introdução de indicadores de preço para visualização de tendências",
        "Otimização: Atualização do ícone do aplicativo e da tela de abertura"
      ],
      status: "completed"
    },
    {
      version: "v1.0.0",
      date: "4 de outubro de 2025",
      type: "Lançado",
      items: [
        "Implementação da estrutura completa com backend e aplicativo móvel",
        "Funcionalidade de rastreamento de ofertas de jogos",
        "Capacidade de pesquisa avançada de jogos",
        "Sistema de favoritos e listas personalizadas para usuários",
        "Sistema de alerta de preços",
        "Suporte para múltiplas lojas de jogos (Steam, com Epic Games temporariamente desativado para futuras integrações)"
      ],
      status: "completed"
    }
  ];

  return (
    <section id="roadmap" className="py-20 bg-primary">
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
            Atualizações e <span className="text-accent">Patch Notes</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-accent/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Acompanhe todas as atualizações e melhorias do Looton
          </motion.p>
        </motion.div>

        <motion.div 
          className="space-y-12"
          variants={container}
        >
          {updates.map((update, index) => (
            <motion.div 
              key={index} 
              className={`p-6 rounded-xl border ${
                update.status === 'completed' ? 'border-green-500/30 bg-green-500/5' :
                update.status === 'upcoming' ? 'border-yellow-500/30 bg-yellow-500/5' :
                'border-accent/30 bg-secondary/10'
              }`}
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="flex flex-col md:flex-row md:items-center justify-between mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div>
                  <motion.h3 
                    className="text-xl font-bold text-white"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    {update.version}
                  </motion.h3>
                  <motion.p 
                    className="text-accent/70"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    {update.date}
                  </motion.p>
                </div>
                <motion.span 
                  className={`inline-block mt-2 md:mt-0 px-3 py-1 rounded-full ${
                    update.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                    update.status === 'upcoming' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-accent/20 text-accent'
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  {update.type}
                </motion.span>
              </motion.div>
              
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                {update.items.map((item, idx) => {
                  const isNovidade = item.startsWith('Novidade:');
                  const isOtimizacao = item.startsWith('Otimização:');
                  return (
                    <motion.div 
                      key={idx} 
                      className={`flex items-start gap-3 p-3 rounded-lg ${
                        isNovidade ? 'bg-blue-500/10 border border-blue-500/30' : 
                        isOtimizacao ? 'bg-green-500/10 border border-green-500/30' : 
                        'bg-secondary/10'
                      }`}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
                    >
                      <span className={`mt-1 font-semibold ${
                        isNovidade ? 'text-blue-400' : 
                        isOtimizacao ? 'text-green-400' : 
                        'text-accent'
                      }`}>
                        {isNovidade ? '✨ Novidade:' : isOtimizacao ? '⚙️ Otimização:' : '•'}
                      </span>
                      <span className="text-white">
                        {isNovidade || isOtimizacao ? item.split(': ')[1] : item}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.p 
            className="text-accent/70 italic"
            whileHover={{ scale: 1.05 }}
          >
            Tem alguma sugestão? Envie para nosso e-mail: nexusdevsystem@gmail.com
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}