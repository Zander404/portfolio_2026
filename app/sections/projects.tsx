import { ProjectCard } from "@/components/cards/projectCards";
import { Text } from "@/components/retroui/Text";

export function ProjectSection() {

  const projects_data = [
    {
      title: "teste",
      description: "In 2022, Sweatcoin became the world's most downloaded Health & Fitness App. One of the features that helped to gain more than 66M downloads that year was 'Scratch The Prize'.",
      tags: ["Landing Page", "IA & RAG", "Sistema Web"],
      image: "./next.svg",
      link: "https://github.com"
    },
    {
      title: "teste",
      description: "In 2022, Sweatcoin became the world's most downloaded Health & Fitness App. One of the features that helped to gain more than 66M downloads that year was 'Scratch The Prize'.",
      tags: ["Hospedagem & Manutenção", "Sistema Web", "CyberSegurança"],
      image: "./next.svg",
      link: "https://github.com"
    },
    {
      title: "teste",
      description: "In 2022, Sweatcoin became the world's most downloaded Health & Fitness App. One of the features that helped to gain more than 66M downloads that year was 'Scratch The Prize'.",
      tags: ["E-Commerce", "Hospedagem & Manutenção"],
      image: "./next.svg",
      link: "https://github.com"
    },
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
