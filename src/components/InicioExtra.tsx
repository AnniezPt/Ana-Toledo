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
      'Acompañamiento, mentoría estratégica y dirección creativa para que tus cuentas crezcan con sentido.',
  },
];

type Logo = { name: string; src: string; note?: string };

const logos: Logo[] = [
  { name: 'Roche', src: 'Rochelogo.PNG' },
  { name: 'Bayer', src: 'Bayerlogo.PNG' },
  { name: 'Leroy Merlín', src: 'Leroym.PNG' },
];

export default function InicioExtra() {
  return (
    <>
      <section id="problema" className="bg-black text-white px-6 md:px-12 lg:px-16 py-20 md:py-28 border-t border-white/10 scroll-mt-24">
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
              Creamos estrategias digitales basadas en datos y resultados.
            </span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Publicas todos los días, inviertes en anuncios y aún así las ventas no
            llegan. El problema casi nunca es el contenido: es la estrategia que hay
            (o no) detrás. Vamos a ordenarla.
          </p>
        </div>
      </section>

      <section id="lo-que-hago" className="bg-black text-white px-6 md:px-12 lg:px-16 py-20 md:py-28 border-t border-white/10 scroll-mt-24">
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

      <section id="marcas" className="bg-black text-white px-6 md:px-12 lg:px-16 py-16 border-t border-white/10 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm uppercase tracking-[0.2em] text-gray-400 mb-8">
            Marcas que han confiado en mí
          </p>
          <div className="flex flex-wrap items-start justify-center gap-12 md:gap-16">
            {logos.map((l) => (
              <div key={l.name} className="flex flex-col items-center text-center">
                <img
                  src={`${import.meta.env.BASE_URL}${l.src}`}
                  alt={l.name}
                  className="h-12 md:h-16 max-w-[180px] object-contain"
                />
                {l.note && (
                  <p className="text-gray-500 text-sm mt-3 max-w-[220px]">
                    {l.note}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div id="testimonios" className="grid md:grid-cols-2 gap-6 mt-14 scroll-mt-24">
            <figure className="liquid-glass rounded-2xl p-6 md:p-8 border border-white/10">
              <blockquote className="text-base md:text-lg text-gray-200 leading-relaxed">
                “En tres meses pasamos de no saber qué publicar a tener un sistema
                que nos trae clientes cada semana. Ana no vende humo: vende
                claridad.”
              </blockquote>
              <figcaption className="mt-4 text-sm text-gray-400">
                — Lucía M.
              </figcaption>
            </figure>
            <figure className="liquid-glass rounded-2xl p-6 md:p-8 border border-white/10">
              <blockquote className="text-base md:text-lg text-gray-200 leading-relaxed">
                “Multiplicamos por 4 el ROI de Meta Ads y por fin entendemos qué
                campaña funciona y por qué. Trabajar con Ana ha sido un antes y un
                después.”
              </blockquote>
              <figcaption className="mt-4 text-sm text-gray-400">
                — Javier R.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
