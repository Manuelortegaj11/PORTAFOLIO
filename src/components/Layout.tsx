import { Outlet, ScrollRestoration } from 'react-router';
import Header from './Header.tsx';
import Footer from './Footer.tsx';

export default function Layout() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-signal focus:px-4 focus:py-2 focus:font-semibold focus:text-ink"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
}
