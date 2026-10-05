import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, FileText, Mail } from 'lucide-react';
import { actaReconocimiento, educacion, formacion, persona, tituloProfesional, type Imagen } from '../content/cv.ts';
import Lightbox, { type ImagenVisor } from '../components/Lightbox.tsx';

type Visor = { imagenes: ImagenVisor[]; indice: number };

function aVisor(imagenes: Imagen[], titulo: string): ImagenVisor[] {
  return imagenes.map((i) => ({ src: i.src, alt: i.descripcion, ancho: i.ancho, alto: i.alto, titulo }));
}

function Pendiente({ texto }: { texto: string }) {
  return (
    <div className="flex min-h-40 items-center gap-3 border-2 border-dashed border-line p-6 text-muted">
      <FileText aria-hidden="true" className="size-6 shrink-0" />
      <p>{texto}</p>
    </div>
  );
}

function BajoSolicitud({ documento }: { documento: string }) {
  const asunto = encodeURIComponent(`Solicitud de ${documento}`);
  return (
    <div className="flex min-h-40 flex-wrap items-center gap-x-6 gap-y-3 border-2 border-dashed border-line p-6">
      <p className="flex items-center gap-3 font-semibold">
        <FileText aria-hidden="true" className="size-6 shrink-0 text-muted" />
        Disponible bajo solicitud
      </p>
      <a
        href={`mailto:${persona.correo}?subject=${asunto}`}
        className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline underline-offset-3 hover:text-accent-text"
      >
        <Mail aria-hidden="true" className="size-4" />
        Solicitar por correo
      </a>
    </div>
  );
}

function Miniaturas({ imagenes, titulo, onAbrir }: { imagenes: Imagen[]; titulo: string; onAbrir: (v: Visor) => void }) {
  const visor = aVisor(imagenes, titulo);
  const vertical = imagenes.length === 1 && imagenes[0].alto > imagenes[0].ancho;
  return (
    <ul
      className={`grid gap-3 ${imagenes.length > 1 ? 'grid-cols-2 sm:grid-cols-3' : vertical ? 'max-w-sm' : 'max-w-xl'}`}
    >
      {imagenes.map((img, i) => (
        <li key={img.src} className={imagenes.length > 1 && i === 0 ? 'col-span-2 sm:col-span-3' : ''}>
          <button
            type="button"
            onClick={() => onAbrir({ imagenes: visor, indice: i })}
            className="group block w-full border border-line bg-surface p-1.5 text-left transition-colors hover:border-text"
            aria-label={`Ampliar: ${img.descripcion}`}
          >
            <img
              src={img.src}
              alt={img.descripcion}
              width={img.ancho}
              height={img.alto}
              loading="lazy"
              className="block h-auto w-full"
            />
          </button>
          {imagenes.length > 1 && <p className="mt-1.5 text-sm text-muted">{img.descripcion}</p>}
        </li>
      ))}
    </ul>
  );
}

export default function Certificaciones() {
  const [visor, setVisor] = useState<Visor | null>(null);

  useEffect(() => {
    document.title = 'Certificados | Manuel Ortega';
  }, []);

  return (
    <>
      <section aria-labelledby="cert-titulo" className="banda bg-band text-white">
        <div className="mx-auto max-w-[1200px] px-4 pt-10 pb-14 sm:px-6 sm:pt-14">
          <Link
            to="/#formacion"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white/85 hover:text-white"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            Volver al portafolio
          </Link>
          <h1
            id="cert-titulo"
            className="mt-4 font-display text-[clamp(3.4rem,11vw,7rem)] leading-[0.86] font-extrabold uppercase"
          >
            Certificados
          </h1>
          <p className="mt-5 max-w-[60ch] text-lg text-white/85">
            Soportes de la educación y la formación complementaria de la hoja de vida de Manuel Eduardo Ortega Juvinao.
          </p>
        </div>
      </section>

      <section aria-labelledby="titulo-profesional" className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-4 sm:px-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-12">
          <div>
            <h2
              id="titulo-profesional"
              className="font-display text-4xl leading-[0.92] font-extrabold uppercase sm:text-5xl md:max-lg:text-4xl"
            >
              Título profesional
            </h2>
            <p className="mt-4 font-semibold">{educacion.titulo}</p>
            <p className="mt-2 text-muted">
              Título profesional de pregrado, {educacion.institucion}, {educacion.inicio} – {educacion.fin}
            </p>
          </div>
          {tituloProfesional.length > 0 ? (
            <Miniaturas
              imagenes={tituloProfesional}
              titulo={`Título profesional: ${educacion.titulo}`}
              onAbrir={setVisor}
            />
          ) : (
            <BajoSolicitud documento="título profesional" />
          )}
        </div>
      </section>

      <section aria-labelledby="acta" className="border-t border-line py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-4 sm:px-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-12">
          <div>
            <h2 id="acta" className="font-display text-4xl leading-[0.92] font-extrabold uppercase sm:text-5xl md:max-lg:text-4xl">
              Reconocimiento
            </h2>
            <p className="mt-4 font-semibold">{educacion.acta}</p>
            <p className="mt-2 text-muted">
              {educacion.titulo}, {educacion.institucion}, {educacion.inicio} – {educacion.fin}
            </p>
          </div>
          {actaReconocimiento.length > 0 ? (
            <Miniaturas imagenes={actaReconocimiento} titulo={educacion.acta} onAbrir={setVisor} />
          ) : (
            <Pendiente texto="Imagen del acta pendiente de subir." />
          )}
        </div>
      </section>

      <section aria-labelledby="complementaria" className="border-t border-line py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <h2 id="complementaria" className="font-display text-4xl leading-[0.92] font-extrabold uppercase sm:text-5xl md:max-lg:text-4xl">
            Formación complementaria
          </h2>
          <ol className="mt-10">
            {formacion.map((f) => {
              const titulo = `${f.tipo ? `${f.tipo}: ` : ''}${f.nombre}`;
              return (
                <li
                  key={f.id}
                  id={`cert-${f.id}`}
                  className="grid gap-6 border-t border-line py-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-12"
                >
                  <div>
                    <h3 className="font-display text-2xl leading-tight font-bold uppercase max-xl:text-balance sm:text-3xl">{titulo}</h3>
                    <p className="mt-2 font-semibold">{f.entidad}</p>
                    <p className="text-muted">
                      {f.horas} horas, {f.anio}
                    </p>
                  </div>
                  {f.certificados.length > 0 ? (
                    <Miniaturas imagenes={f.certificados} titulo={titulo} onAbrir={setVisor} />
                  ) : (
                    <Pendiente texto="Imagen del certificado pendiente de subir." />
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <Lightbox
        imagenes={visor?.imagenes ?? []}
        indice={visor?.indice ?? null}
        onCerrar={() => setVisor(null)}
        onCambiar={(indice) => setVisor((v) => (v ? { ...v, indice } : v))}
      />
    </>
  );
}
