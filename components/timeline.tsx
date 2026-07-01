"use client";

import * as React from "react";
import { Text } from "@/components/retroui/Text"
import TimelineCard from "./cards/timelineCard";

interface TimeLineItem {
  id: string;
  ano: string;
  year: string;
  title: string;
  text: string;
}

interface TimelineDataProps {
  timelineData: TimeLineItem[];
}

export default function RetroTimeLine({ timelineData }: TimelineDataProps) {
  // Inicialização segura do estado ativo
  const [activeId, setActiveId] = React.useState(timelineData[0]?.id || "");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
      setActiveId(id);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-2 bg-accent border-4 border-black rounded-md flex gap-8 relative select-none">

      {/* PAINEL DA LINHA DO TEMPO (ESQUERDA) */}
      <div className="flex-1 h-[340px] overflow-y-hidden scroll-smooth flex flex-col gap-6">
        {timelineData.map((item) => (
          /* 
            CORRIGIDO: 
            1. Movido o id={item.id} para a div externa para o clique do botão funcionar.
            2. Trocado h-full por min-h-[320px] max-h-[320px] para travar o tamanho exato de cada slide.
          */
          <div
            key={item.id}
            id={item.id}
            className="w-full min-h-[340px] max-h-[340px] flex flex-shrink-0  items-center justify-center snap-start"
          >
            <TimelineCard
              id={item.id}
              year={item.year}
              title={item.title}
              description={item.text}
            />
          </div>
        ))}
      </div>

      {/* CONTROLES DE NAVEGAÇÃO VERTICAL (DIREITA) */}
      <div className="flex flex-col justify-center gap-3 pr-2">
        {timelineData.map((item) => (
          <button
            key={`btn-${item.id}`}
            onClick={() => scrollToSection(item.id)}
            aria-label={`Ir para o ano ${item.year}`}
            className={`w-5 h-5 border-4 border-black transition-all shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${activeId === item.id
              ? "bg-black scale-110"
              : "bg-white hover:bg-black/20"
              }`}
          />
        ))}
      </div>

    </div>
  );
}

