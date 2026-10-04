/*
  Las rutas operativas de SIAL 1.0, con una POMA por cada tramo:
  1. Por la zona externa: camiones y tractocamiones llegan desde las fincas y,
     de la zona externa, sale el contenedor hacia el Puerto de Santa Marta.
  2. Directa: el tractocamión lleva el contenedor de la finca al puerto.
  Tras dibujarse la línea, los vehículos recorren la ruta en ciclo.
*/

import type { CSSProperties, ReactNode } from 'react';

const paradas = [
  {
    nombre: 'Fincas',
    detalle: ['Ingresos y salidas de camiones', 'Cargue de contenedores y camiones en finca'],
  },
  {
    nombre: 'Zona externa del puerto',
    detalle: ['Asignación de contenedores con firma OTP del conductor', 'Cargue de consolidación final'],
  },
  {
    nombre: 'Puerto de Santa Marta',
    detalle: ['Ingreso de los contenedores para su exportación'],
  },
];

const BLANCO = 'var(--color-cv-blanco)';
const AZUL = 'var(--color-cv-azul)';
const RUEDA = { r: 2, fill: AZUL, stroke: BLANCO, strokeWidth: 1.2 };

/** Camión visto de lado, con la cabina hacia la derecha (el sentido de la marcha). */
function Camion() {
  return (
    <svg viewBox="0 0 28 14" width="28" height="14">
      <rect x="0" y="1" width="17" height="9" fill={BLANCO} />
      <path d="M18 4h5l4 3v3h-9z" fill={BLANCO} />
      <path d="M19.5 5h3l2.2 2h-5.2z" fill={AZUL} />
      <rect x="0" y="9.5" width="27" height="1" fill={BLANCO} />
      {[4, 13, 23].map((cx) => (
        <circle key={cx} cx={cx} cy="11.6" {...RUEDA} />
      ))}
    </svg>
  );
}

/** Tractocamión cargado con un contenedor. */
function TractocamionConContenedor() {
  return (
    <svg viewBox="0 0 44 16" width="44" height="16">
      <rect x="0" y="0.5" width="30" height="9" fill={BLANCO} />
      <line x1="0" y1="5" x2="30" y2="5" stroke="var(--color-cv-azul-lamina)" strokeWidth="9" strokeDasharray="1.5 2.5" />
      <rect x="0" y="9.6" width="31" height="1.6" fill={BLANCO} />
      <path d="M32 4.5h6l5 4.2v3.5H32z" fill={BLANCO} />
      <path d="M33.5 5.5h3.6l2.8 2.5h-6.4z" fill={AZUL} />
      <rect x="30" y="11.2" width="13.5" height="1" fill={BLANCO} />
      {[4, 8.6, 35, 40.5].map((cx) => (
        <circle key={cx} cx={cx} cy="13.4" {...RUEDA} />
      ))}
    </svg>
  );
}

function Vehiculo({ clase, ancho, children }: { clase: string; ancho: string; children: ReactNode }) {
  return (
    <span className={`ruta-vehiculo ${clase}`} style={{ '--ancho': ancho } as CSSProperties}>
      {children}
    </span>
  );
}

function Nodo({ posicion, llegada }: { posicion: number; llegada?: number }) {
  return (
    <span
      className="ruta-nodo"
      data-llega={llegada !== undefined ? '' : undefined}
      style={{ left: `${posicion}%`, '--llega': llegada } as CSSProperties}
    />
  );
}

function NombreParada({ children }: { children: ReactNode }) {
  return (
    <p className="font-display text-xl leading-tight font-bold tracking-wide text-white uppercase sm:text-2xl">
      {children}
    </p>
  );
}

export default function RouteLine() {
  return (
    <div className="space-y-12">
      <figure className="ruta">
        <figcaption className="mb-2 text-sm font-medium text-white/80">
          Por la zona externa: llegan camiones y tractocamiones, y de ahí sale el contenedor al puerto.
        </figcaption>
        <div className="ruta-pista" aria-hidden="true">
          <span className="ruta-base" />
          <span className="ruta-avance" />
          <span className="ruta-tramo" style={{ left: '25%' }}>
            POMA
          </span>
          <span className="ruta-tramo" style={{ left: '75%' }}>
            POMA
          </span>
          <Nodo posicion={0} />
          <Nodo posicion={50} llegada={0.5} />
          <Nodo posicion={100} llegada={1} />
          <Vehiculo clase="ruta-camion" ancho="1.75rem">
            <Camion />
          </Vehiculo>
          <Vehiculo clase="ruta-tracto" ancho="2.75rem">
            <TractocamionConContenedor />
          </Vehiculo>
          <span className="ruta-contenedor" />
        </div>
        <ol className="ruta-paradas" data-paradas="3">
          {paradas.map((p) => (
            <li key={p.nombre}>
              <NombreParada>{p.nombre}</NombreParada>
              <ul className="mt-1 space-y-0.5 text-sm leading-snug text-white/80">
                {p.detalle.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </figure>

      <figure className="ruta">
        <figcaption className="mb-2 text-sm font-medium text-white/80">
          Directa: el tractocamión lleva el contenedor de la finca al puerto.
        </figcaption>
        <div className="ruta-pista" aria-hidden="true">
          <span className="ruta-base" />
          <span className="ruta-avance" />
          <span className="ruta-tramo" style={{ left: '50%' }}>
            POMA
          </span>
          <Nodo posicion={0} />
          <Nodo posicion={100} llegada={1} />
          <Vehiculo clase="ruta-directo" ancho="2.75rem">
            <TractocamionConContenedor />
          </Vehiculo>
        </div>
        <ol className="ruta-paradas" data-paradas="2">
          <li>
            <NombreParada>Fincas</NombreParada>
          </li>
          <li>
            <NombreParada>Puerto de Santa Marta</NombreParada>
          </li>
        </ol>
      </figure>
    </div>
  );
}
