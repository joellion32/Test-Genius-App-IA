# Componentes principales

Este documento lista los componentes visuales y su propósito.

## Layouts
- `src/presentation/components/layouts/dashboard-layout.component.tsx`
  - Layout principal usado por las rutas. Renderiza `Navbar`, el `Outlet` de `react-router` y el `Footer`.

## UI
- `src/presentation/components/ui/navbar.component.tsx`
  - Barra de navegación superior. Contiene logo, items de menú (NavLink) y `DarkThemeToggle`.
  - Nota: la organización y clases Tailwind controlan posición (fixed) y comportamiento responsivo.

- `src/presentation/components/ui/footer.component.tsx`
  - Pie de página fijo (bottom). Contiene texto de copyright.

- `src/presentation/components/ui/button.component.tsx`
  - Botón personalizado usado en formularios. Soporta estado `isLoading` y muestra spinner.

- `src/presentation/components/ui/counter.component.tsx`
  - Componente ejemplo que muestra un contador estilo tarjeta.

## Páginas
- `src/presentation/pages/testform.page.tsx`
  - Página principal con formulario para generar pruebas. Usa `useGeminiModel` para enviar prompts.

- `src/presentation/pages/generate-test.page.tsx`
  - (Vacía en el repo) Página preparada para futuras funcionalidades.

## Hooks
- `src/presentation/hooks/useGeminiModel.tsx`
  - Hook que encapsula la llamada al servicio `gemini-model.service.ts` y expone `response` y `generateContent`.

## Cómo documentar un componente nuevo
1. Crear el archivo en `src/presentation/components/ui` o `layouts`.
2. Añadir una entrada breve en este `COMPONENTS.md` con propósito, props y notas de uso.
3. Si es público o reutilizable, añadir ejemplos de uso en `README.md` o una historia de Storybook (si se integra Storybook).
