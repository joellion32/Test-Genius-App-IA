# Setup y ejecución (Windows PowerShell)

Requisitos:
- Node.js (>= 18 recomendado)
- npm (o pnpm/yarn)

Pasos básicos:
1. Clonar el repo
```powershell
git clone <repo-url>
cd testgeniusapp
```

2. Instalar dependencias
```powershell
npm install
```

3. Variables de entorno
- Crear un archivo `.env` en la raíz con:
```
VITE_GEMINI_API_KEY=tu_api_key_aqui
```

4. Ejecutar en modo desarrollo
```powershell
npm run dev
```
- Abrir la URL que indique Vite (por ejemplo `http://localhost:5173`).

5. Build de producción
```powershell
npm run build
npm run preview
```

Scripts disponibles (en `package.json`):
- `dev`: arranca Vite en modo desarrollo.
- `build`: compila TypeScript y genera la build de Vite.
- `preview`: sirve la build para revisión.
- `lint`: ejecuta ESLint.
- `format`: formatea con Prettier.

Notas:
- Para trabajar con la API de Gemini necesitas una clave válida y suficiente cuota.
- Si usas un manager distinto (pnpm/yarn) sustituye los comandos de npm por los apropiados.
