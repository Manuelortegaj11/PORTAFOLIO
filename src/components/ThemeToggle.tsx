import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

type Tema = 'light' | 'dark';

function temaActual(): Tema {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

export default function ThemeToggle() {
  const [tema, setTema] = useState<Tema>(temaActual);

  const cambiar = () => {
    const siguiente: Tema = tema === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = siguiente;
    try {
      localStorage.setItem('tema', siguiente === 'dark' ? 'oscuro' : 'claro');
    } catch {
      // Sin almacenamiento (modo privado): el cambio dura lo que dure la visita.
    }
    setTema(siguiente);
  };

  const etiqueta = tema === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro';

  return (
    <button
      type="button"
      onClick={cambiar}
      aria-label={etiqueta}
      title={etiqueta}
      className="grid size-10 place-items-center rounded-sm text-white/80 transition-colors hover:text-white"
    >
      {tema === 'dark' ? <Sun aria-hidden="true" className="size-5" /> : <Moon aria-hidden="true" className="size-5" />}
    </button>
  );
}
