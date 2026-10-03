import { herramientas, idiomas } from '../content/cv.ts';
import SectionHeading from '../components/SectionHeading.tsx';

export default function Herramientas() {
  return (
    <section aria-labelledby="herramientas-titulo" id="herramientas" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <SectionHeading id="herramientas-titulo" titulo="Herramientas">
          Tecnologías con las que trabajo y el nivel de dominio en cada área.
        </SectionHeading>

        <dl className="mt-14 grid gap-x-12 sm:mt-20 lg:grid-cols-2">
          {herramientas.map((h) => (
            <div key={h.categoria} className="border-t border-line py-5">
              <dt className="flex items-baseline justify-between gap-4">
                <span className="font-display text-2xl leading-tight font-bold uppercase">{h.categoria}</span>
                <span
                  className={`shrink-0 text-sm font-semibold ${
                    h.nivel === 'Profesional' ? 'text-accent-text' : 'text-muted'
                  }`}
                >
                  {h.nivel}
                </span>
              </dt>
              <dd className="mt-1.5 text-muted">{h.items.join(', ')}</dd>
            </div>
          ))}
          <div className="border-t border-line py-5">
            <dt className="font-display text-2xl leading-tight font-bold uppercase">Idiomas</dt>
            <dd className="mt-1.5 text-muted">
              {idiomas.map((i, n) => (
                <span key={i.idioma}>
                  {n > 0 && ', '}
                  {i.idioma} ({i.nivel})
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
