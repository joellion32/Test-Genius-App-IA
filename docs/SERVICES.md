# Servicios y Hooks

## `src/core/services/gemini-model.service.ts`
- Uso: encapsula la llamada a `@google/genai`.
- Método principal: `main(prompt: string, numberOfQuestions: number, difficulty: string)`.
- Comportamiento: llama a `ai.models.generateContent` con `model: "gemini-2.5-flash"` y devuelve `response.text`.
- Nota: `ai` se instancia con la API key de `import.meta.env.VITE_GEMINI_API_KEY`.

### Ejemplo de formato esperado (por contrato con la UI):
Se solicita que el modelo devuelva un JSON con la siguiente estructura:

```json
{
  "title": "Título del test",
  "questions": [
    {
      "question": "¿Cuál es ...?",
      "options": ["A","B","C","D"],
      "answer": "A"
    }
  ]
}
```

## `src/presentation/hooks/useGeminiModel.tsx`
- Exposición:
  - `response: string` — texto (raw) devuelto por el servicio.
  - `generateContent(prompt, numberOfQuestions, difficulty)` — función para invocar la generación.
- Recomendación: parsear `response` y validar esquema antes de renderizar.

## Buenas prácticas
- Implementar timeouts y manejo de errores en `gemini-model.service.ts`.
- Añadir tests unitarios/mocks para el hook y el servicio (mock de `@google/genai`).
- Considerar normalizar la respuesta en una interfaz `GeneratedTest` y devolverla desde `useGeminiModel`.
