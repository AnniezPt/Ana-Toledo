import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#casos', label: 'Casos de éxito' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-6 md:px-12 lg:px-16 pt-6 relative z-20">
      <nav className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
        <a href="#inicio" className="text-2xl font-semibold tracking-tight">
          ANA<span className="text-gray-400">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white hover:text-gray-300 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="hidden md:inline-flex bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
        >
          Agendar cita
        </a>

        <button
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white p-2"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mt-2 liquid-glass rounded-xl px-4 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-white hover:text-gray-300 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium text-center hover:bg-gray-100 transition-colors"
          >
            Agendar cita
          </a>
        </div>
      )}
    </div>
  );
}
