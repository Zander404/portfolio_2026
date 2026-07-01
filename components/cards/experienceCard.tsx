import { Badge } from "../retroui/Badge";
import { Card } from "../retroui/Card";

interface ExperienceProps {
  exp: {
    id: string;
    role: string;
    company: string;
    location: string;
    period: string;
    highlights: string[]
  }
}

export default function ExperienceCard({ exp }: ExperienceProps) {
  return (
    <Card

      key={exp.id}
      className="w-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all border-4 border-black bg-white p-6 md:p-8 flex flex-col gap-4"
    >
      {/* HEADER DO CARD: Cargo, Empresa e Período */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-dashed border-black/20 pb-4">
        <div>
          <h3 className="text-xl md:text-2xl font-black text-black uppercase tracking-wide">
            {exp.role}
          </h3>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className="font-bold text-base text-accent">{exp.company}</span>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground font-medium">{exp.location}</span>
          </div>
        </div>

        {/* Badge de Período Brutalista */}
        <Badge className="bg-accent text-black border-2 border-black font-mono font-bold text-sm px-3 py-1 self-start md:self-center shadow-[2px_2px_0px_rgba(0,0,0,1)]">
          {exp.period}
        </Badge>
      </div>

      {/* LISTA DE CONQUISTAS/BULLET POINTS */}
      <Card.Content className="p-0">
        <ul className="flex flex-col gap-3 list-none pl-0">
          {exp.highlights.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-gray-700 font-medium leading-relaxed">
              {/* Marcador quadrado customizado brutalista */}
              <span className="w-2.5 h-2.5 bg-black border border-black transform rotate-45 mt-2 flex-shrink-0" />
              <p>{bullet}</p>
            </li>
          ))}
        </ul>
      </Card.Content>

    </Card>

  )
}
