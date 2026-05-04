export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-12 lg:px-16 py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Ana Toledo. Madrid.</p>
        <div className="flex items-center gap-5">
          <a href="#inicio" className="hover:text-white transition-colors">
            Inicio
          </a>
          <a href="#servicios" className="hover:text-white transition-colors">
            Servicios
          </a>
          <a href="#casos" className="hover:text-white transition-colors">
            Casos
          </a>
          <a href="#contacto" className="hover:text-white transition-colors">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
