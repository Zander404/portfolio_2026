
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  index: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export function ProjectCard(props: ProjectCardProps) {
  // Define se o card atual é par ou ímpar com base no index passado por prop
  const isEven = props.index % 2 === 0;

  const tagColors: Record<string, string> = {
    "Landing Page": "bg-blue-400 text-black",
    "Sistema Web": "bg-amber-400 text-black",
    "E-Commerce": "bg-lime-400 text-black",
    "CyberSegurança": "bg-rose-900 text-white",
    "IA & RAG": "bg-orange-300 text-black",
    "Hospedagem & Manutenção": "text-white bg-black",
    "Data Science": "bg-purple-400 text-black",
    "LLM & GenAI": "bg-cyan-300 text-black",
    "Análise Exploratória": "bg-pink-400 text-black",
    "AI Ethics": "bg-red-400 text-black",
    "NLP / PLN": "bg-indigo-400 text-white",
    "Back-End": "bg-emerald-400 text-black",
    "Full Stack": "bg-teal-300 text-black",
    "Infraestrutura & DevOps": "bg-zinc-800 text-white"
  };

  return (
    <div
      className={`flex flex-col w-full border-4 border-black bg-background rounded-none p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 gap-6 md:gap-8 items-stretch ${isEven ? "md:flex-row" : "md:flex-row-reverse"
        }`}
    >
      {/* METADE TEXTO */}
      <div className="w-full md:w-1/2 flex flex-col gap-3 justify-center">
        {/* 1. BADGES / TAGS SUPERIORES */}
        <div className="flex flex-wrap gap-2">
          {props.tags.map((tag, index) => {
            const currentColor = tagColors[tag] || "bg-white text-black";
            return (
              <span
                key={index}
                className={`${currentColor} font-mono font-bold text-xs uppercase border-2 border-black px-2 py-0.5 shadow-[2px_2px_0px_0px_#000]`}
              >
                {tag}
              </span>
            );
          })}
        </div>

        {/* 2. TÍTULO PESADO */}
        <h3 className="text-2xl md:text-3xl font-black text-black leading-tight tracking-wide uppercase">
          {props.title}
        </h3>

        {/* 3. DESCRIÇÃO PLANA */}
        <p className="text-sm md:text-base text-black/90 font-medium leading-relaxed text-justify">
          {props.description}
        </p>

        <div className="mt-2 self-start">
          <Link
            href={props.link}
            className="inline-flex items-center gap-2 bg-accent text-black font-black text-sm uppercase border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-amber-400 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
          >
            Visite <ArrowUpRight className="w-4 h-4 stroke-[3]" />
          </Link>
        </div>
      </div>

      {/* METADE IMAGEM: Ocupa todo o espaço perfeitamente sem espaços vazios */}
      {/* Mudamos md:h-auto para md:h-[350px] para dar uma proporção perfeita em telas maiores */}
      <div className="w-full md:w-1/2 h-[250px] md:h-[350px] relative border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        <Image
          src={props.image}
          alt={props.title}
          className="object-cover" // 👈 Cover preenche tudo sem deformar os eixos X/Y da imagem
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    </div>
  );
}

