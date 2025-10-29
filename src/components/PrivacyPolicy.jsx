import React from 'react';
import { motion } from 'framer-motion';

// Variantes de animação para o PrivacyPolicy
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

export default function PrivacyPolicy() {
  return (
    <section id="privacy-policy" className="py-20 bg-primary min-h-screen">
      <motion.div 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={container}
      >
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            variants={item}
          >
            Política de <span className="text-accent">Privacidade</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-accent/80"
            variants={item}
          >
            Informações sobre como coletamos, usamos e protegemos seus dados
          </motion.p>
        </motion.div>

        <motion.div 
          className="bg-secondary/20 backdrop-blur-sm rounded-xl p-8 border border-secondary/30 text-white"
          variants={container}
        >
          <motion.div className="space-y-8" variants={container}>
            <motion.div variants={item}>
              <h2 className="text-2xl font-bold text-accent mb-4">1. Informações que Coletamos</h2>
              <p className="mb-4">
                Coletamos apenas as informações estritamente necessárias para ativar seus alertas de preço e preferências de ofertas no Looton. Isso pode incluir:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Dados de cadastro: nome, email e informações de perfil</li>
                <li>Preferências de notificação: jogos, faixas de preço e critérios de alerta</li>
                <li>Dados de uso: como você interage com o aplicativo e quais ofertas visualiza</li>
                <li>Informações técnicas: tipo de dispositivo, sistema operacional e configurações</li>
              </ul>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-2xl font-bold text-accent mb-4">2. Como Usamos Suas Informações</h2>
              <p className="mb-4">
                Utilizamos suas informações para:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Personalizar sua experiência com o Looton</li>
                <li>Ativar alertas de preço e promoções com base em suas preferências</li>
                <li>Enviar notificações relevantes sobre ofertas que possam interessá-lo</li>
                <li>Melhorar os recursos e funcionalidades do aplicativo</li>
                <li>Garantir a segurança e integridade do serviço</li>
              </ul>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-2xl font-bold text-accent mb-4">3. Compartilhamento de Dados</h2>
              <p className="mb-4">
                <strong>Nunca vendemos seus dados</strong> para terceiros. Sua informação é utilizada exclusivamente para personalizar sua experiência com o Looton. Podemos compartilhar seus dados apenas em situações específicas:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Com provedores de serviços terceirizados que nos ajudam a operar o aplicativo</li>
                <li>Quando exigido por lei ou para proteger nossos direitos legais</li>
                <li>Com seu consentimento explícito</li>
              </ul>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-2xl font-bold text-accent mb-4">4. Segurança dos Dados</h2>
              <p className="mb-4">
                Utilizamos tecnologias de segurança padrão da indústria para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui criptografia e práticas de segurança adequadas para manter a confidencialidade dos seus dados.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-2xl font-bold text-accent mb-4">5. Seus Direitos</h2>
              <p className="mb-4">
                Você tem o direito de:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Acessar as informações que temos sobre você</li>
                <li>Corrigir ou atualizar dados pessoais imprecisos</li>
                <li>Excluir suas informações pessoais do nosso sistema</li>
                <li>Revogar o consentimento para o tratamento de dados pessoais</li>
                <li>Limitar ou opor-se ao tratamento de seus dados</li>
                <li>Receber uma cópia de seus dados em formato portável</li>
              </ul>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-2xl font-bold text-accent mb-4">6. Retenção de Dados</h2>
              <p className="mb-4">
                Mantemos suas informações apenas pelo tempo necessário para fornecer nossos serviços e cumprir obrigações legais. Quando seus dados não forem mais necessários, eles serão excluídos de forma segura de nossos sistemas.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-2xl font-bold text-accent mb-4">7. Alterações a Esta Política</h2>
              <p className="mb-4">
                Podemos atualizar esta Política de Privacidade periodicamente. Sempre que fizermos alterações significativas, notificaremos você através do aplicativo ou por e-mail. O uso contínuo do Looton após as alterações constitui aceitação da nova política.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-2xl font-bold text-accent mb-4">8. Contato</h2>
              <p className="mb-4">
                Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos seus dados, entre em contato conosco:
              </p>
              <p className="mb-2">E-mail: nexusdevsystem@gmail.com</p>
              <p className="mb-4">Data da última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}