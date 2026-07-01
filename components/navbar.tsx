"use client";
import Link from "next/link";
import { Button } from "./retroui/Button";
import { useState } from "react";
import { Menu } from "lucide-react";


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



        {/* MOBILE MENU */}

        <Button onClick={toggleMenu}
          className="flex items-center md:hidden flex-col border-2 text-center "
          aria-label="Abrir menu">
          <Menu />
        </Button>

        {/* MOBILE MENU (DROPDOWN) */}
        {isOpen && (
          <div className=" md:hidden mt-4 w-full border-4 border-black rounded-md bg-slate-50 p-6 flex flex-col">
            <nav className="flex flex-col -z-52 gap-4 font-black text-lg">
              {
                links.map(({ href, title }, index) => (
                  <Link key={title} href={href}>{title}</Link>
                )
                )
              }

            </nav>
          </div>
        )
        }






      </div>
    </div>
  )
}
