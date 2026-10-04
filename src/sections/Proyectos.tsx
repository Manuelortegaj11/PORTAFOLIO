import { Link } from 'react-router';
import { ExternalLink } from 'lucide-react';
import { proyectos, experiencias } from '../content/cv.ts';
import SectionHeading from '../components/SectionHeading.tsx';
import ArchitectureSketch from '../components/ArchitectureSketch.tsx';

export default function Proyectos() {
  return (
    <section aria-labelledby="proyectos-titulo" id="proyectos" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <SectionHeading id="proyectos-titulo" titulo="Proyectos">
          Los sistemas que salieron de cada cargo: una plataforma logística en producción, un e-commerce y un modelo de
          optimización publicado.
        </SectionHeading>

        <div className="mt-14 space-y-16 sm:mt-20 sm:space-y-24">
          {proyectos.map((p) => {
            const experiencia = experiencias.find((e) => e.proyectoId === p.id);
            return (
              <article
                key={p.id}
                id={`proyecto-${p.id}`}
                aria-labelledby={`proyecto-${p.id}-titulo`}
                className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-14"
              >
                <div className={p.demo ? 'self-center bg-ink' : 'min-h-[22rem] bg-ink text-white'}>
                  {p.demo ? (
                    <img
                      src={p.demo}
                      alt={`Demostración de ${p.nombre}`}
                      loading="lazy"
                      className="block h-auto w-full"
                    />
                  ) : (
                    <ArchitectureSketch capas={p.capas} nombre={p.nombre} />
                  )}
                </div>

                <div className="flex flex-col justify-center">
                  <p className="text-sm font-semibold text-muted">
                    {p.organizacion}, {p.periodo}
                  </p>
                  <h3
                    id={`proyecto-${p.id}-titulo`}
                    className="mt-2 font-display text-4xl leading-[0.92] font-extrabold uppercase sm:text-5xl"
                  >
                    {p.nombre}
                  </h3>
                  <p className="mt-4 font-semibold">{p.rol}</p>
                  <p className="mt-2 max-w-[60ch] text-lg">{p.resultado}</p>
                  <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <a
                      href={p.enlace.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-12 items-center gap-2 bg-ink px-5 font-semibold text-white transition-colors hover:bg-hull dark:bg-signal dark:text-ink dark:hover:bg-[#ff7240]"
                    >
                      {p.enlace.texto}
                      <ExternalLink aria-hidden="true" className="size-4" />
                    </a>
                    {experiencia && (
                      <Link
                        to={`/#exp-${experiencia.id}`}
                        className="text-sm font-semibold text-muted underline underline-offset-3 hover:text-text"
                      >
                        Ver logros en la experiencia
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
