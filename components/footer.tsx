import { Copyright } from "lucide-react";
import Image from "next/image";
import { Text } from "./retroui/Text";
import Link from "next/link";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (

    <footer className="bg-primary w-full border-t-4 border-black p-6 relative z-40">

      <div className="max-w-6xl mx-auto flex flex-col-reverse items-center sm:flex-row justify-between gap-6 px-4">

        {/* AVATAR BRANDING */}
        <div className="flex items-center justify-center border-4 border-black bg-white w-12 h-12 rounded-xl shadow-[3px_3px_0px_rgba(0,0,0,1)] p-1 overflow-hidden">
          <Image
            src="/avatar.png"
            alt="Xandyy Avatar Logo"
            width={36}
            height={36}
            className="object-contain object-bottom"
            priority
          />
        </div>

        {/* COPYRIGHT INFO */}
        <div className="flex items-center justify-center gap-2 font-mono font-bold text-black">
          <Copyright className="w-5 h-5 stroke-[2.5]" />
          <Text as="p" className="text-sm md:text-base text-center uppercase tracking-wide">
            2026 - Xandyy - All Rights Reserved
          </Text>
        </div>

        {/* SOCIAL PANEL */}
        <div className="flex flex-col items-center sm:items-start gap-2">
          <Text as="h4" className="font-black text-sm uppercase tracking-wider text-black">
            Redes Sociais
          </Text>

          {/* BOTÕES DE REDES SOCIAIS ESTILO NEO-BRUTALISTA */}
          <div className="flex flex-row gap-3">

            <Link
              href="https://github.com/Zander404"
              target="_blank"
              aria-label="Acessar GitHub"
              className="w-10 h-10 bg-white text-black border-4 border-black rounded-xl flex items-center justify-center shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:bg-amber-400 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            >
              <FaGithub className="w-5 h-5" />
            </Link>

            <Link
              href="https://instagram.com/xandy_tradicional"
              target="_blank"
              aria-label="Acessar Instagram"
              className="w-10 h-10 bg-white text-black border-4 border-black rounded-xl flex items-center justify-center shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:bg-amber-400 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            >
              <FaInstagram className="w-5 h-5" />
            </Link>

            <Link
              href="https://wa.me/+5562992383814"
              target="_blank"
              aria-label="Falar no WhatsApp"
              className="w-10 h-10 bg-white text-black border-4 border-black rounded-xl flex items-center justify-center shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:bg-amber-400 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            >
              <FaWhatsapp className="w-5 h-5" />
            </Link>

          </div>
        </div>

      </div>
    </footer>
  );
}
