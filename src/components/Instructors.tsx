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
      categories: ["Faixa-Preta", "Liderança IBJJF"],
      bio: "Faixa-preta responsável pela liderança oficial da Unidade Cidade Velha, aluna do Professor Omar Salum, devidamente registrada na IBJJF/CBJJ, sob o nº 557785, e certificada no Webinar de Regras da IBJJF, realizado em maio de 2026.",
      image: "/assets/professores/isabelle.jpeg",
    },
    {
      id: 2,
      name: "Prof. Edson Nascimento",
      rank: "Faixa-Preta",
      role: "Turmas 01 e 02",
      categories: ["Faixa-Preta", "Gi & No-Gi"],
      bio: "Faixa-preta integrante do rol de professores da Unidade Cidade Velha, responsável pelas Turmas 01 e 02, ministrando aulas de Jiu-Jitsu nas modalidades Gi e No-Gi",
      image: "/assets/professores/edson.jpeg",
    },
    {
      id: 3,
      name: "Prof. Rangel Silva",
      rank: "Faixa-Preta",
      role: "Sócio & Professor",
      categories: ["Faixa-Preta", "IBJJF/CBJJ"],
      bio: "Faixa-preta sócio da Unidade Cidade Velha, aluno do Professor Omar Salum, devidamente registrado na IBJJF/CBJJ, sob o nº 557811.",
      image: "/assets/professores/rangel.jpeg",
    },
    {
      id: 4,
      name: "Profª. Liah Santos",
      rank: "Faixa-Preta",
      role: "Turma 03 Kids",
      categories: ["Faixa-Preta", "Kids & Adolescentes"],
      bio: "Faixa-preta e professora responsável pela Turma 03 Kids, formada em Educação Física, dedicada e comprometida com o ensino do Jiu-Jitsu para crianças e adolescentes, promovendo o desenvolvimento técnico, físico e disciplinar de seus alunos.",
      image: "/assets/professores/liah.jpeg",
    },
    {
      id: 5,
      name: "Instrutora Amanda Nunes",
      rank: "Prajied Azul Escuro",
      role: "Muay Thai",
      categories: ["Muay Thai", "Striking"],
      bio: "Instrutora de Muay Thai da Unidade Cidade Velha, graduada Prajied Azul Escuro, dedicada ao ensino técnico e preparação física dos alunos.",
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
            Nossos <span className="text-brand">Professores & Instrutores</span>
          </h2>
          <div className="h-1.5 w-24 bg-brand mx-auto mt-6 rounded-full" />
          <p className="text-gray-400 mt-6 text-base sm:text-lg font-light leading-relaxed">
            Conheça nossa equipe técnica dedicada ao ensino e evolução dos nossos alunos na Cidade Velha.
          </p>
        </div>

        {/* Instructors Grid - 5 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="bg-[#121212] border border-[#262626] hover:border-brand/40 rounded-3xl overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-glow-red hover:-translate-y-1.5"
            >
              {/* Photo Container - Portrait format like user reference */}
              <div className="relative w-full p-3 pb-0">
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#0A0A0A] border border-[#222222]">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-60" />

                  {/* Role badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 bg-brand/90 backdrop-blur-md text-white font-bold text-[10px] uppercase tracking-wider rounded-md shadow-md">
                    {instructor.role}
                  </span>
                </div>
              </div>

              {/* Belt visual strip */}
              <div className="h-6 w-full bg-neutral-950 border-y border-neutral-800/80 flex items-center justify-between px-5 select-none relative mt-2">
                <span className="text-[9px] font-black text-white/80 tracking-widest uppercase">
                  {instructor.rank}
                </span>
                <div className={`h-full w-14 ${instructor.rank.includes("Prajied") ? "bg-blue-800 border-l border-blue-900" : "bg-red-600 border-l border-red-700"} flex items-center justify-center`}>
                  <div className="w-0.5 h-3.5 bg-white mx-0.5 rounded-full" />
                  <div className="w-0.5 h-3.5 bg-white mx-0.5 rounded-full" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 pt-4 flex-1 flex flex-col justify-between">
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
