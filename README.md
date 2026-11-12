# Portafolio de Luis Gael Bonilla Paleta

Portafolio web creado con React, TypeScript y Vite. Presenta proyectos y evidencias locales mediante fichas, galerías, filtros y vista previa de documentos.

## Requisitos

- Node.js compatible con la versión de Vite instalada.
- npm.

## Desarrollo local

Desde esta carpeta:

```bash
npm install
npm run dev
```

Vite mostrará la dirección local en la terminal.

## Validar y compilar

```bash
npm run lint
npm run build
npm run preview
```

La compilación de producción se genera en `dist/`.

## Despliegue

Publica el contenido de `dist/` en un servicio de hosting estático. Como la navegación usa rutas del navegador, configura el hosting para redirigir las rutas de la aplicación a `index.html` (fallback SPA). Los archivos multimedia se sirven desde `public/evidencias/` y se copian sin cambios durante la compilación.

## Contenido

- `src/data/projects.ts`: información estructurada de los proyectos, tecnologías, evidencias y repositorios.
- `src/pages/`: página principal y detalle de cada proyecto.
- `src/components/`: tarjetas, documentos y visor de imágenes.
- `public/evidencias/`: capturas y documentos de respaldo.

Para agregar un proyecto, incorpora sus recursos a `public/evidencias/` y agrega su registro a `src/data/projects.ts`. No incluyas credenciales, tokens ni archivos de configuración privada.
