import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// Imagens de screenshots reais
const screenshots = [
  { id: 1, src: "/screenshots/abagames.png", alt: "Tela de aba de games no Looton" },
  { id: 2, src: "/screenshots/busca.png", alt: "Sistema de busca e filtros no Looton" },
  { id: 3, src: "/screenshots/detalhes.png", alt: "Tela de detalhes de uma oferta no Looton" },
  { id: 4, src: "/screenshots/hardware.png", alt: "Seção de hardware no Looton" }
];

export default function Screenshots() {
  const [currentImage, setCurrentImage] = useState(null);

  // Abrir o modal com a imagem ampliada
  const openModal = (index) => {
    setCurrentImage(index);
  };

  // Fechar o modal
  const closeModal = () => {
    setCurrentImage(null);
  };

  // Navegar para a próxima imagem
  const nextImage = () => {
    if (currentImage !== null) {
      setCurrentImage((currentImage + 1) % screenshots.length);
    }
  };

  // Navegar para a imagem anterior
  const prevImage = () => {
    if (currentImage !== null) {
      setCurrentImage((currentImage - 1 + screenshots.length) % screenshots.length);
    }
  };

  // Lidar com teclas de atalho
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentImage === null) return;

      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentImage]);

  return (
    <section id="screenshots" className="py-20 bg-primary">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Veja como é o <span className="text-accent">Looton</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-accent/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Confira telas reais do aplicativo para ter uma ideia do que você encontrará
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot.id}
              className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              onClick={() => openModal(index)}
            >
              <img 
                src={screenshot.src} 
                alt={screenshot.alt} 
                className="w-full h-full object-cover aspect-video"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='225' viewBox='0 0 400 225'%3E%3Crect width='400' height='225' fill='%232d3748'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23a0aec0' font-family='Arial' font-size='14'%3EImagem de screenshot%3C/text%3E%3C/svg%3E";
                }}
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-semibold">Ver detalhes</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Modal para exibir imagem ampliada */}
      {currentImage !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              onClick={closeModal}
            >
              <X className="w-6 h-6" />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              onClick={prevImage}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              className="absolute right-16 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              onClick={nextImage}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <img 
              src={screenshots[currentImage].src} 
              alt={screenshots[currentImage].alt} 
              className="w-full h-auto max-h-[80vh] object-contain mx-auto"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Crect width='800' height='450' fill='%232d3748'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23a0aec0' font-family='Arial' font-size='16'%3EImagem de screenshot ampliada%3C/text%3E%3C/svg%3E";
              }}
            />
            
            <div className="mt-4 text-center text-white">
              <p>{screenshots[currentImage]?.alt || 'Screenshot do Looton'}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}