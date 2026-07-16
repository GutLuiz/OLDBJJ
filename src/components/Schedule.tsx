"use client";

import React, { useState, useEffect } from "react";

interface ClassSession {
  time: string;
  name: string;
  category: "Adulto" | "Kids" | "Feminino" | "Competição";
  level: string;
  coach: string;
}

interface WeeklySchedule {
  [day: string]: ClassSession[];
}

export default function Schedule() {
  const daysOfWeek = [
    { key: "seg", label: "Segunda-feira" },
    { key: "ter", label: "Terça-feira" },
    { key: "qua", label: "Quarta-feira" },
    { key: "qui", label: "Quinta-feira" },
    { key: "sex", label: "Sexta-feira" },
    { key: "sab", label: "Sábado" },
  ];

  const scheduleData: WeeklySchedule = {
    seg: [
      { time: "06:30 - 07:30", name: "Jiu-Jitsu Adulto", category: "Adulto", level: "Todos os níveis", coach: "Prof. Omar Salum" },
      { time: "08:30 - 09:30", name: "Jiu-Jitsu Adulto", category: "Adulto", level: "Iniciantes", coach: "Inst. Auxiliar" },
      { time: "12:00 - 13:00", name: "Jiu-Jitsu Adulto", category: "Adulto", level: "Treino Livre", coach: "Todos os Professores" },
      { time: "17:00 - 18:00", name: "Jiu-Jitsu Kids", category: "Kids", level: "4 a 12 anos", coach: "Profª. Especializada" },
      { time: "18:00 - 19:00", name: "Jiu-Jitsu Feminino", category: "Feminino", level: "Exclusivo Feminino", coach: "Profª. Responsável" },
      { time: "19:30 - 21:00", name: "Jiu-Jitsu Adulto", category: "Adulto", level: "Fundamentos & Graduados", coach: "Mestre Omar Salum" },
    ],
    ter: [
      { time: "06:30 - 07:30", name: "Jiu-Jitsu No-Gi (Sem Kimono)", category: "Adulto", level: "Todos os níveis", coach: "Prof. Omar Salum" },
      { time: "08:30 - 09:30", name: "Jiu-Jitsu Adulto", category: "Adulto", level: "Iniciantes", coach: "Inst. Auxiliar" },
      { time: "17:00 - 18:00", name: "Jiu-Jitsu Kids", category: "Kids", level: "4 a 12 anos", coach: "Profª. Especializada" },
      { time: "18:30 - 19:30", name: "Jiu-Jitsu Adulto", category: "Adulto", level: "Iniciantes", coach: "Inst. Auxiliar" },
      { time: "19:45 - 21:15", name: "Jiu-Jitsu Competidores", category: "Competição", level: "Avançado / Competição", coach: "Mestre Omar Salum" },
    ],
    qua: [
      { time: "06:30 - 07:30", name: "Jiu-Jitsu Adulto", category: "Adulto", level: "Todos os níveis", coach: "Prof. Omar Salum" },
      { time: "08:30 - 09:30", name: "Jiu-Jitsu Adulto", category: "Adulto", level: "Iniciantes", coach: "Inst. Auxiliar" },
      { time: "12:00 - 13:00", name: "Jiu-Jitsu Adulto", category: "Adulto", level: "Treino Livre", coach: "Todos os Professores" },
      { time: "17:00 - 18:00", name: "Jiu-Jitsu Kids", category: "Kids", level: "4 a 12 anos", coach: "Profª. Especializada" },
      { time: "18:00 - 19:00", name: "Jiu-Jitsu Feminino", category: "Feminino", level: "Exclusivo Feminino", coach: "Profª. Responsável" },
      { time: "19:30 - 21:00", name: "Jiu-Jitsu Adulto", category: "Adulto", level: "Fundamentos & Graduados", coach: "Mestre Omar Salum" },
    ],
    qui: [
      { time: "06:30 - 07:30", name: "Jiu-Jitsu No-Gi (Sem Kimono)", category: "Adulto", level: "Todos os níveis", coach: "Prof. Omar Salum" },
      { time: "08:30 - 09:30", name: "Jiu-Jitsu Adulto", category: "Adulto", level: "Iniciantes", coach: "Inst. Auxiliar" },
      { time: "17:00 - 18:00", name: "Jiu-Jitsu Kids", category: "Kids", level: "4 a 12 anos", coach: "Profª. Especializada" },
      { time: "18:30 - 19:30", name: "Jiu-Jitsu Adulto", category: "Adulto", level: "Iniciantes", coach: "Inst. Auxiliar" },
      { time: "19:45 - 21:15", name: "Jiu-Jitsu Competidores", category: "Competição", level: "Avançado / Competição", coach: "Mestre Omar Salum" },
    ],
    sex: [
      { time: "06:30 - 07:30", name: "Jiu-Jitsu Adulto", category: "Adulto", level: "Todos os níveis", coach: "Prof. Omar Salum" },
      { time: "08:30 - 09:30", name: "Jiu-Jitsu Adulto", category: "Adulto", level: "Iniciantes", coach: "Inst. Auxiliar" },
      { time: "12:00 - 13:00", name: "Jiu-Jitsu Adulto", category: "Adulto", level: "Treino Livre", coach: "Todos os Professores" },
      { time: "17:00 - 18:00", name: "Jiu-Jitsu Kids", category: "Kids", level: "4 a 12 anos", coach: "Profª. Especializada" },
      { time: "18:00 - 19:00", name: "Jiu-Jitsu Feminino", category: "Feminino", level: "Exclusivo Feminino", coach: "Profª. Responsável" },
      { time: "19:30 - 21:00", name: "Jiu-Jitsu Adulto (Sparring)", category: "Adulto", level: "Graduados - Rola", coach: "Mestre Omar Salum" },
    ],
    sab: [
      { time: "09:00 - 10:30", name: "Treino Livre Coletivo", category: "Adulto", level: "Todos os níveis", coach: "Supervisão Geral" },
      { time: "10:30 - 12:00", name: "Jiu-Jitsu Competição", category: "Competição", level: "Foco Competidores", coach: "Mestre Omar Salum" },
    ],
  };

  const [activeDay, setActiveDay] = useState("seg");

  // Auto-detect current weekday on mount
  useEffect(() => {
    const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, ...
    const dayMap = ["sab", "seg", "ter", "qua", "qui", "sex", "sab"]; // Sunday defaults to Saturday or Monday
    const currentDayKey = dayMap[today] || "seg";
    setActiveDay(currentDayKey);
  }, []);

  const getCategoryColor = (category: ClassSession["category"]) => {
    switch (category) {
      case "Kids":
        return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
      case "Feminino":
        return "bg-pink-500/10 text-pink-400 border-pink-500/20";
      case "Competição":
        return "bg-red-500/10 text-red-400 border-red-500/20";
      default:
        return "bg-brand/10 text-brand border-brand/20";
    }
  };

  return (
    <section id="schedule" className="py-24 bg-[#0F0F0F] border-y border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand font-bold uppercase tracking-widest text-xs border border-brand/20 bg-brand/5 px-3 py-1 rounded-full">
            Grade Oficial
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase mt-4">
            Nossos Horários de <span className="text-brand">Treino</span>
          </h2>
          <div className="h-1.5 w-24 bg-brand mx-auto mt-6 rounded-full" />
          <p className="text-gray-400 mt-6 text-base sm:text-lg font-light">
            Encontre a turma que melhor se adapta aos seus objetivos e nível de experiência.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {daysOfWeek.map((day) => (
            <button
              key={day.key}
              onClick={() => setActiveDay(day.key)}
              className={`px-5 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
                 activeDay === day.key
                  ? "bg-brand text-white border-brand shadow-glow-red"
                  : "bg-[#161616] text-gray-400 border-[#262626] hover:text-white hover:border-gray-600"
              }`}
            >
              {day.label}
            </button>
          ))}
        </div>

        {/* Schedule Display */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#121212] border border-[#262626] rounded-2xl overflow-hidden shadow-2xl">
            <div className="divide-y divide-[#222222]">
              {scheduleData[activeDay]?.length > 0 ? (
                scheduleData[activeDay].map((session, index) => (
                  <div
                    key={index}
                    className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 hover:bg-[#161616] transition-colors duration-300 group"
                  >
                    {/* Time Column */}
                    <div className="flex items-center space-x-3 sm:w-1/4">
                      <svg className="w-5 h-5 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-white font-black text-lg tracking-wider font-display">
                        {session.time}
                      </span>
                    </div>

                    {/* Class Details Column */}
                    <div className="flex-1 space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-white font-bold text-lg group-hover:text-brand transition-colors duration-300">
                          {session.name}
                        </h4>
                        <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border ${getCategoryColor(session.category)}`}>
                          {session.category}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm font-light">
                        Nível: <span className="text-gray-300 font-medium">{session.level}</span>
                      </p>
                    </div>

                    {/* Coach Column */}
                    <div className="sm:w-1/4 flex items-center space-x-2 text-sm text-gray-500 sm:justify-end">
                      <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="font-medium group-hover:text-gray-400 transition-colors">
                        {session.coach}
                      </span>
                    </div>

                  </div>
                ))
              ) : (
                <div className="p-12 text-center text-gray-500 font-light">
                  Nenhum treino agendado para este dia.
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
