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
    <section aria-labelledby="contacto-titulo" id="contacto" className="bg-ink py-20 text-white sm:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <SectionHeading id="contacto-titulo" titulo="Contacto" tono="oscuro">
          Para una vacante, un proyecto o una conversación técnica, escríbeme al correo o por LinkedIn.
        </SectionHeading>

        <a
          href={`mailto:${persona.correo}`}
          className="mt-12 inline-block font-display text-[clamp(1.6rem,6.2vw,4.25rem)] leading-none font-bold break-all text-signal underline decoration-2 underline-offset-[0.15em] hover:decoration-white sm:break-normal"
        >
          {persona.correo}
        </a>

        <dl className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {datos.map((d) => (
            <div key={d.etiqueta} className="border-t border-white/15 pt-4">
              <dt className="text-sm font-semibold text-white/60">{d.etiqueta}</dt>
              <dd className="mt-1 text-lg">
                {d.href ? (
                  <a
                    href={d.href}
                    {...(d.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="underline decoration-white/30 underline-offset-3 hover:decoration-signal"
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
          className="mt-12 inline-flex min-h-12 items-center gap-2 bg-signal px-5 font-semibold text-ink transition-colors hover:bg-[#ff7240]"
        >
          <Download aria-hidden="true" className="size-5" />
          Descargar hoja de vida (PDF)
        </a>
      </div>
    </section>
  );
}
