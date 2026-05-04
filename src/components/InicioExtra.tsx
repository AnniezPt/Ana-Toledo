import { Compass, Megaphone, Sparkles } from 'lucide-react';

const previewServices = [
  {
    icon: Compass,
    title: 'Consultoría estratégica',
    description:
      'Auditorías de marca, modelos de negocio y mentorías 1 a 1 para tomar decisiones con cabeza.',
  },
  {
    icon: Megaphone,
    title: 'Marketing digital',
    description:
      'Meta Ads, Google Ads, SEO, email marketing y embudos de venta que convierten.',
  },
  {
    icon: Sparkles,
    title: 'Social media',
    description:
      'Gestión integral, contenido (Reels, TikToks), diseño de feed y estrategias de crecimiento.',
  },
];

const logos = ['Atelier', 'Nordic Co.', 'Lume', 'Bravo', 'Casa Verde', 'Studio 9'];

export default function InicioExtra() {
  return (
    <>
      <section className="bg-black text-white px-6 md:px-12 lg:px-16 py-20 md:py-28 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-4">
            ¿Te suena?
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-normal"
            style={{ letterSpacing: '-0.03em' }}
          >
            ¿Tus redes no venden?
            <br />
            <span className="text-gray-400">
              Te ayudo a convertir seguidores en clientes.
            </span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Publicas todos los días, inviertes en anuncios y aún así las ventas no
            llegan. El problema casi nunca es el contenido: es la estrategia que hay
            (o no) detrás. Vamos a ordenarla.
          </p>
        </div>
      </section>

      <section className="bg-black text-white px-6 md:px-12 lg:px-16 py-20 md:py-28 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-3">
                Lo que hago
              </p>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-normal"
                style={{ letterSpacing: '-0.03em' }}
              >
                Tres pilares para crecer.
              </h2>
            </div>
            <a
              href="#servicios"
              className="text-sm text-gray-300 hover:text-white transition-colors self-start md:self-end"
            >
              Ver todos los servicios →
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {previewServices.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.title}
                  href="#servicios"
                  className="liquid-glass rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/30 transition-colors group block"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-5">
                    <Icon size={18} className="text-white" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {s.description}
                  </p>
                  <span className="inline-block mt-5 text-sm text-gray-400 group-hover:text-white transition-colors">
                    Saber más →
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-black text-white px-6 md:px-12 lg:px-16 py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm uppercase tracking-[0.2em] text-gray-400 mb-8">
            Marcas que han confiado en mí
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {logos.map((l) => (
              <div
                key={l}
                className="text-center text-gray-400 text-lg font-light tracking-wide opacity-70 hover:opacity-100 transition-opacity"
              >
                {l}
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-14">
            <figure className="liquid-glass rounded-2xl p-6 md:p-8 border border-white/10">
              <blockquote className="text-base md:text-lg text-gray-200 leading-relaxed">
                “En tres meses pasamos de no saber qué publicar a tener un sistema
                que nos trae clientes cada semana. Ana no vende humo: vende
                claridad.”
              </blockquote>
              <figcaption className="mt-4 text-sm text-gray-400">
                — Lucía M., fundadora de Atelier
              </figcaption>
            </figure>
            <figure className="liquid-glass rounded-2xl p-6 md:p-8 border border-white/10">
              <blockquote className="text-base md:text-lg text-gray-200 leading-relaxed">
                “Multiplicamos por 4 el ROI de Meta Ads y por fin entendemos qué
                campaña funciona y por qué. Trabajar con Ana ha sido un antes y un
                después.”
              </blockquote>
              <figcaption className="mt-4 text-sm text-gray-400">
                — Javier R., CEO de Nordic Co.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
