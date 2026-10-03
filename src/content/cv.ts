/*
  Contenido del portafolio. Todo lo que dice este archivo sale de la hoja de
  vida (Manuel_Ortega_CV_2026.md); la sección de práctica conserva los
  ejercicios con evidencia en GIF del portafolio anterior.
*/

export type Enlace = { texto: string; href: string };

export const persona = {
  nombre: 'Manuel Eduardo Ortega Juvinao',
  nombreCorto: 'Manuel Ortega',
  titulo: 'Ingeniero de Sistemas',
  correo: 'manuelortegajuvinao@gmail.com',
  celular: '+57 304 462 0556',
  celularHref: 'tel:+573044620556',
  residencia: 'Ciénaga, Colombia',
  linkedin: { texto: 'linkedin.com/in/manuelortegaj11', href: 'https://www.linkedin.com/in/manuelortegaj11' },
  github: { texto: 'github.com/manuelortegaj11', href: 'https://github.com/manuelortegaj11' },
  cv: '/cv/Manuel_Ortega_CV_2026.pdf',
  foto: {
    src: '/media/foto/manuel-ortega-960.webp',
    srcSet: '/media/foto/manuel-ortega-480.webp 480w, /media/foto/manuel-ortega-960.webp 960w',
    ancho: 960,
    alto: 1316,
  },
  perfil:
    'Ingeniero de Sistemas con más de 2 años de experiencia en desarrollo backend y full stack, enfocado en plataformas empresariales, microservicios y arquitecturas limpias (SOLID, Clean Code, Hexagonal). He participado en el desarrollo de sistemas logísticos y plataformas e-commerce, integrando API Gateway, gRPC, monitoreo, trazabilidad e infraestructura on-premise. Cuento con conocimientos en inteligencia artificial, investigación de operaciones y optimización matemática aplicada a cadenas de suministro.',
};

/* ---------------------------------------------------------------- */
/* Experiencia laboral                                               */
/* ---------------------------------------------------------------- */

export type Experiencia = {
  id: string;
  empresa: string;
  inicio: string;
  fin: string;
  direccion: string;
  proyecto: string;
  area?: string;
  cargo: string;
  actividad: string;
  /** Logro principal: el texto se parte alrededor del enlace, igual que en la hoja de vida. */
  logro: { antes: string; enlace: Enlace; despues: string };
  logros: string[];
  proyectoId: string;
};

export const experiencias: Experiencia[] = [
  {
    id: 'banasan',
    empresa: 'BANASAN S.A.S.',
    inicio: '01/2026',
    fin: 'Actualidad',
    direccion: 'Km 5 Troncal del Caribe, Vía Gaira, Santa Marta, Colombia.',
    proyecto: 'Plataforma AGROLOGÍSTICO SIAL 1.0 para gestión logística y comercial agroalimentaria.',
    cargo: 'Desarrollador de Software Full Stack Junior',
    actividad:
      'Diseñar, desarrollar e implementar soluciones backend empresariales y módulos frontend escalables mediante arquitecturas modernas orientadas a microservicios, automatización de procesos y sistemas desacoplados.',
    logro: {
      antes: 'Participé en la creación, desarrollo y arquitectura del ',
      enlace: { texto: 'SISTEMA AGROLOGÍSTICO SIAL 1.0', href: 'https://sial.banasan.com.co/login' },
      despues:
        ', que digitalizó la operación logística agroindustrial, reduciendo el uso de papel y mejorando la trazabilidad de contenedores y camiones entre fincas, la zona externa del puerto y el Puerto de Santa Marta.',
    },
    logros: [
      'Desarrollé servicios backend con NestJS y TypeScript, aplicando principios SOLID, Clean Code y Arquitectura Hexagonal.',
      'Implementé la lógica de negocio para la gestión de ingresos y salidas de tractocamiones y camiones en la zona externa del Puerto de Santa Marta y en fincas.',
      'Implementé la asignación de contenedores a tractocamiones en la zona externa del Puerto de Santa Marta, con firma del conductor mediante código OTP.',
      'Desarrollé el proceso de cargue de contenedores y camiones en finca.',
      'Desarrollé el proceso de cargue de consolidación final en la zona externa del Puerto de Santa Marta, previo al ingreso de los contenedores al puerto para su exportación.',
      'Desarrollé la generación de las POMA (remisión de carga con detalle de pallets) por cada tramo operativo, tras el cargue y la salida de los vehículos.',
      'Apliqué reglas de negocio, validaciones y manejo de transacciones para garantizar la consistencia de los datos y la integridad de los procesos logísticos.',
      'Implementé servicios gRPC para autenticación, operaciones internas y comunicación entre microservicios.',
      'Participé en el desarrollo e integración de un API Gateway para la centralización y el enrutamiento de servicios.',
      'Desarrollé cron jobs para la transferencia de logs a servidores SFTP e implementé un sistema de logging centralizado (archivo, consola y base de datos).',
      'Participé en el desarrollo frontend web con Next.js y mobile con React Native y Expo, aplicando en ambos proyectos una arquitectura feature-based.',
      'Trabajé con bases de datos relacionales para el almacenamiento y la consulta de información.',
      'Apoyé la configuración y el soporte de servidores on-premise para el despliegue de servicios en desarrollo y producción.',
      'Trabajé bajo metodología Scrum, usando Azure DevOps para la gestión de tareas y Git/GitHub para el control de versiones.',
    ],
    proyectoId: 'sial',
  },
  {
    id: 'gigrd',
    empresa: 'Universidad del Magdalena – Grupo de Investigación GIGRD',
    inicio: '03/2024',
    fin: '04/2025',
    direccion: 'Carrera 32 #22-08, Santa Marta, Colombia.',
    proyecto:
      'Fortalecimiento de la Capacidad Productiva y Comercial de la Cadena de Suministro del Queso Costeño en las Subregiones del Caribe Colombiano.',
    area: 'Desarrollo de Software / Comercio Electrónico.',
    cargo: 'Desarrollador de Software Full Stack Senior',
    actividad: 'Diseñar y desarrollar la plataforma de mercadeo digital para la comercialización de Queso Costeño.',
    logro: {
      antes: 'Diseñé, desarrollé y definí la arquitectura de la ',
      enlace: { texto: 'PLATAFORMA E-COMMERCE QUESO COSTHECHO 1.0', href: 'https://www.youtube.com/@QuesoCosthecho' },
      despues:
        ', que habilitó la venta en línea de queso costeño con pagos integrados, gestión de pedidos y cálculo de precios y despacho según la ubicación del cliente.',
    },
    logros: [
      'Desarrollé el frontend con Next.js, adaptado a dispositivos móviles y de escritorio.',
      'Desarrollé el backend como API RESTful con TypeScript y Go, incluyendo autenticación JWT (access y refresh tokens) mediante cookies HttpOnly, gestión de órdenes, roles, trazabilidad, pasarela de pago e integración con APIs externas.',
      'Diseñé la base de datos relacional en PostgreSQL, normalizada hasta 3FN, con modelos ER y lógico documentados en ERD Plus y Draw.io.',
      'Integré un modelo de optimización logística con FastAPI para calcular precios óptimos y puntos de despacho según la ubicación geográfica.',
      'Desplegué la plataforma en un VPS de DigitalOcean con Docker Compose, contenerizando cada servicio con paridad entre desarrollo y producción.',
      'Configuré Nginx como proxy inverso, certificados SSL con Certbot, DNS, correos corporativos y PM2 para la disponibilidad continua.',
      'Automaticé migraciones y carga inicial de datos con Make.',
      'Implementé optimización SEO para mejorar la visibilidad en buscadores.',
      'Documenté la arquitectura, dependencias, despliegue y mantenimiento de la plataforma.',
    ],
    proyectoId: 'costhecho',
  },
  {
    id: 'tecnos',
    empresa: 'Universidad del Magdalena – Grupos de Investigación TecnOS & GIGRD',
    inicio: '10/2023',
    fin: '04/2024',
    direccion: 'Carrera 32 #22-08, Santa Marta, Colombia.',
    proyecto:
      'Fortalecimiento de la Capacidad Productiva y Comercial de la Cadena de Suministro del Queso Costeño en las Subregiones del Caribe Colombiano.',
    area: 'Inteligencia Artificial Aplicada mediante Computación Evolutiva / Programación Lineal.',
    cargo: 'Pasante de Investigación en Inteligencia Artificial',
    actividad:
      'Comparar e implementar métodos bioinspirados y programación lineal para la optimización de un modelo de cadena de suministro de Queso Costeño.',
    logro: {
      antes: 'Diseñé e implementé el ',
      enlace: {
        texto: 'MODELO DE OPTIMIZACIÓN DE LA CADENA DE SUMINISTRO DEL QUESO COSTEÑO',
        href: 'https://repositorio.unimagdalena.edu.co/entities/publication/50d88952-ad68-42f0-939a-fc882b425e96',
      },
      despues:
        ', que minimizó los costos logísticos entre centros de acopio y puntos de entrega en La Guajira, Magdalena y Córdoba.',
    },
    logros: [
      'Analicé los datos del proyecto de regalías, evaluando su estructura, calidad y relevancia para la optimización.',
      'Revisé el estado del arte en técnicas de optimización aplicables a sistemas logísticos.',
      'Implementé en Python algoritmos bioinspirados: genéticos (GA), recocido simulado (SA) y colonia de hormigas (ACO).',
      'Desarrollé un modelo de programación lineal entera mixta (MILP) en Pyomo, resuelto con GLPK.',
      'Simulé escenarios con datos de demanda y proveedores reales para validar los modelos.',
      'Comparé el rendimiento y la escalabilidad de los métodos, seleccionando el enfoque más eficiente y viable operacionalmente.',
      'Documenté la implementación y elaboré el informe final del proyecto con los resultados obtenidos.',
    ],
    proyectoId: 'optimizacion',
  },
];

/* ---------------------------------------------------------------- */
/* Proyectos (los logros principales de cada experiencia)            */
/* ---------------------------------------------------------------- */

export type Capa = { nombre: string; detalle: string };

export type Proyecto = {
  id: string;
  nombre: string;
  organizacion: string;
  periodo: string;
  rol: string;
  resultado: string;
  enlace: Enlace;
  /**
   * GIF o WebP animado con la demostración. Para publicarlo, deja el archivo
   * en public/media/proyectos/ y escribe aquí su ruta, por ejemplo
   * '/media/proyectos/sial.gif'. Mientras esté vacío se muestra el esquema.
   */
  demo?: string;
  capas: Capa[];
};

export const proyectos: Proyecto[] = [
  {
    id: 'sial',
    nombre: 'Sistema Agrologístico SIAL 1.0',
    organizacion: 'BANASAN S.A.S.',
    periodo: '01/2026 – Actualidad',
    rol: 'Creación, desarrollo y arquitectura',
    resultado:
      'Digitalizó la operación logística agroindustrial, reduciendo el uso de papel y mejorando la trazabilidad de contenedores y camiones entre fincas, la zona externa del puerto y el Puerto de Santa Marta.',
    enlace: { texto: 'Abrir SIAL 1.0', href: 'https://sial.banasan.com.co/login' },
    capas: [
      { nombre: 'Web y mobile', detalle: 'Next.js en web, React Native y Expo en mobile, arquitectura feature-based' },
      { nombre: 'API Gateway', detalle: 'Centralización y enrutamiento de servicios' },
      { nombre: 'Microservicios', detalle: 'NestJS y TypeScript, comunicación por gRPC' },
      { nombre: 'Operación', detalle: 'Logging centralizado, cron jobs a SFTP, servidores on-premise' },
    ],
  },
  {
    id: 'costhecho',
    nombre: 'Plataforma E-commerce Queso Costhecho 1.0',
    organizacion: 'Universidad del Magdalena – GIGRD',
    periodo: '03/2024 – 04/2025',
    rol: 'Diseño, desarrollo y arquitectura',
    resultado:
      'Habilitó la venta en línea de queso costeño con pagos integrados, gestión de pedidos y cálculo de precios y despacho según la ubicación del cliente.',
    enlace: { texto: 'Ver el canal en YouTube', href: 'https://www.youtube.com/@QuesoCosthecho' },
    capas: [
      { nombre: 'Frontend', detalle: 'Next.js para móvil y escritorio, con SEO' },
      { nombre: 'API REST', detalle: 'TypeScript y Go, JWT en cookies HttpOnly, pasarela de pago' },
      { nombre: 'Optimización', detalle: 'FastAPI para precios óptimos y puntos de despacho' },
      { nombre: 'Datos', detalle: 'PostgreSQL normalizada hasta 3FN' },
      { nombre: 'Infraestructura', detalle: 'DigitalOcean, Docker Compose, Nginx, Certbot, PM2, Make' },
    ],
  },
  {
    id: 'optimizacion',
    nombre: 'Modelo de optimización de la cadena de suministro del queso costeño',
    organizacion: 'Universidad del Magdalena – TecnOS & GIGRD',
    periodo: '10/2023 – 04/2024',
    rol: 'Diseño e implementación',
    resultado:
      'Minimizó los costos logísticos entre centros de acopio y puntos de entrega en La Guajira, Magdalena y Córdoba.',
    enlace: {
      texto: 'Leer la publicación',
      href: 'https://repositorio.unimagdalena.edu.co/entities/publication/50d88952-ad68-42f0-939a-fc882b425e96',
    },
    capas: [
      { nombre: 'Datos', detalle: 'Proyecto de regalías: demanda y proveedores reales' },
      { nombre: 'Bioinspirados', detalle: 'Python: genéticos (GA), recocido simulado (SA), colonia de hormigas (ACO)' },
      { nombre: 'Programación lineal', detalle: 'MILP en Pyomo, resuelto con GLPK' },
      { nombre: 'Decisión', detalle: 'Comparación de rendimiento y escalabilidad de los métodos' },
    ],
  },
];

/* ---------------------------------------------------------------- */
/* Educación y formación                                             */
/* ---------------------------------------------------------------- */

export const educacion = {
  titulo: 'Ingeniero de Sistemas',
  institucion: 'Universidad del Magdalena',
  ciudad: 'Santa Marta, Colombia',
  inicio: '08/2016',
  fin: '07/2025',
  descripcion: 'Pregrado en Ingeniería de Sistemas (Programa con Acreditación de Alta Calidad).',
  acta: 'Acta de reconocimiento institucional por pasantía de investigación destacada en trabajo de grado.',
};

export type Imagen = { src: string; ancho: number; alto: number; descripcion: string };

export type Formacion = {
  id: string;
  entidad: string;
  nombre: string;
  tipo?: string;
  horas: number;
  anio: number;
  certificados: Imagen[];
};

export const formacion: Formacion[] = [
  {
    id: 'sena-ia',
    entidad: 'SENA',
    nombre: 'Implementación de soluciones de inteligencia artificial',
    horas: 48,
    anio: 2025,
    certificados: [
      {
        src: '/media/certificados/sena-implementacion-soluciones-ia-2025.jpg',
        ancho: 1448,
        alto: 1086,
        descripcion: 'Certificado SENA: Implementación de soluciones de inteligencia artificial',
      },
    ],
  },
  {
    id: 'talento-tech',
    entidad: 'Talento Tech by Universidad Libre',
    nombre: 'Inteligencia artificial nivel básico (Bootcamp de Habilidades en Inteligencia Artificial)',
    horas: 159,
    anio: 2025,
    certificados: [
      {
        src: '/media/certificados/talento-tech-ia-nivel-basico-2025.jpg',
        ancho: 1448,
        alto: 1086,
        descripcion: 'Certificado Talento Tech: Bootcamp de Inteligencia Artificial Nivel Básico, 159 horas',
      },
    ],
  },
  {
    id: 'sena-docker',
    entidad: 'SENA',
    nombre: 'Despliegue de aplicaciones y servicios en contenedores Docker',
    horas: 48,
    anio: 2023,
    certificados: [
      {
        src: '/media/certificados/9118002776446CC1010119993C.jpg',
        ancho: 1275,
        alto: 975,
        descripcion: 'Certificado SENA: Despliegue de aplicaciones y servicios en contenedores Docker',
      },
    ],
  },
  {
    id: 'sena-eda',
    entidad: 'SENA',
    nombre: 'Análisis exploratorio de datos en Python',
    horas: 48,
    anio: 2023,
    certificados: [
      {
        src: '/media/certificados/9224002769316CC1010119993C.jpg',
        ancho: 1275,
        alto: 975,
        descripcion: 'Certificado SENA: Análisis exploratorio de datos en Python',
      },
    ],
  },
  {
    id: 'ds4a',
    entidad: 'Data Skills for All (DS4A) by Correlation One',
    nombre: 'Fundamentos en analítica de datos',
    horas: 90,
    anio: 2022,
    certificados: [
      {
        src: '/media/certificados/DS4A.png',
        ancho: 1389,
        alto: 984,
        descripcion: 'Certificado DS4A: Fundamentos en analítica de datos',
      },
    ],
  },
  {
    id: 'mision-tic',
    entidad: 'Misión TIC by Universidad del Norte',
    tipo: 'Diplomado',
    nombre: 'Habilidades en programación con énfasis en aplicaciones web',
    horas: 800,
    anio: 2022,
    certificados: [
      {
        src: '/media/certificados/CERTIFICADOGENERAL.jpg',
        ancho: 1273,
        alto: 982,
        descripcion: 'Certificado general del diplomado Misión TIC, 800 horas',
      },
      {
        src: '/media/certificados/CERTIFICADO1.jpg',
        ancho: 1273,
        alto: 985,
        descripcion: 'Módulo: Fundamentos de programación',
      },
      {
        src: '/media/certificados/CERTIFICADO2.jpg',
        ancho: 1273,
        alto: 985,
        descripcion: 'Módulo: Programación básica',
      },
      {
        src: '/media/certificados/CERTIFICADO3.jpg',
        ancho: 1273,
        alto: 985,
        descripcion: 'Módulo: Desarrollo de software',
      },
      {
        src: '/media/certificados/CERTIFICADO4.jpg',
        ancho: 1273,
        alto: 985,
        descripcion: 'Módulo: Desarrollo de aplicaciones web',
      },
    ],
  },
];

/** Acta de grado, donde consta el reconocimiento por la pasantía de investigación. */
export const actaReconocimiento: Imagen[] = [
  {
    src: '/media/certificados/unimagdalena-acta-de-grado-2025.jpg',
    ancho: 694,
    alto: 829,
    descripcion: 'Acta de grado de Ingeniero de Sistemas, Universidad del Magdalena, con reconocimiento por la pasantía de investigación',
  },
];

/* ---------------------------------------------------------------- */
/* Herramientas tecnológicas e idiomas                               */
/* ---------------------------------------------------------------- */

export type Herramienta = { categoria: string; items: string[]; nivel: string };

export const herramientas: Herramienta[] = [
  { categoria: 'Desarrollo de Software', items: ['TypeScript', 'React', 'Next.js', 'NestJS', 'Go', 'Python', 'FastAPI'], nivel: 'Profesional' },
  { categoria: 'Inteligencia Artificial', items: ['Scikit-learn', 'TensorFlow/Keras'], nivel: 'Intermedio' },
  { categoria: 'Asistentes de IA para desarrollo', items: ['Anthropic Claude Code', 'OpenAI Codex'], nivel: 'Profesional' },
  { categoria: 'Investigación de Operaciones', items: ['Pyomo', 'GNU Linear Programming Kit – GLPK'], nivel: 'Profesional' },
  { categoria: 'Bases de Datos', items: ['PostgreSQL', 'MySQL', 'MySQL Workbench', 'ERD Plus', 'Draw.io'], nivel: 'Profesional' },
  { categoria: 'Análisis de Datos', items: ['Jupyter Notebook', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'], nivel: 'Profesional' },
  { categoria: 'Control de Versiones', items: ['Git', 'GitHub', 'Azure DevOps'], nivel: 'Profesional' },
  { categoria: 'DevOps', items: ['Docker', 'PM2', 'Nginx', 'Make'], nivel: 'Profesional' },
  { categoria: 'Sysadmin', items: ['Linux Server', 'Terminal', 'UFW', 'LunarVim', 'DNS', 'APT', 'Systemd', 'Certbot'], nivel: 'Profesional' },
  { categoria: 'Microsoft Office', items: ['Word', 'Excel', 'PowerPoint'], nivel: 'Profesional' },
];

export const idiomas = [
  { idioma: 'Español', nivel: 'Nativo' },
  { idioma: 'Inglés', nivel: 'Intermedio' },
];

/* ---------------------------------------------------------------- */
/* Experiencia práctica (extra): ejercicios con evidencia en GIF     */
/* ---------------------------------------------------------------- */

export type Practica = {
  id: string;
  titulo: string;
  tema: 'Base de datos' | 'Análisis de datos' | 'Aprendizaje automático';
  descripcion: string;
  puntos: string[];
  herramientas: string[];
  repositorio: string;
  poster: string;
  demo: string;
  ancho: number;
  alto: number;
};

export const practicas: Practica[] = [
  {
    id: 'champions',
    titulo: 'Base de datos de la UEFA Champions League',
    tema: 'Base de datos',
    descripcion: 'Diseño completo de una base de datos relacional a partir de los requisitos de UEFA.com.',
    puntos: [
      'Extracción de requisitos de UEFA.com.',
      'Modelo entidad-relación con ERD Plus.',
      'Modelo lógico de datos con Draw.io.',
      'Aplicación de reglas de normalización.',
      'Scripts de creación de la base de datos en pgAdmin.',
      'Scripts para la creación de vistas y procedimientos.',
      'Documentación de procesos en Word y Excel.',
    ],
    herramientas: ['PostgreSQL', 'pgAdmin', 'ERD Plus', 'Draw.io', 'Excel'],
    repositorio: 'https://github.com/Manuelortegaj11/PROJECT_DB_CHAMPIONSLEAGUE',
    poster: '/media/practica/DB-poster.webp',
    demo: '/media/practica/DB.webp',
    ancho: 960,
    alto: 540,
  },
  {
    id: 'seguros',
    titulo: 'Datos de seguros',
    tema: 'Análisis de datos',
    descripcion: 'Resultados del análisis exploratorio de datos realizado a un caso de estudio de seguros.',
    puntos: [],
    herramientas: ['Python', 'Jupyter', 'Anaconda'],
    repositorio: 'https://github.com/Manuelortegaj11/Datos_Seguro',
    poster: '/media/practica/DA1-poster.webp',
    demo: '/media/practica/DA1.webp',
    ancho: 396,
    alto: 559,
  },
  {
    id: 'inmuebles',
    titulo: 'Inmuebles disponibles para la venta',
    tema: 'Análisis de datos',
    descripcion: 'Resultados del análisis exploratorio de datos realizado a un caso de estudio de inmuebles en venta.',
    puntos: [],
    herramientas: ['Python', 'Jupyter', 'Anaconda'],
    repositorio: 'https://github.com/Manuelortegaj11/Inmuebles_Disponibles_Para_La_Venta',
    poster: '/media/practica/DA2-poster.webp',
    demo: '/media/practica/DA2.webp',
    ancho: 396,
    alto: 559,
  },
  {
    id: 'simbolos',
    titulo: 'Símbolos matemáticos escritos a mano',
    tema: 'Aprendizaje automático',
    descripcion:
      'Modelos de aprendizaje automático para analizar y predecir un conjunto de datos básicos de símbolos matemáticos escritos a mano.',
    puntos: ['Random Forest.', 'Árboles de decisión.', 'Perceptrón multicapa (red neuronal artificial).', 'CNN (red neuronal convolucional).'],
    herramientas: ['Python', 'Jupyter', 'Anaconda'],
    repositorio: 'https://github.com/Manuelortegaj11/CONJUNTO_DE_DATOS_BASICOS_DE_SIMBOLOS_MATEMATICOS_ESCRITOS_A_MANO',
    poster: '/media/practica/IA1-poster.webp',
    demo: '/media/practica/IA1.webp',
    ancho: 396,
    alto: 559,
  },
];
