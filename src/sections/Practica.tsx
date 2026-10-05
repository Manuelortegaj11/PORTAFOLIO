import { useState } from 'react';
import { Play } from 'lucide-react';
import { practicas } from '../content/cv.ts';
import SectionHeading from '../components/SectionHeading.tsx';
import Lightbox, { type ImagenVisor } from '../components/Lightbox.tsx';
import { GitHubIcon } from '../components/Icons.tsx';

const demos: ImagenVisor[] = practicas.map((p) => ({
  src: p.demo,
  alt: `Grabación del ejercicio ${p.titulo}`,
  ancho: p.ancho,
  alto: p.alto,
  titulo: p.titulo,
}));

export default function Practica() {
  const [abierta, setAbierta] = useState<number | null>(null);

  return (
    <section aria-labelledby="practica-titulo" id="practica" className="border-t border-line py-16 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <SectionHeading id="practica-titulo" titulo="Experiencia práctica">
          Ejercicios de bases de datos, análisis de datos y aprendizaje automático, cada uno con la grabación de su
          resultado.
        </SectionHeading>

        <ul className="mt-10 grid gap-x-6 gap-y-12 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {practicas.map((p, i) => (
            <li key={p.id} className="flex flex-col">
              <button
                type="button"
                onClick={() => setAbierta(i)}
                className="group relative block aspect-[4/3] overflow-hidden bg-band text-left"
                aria-label={`Ver la grabación de ${p.titulo}`}
              >
                <img
                  src={p.poster}
                  alt=""
                  loading="lazy"
                  width={p.ancho}
                  height={p.alto}
                  className="h-full w-full object-cover object-top opacity-90 transition-opacity group-hover:opacity-100"
                />
                <span className="absolute bottom-0 left-0 inline-flex items-center gap-2 bg-band px-3 py-2 text-sm font-semibold text-white group-hover:bg-band-strong">
                  <Play aria-hidden="true" className="size-4" />
                  Ver grabación
                </span>
              </button>
              <p className="mt-4 text-sm font-semibold text-accent-text">{p.tema}</p>
              <h3 className="mt-1 font-display text-2xl leading-tight font-bold uppercase max-xl:text-balance">{p.titulo}</h3>
              <p className="mt-2 text-muted">{p.descripcion}</p>
              {p.puntos.length > 0 && (
                <ul className="logros mt-3 space-y-1 text-sm">
                  {p.puntos.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              )}
              <p className="mt-3 text-sm text-muted">{p.herramientas.join(', ')}</p>
              <a
                href={p.repositorio}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex min-h-11 items-center gap-2 self-start pt-4 text-sm font-semibold underline underline-offset-3 hover:text-accent-text"
              >
                <GitHubIcon className="size-4" />
                Repositorio
              </a>
            </li>
          ))}
        </ul>
      </div>

      <Lightbox imagenes={demos} indice={abierta} onCerrar={() => setAbierta(null)} onCambiar={setAbierta} />
    </section>
  );
}
