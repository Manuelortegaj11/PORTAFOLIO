import type { Capa } from '../content/cv.ts';

/*
  Esquema por capas de un proyecto. Ocupa el lugar del GIF de demostración
  mientras ese archivo no se haya subido.
*/
export default function ArchitectureSketch({ capas, nombre }: { capas: Capa[]; nombre: string }) {
  return (
    <div className="esquema relative flex h-full flex-col justify-center px-5 pt-14 pb-8 sm:px-8">
      <p className="absolute top-4 right-4 left-4 flex justify-end">
        <span className="border border-dashed border-white/35 px-2.5 py-1 text-xs font-medium text-white/70">
          GIF de demostración pendiente
        </span>
      </p>
      <ol aria-label={`Capas de ${nombre}`} className="relative mx-auto w-full max-w-md">
        {capas.map((c, i) => (
          <li key={c.nombre} className="relative">
            {i > 0 && <span aria-hidden="true" className="mx-auto block h-4 w-px bg-white/35" />}
            <div className="border border-white/20 bg-ink/70 px-4 py-2.5">
              <p className="font-display text-lg leading-tight font-bold tracking-wide text-signal uppercase">
                {c.nombre}
              </p>
              <p className="text-sm leading-snug text-white/80">{c.detalle}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
