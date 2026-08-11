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
  title: {
    default: "Old City BJJ | Academia Omar Salum Cidade Velha - Belém",
    template: "%s | Old City BJJ Cidade Velha",
  },
  description: "Academia de Jiu-Jitsu (BJJ) e Muay Thai na Cidade Velha, Belém - PA. Linhagem oficial do Professor Omar Salum (Mestre Royler Gracie). Turmas Adulto e Kids. Agende sua aula experimental!",
  keywords: [
    "Old City BJJ",
    "Academia Omar Salum Cidade Velha",
    "Jiu-Jitsu Belém",
    "Jiu-Jitsu Cidade Velha",
    "BJJ Cidade Velha Belém",
    "Muay Thai Cidade Velha Belém",
    "Omar Salum Jiu-Jitsu",
    "Rocha Silva Combate",
    "Academia de Lutas Belém",
    "Aulas de Jiu-Jitsu Belém",
    "Jiu-Jitsu Kids Belém",
    "Defesa Pessoal Belém"
  ],
  authors: [{ name: "LGN Soluções" }],
  creator: "LGN Soluções",
  publisher: "Academia Omar Salum Cidade Velha - Old City BJJ",
  formatDetection: {
    telephone: true,
    address: true,
  },
  openGraph: {
    title: "Old City BJJ | Academia Omar Salum Cidade Velha - Belém",
    description: "Academia de Jiu-Jitsu (BJJ) e Muay Thai na Cidade Velha, Belém - PA. Linhagem oficial Professor Omar Salum.",
    url: "https://oldcitybjj.com.br",
    siteName: "Old City BJJ",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/assets/logos/old_city.jpeg",
        width: 800,
        height: 800,
        alt: "Old City BJJ Logo - Cidade Velha Belém",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Old City BJJ | Academia Omar Salum Cidade Velha",
    description: "Academia de Jiu-Jitsu (BJJ) e Muay Thai na Cidade Velha, Belém - PA. Agende sua aula experimental!",
    images: ["/assets/logos/old_city.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/old_city.ico",
    shortcut: "/old_city.ico",
    apple: "/assets/logos/old_city.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SportsActivityLocation", "LocalBusiness"],
    "name": "Academia Omar Salum Cidade Velha - Old City BJJ",
    "alternateName": ["Old City BJJ", "CT Combate Rocha Silva"],
    "description": "Centro de treinamento e academia de Jiu-Jitsu (BJJ) e Muay Thai na Cidade Velha, Belém - PA. Linhagem oficial do Professor Omar Salum.",
    "url": "https://oldcitybjj.com.br",
    "telephone": "+5591982489117",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Ângelo Custódio, 696 (entre Triunvirato e Veiga Cabral)",
      "addressLocality": "Belém",
      "addressRegion": "PA",
      "postalCode": "66020-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -1.4589,
      "longitude": -48.5028
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Wednesday", "Friday"],
        "opens": "12:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Thursday"],
        "opens": "20:00",
        "closes": "21:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/omarsalumbjjcidadevelha/",
      "https://www.google.com/maps?q=Academia+Omar+Salum+Cidade+Velha+-+Old+City+BJJ+Bel%C3%A9m"
    ],
    "image": "https://oldcitybjj.com.br/assets/logos/old_city.jpeg"
  };

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
