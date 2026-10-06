/*
  Monograma MO: la misma figura del favicon y del avatar del proyecto en Vercel
  (public/favicon.svg). Las clases eligen los colores: `fondo` para el cuadro y
  `letras` para la M y la O, así se usa normal o invertido según la superficie.
*/
export default function Monograma({ className = '', fondo, letras }: { className?: string; fondo: string; letras: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <rect width="32" height="32" className={fondo} />
      <path className={letras} d="M4 24V8h3.2l2.8 6.4L12.8 8H16v16h-3.1V14.6l-2.1 4.9H9.2l-2.1-4.9V24z" />
      <path className={letras} fillRule="evenodd" d="M18 8h10v16H18zm3.1 3.1v9.8h3.8v-9.8z" />
    </svg>
  );
}
