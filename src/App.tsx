import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import Certificaciones from './pages/Certificaciones.tsx';
import RutaAntigua from './pages/RutaAntigua.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      // La hoja de vida enlaza a esta ruta exacta: no cambiarla.
      { path: 'Certificaciones', element: <Certificaciones /> },
      { path: '*', element: <RutaAntigua /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
