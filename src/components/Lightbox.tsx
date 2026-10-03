import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export type ImagenVisor = {
  src: string;
  alt: string;
  ancho: number;
  alto: number;
  titulo?: string;
};

type Props = {
  imagenes: ImagenVisor[];
  /** Índice de la imagen abierta; null mantiene el visor cerrado. */
  indice: number | null;
  onCerrar: () => void;
  onCambiar: (indice: number) => void;
};

export default function Lightbox({ imagenes, indice, onCerrar, onCambiar }: Props) {
  const dialogo = useRef<HTMLDialogElement>(null);
  const abierto = indice !== null;

  useEffect(() => {
    const d = dialogo.current;
    if (!d) return;
    if (abierto && !d.open) d.showModal();
    if (!abierto && d.open) d.close();
  }, [abierto]);

  const actual = indice !== null ? imagenes[indice] : null;
  const varias = imagenes.length > 1;

  const mover = (paso: number) => {
    if (indice === null) return;
    onCambiar((indice + paso + imagenes.length) % imagenes.length);
  };

  return (
    <dialog
      ref={dialogo}
      onClose={onCerrar}
      onClick={(e) => {
        // Un clic en el fondo (fuera de la imagen) cierra el visor.
        if (e.target === e.currentTarget) onCerrar();
      }}
      onKeyDown={(e) => {
        if (!varias) return;
        if (e.key === 'ArrowRight') mover(1);
        if (e.key === 'ArrowLeft') mover(-1);
      }}
      aria-label={actual?.titulo ?? actual?.alt}
      className="visor m-auto max-h-[92dvh] w-[min(64rem,94vw)] max-w-none bg-transparent p-0 text-white backdrop:bg-ink/90"
    >
      {actual && (
        <figure className="flex max-h-[92dvh] w-full flex-col">
          <div className="flex items-center justify-between gap-4 bg-ink px-4 py-2">
            <figcaption className="min-w-0 truncate text-sm font-medium text-white/85">
              {actual.titulo ?? actual.alt}
              {varias && (
                <span className="ml-2 text-white/55">
                  {indice! + 1} de {imagenes.length}
                </span>
              )}
            </figcaption>
            <button
              type="button"
              onClick={onCerrar}
              aria-label="Cerrar"
              className="grid size-10 shrink-0 place-items-center text-white/80 hover:text-white"
            >
              <X aria-hidden="true" />
            </button>
          </div>
          <div className="relative flex min-h-0 flex-1 justify-center bg-hull">
            <img
              key={actual.src}
              src={actual.src}
              alt={actual.alt}
              width={actual.ancho}
              height={actual.alto}
              className="block h-[calc(92dvh-3.5rem)] w-auto max-w-full object-contain"
            />
            {varias && (
              <>
                <button
                  type="button"
                  onClick={() => mover(-1)}
                  aria-label="Imagen anterior"
                  className="absolute top-1/2 left-2 grid size-11 -translate-y-1/2 place-items-center bg-ink/80 text-white hover:bg-ink"
                >
                  <ChevronLeft aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => mover(1)}
                  aria-label="Imagen siguiente"
                  className="absolute top-1/2 right-2 grid size-11 -translate-y-1/2 place-items-center bg-ink/80 text-white hover:bg-ink"
                >
                  <ChevronRight aria-hidden="true" />
                </button>
              </>
            )}
          </div>
        </figure>
      )}
    </dialog>
  );
}
