import React from 'react';
import { motion } from 'framer-motion';

export default function NewsDetailPage() {
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
              Acesso
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Como Obter Acesso ao Looton
            </h1>
            <div className="flex items-center text-accent/80 mb-8">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span>5 de novembro de 2025</span>
            </div>
          </motion.div>

          <div className="flex justify-center mb-12">
            <img 
              src="/[CITYPNG.COM]HD Google Play PlayStore Logo Symbol PNG - 3000x3000.png" 
              alt="Google Play Store" 
              className="w-32 h-32 object-contain"
            />
          </div>

          <div className="prose prose-invert max-w-none text-accent/90 leading-relaxed mb-12">
            <p className="text-xl mb-6">
              O Looton está atualmente em acesso antecipado na Google Play Store. 
              O procedimento é simples: envie-nos uma mensagem informando o e-mail cadastrado na Google Play 
              pelo Instagram (<a href="https://www.instagram.com/nexus.devsystem" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">@nexus.devsystem</a>) 
              ou pelo e-mail <a href="mailto:nexusdevsystem@gmail.com" className="text-accent hover:underline">nexusdevsystem@gmail.com</a>.
            </p>
            
            <p className="mb-6">
              Cadastraremos seu endereço e, assim, você terá acesso ao Looton, 
              poderá utilizar todas as funcionalidades e contribuirá para aprimorarmos o aplicativo 
              e avançarmos na liberação para o público geral.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Instruções Passo a Passo</h2>
            
            <ol className="list-decimal list-inside space-y-2 mb-6">
              <li>Abra o aplicativo da Google Play Store no seu dispositivo Android</li>
              <li>Navegue até as configurações e verifique o e-mail principal associado à sua conta</li>
              <li>Envie este e-mail para nós via Instagram ou e-mail</li>
              <li>Nossa equipe irá processar seu pedido e enviar um link de acesso antecipado</li>
              <li>Siga as instruções para instalar o Looton na sua Play Store</li>
            </ol>
            
            <p className="mb-6">
              Após o cadastro, o acesso ao Looton será liberado, permitindo o uso completo do app 
              e a colaboração na sua melhoria. Basta encaminhar o e-mail vinculado à Google Play 
              por Instagram ou para nosso e-mail oficial.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.instagram.com/nexus.devsystem" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold rounded-lg hover:opacity-90 transition-opacity"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.5v15m7.5-7.5h-15"></path>
              </svg>
              Enviar via Instagram
            </a>
            <a 
              href="mailto:nexusdevsystem@gmail.com" 
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-accent to-accent/80 text-primary font-bold rounded-lg hover:from-accent/90 hover:to-accent/70 transition-all"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Enviar via Email
            </a>
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