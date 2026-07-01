import ServiceCard from "@/components/cards/servicesCards";
import RetroCarousel from "@/components/carousel";
import { Text } from "@/components/retroui/Text";
import { BotIcon, Bug, CloudBackup, Cog, Computer, LucideComputer, Monitor, WebcamIcon } from "lucide-react";
import { title } from "process";

export default function ServicesSection() {


  const servicos = [
    {
      title: "Landing Pages de Alta Conversão",
      description: "Desenvolvimento de páginas estratégicas focadas em transformar visitantes em clientes. Construímos o posicionamento ideal para sua marca se destacar e vender na era digital.",
      icon: <Monitor />
    },
    {
      title: "Sistemas Web Customizados",
      description: "Desenvolvimento de plataformas personalizadas, como sistemas ERP, automações e dashboards de controle. Simplifique processos internos, otimize o estoque e escale a operação do seu negócio.",
      icon: <Cog />
    },
    {
      title: "E-Commerce de Alta Performance",
      description: "Criação de lojas virtuais robustas, seguras e integradas aos principais meios de pagamento. Maximize seu alcance de mercado, impulsione suas vendas e fortaleça a presença da sua marca.",
      icon: <LucideComputer />
    },
    {
      title: "Cybersegurança & Testes de Intrusão",
      description: "Análise avançada de segurança através de testes de invasão (Pentest) em suas aplicações. Identificamos falhas críticas e entregamos relatórios técnicos sólidos para blindar o seu ecossistema digital.",
      icon: <Bug />
    },
    {
      title: "Inteligência Artificial & RAG",
      description: "Desenvolvimento de modelos de IA contextualizados com a base de conhecimento privada da sua empresa. Crie assistentes automatizados e ultra-personalizados para resolver desafios complexos do seu setor.",
      icon: <BotIcon />
    },
    {
      title: "Hospedagem & Suporte Contínuo",
      description: "Infraestrutura de nuvem de alta disponibilidade combinada com manutenção preventiva mensal. Garantimos estabilidade, atualizações de segurança e performance máxima para o seu projeto.",
      icon: <CloudBackup />
    },
  ]

  return (
    <>
      <div className="bg-background border rounded-md p-3 my-8 w-full h-full">

        {/* TEXTO DE APRESENTAÇÂO DOS SERVIÇOS */}
        <div className="grid grid-row-3 gap-2  ">
          <Text as="p">A paixão pode nos levar para qualquer lugar</Text>
          <Text as="h1">O que posso fazer por você?</Text>
        </div>


        {/* CARDS de SERVIÇOS */}
        <div className="flex py-4  gap-10 h-full">
          <RetroCarousel data={servicos.map(items => <ServiceCard key={title} {...items} />)} />
        </div>

      </div >


    </>
  )
}
