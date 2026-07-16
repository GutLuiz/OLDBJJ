import React from "react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Competições | Old City BJJ",
  description: "Conheça a trajetória competitiva da Old City BJJ Belém. Títulos estaduais, nacionais e mundiais sob a liderança do Mestre Omar Salum. Faça parte dos campeões!",
};

interface Stat {
  value: string;
  label: string;
}

export default function CompeticoesPage() {
  const stats: Stat[] = [
    { value: "30+", label: "Anos de Competição" },
    { value: "100+", label: "Medalhas de Ouro" },
    { value: "15+", label: "Títulos Estaduais" },
    { value: "Mundial", label: "Histórico de Pódios" },
  ];

  const competitionImages = [
    {
      src: "/assets/Competicoes/cope-1.png",
      alt: "Equipe Old City BJJ reunida em campeonato estadual",
      span: "md:col-span-1",
    },
    {
      src: "/assets/Competicoes/cope-2.png",
      alt: "Mestre Omar Salum e atletas comemorando no pódio",
      span: "md:col-span-2",
    },
    {
      src: "/assets/Competicoes/cope-3.png",
      alt: "Foco e combate de Jiu-Jitsu em campeonato de elite",
      span: "md:col-span-3",
    },
  ];

  const whatsappUrl = "https://wa.me/5591981123456?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+o+treino+de+competi%C3%A7%C3%A3o+da+Old+City+BJJ.";

  return (
    <div className="bg-[#0A0A0A] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand font-bold uppercase tracking-widest text-xs border border-brand/20 bg-brand/5 px-3 py-1 rounded-full">
            Tradição Vencedora
          </span>
          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase mt-4">
            A Nossa <span className="text-brand">Equipe</span>
          </h1>
          <div className="h-1.5 w-24 bg-brand mx-auto mt-6 rounded-full" />
          <p className="text-gray-400 mt-6 text-base sm:text-lg font-light leading-relaxed">
            A Old City BJJ carrega a linhagem de um dos competidores mais vitoriosos do Brasil. 
            Nossa equipe de competição brilha em tatames estaduais, nacionais e internacionais.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#121212] border border-[#262626] p-6 sm:p-8 rounded-2xl text-center shadow-xl hover:border-brand/30 transition-colors"
            >
              <span className="font-display font-black text-3xl sm:text-5xl text-brand block mb-2">
                {stat.value}
              </span>
              <span className="text-gray-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Dynamic Competition Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {competitionImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl border border-[#262626] group h-[280px] sm:h-[350px] ${image.span} shadow-2xl transition-all duration-300 hover:border-brand/40`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] text-brand font-black uppercase tracking-wider block mb-1">
                  Competidores Old City
                </span>
                <p className="text-white font-bold text-base sm:text-lg leading-tight uppercase font-display">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
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
