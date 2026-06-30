
"use client";

import { useState, useRef, useEffect, ReactNode } from "react";

interface DropdownOption {
  label: string;
  onClick?: () => void;
}

interface DropdownIconProps {
  icon: ReactNode; // Aceita qualquer ícone (Lucide, FontAwesome, SVG, etc.)
  items: DropdownOption[];
}

export function DropdownIcon({ icon, items }: DropdownIconProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* BOTÃO DISPARADOR (QUADRADO RETRÔ) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-black bg-white font-black text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
        aria-label="Abrir menu"
      >
        <div className="transition-transform duration-200">
          {icon}
        </div>
      </button>

      {/* MENU SUSPENSO */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 z-50 rounded-md border-4 border-black bg-white p-1 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] animate-in fade-in zoom-in-95 duration-100">
          <div className="flex flex-col gap-1">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  if (item.onClick) item.onClick();
                  setIsOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-sm font-bold text-black rounded hover:bg-black hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

