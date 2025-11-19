# Arquitectura del Proyecto

Resumen:
- Basado en Vite + React + TypeScript.
- UI con Flowbite React y TailwindCSS.
- Rutas con `react-router` (v7).
- Integración con la API de Google GenAI (`@google/genai`) para generar contenido (modelo Gemini).

Estructura alta nivel:
- `src/main.tsx`: punto de entrada, arranca `BrowserRouter` y `ThemeInit`.
- `src/App.tsx`: define las rutas y el layout principal (`DashboardLayout`).
- `src/presentation/components/layouts`: layouts reutilizables (ej. `DashboardLayout`).
- `src/presentation/components/ui`: componentes UI (Navbar, Footer, Button, Counter).
- `src/presentation/pages`: páginas que se montan dentro del layout.
- `src/core/services`: lógica para comunicarse con APIs externas (ej. `gemini-model.service.ts`).
- `src/core/models`: definiciones de tipos/contratos (ej. `question.model.ts`).

Estado y flujo:
1. El usuario interactúa con una página (ej. formulario para generar pruebas).
2. El hook `useGeminiModel` llama a `main` en `gemini-model.service.ts` con el prompt y parámetros.
3. El servicio llama a `@google/genai` y devuelve `response.text` (se espera JSON con preguntas).
4. El hook almacena la respuesta y la UI la renderiza.

Notas importantes:
- Variables de entorno: `VITE_GEMINI_API_KEY` debe estar en `.env` para que `gemini-model.service.ts` funcione.
- Tailwind JIT: se usa sintaxis `bg-[var(--custom-color)]` si se trabaja con variables CSS y Tailwind JIT. Sin embargo, en algunos archivos se usa `bg-(--custom-color)` — asegúrate de usar la sintaxis compatible con tu versión de Tailwind.
- Flowbite: se integra via plugin Vite (`flowbite-react/plugin/vite`) para componentes adicionales.

Recomendaciones:
- Validar la estructura JSON que devuelve el modelo antes de consumirla desde la UI.
- Añadir manejo de errores y estados de carga en `useGeminiModel` y en las páginas que lo usan.
- Mantener separados los contratos (interfaces) en `src/core/models` para facilitar el testing y la documentación.
