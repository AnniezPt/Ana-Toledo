import { Compass, Megaphone, Sparkles, Check } from 'lucide-react';

const pillars = [
  {
    icon: Compass,
    title: 'Consultoría estratégica',
    intro:
      'Para negocios que necesitan claridad antes de invertir tiempo y dinero en marketing.',
    items: [
      'Auditoría de marca y posicionamiento',
      'Análisis del modelo de negocio',
      'Optimización de procesos comerciales',
      'Mentorías 1 a 1 (mensuales o por proyecto)',
    ],
  },
  {
    icon: Megaphone,
    title: 'Marketing digital',
    intro:
      'Sistemas de adquisición que generan oportunidades de venta de forma predecible.',
    items: [
      'Publicidad en Meta Ads y Google Ads',
      'Posicionamiento SEO técnico y de contenido',
      'Email marketing y automatizaciones',
      'Diseño y optimización de embudos de venta',
    ],
  },
  {
    icon: Sparkles,
    title: 'Social media',
    intro:
      'Cuentas que crecen con sentido y conectan con la audiencia que de verdad compra.',
    items: [
      'Mentoría para la gestión estratégica de tus cuentas',
      'Guía y dirección para la creación de contenido (Reels y TikToks)',
      'Dirección de arte y pautas para el diseño de tu perfil',
      'Estrategias de crecimiento orgánico',
    ],
  },
];

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="bg-black text-white px-6 md:px-12 lg:px-16 py-20 md:py-28 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-4">
            Servicios
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-normal mb-5"
            style={{ letterSpacing: '-0.04em' }}
          >
            Tres pilares para hacer crecer tu negocio.
          </h2>
          <p className="text-base md:text-lg text-gray-300">
            Trabajo bajo un mismo método: entender tu negocio, definir una
            estrategia clara y ejecutarla con foco. Puedes contratar un único
            pilar o combinarlos según el momento en el que estés.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.title}
                className="liquid-glass rounded-2xl p-6 md:p-8 border border-white/10 flex flex-col"
              >
                <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="text-2xl font-medium mb-3">{p.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  {p.intro}
                </p>
                <ul className="space-y-3 mb-8">
                  {p.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-gray-200"
                    >
                      <Check
                        size={16}
                        className="text-white mt-[2px] shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className="mt-auto text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Hablemos sobre este servicio →
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
