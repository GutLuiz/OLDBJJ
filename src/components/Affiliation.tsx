import React from "react";
import Image from "next/image";

export default function Affiliation() {
  return (
    <section className="py-16 bg-[#0E0E0E] border-b border-[#1C1C1C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="text-brand font-bold uppercase tracking-widest text-[10px] border border-brand/20 bg-brand/5 px-3 py-1 rounded-full">
            Filiação Oficial & Chancela
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight uppercase mt-3">
            Linhagem & <span className="text-brand">Autoridade</span>
          </h2>
          <div className="h-1 w-16 bg-brand mx-auto mt-4 rounded-full" />
        </div>

        {/* Side-by-Side Logos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Card 1: Mestre Omar Salum */}
          <div className="bg-[#121212] border border-[#262626] hover:border-brand/30 rounded-2xl p-8 flex flex-col sm:flex-row items-center text-center sm:text-left gap-6 transition-all duration-300 hover:shadow-glow-red group">
            <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-brand flex-shrink-0 shadow-glow-red group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/assets/logos/Omar_Salum.jpeg"
                alt="Omar Salum Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand">
                Supervisão Técnica
              </span>
              <h3 className="font-display font-black text-lg text-white uppercase group-hover:text-brand transition-colors">
                Equipe Omar Salum
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
                Metodologia oficial chancelada diretamente pelo Mestre Omar Salum, Faixa Preta 6º Grau. 
                Garantia de aprendizado com fundamentos consolidados e linhagem direta.
              </p>
            </div>
          </div>

          {/* Card 2: Old City BJJ */}
          <div className="bg-[#121212] border border-[#262626] hover:border-brand/30 rounded-2xl p-8 flex flex-col sm:flex-row items-center text-center sm:text-left gap-6 transition-all duration-300 hover:shadow-glow-red group">
            <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-brand flex-shrink-0 shadow-glow-red group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/assets/logos/old_city.jpeg"
                alt="Old City BJJ Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand">
                Unidade Cidade Velha
              </span>
              <h3 className="font-display font-black text-lg text-white uppercase group-hover:text-brand transition-colors">
                Old City BJJ
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
                Selo de qualidade da marca Old City BJJ em Belém. Tatame climatizado, 
                ambiente acolhedor familiar e infraestrutura premium na Cidade Velha.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
