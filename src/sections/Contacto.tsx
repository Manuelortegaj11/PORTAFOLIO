import { Download } from 'lucide-react';
import { persona } from '../content/cv.ts';
import SectionHeading from '../components/SectionHeading.tsx';

export default function Contacto() {
  const datos = [
    { etiqueta: 'Celular', texto: persona.celular, href: persona.celularHref },
    { etiqueta: 'LinkedIn', texto: persona.linkedin.texto, href: persona.linkedin.href },
    { etiqueta: 'GitHub', texto: persona.github.texto, href: persona.github.href },
    { etiqueta: 'Residencia', texto: persona.residencia },
  ];

  return (
    <section aria-labelledby="contacto-titulo" id="contacto" className="banda bg-band py-16 text-on-band sm:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <SectionHeading id="contacto-titulo" titulo="Contacto" tono="oscuro">
          Para una vacante, un proyecto o una conversación técnica, escríbeme al correo o por LinkedIn.
        </SectionHeading>

        <a
          href={`mailto:${persona.correo}`}
          className="mt-12 inline-block font-display max-lg:py-2.5 text-[clamp(1.6rem,6.2vw,4.25rem)] leading-none font-bold break-all text-on-band underline decoration-2 decoration-on-band/50 underline-offset-[0.15em] hover:decoration-on-band sm:break-normal"
        >
          {persona.correo}
        </a>

        <dl className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {datos.map((d) => (
            <div key={d.etiqueta} className="border-t border-on-band/30 pt-4">
              <dt className="text-sm font-semibold text-on-band/80">{d.etiqueta}</dt>
              <dd className="mt-1 text-lg">
                {d.href ? (
                  <a
                    href={d.href}
                    {...(d.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="underline decoration-on-band/50 underline-offset-3 hover:decoration-on-band max-lg:inline-flex max-lg:min-h-11 max-lg:items-center"
                  >
                    {d.texto}
                  </a>
                ) : (
                  d.texto
                )}
              </dd>
            </div>
          ))}
        </dl>

        <a
          href={persona.cv}
          download
          className="mt-12 inline-flex min-h-12 items-center gap-2 bg-on-band px-5 font-semibold text-band transition-colors hover:bg-band-hover"
        >
          <Download aria-hidden="true" className="size-5" />
          Descargar hoja de vida (PDF)
        </a>
      </div>
    </section>
  );
}
