import React from "react";

interface ActivityCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Activities() {
  const cards: ActivityCard[] = [
    {
      title: "Horários Flexíveis",
      description: "Treinos divididos no horário do almoço e à noite. Encaixe o Jiu-Jitsu, Muay Thai ou Boxe perfeitamente na sua rotina.",
      icon: (
        <svg className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Ênfase em Jiu-Jitsu (BJJ)",
      description: "O BJJ é nossa modalidade principal. Metodologia sólida para raspagens, passagens, finalizações e defesa pessoal eficiente.",
      icon: (
        <svg className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Turmas Adulto",
      description: "Treinos desenhados especificamente para homens e mulheres adultas, do iniciante ao graduado, com máximo respeito e segurança.",
      icon: (
        <svg className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Striking: Muay Thai & Boxe",
      description: "Complemente seu treino no tatame com modalidades de trocação para aprimorar seu condicionamento físico e agilidade.",
      icon: (
        <svg className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="activities" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-brand/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-brand/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand font-bold uppercase tracking-widest text-xs border border-brand/20 bg-brand/5 px-3 py-1 rounded-full">
            Diferenciais
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase mt-4">
            Por que Escolher a <span className="text-brand">Old City BJJ</span>?
          </h2>
          <div className="h-1.5 w-24 bg-brand mx-auto mt-6 rounded-full" />
          <p className="text-gray-400 mt-6 text-base sm:text-lg font-light leading-relaxed">
            Oferecemos uma infraestrutura de ponta e metodologia consagrada para proporcionar 
            a melhor experiência de aprendizado, segurança e bem-estar físico e mental.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group bg-[#121212] hover:bg-[#161616] border border-[#262626] hover:border-brand/40 p-8 rounded-2xl transition-all duration-300 flex flex-col items-start hover:shadow-glow-red hover:-translate-y-2 relative"
            >
              {/* Subtle top brand accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-brand rounded-t-2xl transition-colors duration-300" />
              
              {/* Icon Container */}
              <div className="p-4 rounded-xl bg-[#1A1A1A] group-hover:bg-brand/10 border border-[#262626] group-hover:border-brand/20 mb-6 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-brand transition-colors duration-300">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
