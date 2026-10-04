import { useState } from 'react';
import { Link } from 'react-router';
import { experiencias, type Experiencia as TipoExperiencia } from '../content/cv.ts';
import SectionHeading from '../components/SectionHeading.tsx';

const VISIBLES = 4;

function Cargo({ e, actual }: { e: TipoExperiencia; actual: boolean }) {
  const [abierto, setAbierto] = useState(false);
  const logros = abierto ? e.logros : e.logros.slice(0, VISIBLES);
  const ocultos = e.logros.length - VISIBLES;
  const idLista = `logros-${e.id}`;

  return (
    <li id={`exp-${e.id}`} className="grid gap-4 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12">
      <div className="lg:sticky lg:top-24 lg:self-start">
        <p className="font-display text-3xl leading-none font-bold uppercase sm:text-4xl">
          <span className="block">{e.inicio}</span>
          <span className={`block ${actual ? 'text-accent-text' : 'text-muted'}`}>{e.fin}</span>
        </p>
      </div>

      <div className="relative border-l-2 border-line pb-16 pl-6 sm:pl-10">
        <span
          aria-hidden="true"
          className={`absolute top-1.5 -left-[9px] size-4 rounded-full border-2 ${
            actual ? 'border-accent bg-accent' : 'border-line bg-page'
          }`}
        />
        <h3 className="font-display text-3xl leading-[0.95] font-bold uppercase sm:text-4xl">{e.cargo}</h3>
        <p className="mt-2 text-lg font-semibold">{e.empresa}</p>

        <dl className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-[8rem_minmax(0,1fr)]">
          <dt className="text-sm font-semibold text-muted sm:pt-0.5">Proyecto</dt>
          <dd className="max-w-[70ch]">{e.proyecto}</dd>
          {e.area && (
            <>
              <dt className="text-sm font-semibold text-muted sm:pt-0.5">Área</dt>
              <dd className="max-w-[70ch]">{e.area}</dd>
            </>
          )}
          <dt className="text-sm font-semibold text-muted sm:pt-0.5">Actividad</dt>
          <dd className="max-w-[70ch]">{e.actividad}</dd>
          <dt className="text-sm font-semibold text-muted sm:pt-0.5">Dirección</dt>
          <dd className="max-w-[70ch] text-muted">{e.direccion}</dd>
        </dl>

        <div className="mt-8 max-w-[75ch] border-l-4 border-accent bg-surface px-5 py-4">
          <p>
            {e.logro.antes}
            <a
              href={e.logro.enlace.href}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-accent-text underline decoration-2 underline-offset-3 hover:decoration-text"
            >
              {e.logro.enlace.texto}
            </a>
            {e.logro.despues}
          </p>
          <Link
            to={`/#proyecto-${e.proyectoId}`}
            className="mt-2 inline-block text-sm font-semibold text-muted underline underline-offset-3 hover:text-text"
          >
            Ver el proyecto
          </Link>
        </div>

        <ul id={idLista} className="logros mt-6 max-w-[75ch] space-y-2.5">
          {logros.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
        {ocultos > 0 && (
          <button
            type="button"
            aria-expanded={abierto}
            aria-controls={idLista}
            onClick={() => setAbierto((v) => !v)}
            className="mt-5 inline-flex min-h-11 items-center border border-line px-4 text-sm font-semibold transition-colors hover:border-text"
          >
            {abierto ? 'Mostrar menos' : `Ver los ${e.logros.length} logros`}
          </button>
        )}
      </div>
    </li>
  );
}

export default function Experiencia() {
  return (
    <section aria-labelledby="experiencia-titulo" id="experiencia" className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <SectionHeading id="experiencia-titulo" titulo="Experiencia">
          Logística agroindustrial, comercio electrónico e investigación en inteligencia artificial, de la más reciente a
          la primera.
        </SectionHeading>
        <ol className="mt-14 sm:mt-20">
          {experiencias.map((e, i) => (
            <Cargo key={e.id} e={e} actual={i === 0} />
          ))}
        </ol>
      </div>
    </section>
  );
}
