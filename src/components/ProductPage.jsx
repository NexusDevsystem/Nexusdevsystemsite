import React from 'react';
import { Link } from 'react-router-dom';
import './ProductPage.css';

const ProductPage = () => {
  return (
    <div className="product-page">
      <div className="product-content">
        <h1>Está esperando o que para ver as melhores ofertas para você?</h1>
        <div className="button-group">
          <Link to="/download" className="download-btn-link">
            <button className="download-android-btn">Download for Android</button>
          </Link>
          <button className="learn-more-btn">Saiba mais</button>
        </div>
      </div>
      <section className="details-section">
        <div className="details-content">
          <h2>Conheça o aplicativo</h2>
          <div className="app-content">
            <div className="app-description">
              <p>Looton é um aplicativo feito pra quem gosta de promoções, mas odeia perder tempo caçando oferta em mil lugares diferentes. Ele reúne em um só lugar as principais ofertas de jogos digitais e produtos de hardware gamer vindos de várias lojas, mostrando preço, plataforma e link direto para compra na loja oficial.</p>
              <p>A ideia do Looton é simples: você abre o app e já vê um feed organizado com promoções em destaque, jogos com desconto, oportunidades limitadas e ofertas que realmente valem a pena acompanhar. Em vez de ficar pulando entre sites, o Looton centraliza tudo, facilita a comparação e te ajuda a decidir onde compensa mais comprar.</p>
              <p>Além disso, o app foi pensado como uma ferramenta de apoio para o dia a dia: ele ajuda o usuário a ficar de olho nas melhores promoções, descobrir jogos novos, aproveitar descontos antes que acabem e, com o tempo, terá cada vez mais recursos para personalizar a experiência — tudo sem vender nada dentro do app, apenas direcionando sempre para as lojas oficiais.</p>
            </div>
            <div className="app-logo">
              <img src="/logozinha.png" alt="Logo Looton" />
            </div>
          </div>
        </div>
      </section>
      <section className="explore-section">
        <div className="explore-content">
          <h2>Explore o Looton</h2>
          <div className="screenshots-container">
            <div className="screenshots-text">
              <h3>Aba games</h3>
              <p>A aba Games é o coração do Looton, o lugar onde você acompanha as principais ofertas de jogos digitais em um único ambiente. Nela, você encontra uma seleção de deals atualizada com jogos da Steam e da Epic Games, sempre destacando aquilo que realmente vale a pena ficar de olho.</p>
              <p>Logo no topo da tela, há um banner em destaque. Esse banner funciona como uma vitrine principal da Epic Games:</p>
              <ul>
                <li>Mostra quais são os jogos grátis da semana;</li>
                <li>Exibe também os títulos que ficarão gratuitos em breve, para você já se programar e não perder nenhuma oferta.</li>
              </ul>
              <p>Abaixo do banner, você encontra a lista de cards de ofertas. Cada card representa um jogo em promoção e traz, de forma clara e visual:</p>
              <ul>
                <li>A plataforma (por exemplo, Steam);</li>
                <li>A capa do jogo, facilitando o reconhecimento imediato;</li>
                <li>O nome do jogo;</li>
                <li>O preço antigo e o preço atual com desconto;</li>
                <li>O percentual de desconto, em um selo chamativo, para você ver rapidamente o quanto está economizando.</li>
              </ul>
              <p>Esses cards são organizados como as "melhores ofertas do dia", permitindo que você abra o app e, em poucos segundos, já saiba quais promoções estão valendo mais a pena naquele momento.</p>
            </div>
            <div className="screenshots-image">
              <img src="/print%201.jpeg" alt="Tela inicial do Looton" />
            </div>
          </div>
        </div>
      </section>
      <section className="hardware-section">
        <div className="hardware-content">
          <div className="screenshots-container reverse-layout">
            <div className="screenshots-image">
              <img src="/print%205.jpeg" alt="Aba Hardware do Looton" />
            </div>
            <div className="screenshots-text">
              <h3>Aba hardware</h3>
              <p>A aba Hardware é o espaço do Looton dedicado às ofertas de periféricos e componentes para computador, ideal pra quem quer montar ou fazer upgrade no PC gastando menos.</p>
              <p>No topo, o título "Hardware" aparece em destaque sobre fundo azul escuro. Abaixo, uma barra de busca em formato de pill permite pesquisar diretamente por produtos como "GPU, CPU, RTX, Ryzen, SSD…".</p>
              <p>Em seguida, uma grade de cards mostra os produtos em promoção. Cada card exibe:</p>
              <ul>
                <li>Selo com percentual de desconto (ex: 91% OFF)</li>
                <li>Imagem do produto</li>
                <li>Nome da loja (ex: "TERABYTE")</li>
                <li>Nome do produto com detalhes</li>
                <li>Preço original e promocional em destaque</li>
                <li>Informações de parcelamento</li>
                <li>Botão "Ver oferta" para compra direta</li>
              </ul>
              <p>A aba reúne as melhores ofertas de componentes e periféricos em um layout limpo e focado em conversão de oferta.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="search-section">
        <div className="search-content">
          <div className="screenshots-container">
            <div className="screenshots-text">
              <h3>Aba busca</h3>
              <p>A aba Busca é onde você pode procurar por jogos específicos no Looton. Com uma interface simples e eficiente, basta digitar o nome do jogo que você procura na barra de busca central.</p>
              <p>Ao digitar, o sistema já começa a mostrar resultados relevantes com ofertas ativas. Você pode buscar por títulos específicos, desenvolvedores ou gêneros.</p>
              <p>Os resultados aparecem em cards organizados, mostrando:</p>
              <ul>
                <li>Capa do jogo</li>
                <li>Nome do título</li>
                <li>Plataforma disponível</li>
                <li>Preço atual e desconto</li>
                <li>Link direto para a compra</li>
              </ul>
            </div>
            <div className="screenshots-image">
              <img src="/print%202.jpeg" alt="Aba Busca do Looton" />
            </div>
          </div>
        </div>
      </section>
      <section className="details-view-section">
        <div className="details-view-content">
          <div className="screenshots-container reverse-layout">
            <div className="screenshots-image">
              <img src="/print%203.jpeg" alt="Aba Detalhes do Looton" />
            </div>
            <div className="screenshots-text">
              <h3>Aba detalhes</h3>
              <p>A aba de detalhes aparece quando você clica em um card de jogo no Looton. Nela, você encontra todas as informações importantes sobre o título selecionado.</p>
              <p>A seção "Sobre o jogo" apresenta a descrição oficial, gênero, desenvolvedora e publicadora, permitindo que você conheça melhor o título antes de comprar.</p>
              <p>Os requisitos de sistema são mostrados de forma clara, divididos em mínimo e recomendado, para você saber se seu PC suporta o jogo.</p>
              <p>O destaque fica para o botão "Vigiar", que permite que você acompanhe o preço do jogo ao longo do tempo. Quando você ativa essa função:</p>
              <ul>
                <li>O Looton passa a monitorar o preço do jogo</li>
                <li>Notificações são enviadas quando há alterações de preço</li>
                <li>É possível definir um preço-alvo para receber alerta especial</li>
                <li>Você pode acompanhar o histórico de preços</li>
              </ul>
              <p>Essa funcionalidade evita que você perca promoções importantes e ajuda a comprar no melhor momento.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="watching-section">
        <div className="watching-content">
          <div className="screenshots-container">
            <div className="screenshots-text">
              <h3>Aba vigiando</h3>
              <p>A aba Vigiando é onde você acompanha todos os jogos que ativou a função "Vigiar" a partir da tela de detalhes.</p>
              <p>Ao abrir essa aba, você vê uma lista organizada de todos os títulos que está monitorando, com informações atualizadas sobre:</p>
              <ul>
                <li>Preço atual do jogo</li>
                <li>Preço mais baixo registrado</li>
                <li>Variação de preço desde que começou a vigiar</li>
                <li>Status da vigília (ativa ou concluída)</li>
              </ul>
              <p>Quando um jogo que você está vigiando entra em promoção, o Looton envia uma notificação direta para o seu dispositivo, informando:</p>
              <ul>
                <li>Qual é o jogo em promoção</li>
                <li>O novo preço com desconto</li>
                <li>Quantos por cento de desconto representa</li>
                <li>Link direto para comprar na loja oficial</li>
              </ul>
              <p>Isso garante que você nunca perca uma promoção importante e possa agir rapidamente quando o jogo atinge um preço que considera interessante.</p>
            </div>
            <div className="screenshots-image">
              <img src="/print%204.jpeg" alt="Aba Vigiando do Looton" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;