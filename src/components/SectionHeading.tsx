import type { ReactNode } from 'react';

type Props = {
  id: string;
  titulo: string;
  children?: ReactNode;
  tono?: 'pagina' | 'oscuro';
};

export default function SectionHeading({ id, titulo, children, tono = 'pagina' }: Props) {
  return (
    <div
      className={`grid gap-4 border-b-2 pb-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-end lg:gap-12 ${
        tono === 'oscuro' ? 'border-on-band' : 'border-text'
      }`}
    >
      <h2
        id={id}
        className="font-display text-[clamp(3rem,9vw,5.5rem)] leading-[0.88] font-extrabold tracking-[-0.005em] uppercase max-xl:text-balance"
      >
        {titulo}
      </h2>
      {children && (
        <p className={`max-w-[60ch] text-lg ${tono === 'oscuro' ? 'text-on-band/85' : 'text-muted'}`}>{children}</p>
      )}
    </div>
  );
}
