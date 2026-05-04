import Navbar from './Navbar';
import AnimatedHeading from './AnimatedHeading';
import FadeIn from './FadeIn';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full flex flex-col overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #b9d3eb 0%, #e3d9c8 55%, #4a5d6e 100%)',
      }}
    >
      <img
        src={`${import.meta.env.BASE_URL}madrid.jpg`}
        alt="Skyline de Madrid"
        className="absolute inset-0 w-full h-full object-cover z-0"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = 'none';
        }}
      />

      <div className="relative z-10 flex flex-col flex-1">
        <Navbar />

        <div className="px-6 md:px-12 lg:px-16 flex-1 flex flex-col justify-end pb-12 lg:pb-16">
          <div className="lg:grid lg:grid-cols-2 lg:items-end gap-8">
            <div>
              <AnimatedHeading
                text={'Impulso el crecimiento\nde tu negocio.'}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4"
                style={{ letterSpacing: '-0.04em' }}
              />

              <FadeIn delay={800} duration={1000}>
                <p className="text-base md:text-lg text-gray-300 mb-5 max-w-xl">
                  Estrategia, marketing digital y social media para convertir
                  seguidores en clientes que compran.
                </p>
              </FadeIn>

              <FadeIn delay={1200} duration={1000}>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#contacto"
                    className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    Agendar asesoría gratuita
                  </a>
                  <a
                    href="#servicios"
                    className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors"
                  >
                    Ver servicios
                  </a>
                </div>
              </FadeIn>
            </div>

            <div className="flex items-end justify-start lg:justify-end mt-8 lg:mt-0">
              <FadeIn delay={1400} duration={1000}>
                <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
                  <p className="text-lg md:text-xl lg:text-2xl font-light">
                    Estrategia. Marketing. Social Media.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
