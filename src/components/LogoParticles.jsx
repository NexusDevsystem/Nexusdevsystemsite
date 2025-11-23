import React, { useEffect, useRef, useState } from 'react';
import './LogoParticles.css';

const LogoParticles = () => {
    const canvasRef = useRef(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        // Ajustar tamanho do canvas
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Carregar a imagem da logo
        const img = new Image();
        img.src = '/Logosemsundo.png';

        let animationFrameId;

        img.onerror = () => {
            console.error('Erro ao carregar a imagem da logo');
            setError('Erro ao carregar a imagem');
        };

        img.onload = () => {
            console.log('Imagem carregada com sucesso!', img.width, 'x', img.height);

            // Criar um canvas temporário para ler os pixels da imagem
            const tempCanvas = document.createElement('canvas');
            const tempCtx = tempCanvas.getContext('2d');

            // Definir tamanho da logo (grande mas visível)
            const logoHeight = canvas.height * 0.6; // 60% da altura da tela
            const logoWidth = (img.width / img.height) * logoHeight;

            tempCanvas.width = logoWidth;
            tempCanvas.height = logoHeight;

            // Desenhar a imagem no canvas temporário
            tempCtx.drawImage(img, 0, 0, logoWidth, logoHeight);

            // Ler os pixels da imagem
            const imageData = tempCtx.getImageData(0, 0, logoWidth, logoHeight);
            const pixels = imageData.data;

            // Posicionar a logo à esquerda
            const offsetX = canvas.width * 0.08; // 8% da margem esquerda
            const offsetY = (canvas.height - logoHeight) / 2; // Centralizada verticalmente

            // Criar padrão de pontos em grade
            const dotSpacing = 5; // Espaçamento menor para mais detalhes
            const dotSize = 2; // Tamanho dos pontos

            // Criar partículas
            const particles = [];
            const startX = 0; // Canto superior esquerdo
            const startY = 0;

            let particleIndex = 0;

            for (let y = 0; y < canvas.height; y += dotSpacing) {
                for (let x = 0; x < canvas.width; x += dotSpacing) {
                    // Verificar se este ponto está dentro da área da logo
                    const logoX = Math.floor(x - offsetX);
                    const logoY = Math.floor(y - offsetY);

                    let isInsideLogo = false;
                    let pixelColor = { r: 150, g: 150, b: 150, a: 0.2 };

                    if (logoX >= 0 && logoX < logoWidth && logoY >= 0 && logoY < logoHeight) {
                        const index = (logoY * logoWidth + logoX) * 4;
                        const pixelAlpha = pixels[index + 3];

                        if (pixelAlpha > 50) {
                            isInsideLogo = true;
                            // Usar as cores reais da imagem
                            pixelColor = {
                                r: pixels[index],
                                g: pixels[index + 1],
                                b: pixels[index + 2],
                                a: 0.7
                            };
                        }
                    }

                    // Criar partícula
                    particles.push({
                        // Posição atual (começa no canto)
                        x: startX,
                        y: startY,
                        // Posição alvo
                        targetX: x,
                        targetY: y,
                        // Velocidade
                        vx: 0,
                        vy: 0,
                        // Cor
                        color: pixelColor,
                        // Tamanho
                        size: isInsideLogo ? dotSize : dotSize * 0.6,
                        // Delay para efeito escalonado
                        delay: particleIndex * 0.3,
                        // Tempo decorrido
                        elapsed: 0,
                        // Se está dentro da logo
                        isLogo: isInsideLogo
                    });

                    particleIndex++;
                }
            }

            console.log(`Criando ${particles.length} partículas animadas`);

            // Animação
            let lastTime = performance.now();

            const animate = (currentTime) => {
                const deltaTime = (currentTime - lastTime) / 1000; // em segundos
                lastTime = currentTime;

                ctx.clearRect(0, 0, canvas.width, canvas.height);

                particles.forEach(particle => {
                    // Atualizar tempo decorrido
                    particle.elapsed += deltaTime;

                    // Só começar a mover depois do delay
                    if (particle.elapsed > particle.delay) {
                        // Calcular distância até o alvo
                        const dx = particle.targetX - particle.x;
                        const dy = particle.targetY - particle.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        // Se ainda não chegou no alvo
                        if (distance > 0.5) {
                            // Aplicar força de atração
                            const force = distance * 0.1;
                            const angle = Math.atan2(dy, dx);

                            particle.vx += Math.cos(angle) * force;
                            particle.vy += Math.sin(angle) * force;

                            // Aplicar fricção
                            particle.vx *= 0.85;
                            particle.vy *= 0.85;

                            // Atualizar posição
                            particle.x += particle.vx;
                            particle.y += particle.vy;
                        } else {
                            // Fixar na posição alvo
                            particle.x = particle.targetX;
                            particle.y = particle.targetY;
                            particle.vx = 0;
                            particle.vy = 0;
                        }
                    }

                    // Desenhar partícula
                    ctx.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${particle.color.a})`;
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                    ctx.fill();
                });

                animationFrameId = requestAnimationFrame(animate);
            };

            animate(performance.now());
        };

        // Limpeza
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    if (error) {
        return <div style={{ color: 'red', padding: '20px' }}>{error}</div>;
    }

    return <canvas ref={canvasRef} className="logo-particles-canvas" />;
};

export default LogoParticles;
