import React, { useEffect, useRef } from 'react';
import './ParticlesBackground.css';

const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Ajustar tamanho do canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Configurações das partículas
    const particles = [];
    const particleCount = 100;
    const mousePosition = { x: window.innerWidth / 2, y: window.innerHeight / 2, radius: 100 };
    
    // Classe para partícula
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.weight = Math.random() * 0.1 + 0.05;
        this.directionX = Math.random() * 1 - 0.5;
        this.directionY = Math.random() * 1 - 0.5;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(95, 99, 104, 0.5)'; // Cor cinza mais escura semi-transparente
        ctx.fill();
      }
    }

    // Inicializar partículas
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Evento de movimento do mouse
    const mouseMove = (e) => {
      mousePosition.x = e.x;
      mousePosition.y = e.y;
    };

    window.addEventListener('mousemove', mouseMove);

    // Conectar partículas próximas
    const connectParticles = () => {
      const maxDistance = 50;
      for (let a = 0; a < particles.length; a++) {
        particles[a].draw();
        
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(95, 99, 104, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }

        // Efeito de atração do mouse
        const dx = mousePosition.x - particles[a].x;
        const dy = mousePosition.y - particles[a].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mousePosition.radius) {
          particles[a].x -= dx * 0.05;
          particles[a].y -= dy * 0.05;
        } else {
          // Garantir que as direções existam
          if (typeof particles[a].directionY === 'undefined') {
            particles[a].directionY = Math.random() * 1 - 0.5;
          }

          if (particles[a].x > canvas.width || particles[a].x < 0) {
            particles[a].directionX = -particles[a].directionX;
          }
          if (particles[a].y > canvas.height || particles[a].y < 0) {
            particles[a].directionY = -particles[a].directionY;
          }
          particles[a].x += particles[a].directionX;
          particles[a].y += particles[a].directionY;
        }

        // Manter partículas dentro do canvas
        if (particles[a].x > canvas.width) particles[a].x = 0;
        else if (particles[a].x < 0) particles[a].x = canvas.width;
        
        if (particles[a].y > canvas.height) particles[a].y = 0;
        else if (particles[a].y < 0) particles[a].y = canvas.height;
      }
    };

    // Loop de animação
    let animationFrameId;
    const animate = () => {
      // Limpar o canvas completamente sem deixar rastro
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Limpeza
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', mouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="particles-canvas" />;
};

export default ParticlesBackground;