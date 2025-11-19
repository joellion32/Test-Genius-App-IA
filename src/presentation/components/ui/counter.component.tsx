export default function Counter() {
    return (
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-center items-center gap-4 text-center">
                <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-background-light dark:bg-background-dark w-28">
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">00</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Horas</p>
                </div>
                <span className="text-3xl font-bold text-gray-500 dark:text-gray-400 pb-5">:</span>
                <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-background-light dark:bg-background-dark w-28">
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">01</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Minutos</p>
                </div>
                <span className="text-3xl font-bold text-gray-500 dark:text-gray-400 pb-5">:</span>
                <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-background-light dark:bg-background-dark w-28">
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">30</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Segundos</p>
                </div>
            </div>
        </div>
    )
}