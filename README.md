# Portafolio de Manuel Ortega

Portafolio personal de Manuel Eduardo Ortega Juvinao, Ingeniero de Sistemas.
Publicado en https://portafolio-peach-two.vercel.app

## Stack

- React 19 + TypeScript 6 + Vite 8
- Tailwind CSS 4
- React Router 8 (la ruta `/Certificaciones` está enlazada desde la hoja de vida: no cambiarla)
- Tipografías autoalojadas: Big Shoulders (títulos) y Barlow (texto)

## Comandos

```bash
npm install
npm run dev       # servidor local en http://localhost:5173
npm run build     # verificación de tipos y build de producción en dist/
npm run preview   # sirve el build de producción
npm run lint
```

## Dónde se edita cada cosa

Todo el texto vive en [`src/content/cv.ts`](src/content/cv.ts) y sale de la hoja de vida
(`Manuel_Ortega_CV_2026.md`). Para actualizar el portafolio, actualiza primero la hoja de vida
y luego ese archivo.

| Qué | Dónde |
| --- | --- |
| Perfil, contacto, foto | `persona` en `cv.ts` |
| Experiencia laboral | `experiencias` en `cv.ts` |
| Proyectos (SIAL, Costhecho, optimización) | `proyectos` en `cv.ts` |
| Herramientas e idiomas | `herramientas` e `idiomas` en `cv.ts` |
| Educación y formación | `educacion` y `formacion` en `cv.ts` |
| Ejercicios con GIF | `practicas` en `cv.ts` |
| Hoja de vida en PDF | `public/cv/Manuel_Ortega_CV_2026.pdf` |

## Pendientes

### GIF de los proyectos

Los tres proyectos tienen demostración: SIAL 1.0 (carrusel de la página de acceso), Queso Costhecho
(tutorial de cliente del canal, con la dirección de envío pixelada) y el modelo de optimización
(recorrido por la publicación en el repositorio). Si un proyecto no tiene `demo`, se muestra el esquema
por capas. Para cambiar una grabación:

1. Copia el GIF (o WebP animado) en `public/media/proyectos/`, por ejemplo `sial.gif`.
2. En `cv.ts`, dentro del proyecto, agrega `demo: '/media/proyectos/sial.gif'`.

### Diploma del título profesional

La página de certificados muestra "Disponible bajo solicitud". Para publicar el diploma, copia la
imagen en `public/media/certificados/` y agrégala en `tituloProfesional` dentro de `cv.ts`.

### Agregar un certificado nuevo

Copia la imagen en `public/media/certificados/` con un nombre descriptivo
(`entidad-curso-año.jpg`) y agrégala en `certificados` de la formación correspondiente
(o en `actaReconocimiento` para el acta), con su ancho y alto en píxeles. Mientras una
formación no tenga imagen, la página de certificados muestra "pendiente de subir".

## Despliegue

Vercel construye con `npm run build` y publica `dist/` (ver `vercel.json`). Las rutas del
portafolio anterior (`/Experiencia`, `/Educación`, `/Habilidades`, `/Proyectos`, `/sobre mí`)
redirigen a la sección equivalente de la página principal.
