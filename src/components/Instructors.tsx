"use client";

import React, { useState } from "react";
import Image from "next/image";

interface BeltInfo {
  colorClass: string; // Tailwind class for belt main color
  barClass: string;   // Tailwind class for the sleeve/bar
  degreeColor: string; // Degrees color
  degrees: number;     // Number of degrees (graus)
  name: string;        // Name of the belt
}

interface Instructor {
  id: number;
  name: string;
  role: string;
  categories: ("Adulto" | "Kids" | "Adolescentes")[];
  bio: string;
  image: string;
  belt: BeltInfo;
}

export default function Instructors() {
  const instructors: Instructor[] = [
    {
      id: 1,
      name: "Mestre Omar Salum",
      role: "Mestre & Fundador",
      categories: ["Adulto"],
      bio: "Faixa Preta 6º Grau credenciado pela CBJJ/IBJJF. Um dos maiores nomes do Jiu-Jitsu nortista, campeão mundial e nacional, com mais de 30 anos dedicados à arte suave.",
      image: "/assets/logos/Omar_Salum.jpeg",
      belt: {
        colorClass: "bg-neutral-900 border border-neutral-800",
        barClass: "bg-red-600",
        degreeColor: "bg-yellow-400",
        degrees: 6,
        name: "Faixa Preta 6º Grau",
      },
    },
    {
      id: 2,
      name: "Prof. Renato Silva",
      role: "Instrutor Chefe - Adulto",
      categories: ["Adulto"],
      bio: "Faixa Preta 2º Grau. Especialista em técnicas de guarda e Jiu-Jitsu No-Gi. Focado na preparação física e de competição de atletas de alto nível.",
      image: "/assets/logos/old_city.jpeg",
      belt: {
        colorClass: "bg-neutral-900 border border-neutral-800",
        barClass: "bg-red-600",
        degreeColor: "bg-white",
        degrees: 2,
        name: "Faixa Preta 2º Grau",
      },
    },
    {
      id: 3,
      name: "Profª. Alessandra Costa",
      role: "Instrutora Responsável - Feminino & Kids",
      categories: ["Kids", "Adolescentes"],
      bio: "Faixa Marrom. Dedicada a promover o empoderamento feminino através da defesa pessoal e a coordenar o programa de Jiu-Jitsu Kids com metodologia lúdica e segura.",
      image: "/assets/logos/old_city.jpeg",
      belt: {
        colorClass: "bg-[#5C3A21]", // Brown belt
        barClass: "bg-black",
        degreeColor: "bg-white",
        degrees: 3,
        name: "Faixa Marrom",
      },
    },
    {
      id: 4,
      name: "Instrutor Thiago Souza",
      role: "Instrutor Auxiliar - Kids",
      categories: ["Kids"],
      bio: "Faixa Roxa. Auxilia no desenvolvimento motor e ensino de técnicas fundamentais de Jiu-Jitsu para crianças, estimulando disciplina e respeito.",
      image: "/assets/logos/old_city.jpeg",
      belt: {
        colorClass: "bg-[#4B0082]", // Purple belt
        barClass: "bg-black",
        degreeColor: "bg-white",
        degrees: 2,
        name: "Faixa Roxa",
      },
    },
  ];

  const filters = [
    { key: "todos", label: "Todos" },
    { key: "adulto", label: "Adulto" },
    { key: "kids", label: "Kids" },
    { key: "adolescentes", label: "Adolescentes" },
  ];

  const [activeFilter, setActiveFilter] = useState("todos");

  const filteredInstructors = instructors.filter((instructor) => {
    if (activeFilter === "todos") return true;
    return instructor.categories.some(
      (cat) => cat.toLowerCase() === activeFilter
    );
  });

  return (
    <section id="instructors" className="py-24 bg-[#0F0F0F] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand font-bold uppercase tracking-widest text-xs border border-brand/20 bg-brand/5 px-3 py-1 rounded-full">
            Corpo Técnico
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase mt-4">
            Nossos <span className="text-brand">Professores</span>
          </h2>
          <div className="h-1.5 w-24 bg-brand mx-auto mt-6 rounded-full" />
          <p className="text-gray-400 mt-6 text-base sm:text-lg font-light leading-relaxed">
            Treine com quem realmente entende. Nossa equipe é liderada por uma lenda do Jiu-Jitsu 
            e segue padrões éticos e pedagógicos de altíssimo nível.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center space-x-2 sm:space-x-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
                activeFilter === filter.key
                  ? "bg-brand text-white border-brand shadow-glow-red"
                  : "bg-[#161616] text-gray-400 border-[#262626] hover:text-white"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredInstructors.map((instructor) => (
            <div
              key={instructor.id}
              className="bg-[#121212] border border-[#262626] hover:border-brand/40 rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-glow-red hover:-translate-y-1.5"
            >
              {/* Photo Container */}
              <div className="relative w-full aspect-square bg-black overflow-hidden">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Visual Overlay gradient on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Role badge over photo */}
                <span className="absolute bottom-4 left-4 px-3 py-1 bg-brand/90 backdrop-blur-sm text-white font-bold text-[10px] uppercase tracking-wider rounded-md">
                  {instructor.role}
                </span>
              </div>

              {/* Jiu-Jitsu Belt Component - Simulated in pure HTML */}
              <div className={`h-5 w-full flex items-center relative select-none ${instructor.belt.colorClass}`}>
                {/* Belt Sleeve/Bar (usually red or black) */}
                <div className={`absolute right-4 top-0 bottom-0 w-16 flex items-center justify-around px-1.5 ${instructor.belt.barClass}`}>
                  {/* Belt Degrees (White or Gold lines) */}
                  {Array.from({ length: instructor.belt.degrees }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-0.5 h-3.5 rounded-full ${instructor.belt.degreeColor}`}
                    />
                  ))}
                </div>
                <span className="text-[9px] font-black text-white/60 tracking-widest uppercase pl-4">
                  {instructor.belt.name}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-black text-lg text-white group-hover:text-brand transition-colors duration-300">
                    {instructor.name}
                  </h3>
                  <p className="text-gray-400 text-xs font-light mt-3 leading-relaxed">
                    {instructor.bio}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-6 border-t border-[#1C1C1C] pt-4">
                  {instructor.categories.map((cat, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#1C1C1C] border border-[#262626] text-gray-400 rounded"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
