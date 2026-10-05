/*
  "Lo que construyo": un diagrama animado por proyecto, en pestañas.
  SIAL 1.0 muestra la ruta de los contenedores; Queso Costhecho, el flujo de
  compra con la asignación optimizada; el modelo, cómo se escogió MILP.
*/

import { useRef, useState, type KeyboardEvent } from 'react';
import { Pause, Play } from 'lucide-react';
import RutaSial from './RutaSial.tsx';
import FlujoCosthecho from './FlujoCosthecho.tsx';
import ComparacionMetodos from './ComparacionMetodos.tsx';

const pestanas = [
  {
    id: 'sial',
    nombre: 'SIAL 1.0',
    area: 'Logística portuaria',
    resumen: 'Trazabilidad de contenedores y camiones entre fincas, la zona externa del puerto y el Puerto de Santa Marta.',
  },
  {
    id: 'costhecho',
    nombre: 'Queso Costhecho 1.0',
    area: 'Comercio electrónico',
    resumen:
      'Venta en línea de queso costeño con pagos integrados, gestión de pedidos y cálculo de precios y despacho según la ubicación del cliente.',
  },
  {
    id: 'modelo',
    nombre: 'Modelo de optimización',
    area: 'Investigación',
    resumen: 'Minimizar los costos logísticos entre centros de acopio y puntos de entrega en La Guajira, Magdalena y Córdoba.',
  },
] as const;

type IdPestana = (typeof pestanas)[number]['id'];

export default function LoQueConstruyo() {
  const [activa, setActiva] = useState<IdPestana>('sial');
  const [pausada, setPausada] = useState(false);
  const botones = useRef<Record<string, HTMLButtonElement | null>>({});
  const actual = pestanas.find((p) => p.id === activa)!;

  const ir = (id: string, enfocar = false) => {
    const destino = pestanas.find((p) => p.id === id);
    if (!destino) return;
    setActiva(destino.id);
    if (enfocar) botones.current[destino.id]?.focus();
  };

  // Patrón de pestañas WAI-ARIA: flechas, Inicio y Fin mueven y activan la pestaña.
  const alTeclear = (e: KeyboardEvent<HTMLDivElement>) => {
    const i = pestanas.findIndex((p) => p.id === activa);
    const ultimo = pestanas.length - 1;
    const destino =
      e.key === 'ArrowRight' ? (i + 1) % pestanas.length
      : e.key === 'ArrowLeft' ? (i - 1 + pestanas.length) % pestanas.length
      : e.key === 'Home' ? 0
      : e.key === 'End' ? ultimo
      : null;
    if (destino === null) return;
    e.preventDefault();
    ir(pestanas[destino].id, true);
  };

  return (
    <div className="vitrina" data-pausada={pausada ? '' : undefined}>
      <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h2 id="vitrina-titulo" className="font-display text-3xl font-bold tracking-wide uppercase sm:text-4xl">
          Lo que construyo
        </h2>
        <p className="max-w-[58ch] text-white/85 sm:text-right">{actual.resumen}</p>
      </div>

      <div className="mb-8 flex flex-wrap items-end gap-x-6 gap-y-3 border-b border-white/30">
        <div
          role="tablist"
          aria-labelledby="vitrina-titulo"
          onKeyDown={alTeclear}
          className="grid w-full grid-cols-3 gap-2 sm:w-auto sm:flex-1 sm:gap-6"
        >
          {pestanas.map((p) => {
            const seleccionada = p.id === activa;
            return (
              <button
                key={p.id}
                ref={(el) => {
                  botones.current[p.id] = el;
                }}
                type="button"
                role="tab"
                id={`pestana-${p.id}`}
                aria-selected={seleccionada}
                aria-controls={`panel-${p.id}`}
                tabIndex={seleccionada ? 0 : -1}
                onClick={() => ir(p.id)}
                className={`-mb-px min-h-11 border-b-[3px] pb-3 text-left transition-colors ${
                  seleccionada ? 'border-white text-white' : 'border-transparent text-white/80 hover:text-white'
                }`}
              >
                <span className="block font-display text-base leading-tight font-bold tracking-wide break-words uppercase max-[380px]:text-sm sm:text-2xl">
                  {p.nombre}
                </span>
                <span className="mt-0.5 block text-xs font-medium sm:text-sm">{p.area}</span>
              </button>
            );
          })}
        </div>
        <button
          type="button"
          onClick={() => setPausada((v) => !v)}
          aria-pressed={pausada}
          className="vitrina-pausa mb-2 ml-auto inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white/85 hover:text-white"
        >
          {pausada ? <Play aria-hidden="true" className="size-4" /> : <Pause aria-hidden="true" className="size-4" />}
          {pausada ? 'Reanudar animación' : 'Pausar animación'}
        </button>
      </div>

      {pestanas.map((p) => (
        <div
          key={p.id}
          role="tabpanel"
          id={`panel-${p.id}`}
          aria-labelledby={`pestana-${p.id}`}
          hidden={p.id !== activa}
          tabIndex={0}
        >
          {p.id === 'sial' && <RutaSial />}
          {p.id === 'costhecho' && <FlujoCosthecho onIr={(id) => ir(id, true)} />}
          {p.id === 'modelo' && <ComparacionMetodos onIr={(id) => ir(id, true)} />}
        </div>
      ))}
    </div>
  );
}
