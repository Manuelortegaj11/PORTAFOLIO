import { persona } from '../content/cv.ts';

export default function Footer() {
  return (
    <footer className="banda border-t border-on-band/15 bg-band text-on-band/80">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {persona.nombre}
        </p>
        <p>{persona.residencia}</p>
      </div>
    </footer>
  );
}
