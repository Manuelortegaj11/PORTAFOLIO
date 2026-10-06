import { Download, Mail } from 'lucide-react';
import { experiencias, persona } from '../content/cv.ts';
import { GitHubIcon, LinkedInIcon } from '../components/Icons.tsx';
import MisContribuciones from '../components/vitrina/MisContribuciones.tsx';

export default function Hero() {
  const actual = experiencias[0];

  return (
    <section aria-labelledby="hero-nombre" className="banda franja-invertible relative overflow-hidden bg-band text-on-band">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 pt-10 pb-14 max-lg:gap-y-0 sm:px-6 sm:pt-14 sm:max-lg:grid-cols-[minmax(0,1fr)_minmax(0,15rem)] sm:max-lg:grid-rows-[auto_auto_auto_auto_1fr] sm:max-lg:gap-x-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-14 lg:pt-20">
        <div className="min-w-0 max-lg:contents">
          <h1
            id="hero-nombre"
            className="font-display text-[clamp(2.4rem,12.5vw,6.5rem)] leading-[0.86] font-extrabold tracking-[-0.005em] whitespace-nowrap uppercase max-sm:order-1 sm:max-lg:col-span-2 lg:text-[min(8vw,6.5rem)]"
          >
            <span className="hero-linea">
              <span>Manuel Eduardo</span>
            </span>
            <span className="hero-linea">
              <span>Ortega Juvinao</span>
            </span>
          </h1>

          <p className="mt-6 text-xl font-semibold text-on-band max-sm:order-2 sm:text-2xl sm:max-lg:col-start-1">
            {persona.titulo}. Desarrollo backend y full stack.
          </p>
          <p className="mt-4 max-w-[64ch] text-on-band/85 max-sm:order-4 max-sm:mt-6 sm:max-lg:col-start-1">{persona.perfil}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3 max-sm:order-5 sm:max-lg:col-start-1">
            <a
              href={persona.cv}
              download
              className="inline-flex min-h-12 items-center gap-2 bg-on-band px-5 font-semibold text-band transition-colors hover:bg-band-hover"
            >
              <Download aria-hidden="true" className="size-5" />
              Descargar hoja de vida
            </a>
            <a
              href={`mailto:${persona.correo}`}
              className="inline-flex min-h-12 items-center gap-2 border border-on-band/60 px-5 font-semibold text-on-band transition-colors hover:border-on-band"
            >
              <Mail aria-hidden="true" className="size-5" />
              Escribirme
            </a>
            <span className="flex items-center gap-1 sm:ml-2">
              <a
                href={persona.linkedin.href}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid size-12 place-items-center text-on-band/85 transition-colors hover:text-on-band"
              >
                <LinkedInIcon className="size-6" />
              </a>
              <a
                href={persona.github.href}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid size-12 place-items-center text-on-band/85 transition-colors hover:text-on-band"
              >
                <GitHubIcon className="size-6" />
              </a>
            </span>
          </div>
        </div>

        <figure className="relative mx-auto w-full max-w-[22rem] self-start max-sm:order-3 max-sm:mt-6 max-sm:flex max-sm:max-w-none sm:max-lg:col-start-2 sm:max-lg:row-span-4 sm:max-lg:row-start-2 sm:max-lg:mt-7 sm:max-lg:max-w-none lg:mt-2">
          <img
            src={persona.foto.src}
            srcSet={persona.foto.srcSet}
            sizes="(min-width: 1024px) 22rem, (min-width: 640px) 15rem, 7rem"
            width={persona.foto.ancho}
            height={persona.foto.alto}
            alt="Retrato de Manuel Eduardo Ortega Juvinao"
            fetchPriority="high"
            className="block aspect-[960/1316] w-full bg-band-strong object-cover max-sm:w-28 max-sm:shrink-0"
          />
          <figcaption className="border-l-4 border-on-band bg-band-strong px-4 py-3 text-sm leading-snug max-sm:flex max-sm:flex-1 max-sm:flex-col max-sm:justify-center">
            <span className="block text-on-band/80">Hoy</span>
            <span className="block font-semibold text-on-band">{actual.cargo}</span>
            <span className="block text-on-band/85">
              {actual.empresa}, desde {actual.inicio}
            </span>
          </figcaption>
        </figure>
      </div>

      <div className="border-t border-on-band/15">
        <div className="mx-auto max-w-[1200px] px-4 pt-8 pb-12 sm:px-6 sm:pb-16">
          <MisContribuciones />
        </div>
      </div>
    </section>
  );
}
