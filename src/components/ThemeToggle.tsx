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
    // La barra del navegador en el celular sigue al menú: azul de noche, blanca de día.
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', siguiente === 'dark' ? '#1F4E79' : '#FFFFFF');
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
      className="grid size-10 shrink-0 place-items-center rounded-sm text-on-band/85 transition-colors hover:text-on-band max-lg:size-11"
    >
      {tema === 'dark' ? <Sun aria-hidden="true" className="size-5" /> : <Moon aria-hidden="true" className="size-5" />}
    </button>
  );
}
