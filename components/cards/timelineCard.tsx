import { Card } from "@/components/retroui/Card";

interface TimelineCardProps {
  id: string;
  year: string;
  title: string;
  description: string;
}

export default function TimelineCard({ year, title, description }: TimelineCardProps) {
  return (
    /* CORRIGIDO: h-full e flex flex-col para organizar o espaço interno */
    <Card className="w-full h-full shadow-none hover:shadow-none flex flex-col p-6 bg-white border-4 border-black box-border">

      {/* TOPO: Ano e Título fixos (flex-shrink-0 impede que sumam) */}
      <div className="flex items-center gap-4 mb-4 flex-shrink-0">
        <div className="bg-amber-400 text-black font-black px-4 py-1.5 border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rounded-sm">
          {year}
        </div>
        <h3 className="font-black text-xl text-black uppercase tracking-wide">{title}</h3>
      </div>

      {/* TEXTO: Agora ele ganha rolagem se for maior do que o espaço disponível do card */}
      {/* As classes [&::-webkit-scrollbar]:hidden e scrollbar-none escondem a barra feia do navegador */}
      <div className="flex-1 overflow-y-auto pr-1 text-left text-sm md:text-base font-medium text-gray-700 leading-relaxed [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <p className="whitespace-pre-line">{description}</p>
      </div>

    </Card>
  );
}
