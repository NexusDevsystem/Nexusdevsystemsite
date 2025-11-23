import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FaqPage.css';

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "O que é o Looton?",
      answer: "Looton é um aplicativo que reúne as principais ofertas de jogos digitais e produtos de hardware gamer vindos de lojas como Steam e Epic Games, mostrando preço, plataforma e link direto para compra na loja oficial."
    },
    {
      question: "Como funciona o Looton?",
      answer: "O Looton monitora constantemente lojas como Steam e Epic Games para encontrar as melhores ofertas em tempo real. Você pode navegar pelas ofertas, favoritar itens e configurar alertas de preço."
    },
    {
      question: "Quais lojas o Looton monitora?",
      answer: "O Looton atualmente monitora as principais lojas de jogos digitais como Steam e Epic Games, além de ofertas de hardware gamer."
    },
    {
      question: "O Looton é gratuito?",
      answer: "Sim, o Looton é gratuito para download e uso. Atualmente, todas as funcionalidades estão disponíveis gratuitamente."
    },
    {
      question: "Como posso rastrear o preço de um jogo?",
      answer: "Na tela de detalhes de cada jogo, você pode ativar o recurso 'Vigiar' para receber notificações quando o preço mudar ou atingir um valor desejado."
    },
    {
      question: "Posso comprar diretamente no Looton?",
      answer: "Não, o Looton não é uma loja. Nós apenas listamos ofertas das lojas oficiais e direcionamos você para elas para completar a compra."
    },
    {
      question: "O Looton rastreia preços em tempo real?",
      answer: "Nosso sistema atualiza os preços regularmente para garantir que você veja as ofertas mais recentes. A atualização ocorre periodicamente para refletir as mudanças de preço nas lojas."
    },
    {
      question: "Como posso entrar em contato com suporte?",
      answer: "Você pode nos contatar através do email nexusdevsystem@gmail.com ou usando o formulário de contato disponível no aplicativo."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <div className="faq-header">
        <h1>Perguntas Frequentes</h1>
        <p>Encontre respostas para as perguntas mais comuns sobre o Looton</p>
      </div>
      
      <div className="faq-container">
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div 
                className={`faq-question ${openIndex === index ? 'open' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <h3>{faq.question}</h3>
                <span className="faq-toggle">+</span>
              </div>
              <div className={`faq-answer ${openIndex === index ? 'visible' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="faq-contact">
          <h2>Ainda tem dúvidas?</h2>
          <p>Se você não encontrou a resposta que procurava, entre em contato conosco.</p>
          <div className="faq-contact-buttons">
            <Link to="/download" className="faq-download-btn">Download</Link>
            <a href="mailto:nexusdevsystem@gmail.com" className="faq-email-btn">Enviar Email</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;