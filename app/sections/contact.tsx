import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";

export default function ContactSection() {
  return (
    <section className="w-full border-4 border-black bg-primary p-8 md:p-16 rounded-md select-none">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">

        {/* COLUNA ESQUERDA: TEXTOS E REDES SOCIAIS */}
        <div className="w-full lg:w-[45%] flex flex-col gap-6 text-left">
          <Text as="h2" className="text-3xl md:text-5xl font-black text-black leading-tight">
            Me conte sobre seu projeto
          </Text>

          <div className="flex flex-col gap-4 text-sm md:text-base font-medium text-black/90 leading-relaxed">
            <p>Qualquer projeto tem que começar de algum lugar. Eu posso fazer isso acontecer</p>
            <p>
              Depois de receber a messagem responderei no prazo de 2-3 dias uteis, perguntando mais sobre o projeto.
              Assim combinando uma dia para angedar uma reunião uma reunião para descutir sobre seu projeto e ver o que mais combina com vc.

            </p>
          </div>

          {/* INFO DE EMAIL */}
          <div className="mt-4">
            <span className="text-xs uppercase tracking-wider font-mono font-bold text-black/60 block">Me envie um email em:</span>
            <a href="mailto:contato.xandyy1@gmail.com" className="text-lg font-black text-black hover:underline mt-0.5 block">
              contato.xandyy1@gmail.com
            </a>
          </div>

        </div>

        {/* COLUNA DIREITA: FORMULÁRIO BRUTALISTA */}
        <form className="w-full lg:w-[50%] flex flex-col gap-4 text-left">

          {/* SEÇÃO DUPLA: NAME & EMAIL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Seu nome"
              required
              className="w-full border-3 border-black bg-white px-4 py-3 text-black placeholder-black/50 font-medium text-sm focus:outline-none focus:bg-white/20 transition-all rounded-none shadow-[2px_2px_0px_0px_#000]"
            />
            <input
              type="email"
              placeholder="Seu Email"
              required
              className="w-full border-3 border-black bg-white px-4 py-3 text-black placeholder-black/50 font-medium text-sm focus:outline-none focus:bg-white/20 transition-all rounded-none shadow-[2px_2px_0px_0px_#000]"
            />
          </div>

          {/* SEÇÃO DUPLA: SELECTS (PROJECT TYPE & BUDGET) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <select
                defaultValue=""
                required
                className="w-full border-3 border-black bg-white px-4 py-3 text-black font-medium text-sm appearance-none focus:outline-none focus:bg-white/20 transition-all rounded-none shadow-[2px_2px_0px_0px_#000] cursor-pointer"
              >
                <option value="" disabled>Tipo de Projeto</option>
                <option value="web" className="bg-white text-black">Sistemas Web / Landing Page</option>
                <option value="security" className="bg-white text-black">Cybersegurança / Pentest</option>
                <option value="ia" className="bg-white text-black">IA & Automação RAG</option>
              </select>
              {/* Seta customizada do select */}
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-black font-black">▼</div>
            </div>

            <div className="relative">
              <select
                defaultValue=""
                required
                className="w-full border-3 border-black bg-white px-4 py-3 text-black font-medium text-sm appearance-none focus:outline-none focus:bg-white/20 transition-all rounded-none shadow-[2px_2px_0px_0px_#000] cursor-pointer">
                <option value="" disabled>Faixa de Valor</option>
                <option value="1k-5k" className="bg-white text-black">R$1,000 - R$5,000</option>
                <option value="5k-10k" className="bg-white text-black">R$5,000 - R$10,000</option>
                <option value="10k+" className="bg-white text-black">R$10,000+</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-black font-black">▼</div>
            </div>
          </div>

          {/* INPUT: WEBSITE */}
          <input
            type="url"
            placeholder="Seu Link (seu link)"
            className="w-full border-3 border-black bg-white px-4 py-3 text-black placeholder-black/50 font-medium text-sm focus:outline-none focus:bg-white/20 transition-all rounded-none shadow-[2px_2px_0px_0px_#000]"
          />

          {/* TEXTAREA: DETAILS */}
          <textarea
            rows={5}
            placeholder="Descreva o que você deseja projeto"
            required
            className="w-full border-3 border-black bg-white px-4 py-3 text-black placeholder-black/50 font-medium text-sm focus:outline-none focus:bg-white/20 transition-all rounded-none shadow-[2px_2px_0px_0px_#000] resize-none"
          />

          {/* BOTÃO SUBMIT BRUTALISTA */}
          <div className="self-end mt-2">
            <Button
              type="submit"
              className="bg-primary text-black font-black text-sm uppercase border-3 border-black px-6 py-2.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-white/20 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all rounded-none"
            >
              Enviar
            </Button>
          </div>

        </form>

      </div>
    </section>
  );
}

