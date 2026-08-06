"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Highlight {
  title: string;
  description: string;
}

const slides = [
  {
    image: "/assets/Competicoes/cope-1.png",
    tag: "Competição & União",
    title: "EQUIPE UNIDA",
    description: "Nossos atletas treinam juntos, se apoiam mutuamente e formam uma equipe focada em alcançar os melhores resultados nos campeonatos.",
    position: "object-center",
  },
  {
    image: "/assets/Competicoes/cope-2.png",
    tag: "Espírito Vencedor",
    title: "VITÓRIAS NO PÓDIO",
    description: "Sob a linhagem técnica do Mestre Omar Salum, nossa equipe coleciona pódios e conquistas em campeonatos estaduais, nacionais e internacionais.",
    position: "object-top",
  },
  {
    image: "/assets/Competicoes/cope-3.png",
    tag: "Foco & Técnica",
    title: "ALTA PERFORMANCE",
    description: "Treinos estratégicos focados nas regras das principais federações (CBJJ/IBJJF), preparando nossos lutadores física e mentalmente para os desafios no tatame.",
    position: "object-center",
  },
];

export default function CompeticoesContent() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fadeState, setFadeState] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const highlights: Highlight[] = [
    {
      title: "Linhagem Forte",
      description: "Metodologia refinada baseada na história e técnicas de campeões mundiais.",
    },
    {
      title: "União & Suporte",
      description: "Uma equipe unida que treina junta e dá suporte integral a cada atleta.",
    },
    {
      title: "Foco Técnico",
      description: "Treinamento direcionado para regras oficiais das principais federações (CBJJ/IBJJF).",
    },
    {
      title: "Ética & Respeito",
      description: "Desenvolvimento do caráter, disciplina e honra dentro e fora do tatame.",
    },
  ];

  const nextSlide = () => {
    setFadeState(false);
    setTimeout(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setFadeState(true);
    }, 300);
  };

  const prevSlide = () => {
    setFadeState(false);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setFadeState(true);
    }, 300);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused]);

  const handleManualNav = (action: () => void) => {
    action();
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
  };

  const whatsappUrl = "https://wa.me/5591981123456?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+o+treino+de+competi%C3%A7%C3%A3o+da+Old+City+BJJ.";

  return (
    <div className="bg-[#0A0A0A] py-16 sm:py-24 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Section layout (identical to Hero Banner style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full mb-24">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-5 flex flex-col items-start text-left space-y-6">
            <span className="text-brand font-bold uppercase tracking-widest text-xs border border-brand/20 bg-brand/5 px-3 py-1 rounded-full">
              Tradição Vencedora
            </span>

            <div className={`transition-all duration-300 min-h-[290px] sm:min-h-[230px] lg:min-h-[290px] flex flex-col justify-start ${fadeState ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>
              <span className="text-gray-400 font-bold text-xs uppercase tracking-widest block mb-2">
                {slides[current].tag}
              </span>
              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-none">
                {slides[current].title.split(" ").map((word, i) => (
                  <span key={i} className={word === "BJJ" || word === "EQUIPE" || word === "VENCEDOR" || word === "PERFORMANCE" ? "text-brand block sm:inline" : "text-white"}>
                    {word}{" "}
                  </span>
                ))}
              </h1>
              <p className="text-gray-400 text-sm sm:text-base lg:text-lg font-light leading-relaxed mt-4">
                {slides[current].description}
              </p>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider text-white bg-brand hover:bg-brand-dark transition-all duration-300 shadow-glow-red hover:shadow-glow-red-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                Quero Competir
              </a>
            </div>
          </div>

          {/* Right Column: Carousel Frame */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            <div
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-3xl overflow-hidden border border-[#232323] shadow-glow-red hover:shadow-glow-red-lg transition-all duration-500 group bg-[#121212]"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Carousel Slides */}
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === current ? "opacity-90 z-10 scale-100" : "opacity-0 z-0 scale-105"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    className={`object-cover ${slide.position || "object-center"}`}
                  />
                  {/* Subtle vignette/shading overlay inside the picture frame */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
                </div>
              ))}

              {/* Internal Frame Navigation - Left Arrow */}
              <button
                onClick={() => handleManualNav(prevSlide)}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-gray-800 hover:border-brand bg-[#0A0A0A]/60 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 opacity-0 group-hover:opacity-100"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Internal Frame Navigation - Right Arrow */}
              <button
                onClick={() => handleManualNav(nextSlide)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-gray-800 hover:border-brand bg-[#0A0A0A]/60 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 opacity-0 group-hover:opacity-100"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Slide Indicators inside the frame */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleManualNav(() => {
                      setFadeState(false);
                      setTimeout(() => {
                        setCurrent(index);
                        setFadeState(true);
                      }, 300);
                    })}
                    className="focus:outline-none"
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    <div
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === current ? "bg-brand w-6" : "bg-gray-500/50 w-1.5"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Highlights Section (Replacing specific numeric stats with generic values) */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand font-bold uppercase tracking-widest text-xs border border-brand/20 bg-brand/5 px-3 py-1 rounded-full">
              Pilares de Competição
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase mt-4">
              Preparação de <span className="text-brand">Campeões</span>
            </h2>
            <div className="h-1.5 w-24 bg-brand mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-[#121212] border border-[#262626] p-6 rounded-xl hover:border-brand/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#1A1A1A] group-hover:bg-brand/10 border border-[#262626] group-hover:border-brand/20 flex items-center justify-center mb-4 transition-all duration-300">
                  <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-white text-lg group-hover:text-brand transition-colors uppercase">
                  {highlight.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mt-2 font-light">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Institutional Text Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-brand font-bold uppercase tracking-widest text-xs">
              Liderança e Linhagem
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase leading-tight">
              Treine sob a Tutela de um <span className="text-brand">Campeão Mundial</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed">
              Mestre Omar Salum é sinônimo de dedicação total ao Jiu-Jitsu. Suas conquistas 
              no tatame refletem em uma metodologia de ensino focada na disciplina refinada e na técnica precisa, 
              permitindo que qualquer praticante aprenda o Jiu-Jitsu real, seja para competir ou por qualidade de vida.
            </p>
            <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed">
              Sob sua liderança direta, nossa equipe se apoia nos conceitos clássicos de alavanca, 
              distribuição de peso e transições seguras, reduzindo lesões e maximizando a eficiência de cada golpe.
            </p>
          </div>

          <div className="lg:col-span-6 bg-[#121212] border border-[#262626] p-8 rounded-2xl shadow-xl">
            <h3 className="font-display font-bold text-xl text-white uppercase mb-6 border-b border-[#262626] pb-4">
              Nossa Visão de Competição
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-brand rounded-full mt-2.5 mr-3 flex-shrink-0" />
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-white">Respeito Acima de Tudo:</strong> O tatame competitivo é um espaço para testar habilidades e honrar o adversário.
                </p>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-brand rounded-full mt-2.5 mr-3 flex-shrink-0" />
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-white">Suporte Coletivo:</strong> Não importa quem está lutando, toda a torcida e a equipe dão suporte integral ao atleta.
                </p>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-brand rounded-full mt-2.5 mr-3 flex-shrink-0" />
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-white">Técnica e Estratégia:</strong> Focamos em um Jiu-Jitsu inteligente e estratégico, baseado nas regras das principais federações (CBJJ/IBJJF).
                </p>
              </li>
            </ul>
          </div>

        </div>

        {/* Call to Action Bar */}
        <div className="bg-gradient-to-r from-[#121212] to-[#1C1C1C] border border-[#262626] rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand/5 rounded-full filter blur-3xl pointer-events-none" />
          
          <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
            Pronto para Vestir a Armadura e Competir?
          </h3>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-8 font-light">
            Temos treinos voltados especificamente para competição com sparring intenso e ajuste estratégico de regras. Junte-se a nós!
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-white bg-brand hover:bg-brand-dark transition-all duration-300 shadow-glow-red hover:shadow-glow-red-lg"
          >
            Quero Entrar para a Equipe
          </a>
        </div>

      </div>
    </div>
  );
}
