import React, { useState } from 'react';
import './BlogPage.css';

const BlogPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: 'Looton v1.8 lançada - Melhorias na interface e jogos grátis da Epic Games!',
      date: '20 Nov 2025',
      category: 'PatchNotes',
      image: '/icon.png',
      excerpt: 'Atualização v1.8 com melhorias na interface, incluindo banner para jogos grátis da Epic Games e muito mais!',
      content: `v1.8 (Última Versão)
20 de novembro de 2025

Lançado
✨ Melhoria da interface com banner para melhor visualização de jogos grátis da Epic Games:
Agora você pode visualizar de forma mais clara e atraente os jogos gratuitos da Epic Games graças ao novo banner na parte superior da aba Games. O banner destaca os jogos grátis da semana com imagens em destaque, facilitando a identificação e acesso rápido aos títulos gratuitos.

✨ Novidade: Jogos que ficarão grátis em breve:
Além dos jogos gratuitos atuais, agora você pode ver quais jogos ficarão disponíveis gratuitamente em breve na Epic Games. Essa nova funcionalidade permite que você planeje suas futuras aquisições e não perca nenhuma oportunidade de adicionar jogos incríveis à sua coleção.

✨ Mais variedade de jogos no feed de Games:
Ampliamos a variedade de jogos disponíveis no feed principal da aba Games. Agora você terá acesso a mais opções de jogos em promoção e ofertas exclusivas, proporcionando uma experiência de descoberta mais rica e completa.

✨ Cards em busca agora aparecem em grade:
Na seção de busca, os cards de jogos agora são exibidos em formato de grade para uma melhor visualização e navegação. Essa melhoria torna a experiência de busca mais organizada e visualmente agradável, facilitando a identificação dos jogos desejados.`
    },
    {
      id: 2,
      title: 'Looton v1.7 lançada - Novo sistema de notificações!',
      date: '05 Nov 2025',
      category: 'PatchNotes',
      image: '/icon.png',
      excerpt: 'Lançada a versão 1.7 do Looton com um sistema de notificações completamente renovado e muitas melhorias na experiência do usuário.',
      content: `v1.7 (Última Versão)
5 de novembro de 2025

Lançado
✨ Novidade:
Sistema de notificações completamente renovado
✨ Novidade:
Histórico de notificações no sino (aba Games)
✨ Novidade:
Ofertas do Dia enviadas 2x ao dia (12h e 18h)
✨ Novidade:
Alertas automáticos quando jogos vigiados entrarem em promoção
✨ Novidade:
Nova opção de visualização
✨ Novidade:
Novas configurações disponíveis na aba Configurações
⚙️ Otimização:
Corrigido problema de notificações duplicadas
⚙️ Otimização:
Sistema de notificações mais confiável e preciso
⚙️ Otimização:
Melhor performance no carregamento de ofertas
⚙️ Otimização:
Interface mais flexível e personalizável`
    },
    {
      id: 3,
      title: 'Looton está oficialmente disponível na Google Play!',
      date: '23 Nov 2025',
      category: 'Blog',
      image: '/logozinha.png',
      excerpt: 'Anunciamos com orgulho que o Looton está agora oficialmente disponível para download na Google Play Store para todos os usuários Android.',
      content: `Estamos entusiasmados em anunciar que o Looton, nosso aplicativo que reúne as melhores ofertas de jogos digitais e produtos de hardware gamer, já está disponível para download gratuito na Google Play Store!

      O Looton oferece uma maneira simples e eficiente de encontrar promoções incríveis de jogos da Steam e Epic Games, além de ofertas de hardware gamer. Agora, todos os usuários Android podem baixar o aplicativo e começar a economizar em suas compras de jogos e equipamentos.

      Funcionalidades do Looton:
      - Acompanhamento de ofertas em destaque
      - Ofertas de jogos com desconto
      - Oportunidades limitadas
      - Recursos para comparar preços
      - Notificações sobre alterações de preço

      Baixe agora o Looton na Google Play e comece a economizar nas suas compras de jogos e hardware gamer!`
    }
  ];

  const filteredPosts = selectedFilter === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedFilter);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const closePostDetail = () => {
    setSelectedPost(null);
  };

  return (
    <div className="blog-page">
      {selectedPost ? (
        <div className="blog-post-detail">
          <button className="back-to-blog" onClick={closePostDetail}>← Voltar ao Blog</button>
          <div className="post-detail-content">
            <h1 className="post-detail-title">{selectedPost.title}</h1>
            <div className="post-detail-meta">
              <span className="post-date">{selectedPost.date}</span>
              <span className={`post-category ${selectedPost.category}`}>{selectedPost.category}</span>
            </div>
            <div className={`post-detail-body ${selectedPost.category === 'PatchNotes' ? 'patch-notes-content' : ''}`}>
              {selectedPost.category === 'PatchNotes' ? (
                <div>{selectedPost.content.split('\n').map((line, index) => (
                  <div key={index}>{line || <br />}</div>
                ))}</div>
              ) : (
                selectedPost.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph.trim()}</p>
                ))
              )}
            </div>
            <div className="post-detail-actions">
              <a href="https://play.google.com/store/apps/details?id=com.nexusdevsystem.looton&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="download-btn">
                Download na Google Play
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="blog-container">
          <h1 className="blog-title">Latest Blogs</h1>

          <div className="blog-filters">
            <button
              className={`filter-btn ${selectedFilter === 'All' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('All')}
            >
              All Posts
            </button>
            <button
              className={`filter-btn ${selectedFilter === 'PatchNotes' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('PatchNotes')}
            >
              Patch Notes
            </button>
          </div>

          <div className="blog-posts">
            {filteredPosts.map(post => (
              <article key={post.id} className="blog-post-card">
                <div className="post-content" onClick={() => handlePostClick(post)}>
                  <h2 className="post-title">{post.title}</h2>
                  <div className="post-meta">
                    <span className="post-date">{post.date}</span>
                    <span className={`post-category ${post.category}`}>{post.category}</span>
                    <button className="read-btn" onClick={(e) => { e.stopPropagation(); handlePostClick(post); }}>Read →</button>
                  </div>
                </div>
                <div className="post-image" onClick={() => handlePostClick(post)}>
                  <img src={post.image} alt={post.title} />
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;