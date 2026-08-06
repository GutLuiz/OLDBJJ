import React from "react";
import type { Metadata } from "next";
import CompeticoesContent from "@/components/CompeticoesContent";

export const metadata: Metadata = {
  title: "Competições | Old City BJJ",
  description: "Conheça a trajetória competitiva da Old City BJJ Belém. Títulos estaduais, nacionais e mundiais sob a liderança do Mestre Omar Salum. Faça parte dos campeões!",
};

export default function CompeticoesPage() {
  return <CompeticoesContent />;
}
