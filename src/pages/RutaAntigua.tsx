import { Link, Navigate, useLocation } from 'react-router';

/*
  El portafolio anterior tenía una página por sección (/Experiencia,
  /Educación, ...). Esos enlaces siguen circulando, así que los llevamos a la
  sección equivalente de la página principal.
*/
const equivalencias: Record<string, string> = {
  'sobre mi': '/',
  habilidades: '/#herramientas',
  educacion: '/#formacion',
  experiencia: '/#experiencia',
  proyectos: '/#proyectos',
};

function normalizar(ruta: string) {
  let texto = ruta;
  try {
    texto = decodeURIComponent(ruta);
  } catch {
    // Ruta mal codificada: se compara tal cual.
  }
  return texto
    .replace(/^\/+|\/+$/g, '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();
}

export default function RutaAntigua() {
  const { pathname } = useLocation();
  const destino = equivalencias[normalizar(pathname)];

  if (destino) return <Navigate to={destino} replace />;

  return (
    <section className="mx-auto max-w-[1200px] px-4 py-24 sm:px-6">
      <h1 className="font-display text-6xl font-extrabold uppercase">Esta página no existe</h1>
      <p className="mt-4 max-w-[60ch] text-muted">La dirección {pathname} no corresponde a ninguna sección del portafolio.</p>
      <Link to="/" className="mt-8 inline-flex min-h-12 items-center bg-accent px-5 font-semibold text-on-accent">
        Ir al inicio
      </Link>
    </section>
  );
}
