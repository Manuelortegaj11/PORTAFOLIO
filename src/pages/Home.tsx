import { useEffect } from 'react';
import Hero from '../sections/Hero.tsx';
import Experiencia from '../sections/Experiencia.tsx';
import Proyectos from '../sections/Proyectos.tsx';
import Herramientas from '../sections/Herramientas.tsx';
import Formacion from '../sections/Formacion.tsx';
import Practica from '../sections/Practica.tsx';
import Contacto from '../sections/Contacto.tsx';

export default function Home() {
  useEffect(() => {
    document.title = 'Manuel Ortega | Ingeniero de Sistemas, backend y full stack';
  }, []);

  return (
    <>
      <Hero />
      <Experiencia />
      <Proyectos />
      <Herramientas />
      <Formacion />
      <Practica />
      <Contacto />
    </>
  );
}
