/*
  SIAL 1.0: las rutas operativas, con una POMA por cada tramo.
  1. Por la zona externa: camiones y tractocamiones llegan desde las fincas y,
     de la zona externa, sale el contenedor hacia el Puerto de Santa Marta.
  2. Directa: el tractocamión lleva el contenedor de la finca al puerto.
*/

import { Camion, Leyenda, Nodo, Paradas, TractocamionConContenedor, Vehiculo, type Parada } from './piezas.tsx';

const paradas: Parada[] = [
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

export default function RutaSial() {
  return (
    <div className="space-y-12">
      <figure className="ruta">
        <Leyenda>Por la zona externa: llegan camiones y tractocamiones, y de ahí sale el contenedor al puerto.</Leyenda>
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
        <Paradas paradas={paradas} />
      </figure>

      <figure className="ruta">
        <Leyenda>Directa: el tractocamión lleva el contenedor de la finca al puerto.</Leyenda>
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
        <Paradas
          paradas={[
            { nombre: 'Fincas', detalle: [] },
            { nombre: 'Puerto de Santa Marta', detalle: [] },
          ]}
        />
      </figure>
    </div>
  );
}
