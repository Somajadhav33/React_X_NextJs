import { useCounterStore } from "../store/counterStore";

export default function Counter() {
  const { count, increase, decrease, reset } = useCounterStore();
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:bg-gray-800 dark:border-gray-700 transition-all hover:shadow-md">
      <h2 className="mb-4 text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center justify-between">
        Counter Control
        <span className="text-xs font-normal bg-gray-100 text-gray-500 px-2 py-1 rounded dark:bg-gray-700 dark:text-gray-400">
          Main
        </span>
      </h2>
      <div className="flex flex-col items-center gap-4">
        <div className="text-5xl font-black text-indigo-600 dark:text-indigo-400 tracking-tight">
          {count}
        </div>
        <div className="flex w-full gap-3">
          <button
            onClick={decrease}
            className="flex-1 rounded-lg bg-gray-100 px-4 py-2 font-bold text-gray-600 transition hover:bg-gray-200 active:scale-95 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 cursor-pointer"
          >
            -
          </button>
          <button
            onClick={increase}
            className="flex-1 rounded-lg bg-indigo-600 px-4 py-2 font-bold text-white transition hover:bg-indigo-700 active:scale-95 shadow-sm shadow-indigo-200 dark:shadow-none cursor-pointer"
          >
            +
          </button>
        </div>
        <button
          onClick={reset}
          className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 cursor-pointer"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
