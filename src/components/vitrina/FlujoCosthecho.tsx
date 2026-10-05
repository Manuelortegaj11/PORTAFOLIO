/*
  Queso Costhecho 1.0: el flujo de compra de la tienda. Cuando el cliente paga,
  el modelo de optimización (el MILP escogido en la investigación, servido con
  FastAPI) asigna el pedido según la demanda y la cantidad: un centro de acopio
  principal y centros auxiliares. Luego el pedido se despacha al cliente.
*/

import { Camion, EnlacePestana, Leyenda, Nodo, Paradas, Pedido, Vehiculo, type Parada } from './piezas.tsx';

/** Reparto del pedido desde el nodo de asignación hacia los centros de acopio. */
function CentrosDeAcopio() {
  const bodega = (x: number) => `M${x - 13} 66V54L${x} 46L${x + 13} 54V66Z`;
  const flecha = (x: number) => `M${x - 4} 39L${x} 45L${x + 4} 39Z`;
  return (
    <svg className="flujo-centros" viewBox="0 0 220 92" width="220" height="92" aria-hidden="true">
      <path className="centros-trazo" data-trazo="tronco" d="M110 0V14" pathLength={1} />
      <path className="centros-trazo" data-trazo="principal" d="M110 14V40" pathLength={1} />
      <path className="centros-trazo" data-trazo="auxiliar" d="M110 14H32V40" pathLength={1} />
      <path className="centros-trazo" data-trazo="auxiliar" d="M110 14H188V40" pathLength={1} />
      <text x="117" y="31" className="centros-texto">
        asigna
      </text>

      <g className="centro" data-centro="principal">
        <path d={flecha(110)} fill="currentColor" />
        <path d={bodega(110)} fill="currentColor" />
        <rect x="106" y="59" width="8" height="7" fill="var(--color-cv-azul)" />
        <text x="110" y="85" textAnchor="middle" className="centros-texto" fontWeight="700">
          Principal
        </text>
      </g>
      {[32, 188].map((x) => (
        <g key={x} className="centro" data-centro="auxiliar">
          <path d={flecha(x)} fill="currentColor" />
          <path d={bodega(x)} fill="none" stroke="currentColor" strokeWidth="1.5" />
          <text x={x} y="85" textAnchor="middle" className="centros-texto">
            Auxiliar
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function FlujoCosthecho({ onIr }: { onIr: (pestana: string) => void }) {
  const paradas: Parada[] = [
    { nombre: 'Tienda', detalle: ['Catálogo y carrito en Next.js, para móvil y escritorio'] },
    { nombre: 'Pago', detalle: ['Pasarela de pago integrada y gestión de órdenes'] },
    {
      nombre: 'Asignación',
      detalle: [
        'Modelo de optimización MILP servido con FastAPI',
        'Un centro de acopio principal y auxiliares, según la demanda y la cantidad',
      ],
      extra: <EnlacePestana onClick={() => onIr('modelo')}>Ver cómo se escogió el modelo</EnlacePestana>,
    },
    { nombre: 'Despacho', detalle: ['Precio y punto de despacho según la ubicación del cliente'] },
  ];

  return (
    <figure className="ruta" data-flujo="costhecho">
      <Leyenda>
        El cliente compra en la tienda y el modelo asigna el pedido a un centro de acopio principal y a centros
        auxiliares, según la demanda y la cantidad.
      </Leyenda>
      <div className="ruta-pista" data-alto="costhecho" aria-hidden="true">
        <span className="ruta-base" />
        <span className="ruta-avance" />
        <Nodo posicion={0} />
        <Nodo posicion={37.5} llegada={0.375} />
        <Nodo posicion={62.5} llegada={0.625} />
        <Nodo posicion={100} llegada={1} />
        <span className="ruta-pulso" style={{ left: '100%' }} />
        <CentrosDeAcopio />
        <Vehiculo clase="flujo-pedido" ancho="1.125rem">
          <Pedido />
        </Vehiculo>
        <Vehiculo clase="flujo-despacho" ancho="1.75rem">
          <Camion />
        </Vehiculo>
      </div>
      <Paradas paradas={paradas} />
    </figure>
  );
}
