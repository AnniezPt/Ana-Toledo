import { useEffect, useRef, useState } from 'react';
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
      { href: '#servicios', label: 'Todos los servicios' },
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
      { href: '#contacto', label: 'Vista general' },
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
  const navRef = useRef<HTMLDivElement | null>(null);

  const handleEnter = (i: number) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setOpenIndex(i);
  };

  const handleLeave = () => {
    closeTimeout.current = setTimeout(() => setOpenIndex(null), 200);
  };

  useEffect(() => {
    if (openIndex === null) return;
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenIndex(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [openIndex]);

  return (
    <div
      ref={navRef}
      className="fixed top-0 left-0 right-0 px-4 sm:px-6 md:px-12 lg:px-16 pt-4 md:pt-6 z-50"
    >
      <nav className="liquid-glass rounded-xl px-3 md:px-4 py-2 flex items-center justify-between gap-2 !overflow-visible">
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
                onClick={(e) => {
                  if (link.sub) {
                    e.preventDefault();
                    setOpenIndex(openIndex === i ? null : i);
                  } else {
                    setOpenIndex(null);
                  }
                }}
                className="inline-flex items-center gap-1 text-sm text-white hover:text-gray-300 transition-colors px-3 py-2 cursor-pointer select-none"
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
                <div className="absolute top-full left-0 pt-2">
                  <div className="liquid-glass rounded-xl py-2 min-w-[240px] flex flex-col">
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
        <div className="md:hidden mt-2 liquid-glass rounded-xl px-2 py-2 flex flex-col max-h-[calc(100vh-6rem)] overflow-y-auto">
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
