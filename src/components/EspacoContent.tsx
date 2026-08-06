"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Amenity {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const slides = [
  {
    image: "/assets/espaco/espaco-1.png",
    tag: "Tatame Amplo",
    title: "CIDADE VELHA",
    description: "Espaço amplo com tatame de alta qualidade, planejado com camadas de absorção para quedas, oferecendo o máximo em segurança e conforto para sua evolução técnica.",
  },
  {
    image: "/assets/espaco/espaco-2.webp",
    tag: "Área de Convivência",
    title: "CONFORTO & BEM-ESTAR",
    description: "Área interna confortável para recepção de visitantes, familiares e descanso entre os treinos, reforçando nosso propósito de ser um ambiente familiar.",
  },
  {
    image: "/assets/espaco/espaco-3.webp",
    tag: "Estrutura Premium",
    title: "HIGIENE & PRATICIDADE",
    description: "Instalações modernas com vestiários completos (feminino e masculino) equipados com duchas quentes, além de higienização constante e ambiente 100% climatizado.",
  },
];

export default function EspacoContent() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fadeState, setFadeState] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const amenities: Amenity[] = [
    {
      title: "Climatização Total",
      description: "Tatame e áreas comuns 100% climatizados para proporcionar conforto máximo durante os treinos mais intensos.",
      icon: (
        <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Vestiários com Chuveiro",
      description: "Infraestrutura com vestiários masculino e feminino completos, equipados com chuveiros de água quente para sua comodidade pós-treino.",
      icon: (
        <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: "Estacionamento na Frente",
      description: "Fácil acesso com vagas de estacionamento bem na frente da academia para carros e motos, garantindo praticidade.",
      icon: (
        <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
    },
    {
      title: "Ambiente Acolhedor & Feminino",
      description: "Academia com liderança e propriedade feminina. Espaço com foco em respeito mútuo, higiene rigorosa e acolhimento para todos os públicos.",
      icon: (
        <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
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

  const whatsappUrl = "https://wa.me/5591982489117?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+visita+para+conhecer+o+espa%C3%A7o+da+Old+City+BJJ.";

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
              Nossa Infraestrutura
            </span>

            <div className={`transition-all duration-300 min-h-[290px] sm:min-h-[230px] lg:min-h-[290px] flex flex-col justify-start ${fadeState ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>
              <span className="text-gray-400 font-bold text-xs uppercase tracking-widest block mb-2">
                {slides[current].tag}
              </span>
              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-none">
                {slides[current].title.split(" ").map((word, i) => (
                  <span key={i} className={word === "BJJ" || word === "ESPAÇO" || word === "BEM-ESTAR" || word === "PRATICIDADE" || word === "VELHA" ? "text-brand block sm:inline" : "text-white"}>
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
                Conhecer Espaço
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
                    className="object-cover object-center"
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

        {/* Amenities Section */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand font-bold uppercase tracking-widest text-xs border border-brand/20 bg-brand/5 px-3 py-1 rounded-full">
              Diferenciais Físicos
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase mt-4">
              Planejado para o Seu <span className="text-brand">Bem-Estar</span>
            </h2>
            <div className="h-1.5 w-24 bg-brand mx-auto mt-6 rounded-full" />
            <p className="text-gray-400 mt-6 text-base sm:text-lg font-light leading-relaxed">
              Sabemos que a prática do Jiu-Jitsu exige esforço físico e dedicação mental. Por isso, 
              nosso tatame conta com camadas de absorção premium que atenuam quedas, e nossas instalações 
              são limpas constantemente com produtos antibactericidas adequados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-[#121212] border border-[#262626] p-6 rounded-xl hover:border-brand/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#1A1A1A] group-hover:bg-brand/10 border border-[#262626] group-hover:border-brand/20 flex items-center justify-center mb-4 transition-all duration-300">
                  {amenity.icon}
                </div>
                <h3 className="font-display font-bold text-white text-lg group-hover:text-brand transition-colors">
                  {amenity.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mt-2 font-light">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Bar */}
        <div className="bg-gradient-to-r from-[#121212] to-[#1C1C1C] border border-[#262626] rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full filter blur-3xl pointer-events-none" />
          
          <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
            Quer Conhecer Nosso Tatame De Perto?
          </h3>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-8 font-light">
            Agende uma visita ou tire dúvidas via WhatsApp e venha nos conhecer pessoalmente.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-white bg-brand hover:bg-brand-dark transition-all duration-300 shadow-glow-red hover:shadow-glow-red-lg"
          >
            Fale Conosco no WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}
