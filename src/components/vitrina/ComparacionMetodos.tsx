/*
  Modelo de optimización: con los datos del proyecto de regalías se
  implementaron cuatro métodos sobre el mismo modelo de asignación de producto
  desde los centros de acopio al cliente. Se compararon y el escogido fue MILP,
  que luego se integró en Queso Costhecho.
  Fuente: resumen de la publicación en el repositorio de la Universidad del Magdalena.
*/

import { Check } from 'lucide-react';
import { EnlacePestana, Leyenda, Nodo, Paradas, Vehiculo, type Parada } from './piezas.tsx';

/** Los cuatro métodos, agrupados por enfoque. MILP queda marcado como el escogido. */
function Metodos() {
  return (
    <div className="metodos" aria-hidden="true">
      <div className="metodos-grupo">
        <div className="flex gap-1.5">
          {['GA', 'SA', 'ACO'].map((m, i) => (
            <span key={m} className="chip" data-chip="bio" style={{ animationDelay: `calc(var(--bucle-ini) + ${i * 0.4}s)` }}>
              {m}
            </span>
          ))}
        </div>
        <span className="metodos-rotulo">Bioinspirados</span>
      </div>
      <div className="metodos-grupo">
        <span className="chip" data-chip="milp">
          MILP
          <span className="chip-check">
            <Check className="size-3" strokeWidth={3.5} aria-hidden="true" />
          </span>
        </span>
        <span className="metodos-rotulo">Determinístico</span>
      </div>
    </div>
  );
}

export default function ComparacionMetodos({ onIr }: { onIr: (pestana: string) => void }) {
  const paradas: Parada[] = [
    { nombre: 'Datos', detalle: ['Encuestas y entrevistas a productores y clientes', 'Ubicación, producción, costos y demanda'] },
    { nombre: 'Cuatro métodos', detalle: ['GA, SA y ACO en Python', 'MILP en Pyomo, resuelto con GLPK'] },
    { nombre: 'Comparación', detalle: ['Costos y viabilidad, rendimiento y escalabilidad'] },
    {
      nombre: 'Escogido: MILP',
      detalle: ['Soluciones óptimas para asignar producto desde los centros de acopio', 'Integrado en Queso Costhecho'],
      extra: <EnlacePestana onClick={() => onIr('costhecho')}>Ver cómo asigna los pedidos</EnlacePestana>,
    },
  ];

  return (
    <figure className="ruta" data-flujo="modelo">
      <Leyenda>
        Cuatro métodos resuelven el mismo modelo de asignación de producto desde los centros de acopio al cliente. MILP
        da soluciones óptimas; los bioinspirados destacan por su flexibilidad en problemas complejos.
      </Leyenda>
      <div className="ruta-pista" data-alto="modelo" aria-hidden="true">
        <span className="ruta-base" />
        <span className="ruta-avance" />
        <Nodo posicion={0} />
        <Nodo posicion={37.5} llegada={0.375} />
        <Nodo posicion={62.5} llegada={0.625} />
        <Nodo posicion={100} llegada={1} />
        <span className="ruta-pulso" style={{ left: '100%' }} />
        <Metodos />
        <Vehiculo clase="flujo-solucion" ancho="0.875rem">
          <span className="flujo-diamante" />
        </Vehiculo>
      </div>
      <Paradas paradas={paradas} />
    </figure>
  );
}
