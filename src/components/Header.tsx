import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Download, Menu, X } from 'lucide-react';
import { persona } from '../content/cv.ts';
import ThemeToggle from './ThemeToggle.tsx';
import Monograma from './Monograma.tsx';

const secciones = [
  { id: 'experiencia', texto: 'Experiencia' },
  { id: 'proyectos', texto: 'Proyectos' },
  { id: 'herramientas', texto: 'Herramientas' },
  { id: 'formacion', texto: 'Formación' },
  { id: 'practica', texto: 'Práctica' },
  { id: 'contacto', texto: 'Contacto' },
];

export default function Header() {
  const location = useLocation();
  // El menú móvil queda abierto solo en la ubicación donde se abrió: al navegar se cierra solo.
  const [abiertoEn, setAbiertoEn] = useState<string | null>(null);
  const abierto = abiertoEn === location.key;
  const setAbierto = (fn: (v: boolean) => boolean) => setAbiertoEn(fn(abierto) ? location.key : null);

  const enlaceClase =
    'rounded-sm px-2 py-1 text-[0.95rem] font-medium text-on-band/85 transition-colors hover:text-on-band aria-[current=page]:text-on-band aria-[current=page]:underline aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-8';

  return (
    <header className="banda franja-invertible sticky top-0 z-40 border-b border-on-band/15 bg-band text-on-band">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center gap-4 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3 rounded-sm max-lg:min-h-11" aria-label="Manuel Ortega, inicio">
          {/* Cuadro del color del texto y letras del fondo: sobre la franja azul queda blanco
              con MO azul; con el menú en blanco queda igual al avatar, azul con MO blanco. */}
          <Monograma className="size-9 shrink-0" fondo="fill-on-band" letras="fill-band" />
          <span className="hidden font-display text-xl font-bold tracking-wide uppercase sm:inline lg:max-xl:hidden">
            {persona.nombreCorto}
          </span>
        </Link>

        <nav aria-label="Secciones" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-1">
            {secciones.map((s) => (
              <li key={s.id}>
                <Link to={`/#${s.id}`} className={enlaceClase}>
                  {s.texto}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/Certificaciones"
                className={enlaceClase}
                aria-current={location.pathname.toLowerCase() === '/certificaciones' ? 'page' : undefined}
              >
                Certificados
              </Link>
            </li>
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-2">
          <a
            href={persona.cv}
            download
            className="hidden items-center gap-2 border border-on-band px-3 py-1.5 text-sm font-semibold text-on-band transition-colors hover:bg-on-band hover:text-band shrink-0 whitespace-nowrap sm:inline-flex max-lg:min-h-11"
          >
            <Download aria-hidden="true" className="size-4" />
            Hoja de vida
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="grid size-11 place-items-center rounded-sm text-on-band lg:hidden"
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setAbierto((v) => !v)}
          >
            {abierto ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {abierto && (
        <nav id="menu-movil" aria-label="Secciones" className="border-t border-on-band/15 lg:hidden">
          <ul className="mx-auto grid max-w-[1200px] px-4 py-3 sm:px-6">
            {secciones.map((s) => (
              <li key={s.id}>
                <Link to={`/#${s.id}`} className="block py-3 text-lg font-medium text-on-band/90">
                  {s.texto}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/Certificaciones" className="block py-3 text-lg font-medium text-on-band/90">
                Certificados
              </Link>
            </li>
            <li className="pt-2 pb-1">
              <a
                href={persona.cv}
                download
                className="inline-flex items-center gap-2 bg-on-band px-4 py-3 font-semibold text-band"
              >
                <Download aria-hidden="true" className="size-4" />
                Descargar hoja de vida
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
