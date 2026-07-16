import type { Metadata } from "next";
import { Montserrat, Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Old City BJJ | Academia Omar Salum - Cidade Velha",
  description: "Faça uma aula experimental na Old City BJJ Cidade Velha. Jiu-Jitsu para adultos, kids e feminino. Sob a liderança do Mestre Omar Salum. Venha treinar no melhor tatame da região!",
  keywords: ["Jiu-Jitsu", "Jiu-Jitsu Belém", "Old City BJJ", "Omar Salum", "Cidade Velha Belém", "Defesa Pessoal", "Artes Marciais Belém", "BJJ"],
  authors: [{ name: "LGN Soluções" }],
  icons: {
    icon: "/assets/logos/old_city.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${outfit.variable} font-sans bg-[#0A0A0A] text-[#F3F4F6] min-h-screen antialiased flex flex-col`}
      >
        <Header />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
