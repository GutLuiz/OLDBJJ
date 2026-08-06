"use client";

import React from "react";
import Image from "next/image";

interface Instructor {
  id: number;
  name: string;
  role: string;
  rank: string;
  categories: string[];
  bio: string;
  image: string;
}

export default function Instructors() {
  const instructors: Instructor[] = [
    {
      id: 1,
      name: "Profª. Isabelle Rocha",
      rank: "Faixa-Preta",
      role: "Liderança Oficial",
      categories: ["Faixa-Preta", "Adulto"],
      bio: "Faixa-preta responsável pela liderança oficial da unidade Cidade Velha.",
      image: "/assets/logos/old_city.jpeg",
    },
    {
      id: 2,
      name: "Prof. Edson Nascimento",
      rank: "Faixa-Preta",
      role: "Instrutor (Gi & No-Gi)",
      categories: ["Faixa-Preta", "Adulto"],
      bio: "Professor faixa-preta integrado à equipe para conduzir as turmas dos turnos do meio-dia e da noite (com e sem kimono).",
      image: "/assets/logos/old_city.jpeg",
    },
    {
      id: 3,
      name: "Prof. Rangel Silva",
      rank: "Faixa-Preta",
      role: "Time Técnico",
      categories: ["Faixa-Preta", "Adulto"],
      bio: "Professor faixa-preta que também compõe o time técnico de instrução da academia.",
      image: "/assets/logos/old_city.jpeg",
    },
  ];

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
            Conheça nossos professores faixa-preta dedicados ao ensino e evolução dos nossos alunos na Cidade Velha.
          </p>
        </div>

        {/* Instructors Grid - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="bg-[#121212] border border-[#262626] hover:border-brand/40 rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-glow-red hover:-translate-y-1.5"
            >
              {/* Logo Placeholder Container */}
              <div className="relative w-full aspect-square bg-[#080808] flex items-center justify-center p-8 overflow-hidden border-b border-[#1A1A1A]">
                <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-brand/40 shadow-glow-red transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60" />

                {/* Role badge over logo container */}
                <span className="absolute bottom-4 left-4 px-3 py-1 bg-brand/90 backdrop-blur-sm text-white font-bold text-[10px] uppercase tracking-wider rounded-md shadow-md">
                  {instructor.role}
                </span>
              </div>

              {/* Black Belt visual strip */}
              <div className="h-5 w-full bg-neutral-900 border-y border-neutral-800 flex items-center justify-between px-4 select-none relative">
                <span className="text-[9px] font-black text-white/70 tracking-widest uppercase">
                  {instructor.rank}
                </span>
                <div className="h-full w-12 bg-red-600 border-l border-red-700 flex items-center justify-center">
                  <div className="w-0.5 h-3 bg-white mx-0.5 rounded-full" />
                  <div className="w-0.5 h-3 bg-white mx-0.5 rounded-full" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-black text-xl text-white group-hover:text-brand transition-colors duration-300">
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
                      className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-brand/10 border border-brand/20 text-brand rounded-full"
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
