import Counter from "../components/ui/counter.component";

export default function TestPage() {
    return (
        <div className="w-full gap-3">
            <h1 className="mb-10 text-4xl font-bold text-center tracking-tight text-gray-900 dark:text-white">Examen de Historia del Arte</h1>
            <div className="w-full max-w-5xl m-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="space-y-6 pb-5">
                    <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-gray-900 dark:text-white">Progreso</span>
                        <span className="text-sm font-medium text-gray-500 dark:text-white">Pregunta 1 de 10</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "45%" }}></div>
                    </div>
                </div>

                <div className="space-y-6">
                    <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">Pregunta 1: ¿Cuál es el resultado de la siguiente expresión matemática? (5 + 3) * 2 - 1</p>
                    <div className="space-y-4">
                        <label className="flex items-center gap-4 rounded-lg border border-gray-300 dark:border-gray-600 p-4 cursor-pointer hover:bg-primary/10 dark:hover:bg-primary/20 has-[:checked]:border-primary has-[:checked]:bg-primary/10">
                            <input className="h-5 w-5 border-gray-400 dark:border-gray-500 bg-transparent text-primary focus:ring-primary focus:ring-offset-0" name="question1" type="radio" />
                            <span className="text-base font-medium text-gray-700 dark:text-gray-300">14</span>
                        </label>
                        <label className="flex items-center gap-4 rounded-lg border border-gray-300 dark:border-gray-600 p-4 cursor-pointer hover:bg-primary/10 dark:hover:bg-primary/20 has-[:checked]:border-primary has-[:checked]:bg-primary/10">
                            <input checked={true} className="h-5 w-5 border-gray-400 dark:border-gray-500 bg-transparent text-primary focus:ring-primary focus:ring-offset-0" name="question1" type="radio" />
                            <span className="text-base font-medium text-gray-700 dark:text-gray-300">15</span>
                        </label>
                        <label className="flex items-center gap-4 rounded-lg border border-gray-300 dark:border-gray-600 p-4 cursor-pointer hover:bg-primary/10 dark:hover:bg-primary/20 has-[:checked]:border-primary has-[:checked]:bg-primary/10">
                            <input className="h-5 w-5 border-gray-400 dark:border-gray-500 bg-transparent text-primary focus:ring-primary focus:ring-offset-0" name="question1" type="radio" />
                            <span className="text-base font-medium text-gray-700 dark:text-gray-300">16</span>
                        </label>
                        <label className="flex items-center gap-4 rounded-lg border border-gray-300 dark:border-gray-600 p-4 cursor-pointer hover:bg-primary/10 dark:hover:bg-primary/20 has-[:checked]:border-primary has-[:checked]:bg-primary/10">
                            <input className="h-5 w-5 border-gray-400 dark:border-gray-500 bg-transparent text-primary focus:ring-primary focus:ring-offset-0" name="question1" type="radio" />
                            <span className="text-base font-medium text-gray-700 dark:text-gray-300">17</span>
                        </label>
                    </div>
                </div>

                <Counter />

                <div className="mt-8 flex justify-end">
                    <button type="button" className="px-6 py-3.5 text-base font-medium text-white inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">Siguiente</button>
                </div>
            </div>
        </div>

    )
}