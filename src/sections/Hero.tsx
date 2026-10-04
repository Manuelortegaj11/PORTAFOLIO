import { Download, Mail } from 'lucide-react';
import { experiencias, persona } from '../content/cv.ts';
import { GitHubIcon, LinkedInIcon } from '../components/Icons.tsx';
import RouteLine from '../components/RouteLine.tsx';

export default function Hero() {
  const actual = experiencias[0];

  return (
    <section aria-labelledby="hero-nombre" className="banda relative overflow-hidden bg-band text-white">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 pt-10 pb-14 sm:px-6 sm:pt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-14 lg:pt-20">
        <div className="min-w-0">
          <h1
            id="hero-nombre"
            className="font-display text-[clamp(2.4rem,12.5vw,6.5rem)] leading-[0.86] font-extrabold tracking-[-0.005em] whitespace-nowrap uppercase lg:text-[min(8vw,6.5rem)]"
          >
            <span className="hero-linea">
              <span>Manuel Eduardo</span>
            </span>
            <span className="hero-linea">
              <span>Ortega Juvinao</span>
            </span>
          </h1>

          <p className="mt-6 text-xl font-semibold text-white sm:text-2xl">
            {persona.titulo}. Desarrollo backend y full stack.
          </p>
          <p className="mt-4 max-w-[64ch] text-white/85">{persona.perfil}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={persona.cv}
              download
              className="inline-flex min-h-12 items-center gap-2 bg-white px-5 font-semibold text-band transition-colors hover:bg-cv-azul-niebla"
            >
              <Download aria-hidden="true" className="size-5" />
              Descargar hoja de vida
            </a>
            <a
              href={`mailto:${persona.correo}`}
              className="inline-flex min-h-12 items-center gap-2 border border-white/60 px-5 font-semibold text-white transition-colors hover:border-white"
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
                className="grid size-12 place-items-center text-white/85 transition-colors hover:text-white"
              >
                <LinkedInIcon className="size-6" />
              </a>
              <a
                href={persona.github.href}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid size-12 place-items-center text-white/85 transition-colors hover:text-white"
              >
                <GitHubIcon className="size-6" />
              </a>
            </span>
          </div>
        </div>

        <figure className="relative mx-auto w-full max-w-[22rem] self-start lg:mt-2">
          <img
            src={persona.foto.src}
            srcSet={persona.foto.srcSet}
            sizes="(min-width: 1024px) 22rem, 80vw"
            width={persona.foto.ancho}
            height={persona.foto.alto}
            alt="Retrato de Manuel Eduardo Ortega Juvinao"
            fetchPriority="high"
            className="block aspect-[960/1316] w-full bg-band-strong object-cover"
          />
          <figcaption className="border-l-4 border-white bg-band-strong px-4 py-3 text-sm leading-snug">
            <span className="block text-white/80">Hoy</span>
            <span className="block font-semibold text-white">{actual.cargo}</span>
            <span className="block text-white/85">
              {actual.empresa}, desde {actual.inicio}
            </span>
          </figcaption>
        </figure>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto max-w-[1200px] px-4 pt-8 pb-12 sm:px-6 sm:pb-16">
          <div className="mb-8 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <h2 className="font-display text-3xl font-bold tracking-wide uppercase sm:text-4xl">La ruta de SIAL 1.0</h2>
            <p className="max-w-[58ch] text-white/85 sm:text-right">
              Trazabilidad de contenedores y camiones entre fincas, la zona externa del puerto y el Puerto de Santa
              Marta.
            </p>
          </div>
          <RouteLine />
        </div>
      </div>
    </section>
  );
}
