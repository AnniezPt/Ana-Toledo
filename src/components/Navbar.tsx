import { useRef, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

type NavLink = {
  href: string;
  label: string;
  sub?: { href: string; label: string }[];
};

const navLinks: NavLink[] = [
  {
    href: '#inicio',
    label: 'Inicio',
    sub: [
      { href: '#inicio', label: 'Portada' },
      { href: '#problema', label: '¿Tus redes no venden?' },
      { href: '#lo-que-hago', label: 'Lo que hago' },
      { href: '#marcas', label: 'Marcas' },
      { href: '#testimonios', label: 'Testimonios' },
    ],
  },
  {
    href: '#servicios',
    label: 'Servicios',
    sub: [
      { href: '#consultoria', label: 'Consultoría estratégica' },
      { href: '#marketing-digital', label: 'Marketing digital' },
      { href: '#social-media', label: 'Social media' },
    ],
  },
  { href: '#casos', label: 'Casos de éxito' },
  {
    href: '#sobre-mi',
    label: 'Sobre mí',
    sub: [
      { href: '#sobre-mi', label: 'Mi historia' },
      { href: '#valores', label: 'Mis valores' },
    ],
  },
  {
    href: '#contacto',
    label: 'Contacto',
    sub: [
      { href: '#reservar', label: 'Reservar videollamada' },
      { href: '#whatsapp', label: 'WhatsApp' },
      { href: '#email', label: 'Email' },
      { href: '#formulario', label: 'Formulario' },
    ],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileSubOpen, setMobileSubOpen] = useState<number | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = (i: number) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setOpenIndex(i);
  };

  const handleLeave = () => {
    closeTimeout.current = setTimeout(() => setOpenIndex(null), 120);
  };

  return (
    <div className="px-6 md:px-12 lg:px-16 pt-6 relative z-30">
      <nav className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between !overflow-visible">
        <a
          href="#inicio"
          className="text-xl md:text-2xl font-semibold tracking-tight whitespace-nowrap"
        >
          ANA TOLEDO<span className="text-gray-400">.</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.sub && handleEnter(i)}
              onMouseLeave={handleLeave}
            >
              <a
                href={link.href}
                onClick={() => setOpenIndex(null)}
                className="inline-flex items-center gap-1 text-sm text-white hover:text-gray-300 transition-colors px-3 py-2"
              >
                {link.label}
                {link.sub && (
                  <ChevronDown
                    size={14}
                    className={`opacity-60 transition-transform ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </a>

              {link.sub && openIndex === i && (
                <div
                  onMouseEnter={() => handleEnter(i)}
                  onMouseLeave={handleLeave}
                  className="absolute top-full left-0 mt-2 liquid-glass rounded-xl py-2 min-w-[240px] flex flex-col"
                >
                  {link.sub.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      onClick={() => setOpenIndex(null)}
                      className="text-sm text-gray-200 hover:text-white hover:bg-white/10 px-4 py-2 transition-colors"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
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
        <div className="md:hidden mt-2 liquid-glass rounded-xl px-2 py-2 flex flex-col">
          {navLinks.map((link, i) => (
            <div key={link.label}>
              <div className="flex items-center justify-between">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex-1 text-sm text-white hover:text-gray-300 px-3 py-2 transition-colors"
                >
                  {link.label}
                </a>
                {link.sub && (
                  <button
                    aria-label="Submenú"
                    onClick={() =>
                      setMobileSubOpen(mobileSubOpen === i ? null : i)
                    }
                    className="px-3 py-2 text-gray-400"
                  >
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        mobileSubOpen === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                )}
              </div>
              {link.sub && mobileSubOpen === i && (
                <div className="flex flex-col pl-3 border-l border-white/10 ml-3 mb-2">
                  {link.sub.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      onClick={() => {
                        setOpen(false);
                        setMobileSubOpen(null);
                      }}
                      className="text-sm text-gray-300 hover:text-white px-3 py-2 transition-colors"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium text-center hover:bg-gray-100 transition-colors mt-2"
          >
            Agendar cita
          </a>
        </div>
      )}
    </div>
  );
}
