"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavLink {
  label: string;
  href: string;
  isAnchor: boolean;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Navigation Links
  const navLinks: NavLink[] = [
    { label: "Início", href: "/#home", isAnchor: true },
    { label: "Espaço", href: "/espaco", isAnchor: false },
    { label: "Professores", href: "/#instructors", isAnchor: true },
    { label: "Competições", href: "/competicoes", isAnchor: false },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page or anchor change
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: NavLink) => {
    setIsOpen(false);
    
    // If we are on a subpage and click an anchor, let Next.js handle the routing to homepage.
    // If we are on homepage and click an anchor, we can do a smooth scroll.
    if (link.isAnchor && pathname === "/") {
      e.preventDefault();
      const targetId = link.href.replace("/#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 90;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  // Target WhatsApp link
  const whatsappUrl = "https://wa.me/5591981123456?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+aula+experimental+de+Jiu-Jitsu+na+Old+City+BJJ.";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A0A0A] bg-opacity-95 backdrop-blur-md border-b border-[#262626] py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand transition-transform duration-300 group-hover:scale-105 group-hover:border-brand-light shadow-glow-red flex-shrink-0">
              <Image
                src="/assets/logos/old_city.jpeg"
                alt="Old City BJJ Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black tracking-wider text-white text-lg leading-tight uppercase">
                Old City <span className="text-brand">BJJ</span>
              </span>
              <span className="text-[10px] text-gray-400 font-medium tracking-widest uppercase">
                Omar Salum - Cidade Velha
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive =
                (!link.isAnchor && pathname === link.href) ||
                (link.isAnchor && pathname === "/" && typeof window !== "undefined" && window.location.hash === link.href.replace("/", ""));
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`px-3 py-2 rounded-md text-sm font-medium tracking-wide transition-colors duration-200 ${
                    isActive
                      ? "text-brand border-b-2 border-brand rounded-none font-bold"
                      : "text-gray-300 hover:text-brand"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider text-white bg-brand hover:bg-brand-dark transition-all duration-300 shadow-glow-red hover:shadow-glow-red-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              Aula Experimental
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-400 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden absolute inset-x-0 top-full bg-[#0A0A0A] border-b border-[#262626] transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible pointer-events-none"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              className="block px-3 py-3.5 rounded-md text-base font-semibold tracking-wide text-gray-300 hover:text-brand hover:bg-[#121212] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 px-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center block px-5 py-3 rounded-full text-sm font-bold uppercase tracking-wider text-white bg-brand hover:bg-brand-dark transition-all duration-300 shadow-glow-red"
            >
              Agendar Aula Experimental
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
