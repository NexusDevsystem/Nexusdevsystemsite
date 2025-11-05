// src/components/Hero.jsx
import React from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

// Variantes de animação para o Hero
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
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.7 }
  }
};

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative h-screen flex items-center justify-center overflow-hidden
        bg-gradient-to-br from-primary to-secondary
      "
    >
      {/* 1) GRID TECNOLÓGICO (LINHAS) sobre o gradiente */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05) 1px, transparent 1px, transparent 40px),' +
            'repeating-linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05) 1px, transparent 1px, transparent 40px)',
        }}
      />

      {/* 2) BLOBS ANIMADOS */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-accent/20
                   rounded-full filter blur-3xl"
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent/10
                   rounded-full filter blur-2xl"
        animate={{
          x: [0, -15, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        aria-hidden="true"
      />

      {/* 3) CONTEÚDO */}
      <motion.div 
        className="relative z-10 text-center px-6 max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight"
          variants={item}
        >
          Looton —{' '}
          <span className="text-accent">seu radar de ofertas gamer</span>
        </motion.h1>
        <motion.p 
          className="mt-6 text-lg sm:text-xl text-accent/90 max-w-3xl mx-auto"
          variants={item}
        >
          O Looton centraliza promoções reais de jogos e DLCs para PC da Steam em um só lugar. 
          Ele monitora ofertas, organiza tudo de forma clara e te avisa 
          quando aparece aquele desconto que vale a pena.
        </motion.p>
        <motion.div 
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          variants={item}
        >
          <a
            href="#download"
            className="inline-flex items-center bg-accent
                       px-8 py-4 rounded-full font-semibold text-primary shadow-lg
                       transition-transform hover:scale-105 cursor-hover"
          >
            Obter Acesso
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center bg-transparent border-2 border-accent
                       px-8 py-4 rounded-full font-semibold text-accent shadow-lg
                       transition-transform hover:scale-105 cursor-hover"
          >
            Saiba Mais
          </a>
        </motion.div>
        <motion.p 
          className="mt-8 text-md text-accent/70 italic"
          variants={item}
        >
          "Pare de caçar descontos. O Looton encontra por você."
        </motion.p>
      </motion.div>
    </section>
  )
}
