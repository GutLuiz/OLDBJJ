import React from "react";

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PlanCard {
  name: string;
  period: string;
  description: string;
  features: PlanFeature[];
  popular: boolean;
  ctaText: string;
}

export default function Plans() {
  const plans: PlanCard[] = [
    {
      name: "Plano Mensal",
      period: "Recorrência Mensal",
      description: "Ideal para quem busca flexibilidade máxima de curto prazo.",
      popular: false,
      ctaText: "Escolher Mensal",
      features: [
        { text: "Acesso livre a todas as turmas", included: true },
        { text: "Aulas de Jiu-Jitsu (Gi e No-Gi)", included: true },
        { text: "Professores altamente qualificados", included: true },
        { text: "Acesso aos vestiários e duchas", included: true },
        { text: "Desconto especial em seminários", included: false },
        { text: "Participação em eventos exclusivos", included: false },
      ],
    },
    {
      name: "Plano Trimestral",
      period: "Fidelidade de 3 Meses",
      description: "Perfeito para dar os primeiros passos e firmar o hábito de treino.",
      popular: false,
      ctaText: "Escolher Trimestral",
      features: [
        { text: "Acesso livre a todas as turmas", included: true },
        { text: "Aulas de Jiu-Jitsu (Gi e No-Gi)", included: true },
        { text: "Professores altamente qualificados", included: true },
        { text: "Acesso aos vestiários e duchas", included: true },
        { text: "Desconto especial em seminários", included: true },
        { text: "Participação em eventos exclusivos", included: false },
      ],
    },
    {
      name: "Plano Semestral",
      period: "Fidelidade de 6 Meses",
      description: "O mais procurado. Excelente equilíbrio entre tempo e evolução técnica.",
      popular: true,
      ctaText: "Matricular-se no Semestral",
      features: [
        { text: "Acesso livre a todas as turmas", included: true },
        { text: "Aulas de Jiu-Jitsu (Gi e No-Gi)", included: true },
        { text: "Professores altamente qualificados", included: true },
        { text: "Acesso aos vestiários e duchas", included: true },
        { text: "Desconto especial em seminários", included: true },
        { text: "Participação em eventos exclusivos", included: true },
      ],
    },
    {
      name: "Plano Anual",
      period: "Fidelidade de 12 Meses",
      description: "Para os verdadeiros focados no estilo de vida Jiu-Jitsu e melhor custo-benefício.",
      popular: false,
      ctaText: "Escolher Anual",
      features: [
        { text: "Acesso livre a todas as turmas", included: true },
        { text: "Aulas de Jiu-Jitsu (Gi e No-Gi)", included: true },
        { text: "Professores altamente qualificados", included: true },
        { text: "Acesso aos vestiários e duchas", included: true },
        { text: "Desconto especial em seminários", included: true },
        { text: "Participação em eventos exclusivos", included: true },
      ],
    },
  ];

  const getWhatsAppLink = (planName: string) => {
    const text = `Olá! Gostaria de obter mais informações sobre o ${planName} na Old City BJJ.`;
    return `https://wa.me/5591981123456?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="plans" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand font-bold uppercase tracking-widest text-xs border border-brand/20 bg-brand/5 px-3 py-1 rounded-full">
            Nossos Planos
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase mt-4">
            Escolha o Seu <span className="text-brand">Caminho</span>
          </h2>
          <div className="h-1.5 w-24 bg-brand mx-auto mt-6 rounded-full" />
          <p className="text-gray-400 mt-6 text-base sm:text-lg font-light leading-relaxed">
            Consulte planos com condições facilitadas no cartão. Invista em sua saúde,
            autodefesa e disciplina técnica.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col bg-[#121212] border rounded-2xl p-8 transition-all duration-300 relative ${
                plan.popular
                  ? "border-brand shadow-glow-red scale-105 md:scale-105 z-10 bg-[#161616]"
                  : "border-[#262626] hover:border-gray-700 hover:scale-[1.02]"
              }`}
            >
              {/* Highlight Tag */}
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-md">
                  Mais Popular
                </span>
              )}

              {/* Title & Slogan */}
              <div className="mb-6">
                <h3 className="font-display font-black text-2xl text-white uppercase">
                  {plan.name.replace("Plano ", "")}
                </h3>
                <span className="text-xs text-brand font-bold tracking-wider uppercase block mt-1">
                  {plan.period}
                </span>
                <p className="text-gray-500 text-xs mt-3 leading-relaxed min-h-[36px]">
                  {plan.description}
                </p>
              </div>

              {/* Decorative line */}
              <div className="h-px bg-[#262626] w-full mb-6" />

              {/* Features List */}
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    {feature.included ? (
                      <svg className="w-5 h-5 text-brand flex-shrink-0 mr-2.5 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-gray-700 flex-shrink-0 mr-2.5 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                    <span className={feature.included ? "text-gray-300" : "text-gray-600 line-through"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href={getWhatsAppLink(plan.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-center transition-all duration-300 ${
                  plan.popular
                    ? "bg-brand text-white hover:bg-brand-dark shadow-glow-red hover:shadow-glow-red-lg"
                    : "bg-[#1E1E1E] text-gray-300 hover:bg-brand hover:text-white border border-gray-800 hover:border-brand"
                }`}
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Disclaimer */}
        <div className="text-center mt-12 text-xs text-gray-600">
          *Não cobramos taxa de cancelamento abusiva. Valores de mensalidade e pacotes podem ser consultados diretamente via atendimento.
        </div>

      </div>
    </section>
  );
}
