const cases = [
  {
    client: 'Atelier · Moda sostenible',
    headline: '+312% en ventas online en 6 meses',
    description:
      'Rediseñamos el embudo de venta y reorientamos la inversión de Meta Ads hacia los productos con mejor margen. Resultado: pasaron de depender del boca a boca a tener un canal previsible.',
    tags: ['Estrategia', 'Meta Ads', 'Email marketing'],
  },
  {
    client: 'Nordic Co. · Consultoría B2B',
    headline: '4× ROI en campañas de Google Ads',
    description:
      'Auditamos cuentas, segmentamos por intención de compra y construimos landings específicas por servicio. La inversión bajó y las oportunidades cualificadas se multiplicaron.',
    tags: ['Auditoría', 'Google Ads', 'SEO'],
  },
  {
    client: 'Casa Verde · Estudio de interiorismo',
    headline: 'De 1.200 a 28.000 seguidores en 9 meses',
    description:
      'Creamos una línea de contenido que muestra el proceso real del estudio. Hoy reciben encargos de toda España y han contratado a dos personas para producción.',
    tags: ['Social media', 'Reels', 'Identidad visual'],
  },
];

export default function CasosExito() {
  return (
    <section
      id="casos"
      className="bg-black text-white px-6 md:px-12 lg:px-16 py-20 md:py-28 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-4">
            Casos de éxito
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-normal mb-5"
            style={{ letterSpacing: '-0.04em' }}
          >
            Resultados reales, no humo.
          </h2>
          <p className="text-base md:text-lg text-gray-300">
            Una pequeña selección de proyectos con los que hemos hecho crecer la
            facturación, la marca o el equipo. Puedo enviarte casos completos
            (con números reales) si te encajan a tu sector.
          </p>
        </div>

        <div className="space-y-6">
          {cases.map((c, i) => (
            <article
              key={c.client}
              className="liquid-glass rounded-2xl p-6 md:p-10 border border-white/10 grid md:grid-cols-[140px_1fr] gap-6 md:gap-10"
            >
              <div className="text-5xl md:text-6xl font-light text-gray-500"
                style={{ letterSpacing: '-0.04em' }}>
                0{i + 1}
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-2">{c.client}</p>
                <h3
                  className="text-2xl md:text-3xl font-normal mb-3"
                  style={{ letterSpacing: '-0.03em' }}
                >
                  {c.headline}
                </h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-5 max-w-3xl">
                  {c.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full border border-white/15 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
