import React from "react";
import type { Metadata } from "next";
import EspacoContent from "@/components/EspacoContent";

export const metadata: Metadata = {
  title: "Nosso Espaço | Old City BJJ",
  description: "Conheça a infraestrutura da Old City BJJ na Cidade Velha. Tatame de alto padrão, vestiários com chuveiro, ambiente 100% climatizado e propriedade feminina.",
};

export default function EspacoPage() {
  return <EspacoContent />;
}
