import { Text } from "@/components/retroui/Text";
import Image from "next/image";


export function AboutMeSection() {

  return (
    <div className="flex flex-col w-full h-full justify-center text-center md:text-left border-black border-4 bg-background rounded-md">
      <div className="flex flex-col md:flex-row items-center p-6 gap-12">

        {/* PHOTO WITH FRAME & FLOATING ELEMENTS CONTAINER */}
        <div className="relative w-full max-w-[400px] h-[400px] flex items-center justify-center">

          {/* THE MAIN BG CARD CONTAINER */}
          <div className="relative w-[340px] h-[340px] bg-accent border-4 border-black rounded-[40px] overflow-hidden flex items-end justify-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">

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

          </div>
        </div>




        {/* ABOUT ME TEXT */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <Text as="h1" className="text-3xl font-black uppercase tracking-wide text-black mb-2">
            Sobre Mim
          </Text>

          <Text as="p" className="text-lg text-muted-foreground leading-relaxed text-justify">
            Sou um desenvolvedor especializado em construir soluções robustas de Back-End com <strong className="text-black font-bold">Python e Spring Boot</strong>, além de criar interfaces modernas, rápidas e fluidas utilizando <strong className="text-black font-bold">Next.js</strong>. Minha paixão é explorar o ecossistema tecnológico para conectar infraestruturas eficientes a experiências de usuário excepcionais.
          </Text>

          <Text as="p" className="text-lg text-muted-foreground leading-relaxed text-justify">
            Movido pela curiosidade intelectual e pelo aprendizado contínuo, busco constantemente desafios complexos que envolvam arquitetura de software, otimização de sistemas e engenharia de dados. Estou sempre pronto para transformar problemas de negócios em códigos limpos, seguros e escaláveis.
          </Text>


          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border-2 border-black p-4 rounded-xl bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-bold text-black mb-2">🧠 Backend & Infra</h3>
              <p className="text-sm text-muted-foreground">Python, Java (Spring Boot), APIs RESTful, SQL/NoSQL, Docker.</p>
            </div>
            <div className="border-2 border-black p-4 rounded-xl bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-bold text-black mb-2">🎨 Frontend & UI</h3>
              <p className="text-sm text-muted-foreground">Next.js, React, TypeScript, Tailwind CSS, Neo-Brutalismo.</p>
            </div>
          </div>
        </div>

      </div>


    </div>
  )

}
