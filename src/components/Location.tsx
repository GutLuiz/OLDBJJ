import React from "react";

export default function Location() {
  const gymName = "Academia Omar Salum Cidade Velha - Old City BJJ";
  const address = "Rua Ângelo Custódio, 696 (entre Triunvirato e Veiga Cabral) - Cidade Velha, Belém - PA";
  const mapsUrl = "https://www.google.com/maps?sca_esv=fc004d589c879ddc&hl=pt-BR&output=search&q=Academia+Omar+Salum+Cidade+Velha+-+Old+City+BJJ+Bel%C3%A9m&source=lnms&fbs=ABfTbFVGaQeaqnsRPI5sOMG32KszkLt6nAp8aiRKj5vMjqZApNpVvru9ixr0n1v-xHgyxKmzaezuVb3bC12oyuZkvJQ6khi3CZBGSZSBzdGUseAnwzYXgaRPGFBHSm6o1uC2eLF_bYMNmNNXp35Ow24RLHsGhCZEmheQCv2t5UEuDhhtJjtDZdHANW9oVtnkLFBpo6EvbBBu1-ScGD0EM_jSVxU4l5XH8Q&entry=mc&ved=1t:200715&ictx=111";

  return (
    <section id="location" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand font-bold uppercase tracking-widest text-xs border border-brand/20 bg-brand/5 px-3 py-1 rounded-full">
            Localização
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase mt-4">
            Como Nos <span className="text-brand">Encontrar</span>
          </h2>
          <div className="h-1.5 w-24 bg-brand mx-auto mt-6 rounded-full" />
          <div className="text-gray-400 mt-6 text-base sm:text-lg font-light leading-relaxed space-y-3">
            <p>
              Estamos localizados no coração histórico de Belém, capital do Estado do Pará, no querido e tradicional bairro da Cidade Velha. Um lugar onde história, cultura e Jiu-Jitsu se encontram.
            </p>
            <p>
              Venha nos fazer uma visita, conhecer de perto nossa estrutura, nosso tatame e sentir a energia da nossa equipe.
            </p>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-[#121212] border border-[#262626] p-8 sm:p-10 rounded-2xl flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* Subtle glow accent */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand/10 rounded-full filter blur-2xl" />

            <div className="space-y-8">
              <h3 className="font-display font-black text-2xl text-white uppercase tracking-wide">
                Informações de <span className="text-brand">Contato & Local</span>
              </h3>

              <div className="space-y-6">
                {/* Gym Name & Address Item */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand flex-shrink-0 mt-1">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wide">{gymName}</h4>
                    <p className="text-gray-400 text-sm mt-1 leading-relaxed">{address}</p>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand flex-shrink-0 mt-1">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wide">Telefone / WhatsApp</h4>
                    <p className="text-gray-400 text-sm mt-1">(91) 98248-9117</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div className="mt-10 border-t border-[#1C1C1C] pt-8">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-white bg-brand hover:bg-brand-dark transition-all duration-300 shadow-glow-red hover:shadow-glow-red-lg hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Ver Rota no Google Maps
              </a>
            </div>

          </div>

          {/* Styled Google Maps Iframe */}
          <div className="lg:col-span-7 h-[450px] lg:h-auto min-h-[400px] border border-[#262626] rounded-2xl overflow-hidden shadow-2xl relative group">
            {/* The filter class simulates dark mode map; transitions to colored map on hover */}
            <iframe
              src="https://maps.google.com/maps?q=Academia+Omar+Salum+Cidade+Velha+-+Old+City+BJJ,+Rua+%C3%82ngelo+Cust%C3%B3dio,+696+-+Cidade+Velha,+Bel%C3%A9m+-+PA&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter grayscale invert contrast-95 opacity-80 group-hover:filter-none group-hover:opacity-100 transition-all duration-700 ease-in-out"
              title="Localização da Academia Omar Salum Cidade Velha - Old City BJJ no Google Maps"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
