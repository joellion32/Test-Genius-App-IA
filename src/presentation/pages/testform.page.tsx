import { useState } from "react";
import Button from "../components/ui/button.component";
import { useGeminiModel } from "../hooks/useGeminiModel";
import { useNavigate } from "react-router";

const placeholderText = `Ej: 'Un test de 15 preguntas de opción múltiple sobre la historia del arte renacentista para estudiantes universitarios, con un nivel de dificultad intermedio y en español.'`;

export default function TestFormPage() {
    const navigate = useNavigate();
    const { response, generateContent } = useGeminiModel();
    const [isLoading, setIsLoading] = useState(false);

    const generateTest = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const prompt = (form.elements.namedItem("description") as HTMLTextAreaElement).value;
        const numberOfQuestions = parseInt((form.elements.namedItem("numberOfQuestions") as HTMLSelectElement).value);
        const difficulty = (form.elements.namedItem("difficulty") as HTMLSelectElement).value;
        setIsLoading(true);
        await generateContent(prompt, numberOfQuestions, difficulty);
        setIsLoading(false);
        // Navigate to the test page
        navigate("/test");
    }

    console.log(response);

    return (
        <form onSubmit={generateTest} className="w-full max-w-3xl p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-3xl font-bold text-center tracking-tight text-gray-900 dark:text-white">Generar una nueva prueba</h5>
            <p className="mb-3 font-medium text-center text-gray-500 dark:text-gray-400">Describe la prueba que necesitas y la IA la creará por ti.</p>

            <div className="mb-6 mt-6">
                <label htmlFor="description" className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">Prompt de la prueba</label>
                <textarea id="description" rows={10} className="block p-2.5 w-full text-md font-medium text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholderText}></textarea>
                <p className="font-medium mt-2 text-gray-500 dark:text-gray-400">Describe con el mayor detalle posible la prueba que deseas generar. La IA utilizará esta información para crear el contenido.</p>

                <div className="mt-4 flex space-x-5">
                    <div className="w-1/2">
                        <label htmlFor="numberOfQuestions" className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">Numero de preguntas</label>
                        <select id="numberOfQuestions" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="difficulty" className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">Nivel de dificultad</label>
                        <select id="difficulty" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="fácil">Fácil</option>
                            <option value="intermedio">Intermedio</option>
                            <option value="difícil">Difícil</option>
                        </select>
                    </div>
                </div>

                <div className="mt-4">
                    <fieldset>
                        <legend className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">Opciones adicionales</legend>
                        <div className="flex items-center mb-4">
                            <input id="checkbox-2" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="checkbox-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Aleatorizar orden de preguntas</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="checkbox-3" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="checkbox-3" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Habilitar límite de tiempo</label>
                        </div>
                    </fieldset>
                </div>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <Button isLoading={isLoading} />
        </form>
    )
}