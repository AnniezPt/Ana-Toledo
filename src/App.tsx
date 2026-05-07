import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InicioExtra from './components/InicioExtra';
import Servicios from './components/Servicios';
import CasosExito from './components/CasosExito';
import SobreMi from './components/SobreMi';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="bg-black text-white">
        <Hero />
        <InicioExtra />
        <Servicios />
        <CasosExito />
        <SobreMi />
        <Contacto />
        <Footer />
      </main>
    </>
  );
}
