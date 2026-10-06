/*
  Queso Costhecho 1.0: el flujo de compra de la tienda.
  1. El dinero del cliente va de la tienda a la pasarela de pago, y la pasarela
     le devuelve a la tienda la confirmación del pago.
  2. Con el pago confirmado, la tienda hace el cálculo con el modelo de
     optimización (el MILP escogido en la investigación, servido con FastAPI) y
     envía la solicitud de asignación: el pedido se reparte según la demanda y
     la cantidad entre un centro de acopio principal y centros auxiliares.
  3. Los auxiliares devuelven su parte por su ruta hasta el principal.
  4. Lo consolidado sube desde el principal y de ahí sale el camión al cliente.
*/

import { Camion, Confirmacion, Dinero, EnlacePestana, FONDO, Leyenda, Nodo, Paradas, Pedido, TINTA, Vehiculo, type Parada } from './piezas.tsx';

/** Paquete pequeño, centrado en su origen para poder moverlo con `transform`. */
function Paquete({ clase }: { clase: string }) {
  return (
    <g className={`paquete ${clase}`}>
      <g transform="translate(-8 -7.1) scale(0.89)">
        <path d="M1 4.5 9 1l8 3.5v8L9 16l-8-3.5z" fill={TINTA} stroke={FONDO} strokeWidth="1.3" />
        <path d="M1 4.5 9 8l8-3.5M9 8v8" fill="none" stroke={FONDO} strokeWidth="1.3" />
      </g>
    </g>
  );
}

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
      <text x="110" y="31" textAnchor="middle" className="centros-asigna">
        asigna
      </text>

      <g className="centro" data-centro="principal">
        <path d={flecha(110)} fill="currentColor" />
        <path d={bodega(110)} fill="currentColor" />
        <rect x="106" y="59" width="8" height="7" fill={FONDO} />
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

      {/* Los auxiliares devuelven su parte al principal y lo consolidado sube a la línea */}
      <Paquete clase="paquete-izq" />
      <Paquete clase="paquete-der" />
      <Paquete clase="paquete-sube" />
    </svg>
  );
}

export default function FlujoCosthecho({ onIr }: { onIr: (pestana: string) => void }) {
  const paradas: Parada[] = [
    {
      nombre: 'Tienda',
      detalle: ['Catálogo y carrito en Next.js, para móvil y escritorio', 'Con el pago confirmado, calcula con el modelo y pide la asignación'],
    },
    { nombre: 'Pago', detalle: ['El pago llega a la pasarela integrada y la confirmación vuelve a la tienda'] },
    {
      nombre: 'Asignación',
      detalle: [
        'Modelo de optimización MILP servido con FastAPI',
        'Un centro de acopio principal y auxiliares, según la demanda y la cantidad; los auxiliares envían su parte al principal',
      ],
      extra: <EnlacePestana onClick={() => onIr('modelo')}>Ver cómo se escogió el modelo</EnlacePestana>,
    },
    { nombre: 'Despacho', detalle: ['Desde el principal, con precio y punto de despacho según la ubicación del cliente'] },
  ];

  return (
    <figure className="ruta" data-flujo="costhecho">
      <Leyenda>
        El pago va de la tienda a la pasarela y vuelve confirmado; la tienda pide la asignación al modelo, que reparte
        el pedido entre un centro de acopio principal y auxiliares; estos envían su parte al principal y de ahí sale el
        despacho.
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
        <Vehiculo clase="flujo-dinero" ancho="1.5rem">
          <Dinero />
        </Vehiculo>
        <Vehiculo clase="flujo-chulito" ancho="1.125rem">
          <Confirmacion />
        </Vehiculo>
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
