import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

/**
 * Llama al modelo gemini-2.5-flash para generar un test de opción múltiple.
 * @param prompt
 * @param numberOfQuestions
 * @param difficulty
 * @returns El texto generado por el modelo.
 */
export async function main(
  prompt: string,
  numberOfQuestions: number,
  difficulty: string,
) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Genera un test de ${numberOfQuestions} preguntas de opción múltiple sobre el siguiente tema: ${prompt}. El nivel de dificultad debe ser ${difficulty}. Proporciona las preguntas en formato JSON con la siguiente estructura: {title: "titulo del test", "questions": [ { "question": "Texto de la pregunta", "options": [ "Opción 1", "Opción 2", "Opción 3", "Opción 4" ], "answer": "Opción correcta" }, ... ] }`,
  });
  return response.text;
}
