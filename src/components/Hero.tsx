"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/assets/banner/banner-1.webp",
    title: "Tradição & Excelência no Tatame",
    subtitle: "OLD CITY BJJ",
    description: "Treine Jiu-Jitsu na Cidade Velha com estrutura completa e foco no seu desenvolvimento. Aulas de BJJ, Muay Thai e Boxe para adultos.",
  },
  {
    image: "/assets/banner/banner-2.png",
    title: "Foco Principal em Jiu-Jitsu",
    subtitle: "FORÇA E DISCIPLINA",
    description: "Metodologia estruturada para o ensino de BJJ Adulto. Desenvolva defesa pessoal, condicionamento e técnica em um ambiente integrado.",
  },
  {
    image: "/assets/banner/banner-4.png",
    title: "Artes Marciais Completas",
    subtitle: "BJJ • MUAY THAI • BOXE",
    description: "Aprenda Jiu-Jitsu como modalidade principal e potencialize sua preparação com turmas de Muay Thai e Boxe.",
  },
  {
    image: "/assets/banner/banner-5.png",
    title: "Turmas Adulto",
    subtitle: "EVOLUÇÃO CONSTANTE",
    description: "Treinos no horário do almoço e à noite projetados para se adaptar à sua rotina profissional e pessoal.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fadeState, setFadeState] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

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

  // Autoplay
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const whatsappUrl = "https://wa.me/5591981123456?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+aula+experimental+de+Jiu-Jitsu+na+Old+City+BJJ.";

  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:h-screen w-full flex items-center bg-[#0A0A0A] overflow-hidden pt-28 lg:pt-0"
    >
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Left Column: Left-aligned Text Content */}
          <div className="lg:col-span-5 flex flex-col items-start text-left space-y-6">
            
            <div className={`transition-all duration-300 min-h-[290px] sm:min-h-[230px] lg:min-h-[290px] flex flex-col justify-start ${fadeState ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>
              <span className="text-gray-400 font-bold text-xs uppercase tracking-widest block mb-2">
                {slides[current].title}
              </span>
              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-none">
                {slides[current].subtitle.split(" ").map((word, i) => (
                  <span key={i} className={word === "BJJ" || word === "UNIÃO" || word === "TODOS" || word === "CARÁTER" ? "text-brand block sm:inline" : "text-white"}>
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
                Aula Experimental
              </a>
              <button
                onClick={() => scrollToSection("activities")}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider text-gray-300 bg-transparent hover:text-white hover:bg-white/5 border border-gray-800 hover:border-gray-500 transition-all duration-300"
              >
                Conhecer Mais
              </button>
            </div>
          </div>

          {/* Right Column: Carousel Frame (Quadro com os Banners) */}
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
      </div>
    </section>
  );
}
