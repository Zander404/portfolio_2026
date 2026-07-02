
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
    "E-Comerce": "bg-lime-400 text-black",
    "CyberSegurança": "bg-rose-900 text-white",
    "IA & RAG": "bg-orange-300 text-black",
    "Hospedagem & Manutenção": "text-white bg-black"
  }
  return (
    <div
      /* 
        CORRIGIDO: 
        1. Mudado para flex-col no mobile e flex-row no desktop.
        2. Aplica md:flex-row-reverse automaticamente se o index for ímpar.
      */
      className={`flex flex-col w-full border-4 border-black bg-background rounded-none p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 gap-6 md:gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"
        }`}
    >
      {/* METADE TEXTO: w-full no mobile e md:w-1/2 no desktop */}
      <div className="w-full md:w-1/2 flex flex-col gap-3 justify-center">

        {/* 1. BADGES / TAGS SUPERIORES */}
        <div className="flex flex-wrap gap-2">
          {props.tags.map((tag, index) => {

            const currentColor = tagColors[tag] || "bg-white"
            return (
              <span
                key={index}
                className={`${currentColor} font-mono font-bold text-xs uppercase border-2 border-black px-2 py-0.5 shadow-[2px_2px_0px_0px_#000]`} >              {tag}
              </span>
            )
          }
          )
          }
        </div>

        {/* 2. TÍTULO PESADO (FONT-BLACK) */}
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
            View Now <ArrowUpRight className="w-4 h-4 stroke-[3]" />
          </Link>
        </div>
      </div>

      {/* METADE IMAGEM: w-full no mobile e md:w-1/2 no desktop */}
      {/* CORRIGIDO: Travado o tamanho da caixa de visualização em h-[250px] md:h-auto para a imagem não sumir */}
      <div className="w-full md:w-1/2 h-[250px] md:h-auto min-h-[250px] relative flex items-center justify-center">
        <div className="relative w-full h-full">

          {/* CAMADA DE SHADOW SILHUETA (PRETA) */}
          <div className="absolute inset-0 translate-x-2 translate-y-2 filter brightness-0 z-10 opacity-90">
            <Image
              src={props.image}
              alt=""
              className="object-cover border-4 border-black shadow-none"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* CAMADA DA IMAGEM REAL EM DESTAQUE */}
          <div className="absolute inset-0 z-20">
            <Image
              src={props.image}
              alt={props.title}
              className="object-cover border-4 border-black"
              fill
              sizes="(max-width: 768px) 100vw, 30vw"
              priority
            />
          </div>

        </div>
      </div>

    </div >
  );
}

