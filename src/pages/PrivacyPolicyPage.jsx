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

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
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
              Política de <span className="text-accent">Privacidade</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-accent/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Política de Privacidade - Looton
            </motion.p>
            <motion.p 
              className="text-lg text-accent/60"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Última atualização: 29 de outubro de 2025
            </motion.p>
          </motion.div>

          <motion.div 
            className="bg-secondary/20 backdrop-blur-sm rounded-xl p-8 border border-secondary/30"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div className="space-y-8" variants={container}>
              <motion.div variants={item}>
                <h2 className="text-2xl font-bold text-accent mb-4">1. Introdução</h2>
                <p className="mb-4">
                  A presente Política de Privacidade estabelece os termos e condições de tratamento de dados pessoais pelo aplicativo Looton ("Aplicativo"), desenvolvido e operado pela NexusDevSystem ("Desenvolvedor", "nós" ou "nosso"). Este documento é elaborado em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD) e demais legislações brasileiras aplicáveis.
                </p>
                <p className="mb-4">
                  Ao utilizar o Looton, você ("Usuário" ou "você") concorda com os termos descritos nesta Política de Privacidade. Caso não concorde com qualquer disposição aqui contida, recomendamos que interrompa imediatamente o uso do Aplicativo.
                </p>
              </motion.div>

              <motion.div variants={item}>
                <h2 className="text-2xl font-bold text-accent mb-4">2. Dados Coletados e Finalidades</h2>
                <h3 className="text-xl font-semibold text-white mb-2">2.1 Token de Notificação Push</h3>
                <p className="mb-2"><strong>Dados coletados:</strong> Token único gerado pelo Firebase Cloud Messaging (FCM) e Expo Push Notification Service.</p>
                <p className="mb-2"><strong>Finalidade:</strong> Envio de notificações push sobre:</p>
                <ul className="list-disc pl-6 space-y-1 mb-2">
                  <li>Ofertas diárias selecionadas (enviadas às 12h)</li>
                  <li>Alterações de preço em jogos adicionados à lista de observação</li>
                  <li>Lembretes de reengajamento após 2 dias de inatividade</li>
                </ul>
                <p className="mb-2"><strong>Base legal:</strong> Consentimento do usuário ao aceitar o recebimento de notificações durante a configuração inicial do Aplicativo.</p>
                <p className="mb-2"><strong>Armazenamento:</strong> Os tokens são armazenados temporariamente em memória no servidor backend por até 24 horas. Localmente no dispositivo, são mantidos indefinidamente no AsyncStorage para fins de gerenciamento de notificações.</p>
                <p className="mb-4"><strong>Compartilhamento:</strong> Os tokens são compartilhados exclusivamente com Firebase Cloud Messaging (Google) e Expo Push Notification Service para viabilizar o envio de notificações.</p>

                <h3 className="text-xl font-semibold text-white mb-2">2.2 Registro de Atividade do Usuário</h3>
                <p className="mb-2"><strong>Dados coletados:</strong> Timestamps (carimbos de data/hora) das interações do usuário com o Aplicativo.</p>
                <p className="mb-2"><strong>Finalidade:</strong> Identificar períodos de inatividade superiores a 2 dias para envio de notificações de reengajamento personalizadas.</p>
                <p className="mb-2"><strong>Base legal:</strong> Legítimo interesse do Desenvolvedor em melhorar a experiência do usuário e manter o engajamento com o Aplicativo.</p>
                <p className="mb-4"><strong>Armazenamento:</strong> Os dados de atividade são armazenados em cache de memória no servidor backend com tempo de vida (TTL) de 24 horas. Não há persistência em banco de dados permanente.</p>

                <h3 className="text-xl font-semibold text-white mb-2">2.3 Listas e Preferências Locais</h3>
                <p className="mb-2"><strong>Dados coletados:</strong></p>
                <ul className="list-disc pl-6 space-y-1 mb-2">
                  <li>Jogos adicionados às listas de favoritos</li>
                  <li>Jogos marcados para observação de preço</li>
                  <li>Listas personalizadas criadas pelo usuário</li>
                  <li>Preferências de interface (tema escuro/claro)</li>
                </ul>
                <p className="mb-2"><strong>Finalidade:</strong> Personalizar a experiência do usuário e permitir acesso rápido aos conteúdos de interesse.</p>
                <p className="mb-2"><strong>Base legal:</strong> Consentimento implícito ao utilizar as funcionalidades de personalização do Aplicativo.</p>
                <p className="mb-2"><strong>Armazenamento:</strong> Todos esses dados são armazenados exclusivamente no dispositivo do usuário através do AsyncStorage. Não são transmitidos, sincronizados ou armazenados em servidores externos.</p>
                <p className="mb-4"><strong>Compartilhamento:</strong> Nenhum. Os dados permanecem exclusivamente no dispositivo do usuário.</p>

                <h3 className="text-xl font-semibold text-white mb-2">2.4 Dados de Navegação e Uso</h3>
                <p className="mb-2"><strong>Dados coletados:</strong> O Aplicativo não coleta logs de navegação, histórico de buscas ou métricas analíticas de comportamento do usuário.</p>
                <p className="mb-4"><strong>Observação:</strong> Futuramente, poderemos implementar análise de uso através de serviços terceiros (como Google Analytics ou Firebase Analytics). Em caso de implementação, esta Política de Privacidade será atualizada previamente.</p>
              </motion.div>

              <motion.div variants={item}>
                <h2 className="text-2xl font-bold text-accent mb-4">3. Cookies e Tecnologias Similares</h2>
                <p className="mb-4">
                  O Looton não utiliza cookies, web beacons ou tecnologias de rastreamento em navegadores. O armazenamento local de dados é realizado exclusivamente através do AsyncStorage (React Native), que mantém dados estruturados no dispositivo do usuário sem transmissão automática para servidores.
                </p>
              </motion.div>

              <motion.div variants={item}>
                <h2 className="text-2xl font-bold text-accent mb-4">4. Publicidade e Serviços de Terceiros</h2>
                <h3 className="text-xl font-semibold text-white mb-2">4.1 Google AdMob</h3>
                <p className="mb-2">O Aplicativo exibe anúncios publicitários através do Google AdMob. Este serviço pode coletar informações do dispositivo para personalização de anúncios, incluindo:</p>
                <ul className="list-disc pl-6 space-y-1 mb-2">
                  <li>Identificador de publicidade (Advertising ID)</li>
                  <li>Endereço IP</li>
                  <li>Tipo e modelo do dispositivo</li>
                  <li>Sistema operacional</li>
                  <li>Dados de localização aproximada (quando autorizados)</li>
                </ul>
                <p className="mb-2"><strong>Finalidade:</strong> Monetização do Aplicativo através de publicidade direcionada.</p>
                <p className="mb-2"><strong>Base legal:</strong> Legítimo interesse do Desenvolvedor na sustentabilidade do Aplicativo.</p>
                <p className="mb-2"><strong>Política de Privacidade do Google AdMob:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">https://policies.google.com/privacy</a></p>
                <p className="mb-4"><strong>Controle do usuário:</strong> Você pode desativar a personalização de anúncios através das configurações de privacidade do seu dispositivo Android (Configurações &gt; Google &gt; Anúncios &gt; Desativar personalização de anúncios).</p>

                <h3 className="text-xl font-semibold text-white mb-2">4.2 Firebase Cloud Messaging (FCM)</h3>
                <p className="mb-2">O Firebase Cloud Messaging é utilizado para envio de notificações push. Este serviço coleta:</p>
                <ul className="list-disc pl-6 space-y-1 mb-2">
                  <li>Token de registro FCM</li>
                  <li>Dados de entrega de notificações (sucesso/falha)</li>
                  <li>Metadados técnicos do dispositivo</li>
                </ul>
                <p className="mb-2"><strong>Política de Privacidade do Firebase:</strong> <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">https://firebase.google.com/support/privacy</a></p>

                <h3 className="text-xl font-semibold text-white mb-4">4.3 Expo Push Notification Service</h3>
                <p className="mb-2">Serviço complementar de notificações que processa tokens e gerencia o envio de mensagens push.</p>
                <p className="mb-4"><strong>Política de Privacidade do Expo:</strong> <a href="https://expo.dev/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">https://expo.dev/privacy</a></p>
              </motion.div>

              <motion.div variants={item}>
                <h2 className="text-2xl font-bold text-accent mb-4">5. Armazenamento e Retenção de Dados</h2>
                <h3 className="text-xl font-semibold text-white mb-2">5.1 Dados no Servidor Backend</h3>
                <p className="mb-2"><strong>Local de hospedagem:</strong> Render Cloud (<a href="https://looton-backend.onrender.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">https://looton-backend.onrender.com</a>)</p>
                <p className="mb-2"><strong>Dados armazenados:</strong></p>
                <ul className="list-disc pl-6 space-y-1 mb-2">
                  <li>Tokens de notificação push (em memória, TTL de 24 horas)</li>
                  <li>Registros de atividade de usuários (em memória, TTL de 24 horas)</li>
                </ul>
                <p className="mb-2"><strong>Período de retenção:</strong> Máximo de 24 horas. Após esse período, os dados são automaticamente removidos da memória do servidor.</p>
                <p className="mb-4"><strong>Segurança:</strong> A comunicação entre o Aplicativo e o backend é realizada através de protocolo HTTPS, garantindo criptografia dos dados em trânsito.</p>

                <h3 className="text-xl font-semibold text-white mb-4">5.2 Dados no Dispositivo do Usuário</h3>
                <p className="mb-2"><strong>Dados armazenados:</strong></p>
                <ul className="list-disc pl-6 space-y-1 mb-2">
                  <li>Listas de jogos (favoritos, observados, listas personalizadas)</li>
                  <li>Token de notificação push</li>
                  <li>Preferências de interface</li>
                </ul>
                <p className="mb-4"><strong>Período de retenção:</strong> Indefinido, até que o usuário desinstale o Aplicativo ou limpe manualmente os dados através das configurações do sistema operacional.</p>
              </motion.div>

              <motion.div variants={item}>
                <h2 className="text-2xl font-bold text-accent mb-4">6. Compartilhamento de Dados</h2>
                <p className="mb-4">
                  O Looton não vende, aluga ou comercializa dados pessoais de usuários. Os dados são compartilhados exclusivamente nas seguintes circunstâncias:
                </p>

                <h3 className="text-xl font-semibold text-white mb-2">6.1 Serviços Essenciais</h3>
                <ul className="list-disc pl-6 space-y-1 mb-2">
                  <li>Google Firebase: Para envio de notificações push</li>
                  <li>Expo Push Notification Service: Para gerenciamento de notificações</li>
                  <li>Google AdMob: Para exibição de publicidade</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-2">6.2 Obrigações Legais</h3>
                <p className="mb-2">Podemos divulgar dados pessoais quando exigido por lei, ordem judicial, processo administrativo ou requisição de autoridade competente.</p>

                <h3 className="text-xl font-semibold text-white mb-4">6.3 Proteção de Direitos</h3>
                <p className="mb-4">Reservamo-nos o direito de divulgar dados pessoais para proteger nossos direitos legais, prevenir fraudes ou proteger a segurança dos usuários.</p>
              </motion.div>

              <motion.div variants={item}>
                <h2 className="text-2xl font-bold text-accent mb-4">7. Direitos dos Titulares de Dados (LGPD)</h2>
                <p className="mb-4">
                  Em conformidade com a LGPD, você possui os seguintes direitos em relação aos seus dados pessoais:
                </p>

                <h3 className="text-xl font-semibold text-white mb-2">7.1 Confirmação e Acesso</h3>
                <p className="mb-2">Você pode solicitar confirmação da existência de tratamento de dados e obter acesso aos dados pessoais armazenados.</p>

                <h3 className="text-xl font-semibold text-white mb-2">7.2 Correção</h3>
                <p className="mb-2">Você pode solicitar a correção de dados incompletos, inexatos ou desatualizados.</p>

                <h3 className="text-xl font-semibold text-white mb-2">7.3 Anonimização, Bloqueio ou Eliminação</h3>
                <p className="mb-2">Você pode solicitar a anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD.</p>

                <h3 className="text-xl font-semibold text-white mb-2">7.4 Revogação do Consentimento</h3>
                <p className="mb-2">Você pode revogar o consentimento para tratamento de dados pessoais a qualquer momento. A revogação pode ser realizada:</p>
                <p className="mb-2"><strong>Para notificações push:</strong></p>
                <ul className="list-disc pl-6 space-y-1 mb-2">
                  <li>Acesse as configurações do seu dispositivo Android</li>
                  <li>Navegue até Configurações &gt; Aplicativos &gt; Looton &gt; Notificações</li>
                  <li>Desative as notificações</li>
                </ul>
                <p className="mb-4"><strong>Para remoção completa de dados:</strong></p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Desinstale o Aplicativo através das configurações do Android</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-2">7.5 Informação sobre Compartilhamento</h3>
                <p className="mb-2">Você pode solicitar informações sobre as entidades públicas e privadas com as quais compartilhamos seus dados.</p>

                <h3 className="text-xl font-semibold text-white mb-4">7.6 Oposição ao Tratamento</h3>
                <p className="mb-4">Você pode se opor ao tratamento de dados realizado com base em legítimo interesse.</p>
              </motion.div>

              <motion.div variants={item}>
                <h2 className="text-2xl font-bold text-accent mb-4">8. Segurança da Informação</h2>
                <p className="mb-4">
                  Implementamos medidas técnicas e organizacionais apropriadas para proteger os dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição:
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-2">
                  <li>Criptografia: Comunicação HTTPS entre o Aplicativo e o servidor backend</li>
                  <li>Armazenamento limitado: Dados temporários em memória com TTL de 24 horas</li>
                  <li>Controle de acesso: Acesso restrito aos sistemas backend</li>
                  <li>Atualizações regulares: Manutenção e atualização de dependências de segurança</li>
                </ul>
                <p className="mb-4">
                  Apesar de nossos esforços, nenhum sistema é completamente seguro. Não podemos garantir a segurança absoluta dos dados transmitidos através da Internet.
                </p>
              </motion.div>

              <motion.div variants={item}>
                <h2 className="text-2xl font-bold text-accent mb-4">9. Dados de Menores de Idade</h2>
                <p className="mb-4">
                  O Looton não é direcionado a menores de 13 anos. Não coletamos intencionalmente dados pessoais de crianças. Caso tomemos conhecimento de que coletamos dados de menores sem o consentimento dos responsáveis legais, tomaremos medidas para deletar essas informações.
                </p>
                <p className="mb-4">
                  Pais e responsáveis legais são encorajados a monitorar o uso de aplicativos por menores sob sua responsabilidade.
                </p>
              </motion.div>

              <motion.div variants={item}>
                <h2 className="text-2xl font-bold text-accent mb-4">10. Transferência Internacional de Dados</h2>
                <p className="mb-4">
                  Alguns dos serviços terceiros utilizados (Google Firebase, Expo, Render) podem armazenar ou processar dados em servidores localizados fora do Brasil. Esses serviços adotam medidas de proteção de dados em conformidade com padrões internacionais e com a LGPD.
                </p>
              </motion.div>

              <motion.div variants={item}>
                <h2 className="text-2xl font-bold text-accent mb-4">11. Alterações na Política de Privacidade</h2>
                <p className="mb-4">
                  Reservamo-nos o direito de modificar esta Política de Privacidade a qualquer momento. Alterações significativas serão comunicadas através de:
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-2">
                  <li>Notificação push no Aplicativo</li>
                  <li>Atualização da data de "Última atualização" no topo deste documento</li>
                  <li>Publicação da versão revisada no Aplicativo</li>
                </ul>
                <p className="mb-4">
                  Recomendamos a revisão periódica desta Política de Privacidade para se manter informado sobre como protegemos seus dados.
                </p>
              </motion.div>

              <motion.div variants={item}>
                <h2 className="text-2xl font-bold text-accent mb-4">12. Legislação Aplicável</h2>
                <p className="mb-4">
                  Esta Política de Privacidade é regida pelas leis da República Federativa do Brasil, especialmente pela Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018) e pelo Marco Civil da Internet (Lei nº 12.965/2014).
                </p>
              </motion.div>

              <motion.div variants={item}>
                <h2 className="text-2xl font-bold text-accent mb-4">13. Contato e Encarregado de Dados (DPO)</h2>
                <p className="mb-4">
                  Para exercer seus direitos, esclarecer dúvidas ou apresentar reclamações relacionadas ao tratamento de dados pessoais, entre em contato conosco:
                </p>
                <p className="mb-2"><strong>Encarregado de Proteção de Dados (DPO):</strong> João Marcos Da Silva Magno</p>
                <p className="mb-2"><strong>E-mail:</strong> <a href="mailto:nexusdevsystem@gmail.com" className="text-accent hover:underline">nexusdevsystem@gmail.com</a></p>
                <p className="mb-4"><strong>Prazo de resposta:</strong> Até 15 dias úteis após o recebimento da solicitação.</p>
              </motion.div>

              <motion.div variants={item}>
                <h2 className="text-2xl font-bold text-accent mb-4">14. Autoridade Nacional de Proteção de Dados (ANPD)</h2>
                <p className="mb-4">
                  Caso não esteja satisfeito com a resposta às suas solicitações, você pode contatar a Autoridade Nacional de Proteção de Dados (ANPD):
                </p>
                <p className="mb-2"><strong>Site:</strong> <a href="https://www.gov.br/anpd/pt-br" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">https://www.gov.br/anpd/pt-br</a></p>
                <p className="mb-4"><strong>E-mail:</strong> <a href="mailto:atendimento@anpd.gov.br" className="text-accent hover:underline">atendimento@anpd.gov.br</a></p>
              </motion.div>

              <motion.div variants={item}>
                <h2 className="text-2xl font-bold text-accent mb-4">15. Aceitação da Política de Privacidade</h2>
                <p className="mb-4">
                  Ao utilizar o Looton, você declara ter lido, compreendido e concordado com os termos desta Política de Privacidade.
                </p>
              </motion.div>

              <motion.div variants={item}>
                <p className="text-center text-lg"><strong>NexusDevSystem</strong></p>
                <p className="text-center text-accent/80">E-mail: <a href="mailto:nexusdevsystem@gmail.com" className="text-accent hover:underline">nexusdevsystem@gmail.com</a></p>
                <p className="text-center text-accent/60">Data: 29 de outubro de 2025</p>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="mt-8 text-center">
            <a 
              href="/" 
              className="inline-block px-6 py-3 bg-accent text-primary font-bold rounded-full hover:bg-accent/90 transition-colors"
            >
              Voltar para o início
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}