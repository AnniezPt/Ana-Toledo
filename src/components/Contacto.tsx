import { useState } from 'react';
import { Instagram, Linkedin, MessageCircle, Calendar, Mail } from 'lucide-react';

const services = [
  'Consultoría estratégica',
  'Marketing digital',
  'Social media',
  'No estoy seguro / a',
];

const WHATSAPP_URL = 'https://wa.me/34600000000';
const CALENDLY_URL = 'https://calendly.com/ana-toledo/15min';
const INSTAGRAM_URL = 'https://instagram.com/anatoledo';
const LINKEDIN_URL = 'https://linkedin.com/in/anatoledo';
const EMAIL = 'hola@anatoledo.com';

export default function Contacto() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `Web · Interés en ${data.get('servicio') || 'tus servicios'}`
    );
    const body = encodeURIComponent(
      `Hola Ana,\n\nSoy ${data.get('nombre')}.\n\n${data.get('mensaje')}\n\nResponder a: ${data.get('email')}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section
      id="contacto"
      className="bg-black text-white px-6 md:px-12 lg:px-16 py-20 md:py-28 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-4">
            Contacto
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-normal mb-5"
            style={{ letterSpacing: '-0.04em' }}
          >
            Hablemos de tu proyecto.
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-lg">
            Cuéntame en qué punto estás. Te respondo en 24 h con una propuesta de
            siguientes pasos, o te digo honestamente si no soy la persona indicada.
          </p>

          <div className="space-y-3">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between liquid-glass border border-white/10 rounded-xl px-5 py-4 hover:border-white/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Calendar size={18} className="text-white" />
                <div>
                  <p className="text-sm font-medium">Reservar videollamada</p>
                  <p className="text-xs text-gray-400">15 min · gratis · sin compromiso</p>
                </div>
              </div>
              <span className="text-gray-400 text-sm">→</span>
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between liquid-glass border border-white/10 rounded-xl px-5 py-4 hover:border-white/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <MessageCircle size={18} className="text-white" />
                <div>
                  <p className="text-sm font-medium">WhatsApp directo</p>
                  <p className="text-xs text-gray-400">Para preguntas rápidas</p>
                </div>
              </div>
              <span className="text-gray-400 text-sm">→</span>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center justify-between liquid-glass border border-white/10 rounded-xl px-5 py-4 hover:border-white/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-white" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-xs text-gray-400">{EMAIL}</p>
                </div>
              </div>
              <span className="text-gray-400 text-sm">→</span>
            </a>
          </div>

          <div className="flex items-center gap-4 mt-8 text-gray-400">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="liquid-glass rounded-2xl p-6 md:p-8 border border-white/10 space-y-5"
        >
          <div>
            <label htmlFor="nombre" className="block text-sm text-gray-300 mb-2">
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-white/40 transition-colors"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-gray-300 mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-white/40 transition-colors"
              placeholder="tucorreo@email.com"
            />
          </div>

          <div>
            <label htmlFor="servicio" className="block text-sm text-gray-300 mb-2">
              Servicio de interés
            </label>
            <select
              id="servicio"
              name="servicio"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/40 transition-colors"
              defaultValue=""
            >
              <option value="" disabled className="bg-black">
                Selecciona uno
              </option>
              {services.map((s) => (
                <option key={s} value={s} className="bg-black">
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="mensaje" className="block text-sm text-gray-300 mb-2">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={4}
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-white/40 transition-colors resize-none"
              placeholder="Cuéntame brevemente tu proyecto y en qué punto estás."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            {sent ? 'Abriendo correo...' : 'Enviar mensaje'}
          </button>

          <p className="text-xs text-gray-500">
            Al enviar este formulario aceptas que use tus datos para responderte.
            Nada más.
          </p>
        </form>
      </div>
    </section>
  );
}
