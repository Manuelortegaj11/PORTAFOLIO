/*
  Piezas compartidas por los diagramas de "Mis contribuciones": la pista con su
  línea, los nodos, los vehículos que la recorren y los nombres de cada parada.
*/

import type { CSSProperties, ReactNode } from 'react';

// Cuerpo de los vehículos en el color del texto de la franja y detalles en su fondo:
// blancos sobre azul en la franja normal, azules sobre blanco en la invertida.
export const TINTA = 'var(--franja-tinta)';
export const FONDO = 'var(--franja-fondo)';
const RUEDA = { r: 2, fill: FONDO, stroke: TINTA, strokeWidth: 1.2 };

/** Camión visto de lado, con la cabina hacia la derecha (el sentido de la marcha). */
export function Camion() {
  return (
    <svg viewBox="0 0 28 14" width="28" height="14">
      <rect x="0" y="1" width="17" height="9" fill={TINTA} />
      <path d="M18 4h5l4 3v3h-9z" fill={TINTA} />
      <path d="M19.5 5h3l2.2 2h-5.2z" fill={FONDO} />
      <rect x="0" y="9.5" width="27" height="1" fill={TINTA} />
      {[4, 13, 23].map((cx) => (
        <circle key={cx} cx={cx} cy="11.6" {...RUEDA} />
      ))}
    </svg>
  );
}

/** Tractocamión cargado con un contenedor. */
export function TractocamionConContenedor() {
  return (
    <svg viewBox="0 0 44 16" width="44" height="16">
      <rect x="0" y="0.5" width="30" height="9" fill={TINTA} />
      <line x1="0" y1="5" x2="30" y2="5" stroke="var(--franja-lamina)" strokeWidth="9" strokeDasharray="1.5 2.5" />
      <rect x="0" y="9.6" width="31" height="1.6" fill={TINTA} />
      <path d="M32 4.5h6l5 4.2v3.5H32z" fill={TINTA} />
      <path d="M33.5 5.5h3.6l2.8 2.5h-6.4z" fill={FONDO} />
      <rect x="30" y="11.2" width="13.5" height="1" fill={TINTA} />
      {[4, 8.6, 35, 40.5].map((cx) => (
        <circle key={cx} cx={cx} cy="13.4" {...RUEDA} />
      ))}
    </svg>
  );
}

/** Billete: el pago que el cliente hace en la tienda y llega a la pasarela. */
export function Dinero() {
  return (
    <svg viewBox="0 0 24 14" width="24" height="14">
      <rect x="0.5" y="0.5" width="23" height="13" rx="1.5" fill={TINTA} />
      <rect x="2.5" y="2.5" width="19" height="9" rx="1" fill="none" stroke={FONDO} strokeWidth="1" />
      <text x="12" y="10.6" textAnchor="middle" fontSize="9.5" fontWeight="700" fill={FONDO}>
        $
      </text>
    </svg>
  );
}

/** Chulito de pago confirmado: la pasarela se lo devuelve a la tienda. */
export function Confirmacion() {
  return (
    <svg viewBox="0 0 18 18" width="18" height="18">
      <circle cx="9" cy="9" r="8.5" fill={TINTA} />
      <path d="M5 9.4 7.8 12 13 6.4" fill="none" stroke={FONDO} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Caja de un pedido de la tienda. */
export function Pedido() {
  return (
    <svg viewBox="0 0 18 16" width="18" height="16">
      <path d="M1 4.5 9 1l8 3.5v8L9 16l-8-3.5z" fill={TINTA} />
      <path d="M1 4.5 9 8l8-3.5M9 8v8" fill="none" stroke={FONDO} strokeWidth="1.2" />
    </svg>
  );
}

/** Elemento que recorre la pista. `ancho` es su ancho, para calcular dónde se detiene. */
export function Vehiculo({ clase, ancho, children }: { clase: string; ancho: string; children: ReactNode }) {
  return (
    <span className={`ruta-vehiculo ${clase}`} style={{ '--ancho': ancho } as CSSProperties}>
      {children}
    </span>
  );
}

/** Parada sobre la línea. `llegada` (0 a 1) indica cuándo la alcanza la línea al dibujarse. */
export function Nodo({ posicion, llegada }: { posicion: number; llegada?: number }) {
  return (
    <span
      className="ruta-nodo"
      data-llega={llegada !== undefined ? '' : undefined}
      style={{ left: `${posicion}%`, '--llega': llegada } as CSSProperties}
    />
  );
}

export function NombreParada({ children }: { children: ReactNode }) {
  return (
    <p className="font-display text-xl leading-tight font-bold tracking-wide text-on-band uppercase sm:text-2xl">
      {children}
    </p>
  );
}

export type Parada = { nombre: string; detalle: string[]; extra?: ReactNode };

/** Lista de paradas bajo la pista, alineada con los nodos en pantallas medianas y grandes. */
export function Paradas({ paradas }: { paradas: Parada[] }) {
  return (
    <ol className="ruta-paradas" data-paradas={paradas.length}>
      {paradas.map((p) => (
        <li key={p.nombre}>
          <NombreParada>{p.nombre}</NombreParada>
          {p.detalle.length > 0 && (
            <ul className="mt-1 space-y-0.5 text-sm leading-snug text-on-band/80">
              {p.detalle.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          )}
          {p.extra}
        </li>
      ))}
    </ol>
  );
}

export function Leyenda({ children }: { children: ReactNode }) {
  return <figcaption className="mb-2 text-sm font-medium text-on-band/80">{children}</figcaption>;
}

/** Botón de texto que lleva a otra pestaña de la vitrina. */
export function EnlacePestana({ children, onClick }: { children: ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-2 inline-flex min-h-11 items-center text-sm font-semibold text-on-band underline decoration-on-band/50 underline-offset-3 hover:decoration-on-band"
    >
      {children}
    </button>
  );
}
