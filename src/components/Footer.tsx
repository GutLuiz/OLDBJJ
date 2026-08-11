import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // WhatsApp Url
  const whatsappUrl = "https://wa.me/5591982489117?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+as+aulas+de+Jiu-Jitsu.";

  return (
    <footer className="bg-[#070707] border-t border-[#1F1F1F] text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          {/* Column 1: About */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-brand flex-shrink-0">
                <Image
                  src="/assets/logos/old_city.jpeg"
                  alt="Old City BJJ Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-display font-black tracking-wider text-white text-md uppercase">
                Old City <span className="text-brand">BJJ</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-500">
              O Centro de Treinamento de Combate Rocha Silva, inscrito no CNPJ nº 66.200.368/0001-01, é um espaço dedicado ao ensino, treinamento e aperfeiçoamento em Jiu-Jitsu, Defesa Pessoal, Muay Thai e preparação física.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.instagram.com/omarsalumbjjcidadevelha/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#121212] flex items-center justify-center text-gray-400 hover:text-brand hover:bg-[#1A1A1A] border border-[#262626] transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#121212] flex items-center justify-center text-gray-400 hover:text-brand hover:bg-[#1A1A1A] border border-[#262626] transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.742.002-2.602-1.005-5.048-2.839-6.884-1.833-1.836-4.271-2.846-6.883-2.847-5.445 0-9.87 4.373-9.874 9.745-.002 2.03.535 4.02 1.558 5.776L2.24 21.625l5.034-1.32c-.628-.016.715.345.373.15z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-bold tracking-wide uppercase text-sm font-display border-l-2 border-brand pl-2">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/#home" className="hover:text-brand transition-colors">Início</Link>
              </li>
              <li>
                <Link href="/espaco" className="hover:text-brand transition-colors">Nosso Espaço</Link>
              </li>
              <li>
                <Link href="/#schedule" className="hover:text-brand transition-colors">Grade de Horários</Link>
              </li>
              <li>
                <Link href="/#plans" className="hover:text-brand transition-colors">Nossos Planos</Link>
              </li>
              <li>
                <Link href="/#instructors" className="hover:text-brand transition-colors">Professores & Instrutores</Link>
              </li>
              <li>
                <Link href="/competicoes" className="hover:text-brand transition-colors">Competições</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-bold tracking-wide uppercase text-sm font-display border-l-2 border-brand pl-2">
              Contato
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Rua Ângelo Custódio, 696 (entre Triunvirato e Veiga Cabral) - Cidade Velha, Belém - PA</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(91) 98248-9117</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="border-t border-[#1F1F1F] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>© {currentYear} Old City BJJ. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">
            Desenvolvido por{" "}
            <a
              href="https://wa.me/5591998154336?text=Ol%C3%A1%21+Gostaria+de+ter+um+site."
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand font-medium transition-colors"
            >
              LGN Soluções
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
