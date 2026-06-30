
import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full h-full items-center justify-center p-6 text-center md:text-left border-black border-4 bg-background rounded-md gap-8 md:gap-4">

      {/* PRESENTATION PANEL */}
      <div className="flex flex-col w-full md:w-1/2 items-center md:items-start justify-center h-full pt-4 md:pt-8">
        <p className="font-mono text-lg md:text-xl uppercase tracking-wider mb-2 text-black">Olá, meu nome é Xandyy</p>

        {/* CORRIGIDO: Mudado de text-base para text-4xl/md:text-5xl para dar o destaque de um H2 brutalista */}
        <Text className="text-4xl md:text-5xl text-center md:text-left font-black text-black leading-tight" as="h2">
          Construindo o motor por trás da tela.
        </Text>
        <br />

        <Text as="p" className="indent-8 w-full text-base md:text-lg text-justify text-wrap text-muted-foreground font-medium">
          Desenvolvedor Back-End movido pela curiosidade. Atualmente blindando sistemas com CyberSegurança e integrando IA para resolver problemas complexos do mundo real.
        </Text>

        <div className="">
          <Button >
            <Link className="flex flex-row items-center gap-2" href="#contact_us">
              Entrar em Contato <ArrowUpRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* PHOTO WITH FRAME & FLOATING ELEMENTS CONTAINER */}
      {/* CORRIGIDO: Mudado de w-1/2 fixo para w-full no mobile e md:w-1/2 no desktop */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="relative w-full max-w-[400px] h-[400px] flex items-center justify-center">

          {/* THE MAIN BG CARD CONTAINER */}
          <div className="relative w-[320px] h-[320px] sm:w-[340px] sm:h-[340px] bg-accent border-4 border-black rounded-[40px] overflow-hidden flex items-end justify-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">

            {/* ACTIVE IMAGE WORKSPACE */}
            <div className="relative w-full h-[110%] top-6">

              {/* BLACK SILHOUETTE SHADOW LAYER */}
              <div className="absolute inset-0 translate-x-2.5 translate-y-1.5 filter brightness-0 z-10 opacity-90">
                <Image
                  src="/avatar.png"
                  alt=""
                  fill
                  sizes="340px"
                  className="object-contain object-bottom"
                  priority
                />
              </div>

              {/* MAIN GRAYSCALE FOREGROUND IMAGE LAYER */}
              <div className="absolute inset-0 filter grayscale z-20">
                <Image
                  src="/avatar.png"
                  alt="Developer Profile"
                  fill
                  sizes="340px"
                  className="object-contain object-bottom"
                  priority
                />
              </div>

            </div>

            {/* 3. BOTTOM LEFT: Absolute Positioned Retro Badge Element */}
            <div className="absolute bottom-6 left-6 z-30 w-14 h-14 bg-white border-4 border-black rounded-full flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-6 h-6 border-l-4 border-t-4 border-black transform -rotate-45 translate-x-0.5 translate-y-0.5"></div>
            </div>
          </div>

          {/* 4. MID RIGHT: "Available for freelance" Pill Tag */}
          <div className="absolute -right-2 sm:-right-4 top-[25%] z-30 flex flex-col items-center pointer-events-none sm:pointer-events-auto">
            <svg className="w-12 h-12 absolute -top-10 -left-6 transform -rotate-12 hidden sm:block" viewBox="0 0 100 100" fill="none">
              <path d="M10,80 Q50,10 90,40" stroke="black" strokeWidth="6" fill="none" strokeDasharray="4 4" />
              <polygon points="90,40 80,30 75,45" fill="black" />
            </svg>

            <Badge
              variant="default"
              className="bg-white text-black border-4 border-black font-bold px-4 py-1.5 text-xs shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-full whitespace-nowrap"
            >
              Available for freelance
            </Badge>
          </div>

          {/* 5. BOTTOM RIGHT: Neo-Brutalist Starburst Sticker with Hover Rotation */}
          <div className="absolute bottom-2 right-4 z-30 w-14 h-14 bg-amber-400 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] [clip-path:polygon(50%_0%,_61%_35%,_98%_35%,_68%_57%,_79%_91%,_50%_70%,_21%_91%,_32%_57%,_2%_35%,_39%_35%)] transition-transform duration-500 hover:rotate-[360deg] cursor-pointer">
          </div>

        </div>
      </div>

    </div>
  );
}

