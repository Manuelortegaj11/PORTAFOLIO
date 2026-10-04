import { Link } from 'react-router';
import { Award, Check } from 'lucide-react';
import { educacion, formacion } from '../content/cv.ts';
import SectionHeading from '../components/SectionHeading.tsx';

export default function Formacion() {
  return (
    <section aria-labelledby="formacion-titulo" id="formacion" className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <SectionHeading id="formacion-titulo" titulo="Formación">
          Pregrado en la Universidad del Magdalena y formación complementaria en inteligencia artificial, contenedores,
          datos y desarrollo web.
        </SectionHeading>

        <div className="mt-14 grid gap-14 sm:mt-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
          <div className="border-t-4 border-accent pt-6">
            <p className="font-display text-2xl font-bold text-muted uppercase">
              {educacion.inicio} – {educacion.fin}
            </p>
            <h3 className="mt-2 font-display text-5xl leading-[0.9] font-extrabold uppercase">{educacion.titulo}</h3>
            <p className="mt-4 text-lg font-semibold">{educacion.institucion}</p>
            <p className="text-muted">{educacion.ciudad}</p>
            <p className="mt-4 max-w-[52ch]">{educacion.descripcion}</p>
            <Link
              to="/Certificaciones#acta"
              className="mt-6 flex max-w-[52ch] gap-3 border border-line bg-surface p-4 transition-colors hover:border-text"
            >
              <Award aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent-text" />
              <span className="font-semibold underline decoration-line underline-offset-3">{educacion.acta}</span>
            </Link>
          </div>

          <div>
            <h3 className="font-display text-3xl font-bold uppercase">Formación complementaria</h3>
            <ol className="mt-6">
              {formacion.map((f) => (
                <li key={f.id} className="border-t border-line py-5">
                  <p className="font-semibold">
                    {f.tipo ? `${f.tipo}: ` : ''}
                    {f.nombre}
                  </p>
                  <p className="text-sm text-muted">
                    {f.entidad}, {f.anio}
                  </p>
                  {/* Barra completa: el curso está terminado */}
                  <div className="mt-3 flex items-center gap-3">
                    <span className="h-2 flex-1 rounded-r-[4px] bg-accent" aria-hidden="true" />
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-accent text-on-accent">
                      <Check aria-hidden="true" className="size-4" strokeWidth={3} />
                      <span className="sr-only">Completado</span>
                    </span>
                    <span className="w-20 shrink-0 text-right text-sm font-semibold tabular-nums">{f.horas} horas</span>
                  </div>
                </li>
              ))}
            </ol>
            <Link
              to="/Certificaciones"
              className="mt-4 inline-flex min-h-12 items-center border border-text px-5 font-semibold transition-colors hover:bg-text hover:text-page"
            >
              Ver los certificados
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
