import { ProjectCard } from "@/components/cards/projectCards";
import { Text } from "@/components/retroui/Text";

export function ProjectSection() {

  const projects_data = [
    {
      title: "Doulas",
      description: "Sistema Web desenvolvido para centralizar e dar visibilidade ao trabalho das Doulas no estado de Goiás. A plataforma combina uma vitrine pública para divulgação de serviços especializados com um módulo administrativo focado no credenciamento e validação de profissionais da área.",
      tags: ["Sistema Web", "Blog", "Hospedagem & Manutenção"],
      image: "/projects/doulas_projects.webp",
      link: "https://adoulas.com"
    },
    {
      title: "Sistema de Laudos para Lavagem de Caminhão",
      description: "Aplicação Full Stack desenvolvida com Spring Boot e Next.js para gerenciamento e emissão de laudos de higienização de caminhões. A plataforma automatiza o controle de frotas vinculando veículos, motoristas e empresas, monitorando resíduos transportados e insumos químicos. Inclui autenticação segura, assinatura digital interativa na tela, histórico operacional e ordens de serviço dinâmicas. Responsável por todo o ciclo de DevOps, incluindo a arquitetura de implantação em nuvem, configuração do pipeline e manutenção preventiva contínua do ecossistema.",
      tags: ["Sistema Web", "FullStack", "Dev Ops", "Hospedagem & Manutenção"],
      image: "/projects/laudos_projects.png",
      link: "https://github.com/criasltda/laudos"
    },
    {
      title: "Aluguei Mudei",
      description: " Desenvolvimento da API do ecossistema Back-End com FastAPI para uma PropTech focada em locação residencial e comercial. O ecossistema gerencia o catálogo detalhado de imóveis, precificações dinâmicas e o ciclo de vida de contratos de locação. Conta com uma arquitetura escalável para controle de inquilinato e auditoria do histórico de locações de cada ativo imobiliário.",
      tags: ["Sistema Web", "BackEnd", "Hospedagem & Manutenção"],
      image: "/projects/aluguei_mudei_projects.png",
      link: "https://github.com/criasltda/aluguei_mudei"
    },
    {
      "title": "Iniciação Científica: Viés Racial em NLP Jurídico",
      "description": "Projeto de Pesquisa & Desenvolvimento (P&D) focado na quantificação e análise de viés racial em modelos de Aprendizado de Máquina aplicados a documentos de texto jurídico. O estudo resultou na produção de artigos técnicos e na validação de hipóteses metodológicas sobre ética, equidade e auditoria de algoritmos de inteligência artificial.",
      "tags": ["Pesquisa & Desenvolvimento", "AI Ethics", "NLP / PLN", "Machine Learning"],
      "image": "/projects/ic_projects.png",
      "link": "https://github.com/davi-ga/crawler-api/tree/xandy/matcher_rote"
    },
    {
      title: "TCC: Análise de LLMs na Pecuária Leiteira",
      description: "Estudo analítico e exploratório sobre a viabilidade e impacto da aplicação de Grandes Modelos de Linguagem (LLMs) no setor da pecuária leiteira. A pesquisa mapeou casos de uso práticos, gargalos de infraestrutura e desenvolveu um framework de avaliação para tomada de decisão tecnológica no agronegócio.",
      tags: ["Data Science", "LLM & GenAI", "Análise Exploratória", "Agtech"],
      image: "/projects/tcc_projects.png",
      link: "https://github.com/Zander404/TCC_DairyColletor"
    }


  ]

  return (
    <div className="flex flex-col w-full h-full justify-center text-center md:text-left border-black border-4 bg-background p-6 rounded-md">

      {/* CABEÇALHO DA SEÇÃO BRUTALISTA */}
      <div className="flex flex-row bg-secondary text-white p-6 md:p-8 justify-center items-center gap-6 md:gap-12 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <Text className="font-black text-accent text-center text-2xl md:text-4xl select-none" >
          X X X
        </Text>

        <Text as="h1" className="font-black text-3xl md:text-5xl uppercase tracking-wider text-white">
          Projetos
        </Text>

        <Text className="font-black text-accent text-center text-2xl md:text-4xl select-none">
          X X X
        </Text>
      </div>

      {/* CONTAINER DO LOOP DE CARDS */}
      <div className="w-full flex flex-col gap-8 mt-8">
        {projects_data.map((data, index) => (
          <ProjectCard
            key={index}
            index={index}
            title={data.title}
            description={data.description}
            tags={data.tags}
            link={data.link}
            image={data.image}
          />
        ))}
      </div>

    </div>
  );
}
