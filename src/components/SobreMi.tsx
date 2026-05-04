const values = [
  {
    title: 'Honestidad',
    description:
      'Si una idea no encaja con tu negocio, te lo digo. No vendo servicios que no necesitas.',
  },
  {
    title: 'Estrategia primero',
    description:
      'No tocamos un anuncio ni un Reel hasta entender qué vendes, a quién y por qué te eligen.',
  },
  {
    title: 'Datos sin paja',
    description:
      'Reportes claros, métricas que importan y decisiones basadas en lo que de verdad mueve el negocio.',
  },
];

export default function SobreMi() {
  return (
    <section
      id="sobre-mi"
      className="bg-black text-white px-6 md:px-12 lg:px-16 py-20 md:py-28 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-4">
            Sobre mí
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6"
            style={{ letterSpacing: '-0.04em' }}
          >
            Soy Ana Toledo.
            <br />
            <span className="text-gray-400">
              Estrategia y marketing con cabeza.
            </span>
          </h2>
          <div className="space-y-5 text-base md:text-lg text-gray-300 leading-relaxed">
            <p>
              Llevo más de ocho años trabajando con marcas y emprendedores en
              España y Latinoamérica. He pasado por agencias, departamentos
              internos y mi propio estudio, y he visto el patrón que se repite:
              proyectos buenísimos que se quedan a medias por falta de
              estrategia.
            </p>
            <p>
              Hoy ayudo a fundadores, equipos pequeños y marcas en crecimiento a
              poner orden en su marketing y a construir sistemas que generan
              ventas, no solo likes.
            </p>
            <p>
              Trabajo desde Madrid, en remoto con clientes de cualquier país, y
              huyo del postureo y los gurús de fórmulas mágicas.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="liquid-glass rounded-2xl p-6 md:p-7 border border-white/10"
            >
              <h3 className="text-xl font-medium mb-2">{v.title}</h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
