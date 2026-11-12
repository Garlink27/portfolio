export type ProjectCategory = 'Académico' | 'Hackatón' | 'Expo-Ingenierías';

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectDocument {
  title: string;
  href: string;
  type: 'PDF' | 'Excel' | 'Word' | 'Python';
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  description: string;
  objective?: string;
  technologies: string[];
  features: string[];
  pending?: string[];
  cover?: ProjectImage;
  gallery: ProjectImage[];
  documents?: ProjectDocument[];
  repository?: string;
  note?: string;
}

const image = (src: string, alt: string): ProjectImage => ({
  src: `${import.meta.env.BASE_URL}${src}`,
  alt,
});
const document = (
  title: string,
  href: string,
  type: ProjectDocument['type'],
): ProjectDocument => ({ title, href, type });

export const projects: Project[] = [
  {
    id: 'petto',
    title: 'Petto · Asistente de hábitos',
    category: 'Académico',
    summary: 'Aplicación móvil multiplataforma para organizar tareas y acompañar hábitos.',
    description:
      'Petto reúne herramientas de organización personal en una aplicación .NET MAUI. Esta primera versión incluye acceso de usuarios, gestión de tareas, estadísticas y un chat con inteligencia artificial.',
    objective: 'Apoyar a los usuarios en la formación de buenos hábitos mediante tareas y seguimiento.',
    technologies: ['.NET MAUI', 'C#', 'SQLite', 'API de Grok'],
    features: [
      'Registro e inicio de sesión conectados a SQLite.',
      'Tareas organizadas por categorías, con vista de detalle y edición.',
      'Resumen gráfico de tareas completadas y pendientes.',
      'Chat con inteligencia artificial integrado mediante Grok.',
    ],
    pending: [
      'La mascota virtual de la pantalla principal y sus acciones todavía no tenían funcionalidad.',
    ],
    cover: image('evidencias/petto/2.png', 'Pantalla de la aplicación Petto'),
    gallery: [
      image('evidencias/petto/1.png', 'Pantalla de acceso a Petto'),
      image('evidencias/petto/2.png', 'Pantalla principal de Petto'),
      image('evidencias/petto/4.png', 'Interfaz de tareas de Petto'),
      image('evidencias/petto/5.png', 'Detalle de una tarea en Petto'),
      image('evidencias/petto/6.png', 'Vista de categorías en Petto'),
      image('evidencias/petto/7.png', 'Estadísticas de tareas en Petto'),
      image('evidencias/petto/8.png', 'Interfaz adicional de Petto'),
      image('evidencias/petto/9.png', 'Interfaz adicional de Petto'),
      image('evidencias/petto/10.png', 'Interfaz adicional de Petto'),
      image('evidencias/petto/Captura de pantalla 2026-11-11 100954.png', 'Captura adicional de Petto'),
    ],
    repository: 'https://github.com/Garlink27/PettoV1',
  },
  {
    id: 'pokemon-maui',
    title: 'Colección de cartas Pokémon · móvil',
    category: 'Académico',
    summary: 'Aplicación móvil para consultar y organizar una colección personal de cartas.',
    description:
      'Aplicación .NET MAUI que combina una colección local con información consultada mediante la API TCGdex.',
    objective: 'Facilitar la consulta, búsqueda y organización de cartas Pokémon guardadas por el usuario.',
    technologies: ['.NET MAUI', 'C#', 'SQLite', 'API TCGdex'],
    features: [
      'Registro e inicio de sesión con persistencia en SQLite.',
      'Vista de colección con imagen, rareza, tipo y costo.',
      'Búsqueda por nombre y filtros por tipo y rareza.',
      'Gestión de favoritos en un apartado independiente.',
    ],
    cover: image('evidencias/pokemon-maui/1.png', 'Colección de cartas Pokémon en la aplicación móvil'),
    gallery: [
      image('evidencias/pokemon-maui/1.png', 'Colección de cartas Pokémon'),
      image('evidencias/pokemon-maui/2.png', 'Detalle de cartas Pokémon'),
      image('evidencias/pokemon-maui/4.png', 'Vista adicional de la aplicación móvil'),
      image('evidencias/pokemon-maui/Captura de pantalla 2026-11-11 103145.png', 'Captura adicional de la aplicación móvil'),
    ],
    documents: [
      document('Documentación de la colección', 'evidencias/pokemon-maui/ev-micoleccion-doc-pdf.pdf', 'PDF'),
    ],
    repository: 'https://github.com/ebaltalmv/ParcialUno_MovilesII',
    note: 'La API utilizada para consultar cartas es TCGdex.',
  },
  {
    id: 'arena-videojuegos',
    title: 'Arena de videojuegos 8Bit',
    category: 'Expo-Ingenierías',
    summary: 'Sistema web colaborativo para administrar una arena de videojuegos ficticia.',
    description:
      'Proyecto presentado en Expo-Ingenierías de Universidad Madero. Incluye un sistema web administrativo y evidencias de análisis y diseño de software.',
    objective: 'Reunir en un sistema los procesos de operación y administración de la arena.',
    technologies: [],
    features: [
      'Módulos de entradas y souvenirs, roles y empleados, clientes, inventario y proveedores.',
      'Administración del ciclo de vida de trajes inteligentes: renta, devolución, sanitización y restauración.',
      'Módulos de venta de snacks y gestión de devoluciones.',
      'Operaciones administrativas de altas, ediciones, consultas y eliminaciones según el módulo.',
    ],
    cover: image('evidencias/arena/1.png', 'Dashboard de la Arena de videojuegos 8Bit'),
    gallery: [
      ...Array.from({ length: 14 }, (_, index) =>
        image(`evidencias/arena/${index + 1}.png`, `Pantalla ${index + 1} del sistema Arena de videojuegos 8Bit`),
      ),
      image('evidencias/arena/ev-mnr-casos-uso.png', 'Diagrama de casos de uso'),
      image('evidencias/arena/ev-mnr-generalizacion.png', 'Diagrama de generalización'),
      image('evidencias/arena/ev-mnr-modelado-objetos.png', 'Modelado de objetos'),
      image('evidencias/arena/ev-mnr-sw-cliente.png', 'Diagrama de software del cliente'),
      image('evidencias/arena/ev-mnr-sw-empleados.png', 'Diagrama de software de empleados'),
      image('evidencias/arena/ev-pds-flujo-actividades.png', 'Flujo de actividades'),
      image('evidencias/arena/ev-pds-objetos-atributos.png', 'Diagrama de objetos y atributos'),
    ],
    documents: [
      document('Diagrama de estados', 'evidencias/arena/ev-mnr-diagrama-estados-pdf.pdf', 'PDF'),
      document('Métricas del proyecto', 'evidencias/arena/Gael.xlsx', 'Excel'),
    ],
    repository: 'https://github.com/ebaltalmv/ArenaVideojuegos',
    note: 'Trabajo realizado en equipo y presentado en Expo-Ingenierías de Universidad Madero.',
  },
  {
    id: 'signavio',
    title: 'Modelado de procesos con SAP Signavio',
    category: 'Académico',
    summary: 'Ejercicios de modelado de procesos documentados mediante diagramas.',
    description:
      'Colección de ejercicios elaborados con SAP Signavio a partir de procedimientos e instrucciones proporcionados en documentos de trabajo.',
    objective: 'Representar procesos mediante diagramas elaborados en SAP Signavio.',
    technologies: ['SAP Signavio'],
    features: [
      'Galería de diagramas de los ejercicios de cupcakes, envío, repostero, producción e ingredientes.',
      'Documento PDF de ejercicios relacionados con los diagramas.',
    ],
    cover: image('evidencias/signavio/ev-signavio-ej1-cupcakes.png', 'Diagrama de proceso del ejercicio de cupcakes'),
    gallery: [
      image('evidencias/signavio/ev-signavio-ej1-cupcakes.png', 'Ejercicio de proceso de cupcakes'),
      image('evidencias/signavio/ev-signavio-ej2-envio.png', 'Ejercicio de proceso de envío'),
      image('evidencias/signavio/ev-signavio-ej3-repostero.png', 'Ejercicio de proceso de repostero'),
      image('evidencias/signavio/ev-signavio-ej4-produccion.png', 'Ejercicio de proceso de producción'),
      image('evidencias/signavio/ev-signavio-ej5-ingredientes.png', 'Ejercicio de proceso de ingredientes'),
    ],
    documents: [
      document('Ejercicios de SAP Signavio', 'evidencias/signavio/Ejercicios Sap.pdf', 'PDF'),
    ],
  },
  {
    id: 'bases-de-datos',
    title: 'Diseño y administración de bases de datos',
    category: 'Académico',
    summary: 'Evidencias de ejercicios de diseño, modelado y administración de bases de datos.',
    description:
      'Selección de capturas de trabajos de bases de datos. Las evidencias muestran administración con pgAdmin y distintos modelos; no se asignan nombres o funcionalidades que no estén identificados.',
    technologies: ['PostgreSQL', 'pgAdmin', 'MySQL', 'XAMPP'],
    features: [
      'Capturas de administración y exploración de bases de datos.',
      'Evidencias de estructuras y relaciones disponibles en los diagramas.',
    ],
    cover: image('evidencias/bases-datos/1.png', 'Vista de administración de bases de datos en pgAdmin'),
    gallery: [
      image('evidencias/bases-datos/1.png', 'Explorador de bases de datos en pgAdmin'),
      image('evidencias/bases-datos/2.png', 'Evidencia de diseño de base de datos'),
      image('evidencias/bases-datos/3.png', 'Evidencia adicional de bases de datos'),
    ],
  },
  {
    id: 'pokemon-blazor',
    title: 'Pokémon Cards · Blazor y OData',
    category: 'Académico',
    summary: 'Evolución web de la colección Pokémon, con servicio OData propio.',
    description:
      'Segunda versión de la colección de cartas Pokémon, migrada de una aplicación móvil a una aplicación web en Blazor. La interfaz sigue Fiori Guidelines y utiliza un servicio OData desarrollado para el proyecto.',
    objective: 'Llevar la experiencia de la colección a la web y trabajar con un servicio OData propio.',
    technologies: ['Blazor', 'OData', 'SAP Fiori Guidelines'],
    features: [
      'Inventario con búsqueda de cartas.',
      'Vista maestro-detalle con información de la carta seleccionada.',
      'Formulario para registrar nuevas cartas.',
      'Navegación entre colección, favoritos y la vista Blazor Fiori.',
    ],
    cover: image('evidencias/blazor-pokemon/1.png', 'Interfaz Blazor de colección de cartas Pokémon'),
    gallery: [
      image('evidencias/blazor-pokemon/1.png', 'Vista de colección en Blazor'),
      image('evidencias/blazor-pokemon/2.png', 'Vista de detalle de una carta en Blazor'),
      image('evidencias/blazor-pokemon/3.png', 'Vista adicional de Pokémon Cards en Blazor'),
    ],
  },
  {
    id: 'ecoumad',
    title: 'ECOUMAD · planeación y gestión de proyectos',
    category: 'Académico',
    summary: 'Proyecto web acompañado de artefactos de planeación y administración.',
    description:
      'Trabajo que reúne el desarrollo de un sitio web y documentación de gestión del proyecto. Las evidencias incluyen planeación, comunicación, actividades y presupuesto.',
    technologies: [],
    features: [
      'Diagrama de Gantt y presupuesto.',
      'Rueda de habilidades y matriz de comunicación.',
      'Matriz de actividades de administración del proyecto.',
      'Mapa mental y archivo Python de predicción incluidos entre las evidencias.',
    ],
    gallery: [],
    documents: [
      document('Diagrama de Gantt', 'evidencias/ecoumad/ev-ecoumad-gantt-pdf.pdf', 'PDF'),
      document('Rueda de habilidades', 'evidencias/ecoumad/ev-ecoumad-habilidades-pm-pdf.pdf', 'PDF'),
      document('Mapa mental', 'evidencias/ecoumad/ev-ecoumad-mapa-mental-pdf.pdf', 'PDF'),
      document('Matriz de comunicación', 'evidencias/ecoumad/ev-ecoumad-matriz-comu-pdf.pdf', 'PDF'),
      document('Matriz de actividades', 'evidencias/ecoumad/ev-ecoumad-matriz-func-pdf.pdf', 'PDF'),
      document('Presupuesto', 'evidencias/ecoumad/ev-ecoumad-presupuesto-pdf.pdf', 'PDF'),
      document('Script de predicción', 'evidencias/ecoumad/ev-ecoumad-prediccion-py.py', 'Python'),
    ],
    repository: 'https://github.com/oscarzt20/ecoUMAD',
    note: 'La evidencia disponible no especifica aquí el stack utilizado para el sitio web.',
  },
  {
    id: 'hack-puebla',
    title: 'Hack Puebla · aprendizaje accesible',
    category: 'Hackatón',
    summary: 'Reto colaborativo para apoyar el aprendizaje de personas con discapacidad.',
    description:
      'Participación en un hackatón como parte de un equipo de cuatro personas. El equipo eligió un reto orientado a facilitar el aprendizaje de distintos temas para personas con discapacidad.',
    objective: 'Explorar una solución de aprendizaje accesible para contenidos educativos y temas de interés.',
    technologies: [],
    features: [
      'Trabajo colaborativo durante el hackatón.',
      'Selección de un reto entre las problemáticas planteadas.',
    ],
    cover: image('evidencias/hackpuebla/hack-3.jpeg', 'Presentación del reto durante Hack Puebla'),
    gallery: [
      image('evidencias/hackpuebla/hack-3.jpeg', 'Presentación del reto durante Hack Puebla'),
    ],
    repository: 'https://github.com/oscarzt20/Hack-Puebla',
    note: 'Las evidencias disponibles no especifican el stack ni permiten confirmar el alcance de una implementación final.',
  },
  {
    id: 'itil',
    title: 'Trabajos y documentación de ITIL',
    category: 'Académico',
    summary: 'Colección de presentaciones, mapas conceptuales y actividades académicas.',
    description:
      'Material de actividades y trabajos relacionados con ITIL y la gestión de servicios de tecnologías de la información.',
    technologies: ['ITIL'],
    features: [
      'Mapas conceptuales de las unidades 5, 6 y 7.',
      'Presentaciones y documentos de actividades disponibles para consulta.',
    ],
    cover: image('evidencias/itil/Mapa conceptual de la Unidad 5.png', 'Mapa conceptual de ITIL de la unidad 5'),
    gallery: [
      image('evidencias/itil/Mapa conceptual de la Unidad 5.png', 'Mapa conceptual de la unidad 5'),
      image('evidencias/itil/Mapa conceptual de la Unidad 6.png', 'Mapa conceptual de la unidad 6'),
      image('evidencias/itil/Mapa Conceptual 7ma unidad.png', 'Mapa conceptual de la unidad 7'),
    ],
    documents: [
      document('Presentación: administración de procesos', 'evidencias/itil/Copia de Plantilla Presentación Admin Procesos.pdf', 'PDF'),
      document('ITIL 4 · DevShop', 'evidencias/itil/ev-itil4-devshop-pdf.pdf', 'PDF'),
      document('Gestión del talento · ITIL 5', 'evidencias/itil/Gestión del Talento ITIL 5.pdf', 'PDF'),
      document('Caso de dimensión', 'evidencias/itil/Caso_Dimension1.docx', 'Word'),
    ],
  },
  {
    id: 'medsystem',
    title: 'MedSystem V2 · administración médica',
    category: 'Académico',
    summary: 'Sistema web con áreas diferenciadas para pacientes, doctores y administración.',
    description:
      'Aplicación web orientada a apoyar la administración de un doctor. Las evidencias muestran el acceso al sistema y pantallas de sus perfiles principales.',
    objective: 'Organizar en un sistema web las áreas destinadas a pacientes, doctores y administradores.',
    technologies: [],
    features: [
      'Inicio de sesión y registro.',
      'Áreas independientes para paciente, doctor y administrador.',
    ],
    cover: image('evidencias/medsystem/1.png', 'Pantalla de acceso de MedSystem'),
    gallery: Array.from({ length: 17 }, (_, index) =>
      image(`evidencias/medsystem/${index + 1}.png`, `Pantalla ${index + 1} de MedSystem`),
    ),
    repository: 'https://github.com/Garlink27/medsystem-v2',
    note: 'Las secciones específicas se presentan mediante las capturas disponibles; no se agregan módulos no documentados.',
  },
];

export const projectCategories: Array<{ label: string; id: string; category?: ProjectCategory }> = [
  { label: 'Proyectos académicos', id: 'proyectos-academicos', category: 'Académico' },
  { label: 'Hackatones', id: 'hackatones', category: 'Hackatón' },
  { label: 'Expo-Ingenierías', id: 'expo-ingenierias', category: 'Expo-Ingenierías' },
];
