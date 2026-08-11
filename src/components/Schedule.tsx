"use client";

import React, { useState, useEffect } from "react";

interface ClassSession {
  time: string;
  name: string;
  category: "Adulto" | "Kids" | string;
  level: string;
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
      { time: "12:00 - 13:00", name: "Jiu-Jitsu Adulto (Turma 02 — Gi)", category: "Adulto", level: "Prof. Nascimento • Gi (Com Kimono)" },
      { time: "16:00 - 17:00", name: "Jiu-Jitsu Kids (Turma 03)", category: "Kids", level: "Profª. Liah Santos • Infantil / Kids" },
      { time: "19:30 - 20:30", name: "Jiu-Jitsu Adulto (Turma 01 — Gi)", category: "Adulto", level: "Prof. Nascimento • Gi (Com Kimono)" },
    ],
    ter: [
      { time: "20:00 - 21:00", name: "Muay Thai", category: "Muay Thai", level: "Instrutora Amanda Nunes • Todos os níveis" },
    ],
    qua: [
      { time: "12:00 - 13:00", name: "Jiu-Jitsu Adulto (Turma 02 — Gi)", category: "Adulto", level: "Prof. Nascimento • Gi (Com Kimono)" },
      { time: "16:00 - 17:00", name: "Jiu-Jitsu Kids (Turma 03)", category: "Kids", level: "Profª. Liah Santos • Infantil / Kids" },
      { time: "19:30 - 20:30", name: "Jiu-Jitsu Adulto (Turma 01 — Gi)", category: "Adulto", level: "Prof. Nascimento • Gi (Com Kimono)" },
      { time: "20:30 - 21:30", name: "Muay Thai", category: "Muay Thai", level: "Instrutora Amanda Nunes • Todos os níveis" },
    ],
    qui: [
      { time: "20:00 - 21:00", name: "Muay Thai", category: "Muay Thai", level: "Instrutora Amanda Nunes • Todos os níveis" },
    ],
    sex: [
      { time: "12:00 - 13:00", name: "Jiu-Jitsu Adulto (Turma 02 — No-Gi)", category: "Adulto", level: "Prof. Nascimento • No-Gi (Sem Kimono)" },
      { time: "16:00 - 17:00", name: "Jiu-Jitsu Kids (Turma 03)", category: "Kids", level: "Profª. Liah Santos • Infantil / Kids" },
      { time: "20:00 - 21:00", name: "Jiu-Jitsu Adulto (Turma 01 — No-Gi)", category: "Adulto", level: "Prof. Nascimento • No-Gi (Sem Kimono)" },
    ],
    sab: [],
  };

  const [activeDay, setActiveDay] = useState("seg");

  // Auto-detect current weekday on mount
  useEffect(() => {
    const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, ...
    const dayMap: { [key: number]: string } = { 1: "seg", 2: "ter", 3: "qua", 4: "qui", 5: "sex" };
    const currentDayKey = dayMap[today] || "seg";
    setActiveDay(currentDayKey);
  }, []);

  return (
    <section id="schedule" className="py-24 bg-[#0F0F0F] border-y border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand font-bold uppercase tracking-widest text-xs border border-brand/20 bg-brand/5 px-3 py-1 rounded-full">
            Grade Oficial
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase mt-4">
            Horários de <span className="text-brand">Treino</span>
          </h2>
          <div className="h-1.5 w-24 bg-brand mx-auto mt-6 rounded-full" />
          <p className="text-gray-400 mt-6 text-base sm:text-lg font-light">
            Aulas de Jiu-Jitsu (BJJ) Adulto &amp; Kids e Muay Thai.
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
                    <div className="flex items-center space-x-3 sm:w-1/3">
                      <svg className="w-5 h-5 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-white font-black text-lg tracking-wider font-display">
                        {session.time}
                      </span>
                    </div>

                    {/* Class Details Column */}
                    <div className="flex-1 space-y-1.5">
                      <div className="flex flex-wrap items-center gap-3">
                        <h4 className="text-white font-bold text-lg group-hover:text-brand transition-colors duration-300">
                          {session.name}
                        </h4>
                        <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border ${
                          session.category === "Kids"
                            ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                            : session.category === "Muay Thai"
                            ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                            : "bg-brand/10 text-brand border-brand/20"
                        }`}>
                          {session.category}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm font-light">
                        Detalhes: <span className="text-gray-300 font-medium">{session.level}</span>
                      </p>
                    </div>

                  </div>
                ))
              ) : (
                <div className="p-12 text-center text-gray-500 font-light space-y-2">
                  <p className="text-gray-400 font-medium">Sem treinos regulares programados para este dia.</p>
                  <p className="text-xs text-gray-600">Fique atento aos nossos canais oficiais para eventos e aulões de fim de semana.</p>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
