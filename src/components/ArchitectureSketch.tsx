import type { Capa } from '../content/cv.ts';

/*
  Esquema por capas de un proyecto. Ocupa el lugar del GIF de demostración
  mientras ese archivo no se haya subido.
*/
export default function ArchitectureSketch({ capas, nombre }: { capas: Capa[]; nombre: string }) {
  return (
    <div className="esquema relative flex h-full flex-col justify-center px-5 pt-14 pb-8 sm:px-8">
      <p className="absolute top-4 right-4 left-4 flex justify-end">
        <span className="border border-dashed border-on-band/60 px-2.5 py-1 text-xs font-medium text-on-band/85">
          GIF de demostración pendiente
        </span>
      </p>
      <ol aria-label={`Capas de ${nombre}`} className="relative mx-auto w-full max-w-md">
        {capas.map((c, i) => (
          <li key={c.nombre} className="relative">
            {i > 0 && <span aria-hidden="true" className="mx-auto block h-4 w-px bg-on-band/50" />}
            <div className="border border-on-band/30 bg-band-strong px-4 py-2.5">
              <p className="font-display text-lg leading-tight font-bold tracking-wide text-on-band uppercase">
                {c.nombre}
              </p>
              <p className="text-sm leading-snug text-on-band/85">{c.detalle}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
