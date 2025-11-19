import { useState } from "react";
import { main } from "../../core/services/gemini-model.service";

export const useGeminiModel = () => {
    const [response, setResponse] = useState<string>("");

    /**
     * Genera el contenido utilizando el modelo Gemini.
     * @param prompt 
     * @param numberOfQuestions 
     * @param difficulty 
     */
    const generateContent = async (prompt: string, numberOfQuestions: number, difficulty: string) => {
        const model = await main(prompt, numberOfQuestions, difficulty);
        setResponse(model?.toString() || "");
    }

    return {
        response,
        generateContent
    }

}