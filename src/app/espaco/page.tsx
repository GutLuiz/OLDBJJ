import React from "react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosso Espaço | Old City BJJ",
  description: "Conheça a infraestrutura da Old City BJJ na Cidade Velha. Tatame de alto padrão, vestiários com chuveiro, ambiente 100% climatizado e propriedade feminina.",
};

interface Amenity {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function EspacoPage() {
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

  const galleryImages = [
    {
      src: "/assets/espaco/espaco-1.png",
      alt: "Tatame Amplo da Old City BJJ",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      src: "/assets/espaco/espaco-2.webp",
      alt: "Área de Convivência e Detalhes da Academia",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      src: "/assets/espaco/espaco-3.webp",
      alt: "Equipamentos e Higienização do Tatame",
      span: "md:col-span-1 md:row-span-1",
    },
  ];

  const whatsappUrl = "https://wa.me/5591981123456?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+visita+para+conhecer+o+espa%C3%A7o+da+Old+City+BJJ.";

  return (
    <div className="bg-[#0A0A0A] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand font-bold uppercase tracking-widest text-xs border border-brand/20 bg-brand/5 px-3 py-1 rounded-full">
            Nossa Infraestrutura
          </span>
          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase mt-4">
            O Nosso <span className="text-brand">Espaço</span>
          </h1>
          <div className="h-1.5 w-24 bg-brand mx-auto mt-6 rounded-full" />
          <p className="text-gray-400 mt-6 text-base sm:text-lg font-light leading-relaxed">
            Oferecemos uma das melhores infraestruturas de treino de Belém. 
            Nosso espaço foi meticulosamente planejado para proporcionar conforto, higiene absoluta e alta absorção de impactos.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl border border-[#262626] group h-[300px] sm:h-[380px] ${image.span} shadow-2xl transition-all duration-300 hover:border-brand/40`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Blur vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Image Description Card */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] text-brand font-black uppercase tracking-wider block mb-1">
                  Galeria Old City
                </span>
                <p className="text-white font-bold text-lg leading-tight uppercase font-display">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Amenities Split List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Text block */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-brand font-bold uppercase tracking-widest text-xs">
              Diferenciais Físicos
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase leading-none">
              Planejado para o Seu <span className="text-brand">Bem-Estar</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed">
              Sabemos que a prática do Jiu-Jitsu exige esforço físico e dedicação mental. Por isso, 
              nosso tatame conta com camadas de absorção premium que atenuam quedas, e nossas instalações 
              são limpas constantemente com produtos antibactericidas adequados.
            </p>
            <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed">
              Sendo um espaço sob gerência feminina, zelamos pelos valores de respeito absoluto, 
              organização exemplar e acolhimento familiar.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
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
            Agende uma aula experimental gratuita ou venha nos visitar para tirar dúvidas e conhecer a estrutura pessoalmente.
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
