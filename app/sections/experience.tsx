import { Card } from "@/components/retroui/Card";
import { Badge } from "@/components/retroui/Badge";
import { Text } from "@/components/retroui/Text";
import { Briefcase } from "lucide-react";
import ExperienceCard from "@/components/cards/experienceCard";

export function ExperienceSection() {

  const experiencias = [
    {
      id: "exp-compass",
      period: "11/2024 - 05/2025",
      role: "Engenheiro de Software Back-End",
      company: "Compass UOL",
      location: "Remoto",
      highlights: [
        "Desenvolveu microsserviços escaláveis em Java e Spring Boot, aumentando a resiliência do sistema e otimizando o tempo de resposta em 20%.",
        "Implementou arquitetura orientada a eventos para garantir integração fluida e comunicação assíncrona estável através do Apache Kafka.",
        "Orquestrou a implantação contínua e o monitoramento de sistemas críticos diretamente em ambientes de nuvem elástica da AWS."
      ]
    },
    {
      id: "exp-aluguei",
      period: "03/2026 - 05/2026",
      role: "Freelancer (Engenharia de Software)",
      company: "Aluguei Mudei",
      location: "Anápolis, GO",
      highlights: [
        "Mapeou especificações técnicas complexas de um ecossistema de administração predial, reduzindo o escopo de retrabalho em 15% por meio de engenharia de requisitos.",
        "Implementou processos de Fine-Tuning em LLMs pré-treinados, elevando a acurácia de análises preditivas em documentos judiciais em 18% para mitigar vieses algorítmicos de forma automatizada.",
        "Executou rotinas de testes automatizados e validações de qualidade ponta a ponta para mitigar falhas estruturais antes da implantação do sistema."
      ]
    },
    {
      id: "exp-ifg",
      period: "09/2023 - 10/2024",
      role: "Pesquisador em Engenharia de IA / R&D Project",
      company: "IFG / CNPq",
      location: "Anápolis, GO",
      highlights: [
        "Construiu crawlers resilientes e pipelines de dados automatizados voltados para a coleta, mineração e análise avançada de grandes volumes de dados textuais públicos.",
        "Desenvolveu APIs estáveis de alta performance com FastAPI e Docker, reduzindo a latência de requisições de processamento de texto em 25% via arquitetura modular.",
        "Implementou modelos de Aprendizado de Máquina para classificação textual e NLP, aumentando a precisão na detecção e quantização de vieses algorítmicos em 18%.",
        "Conduziu análise exploratória de dados não estruturados utilizando bibliotecas de Machine Learning (Python/Scikit-Learn) para auditoria automatizada de documentos."
      ]
    },
    {
      id: "exp-codetower",
      period: "11/2021 - 08/2023",
      role: "Vice-presidente & Desenvolvedor Full Stack",
      company: "Code Tower",
      location: "Anápolis, GO",
      highlights: [
        "Liderou equipes multidisciplinares de engenharia e gerenciamento, otimizando fluxos financeiros que reduziram custos operacionais em 12% e garantiram a sustentabilidade de operações SaaS.",
        "Desenhou e implementou arquiteturas robustas utilizando Django, Django REST Framework e Next.js, otimizando a comunicação entre APIs RESTful e o front-end.",
        "Orquestrou o deploy de aplicações em ambientes Oracle Cloud utilizando PostgreSQL e Docker para garantir alta disponibilidade e isolamento completo de recursos.",
        "Arquitetou esteiras de CI/CD sob a cultura DevOps, reduzindo o tempo de entrega de novas funcionalidades e mitigando falhas em produção."
      ]
    }
  ];


  return (
    <section className="w-full py-16 px-6 bg-accent border-t-4 border-black">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">

        {/* TÍTULO DA SEÇÃO */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary border-4 border-black rounded-xl flex items-center justify-center shadow-[3px_3px_0px_rgba(0,0,0,1)]">
            <Briefcase className="w-6 h-6 text-black stroke-[2.5]" />
          </div>
          <Text as="h2" className="text-3xl md:text-4xl font-black uppercase text-black tracking-wide">
            Experiência Profissional
          </Text>
        </div>

        {/* FEED DE EXPERIÊNCIAS */}
        <div className="h-[640px] overflow-y-auto scroll-fade scrollbar-thumb-primary ">
          <div className="flex flex-col gap-8">
            {experiencias.map((exp) => (
              <ExperienceCard key={exp.id} exp={exp} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

