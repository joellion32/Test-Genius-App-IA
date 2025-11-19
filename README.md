## TestGeniusApp (Flowbite React template)

Este repositorio es una plantilla basada en Vite + React + TypeScript que integra Flowbite React y un servicio para generar tests usando la API de Google GenAI (Gemini).

Contenido principal:

- `src/main.tsx` — punto de entrada.
- `src/App.tsx` — definición de rutas y layout.
- `src/presentation` — UI: componentes, hooks y páginas.
- `src/core` — servicios y modelos de dominio.

Documentación adicional disponible en la carpeta `docs/`:

- `docs/ARCHITECTURE.md` — arquitectura y flujo de la aplicación.
- `docs/COMPONENTS.md` — listado de componentes principales.
- `docs/SERVICES.md` — descripción de servicios y hooks.
- `docs/SETUP.md` — guía de instalación y ejecución.

Quick start (Windows PowerShell):

```powershell
npm install
npm run dev
```

Variables de entorno necesarias:

- `VITE_GEMINI_API_KEY` — clave para `@google/genai`.

Scripts (ver `package.json`):

- `dev`: arranca Vite en modo desarrollo.
- `build`: compila TypeScript y genera la build.
- `preview`: sirve la build para revisar.
- `lint`: ejecuta ESLint.
- `format`: formatea con Prettier.

Notas rápidas:

- Verifica que las variables CSS y clases Tailwind sean compatibles con la versión de Tailwind que usas (ej. `bg-[var(--custom-color)]` o la alternativa personalizada que prefieras).
- El servicio de generación de contenido espera que el modelo devuelva JSON con campos `title` y `questions` (ver `docs/SERVICES.md`).

Contribuir:

- Abre un issue o PR. Añade tests o documentación para cambios mayores.

Licencia: revisa el archivo `LICENSE` en la raíz del repositorio.
