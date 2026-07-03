"use client";
import Link from "next/link";
import { Button } from "./retroui/Button";
import { useState } from "react";
import { Menu, X } from "lucide-react";


export default function NavBar() {

  const links = [
    { href: "#hero", title: "Inicio" },
    // { href: "#service", title: "Serviços" },
    // { href: "#profissional_experience", title: "Experiência" },
    { href: "#about_me", title: "Sobre mim" },
    { href: "#projects", title: "Projetos" },
    { href: "#contact_us", title: "Contato" },


  ]

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen)


  return (
    <div className="bg-background w-full p-4 sticky top-0 z-50">
      {/* LOGO */}
      <div className="flex flex-1 items-center justify-between rounded-md border-b border-t p-4 ">
        <div className="font-black  text-center">
          <h1 className="font-black text-xl">XANDYY</h1>
        </div>

        {/* LINKS */}
        <div className="hidden md:block">
          <nav className="flex flex-1 justify-between gap-6">
            {
              links.map(({ href, title }) => {
                return (
                  <Link key={title} className="hover:text-secondary hover:underline" href={href}>{title}</Link>
                )
              })
            }

          </nav>
        </div>


        {/* ENTRAR EM CONTATO */}
        <div className="hidden sm:block">
          <Button className="bg-secondary text-primary  hover:text-secondary">Entre em Contato</Button>
        </div>



        <div className="relative md:hidden">
          {/* MOBILE MENU BUTTON */}
          <Button
            onClick={toggleMenu}
            className="flex flex-col items-center justify-center border-2 text-center md:hidden"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          {/* MOBILE MENU (DROPDOWN) */}
          {isOpen && (
            <div className="absolute right-0 top-full z-50 mt-2 w-64 rounded-md border-4 border-black bg-slate-50 p-6 md:hidden">
              <nav className="flex flex-col gap-4 text-lg font-black">
                {links.map(({ href, title }) => (
                  <Link
                    key={title}
                    href={href}
                    onClick={toggleMenu} // Fecha o menu automaticamente ao mudar de página
                    className="hover:underline"
                  >
                    {title}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
